import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import AlternativeGreeting from "./AlternativeGreeting";

// types
type UsersType = Array<UserType>
export type UserType = {
    _id: number // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UsersType>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users,{_id: new Date().getTime(), name:name}]) // need to fix
    }

    return (
        <div >
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}

            {users[0] && <AlternativeGreeting users={users}/>}
            <hr/>
        </div>
    )
}

export default HW3
