import React, {KeyboardEvent} from "react";
import s from './Greeting.module.css'
import {UserType} from "./HW3";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    users: Array<UserType>
    setNameCallback: (elem: string) => void // need to fix any
    addUser: () => void // need to fix any
    error?: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPressHandler, users, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const onChangeText = (value: string) => {
        setNameCallback(value)
    }
    // const onKeyPress = (key: KeyboardEvent<HTMLInputElement>) => {
    //     onKeyPressHandler(key)
    // }
    // const inputClass = s.error // need to fix with (?:)
    // const messageClass = s.errorMessage
    const counterUsers = s.counter

    return (
        <div>
            <SuperInputText
                value={name}
                onChangeText={onChangeText}
                onKeyPress={onKeyPressHandler}
                error={error}

            />
            {name?<SuperButton onClick={addUser}> Add </SuperButton>: <SuperButton onClick={addUser}>
                disabled
            </SuperButton>}

            {/*<input value={name} onChange={onChangeHandler} onKeyPress={(e) => onKeyPressHandler(e)}*/}
            {/*       className={error && inputClass}/>*/}

            {/*<button onClick={() => addUser()}>add</button>*/}
            {/*<div className={error && messageClass}>{error}</div>*/}
            <div>{users.map((u) => {
                return (
                    <div key={u._id}>
                        {u.name}
                    </div>
                )
            })}</div>
            <span className={counterUsers}>Total users: {totalUsers}</span>

        </div>
    )
}

export default Greeting
