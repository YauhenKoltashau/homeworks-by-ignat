import React from "react";
import {UserType} from "./HW3";
import s from './Greeting.module.css'

type AlternativeGreetingPropsType = {
    users: Array<UserType>
}

function AlternativeGreeting(props: AlternativeGreetingPropsType) {
    let counter
    return (
        <div>
            <table>
                <td className={s.someClass}>#</td>
                <td className={s.someClass}>ID</td>
                <td className={s.someClass}>NAME</td>
                <td className={s.someClass}>Total</td>
                {props.users.map((u, index, array) => {
                    counter = array.length
                    return (
                        <tr key={u._id}>
                            <td className={s.someClass}>{index + 1}</td>
                            <td className={s.someClass}>{u._id}</td>
                            <td className={s.someClass}>{u.name.toUpperCase().trim()}</td>
                            <td className={s.emptyAlwaysClass}></td>
                        </tr>


                    )
                })}
                <td className={s.emptyAlwaysClass}></td>
                <td className={s.emptyAlwaysClass}></td>
                <td className={s.emptyAlwaysClass}></td>
                <td className={s.someClass}>{counter}</td>


            </table>
        </div>


    );
}

export default AlternativeGreeting;
