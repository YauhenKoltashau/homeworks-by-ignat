import React from 'react'
import Message from "./Message";
import classes from "./HW1.module.css"
const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem',
    message: "How is it going? Lorem",
    time: '20:00',
}

function HW1() {
    return (
        <div className={classes.item}>
            {/*should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


            {/*для личного творчества, могу проверить*/}
{/*
            <AlternativeMessage creative={"something interesting"}/>
*/}
        </div>
    )
}
/*type AlternativeMessageTypeProps = {
    creative: string,
}
 const AlternativeMessage = (props: AlternativeMessageTypeProps) => {
    return(
        <div>{props.creative}</div>
    )
}*/


export default HW1
