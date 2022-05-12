import React, {useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (newName: string) => { // need to fix any
        setName(newName)
        setError('')
        // need to fix
    }
    const addUser = () => {
        if (name) {
            addUserCallback(name)
            // setName('')
            setTotalUsers(totalUsers + 1)
        }
        else setError("error")
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
       if(e.key === 'Enter'){
           if (name) {
               addUserCallback(name)
               // setName('')
               setTotalUsers(totalUsers + 1)
           }
           else setError("error")
       }
    }

    let [totalUsers, setTotalUsers] = useState(0) // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            users={users}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}


        />
    )
}

export default GreetingContainer
