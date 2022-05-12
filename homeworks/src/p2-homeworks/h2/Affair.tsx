import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styles from './Affairs.module.css'
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=> void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={styles.back}>
            <div className={styles.affairName}>{props.affair.name} </div>
            <SuperCheckbox/>
            <div className={styles.affairPriority}>{props.affair.priority}</div>

            <SuperButton onClick={deleteCallback}  >Delete</SuperButton>

            {/*<button onClick={deleteCallback}>X</button>*/}
        </div>
    )
}

export default Affair
