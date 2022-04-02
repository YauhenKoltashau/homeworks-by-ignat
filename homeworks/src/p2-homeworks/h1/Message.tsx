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
            <div className={classes.imageUserBack}>
                <span className={classes.imageBack}>
                    <div className={classes.emptyImage}></div>
                    <div className={classes.image}>
                        <img src={props.avatar}/>
                    </div>
                </span>
                <span className={classes.userBack}>
                    <div className={classes.user}>
                        <div className={classes.name}>{props.name}</div>
                        <div className={classes.message}>{props.message}</div>
                        <div className={classes.time}>{props.time}</div>
                    </div>
                </span>
            </div>
        </div>

    )
}

export default Message
