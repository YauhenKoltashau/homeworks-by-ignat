import React  from 'react'
import Affair from './Affair'
import {AffairType, defaultAffairsType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: defaultAffairsType
    deleteAffairCallback:(_id: number)=>void
    filterAffairCallBack:(filterValue: FilterType)=>void

}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((el: AffairType, index) => (
        <Affair // should work
            key={index} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
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

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
