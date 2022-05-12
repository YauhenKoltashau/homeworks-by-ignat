import React  from 'react'
import Affair from './Affair'
import {AffairType, defaultAffairsType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: defaultAffairsType
    deleteAffairCallback:(_id: number)=>void
    filterAffairCallBack:(filterValue: FilterType)=>void

}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((el: AffairType) => (
        <Affair // should work
            key={el._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={el}
            deleteAffairCallback={props.deleteAffairCallback}
        />

    ))

    const setAll = () => {props.filterAffairCallBack('all')} // need to fix
    const setHigh = () => {props.filterAffairCallBack('high')}
    const setMiddle = () => {props.filterAffairCallBack('middle')}
    const setLow = () => {props.filterAffairCallBack('low')}

    return (
        <div>

            {mappedAffairs}
            <SuperButton onClick={setAll}>All</SuperButton>
            <SuperButton onClick={setHigh}>High</SuperButton>
            <SuperButton onClick={setMiddle}>Middle</SuperButton>
            <SuperButton onClick={setLow}>Low</SuperButton>

            {/*<button onClick={setAll}>All</button>*/}
            {/*<button onClick={setHigh}>High</button>*/}
            {/*<button onClick={setMiddle}>Middle</button>*/}
            {/*<button onClick={setLow}>Low</button>*/}
        </div>
    )
}

export default Affairs
