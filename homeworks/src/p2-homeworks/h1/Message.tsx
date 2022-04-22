import React from 'react'
import classes from "./Message.module.css"

type MessageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageDataType) {
    return (
        <div className={classes.mainBack}>
            <div className={classes.avatar}>
                 <img src={props.avatar}/>
            </div>
            <div className={classes.nameMessageTime}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.message}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>



        </div>

    )
}

export default Message
