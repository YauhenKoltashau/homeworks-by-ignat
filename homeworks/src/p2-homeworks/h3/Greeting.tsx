import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    users:Array<UserType>
    setNameCallback: (elem: string)=> void // need to fix any
    addUser: ()=>void // need to fix any
    error: any // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, users, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNameCallback(e.currentTarget.value)
    }
    const inputClass = s.error // need to fix with (?:)



    return (
        <div>
            <input value={name} onChange={onChangeHandler} className={inputClass}/>
            <span>{error}</span>
            <button onClick={()=>addUser()}>add</button>
            <div>{users.map((u)=>{
                return(
                    <div>
                        {u._id} {u.name}
                    </div>
                )
            })}</div>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
