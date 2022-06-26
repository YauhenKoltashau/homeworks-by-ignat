import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}
export type UsersType = UserType[]

const initialPeople:UsersType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<any>(initialPeople) // need to fix any
    console.log('HW8')
    // need to fix any
    const finalPeople = people.map((p: any) => (
        <tr key={p._id}>
            <td>{p.name}</td>
            <td>{p.age}</td>



        </tr>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const Check18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'check'}))

    return (
        <div>
            <hr/>
            homeworks 8
            <hr/>

            {/*should work (должно работать)*/}
            <table>
                <tr>
                    {finalPeople}
                </tr>
            </table>


            <span><SuperButton onClick={sortUp}>sort up</SuperButton></span>
            <span><SuperButton onClick={sortDown}>sort down</SuperButton></span>
            <span><SuperButton onClick={Check18}>check 18</SuperButton></span>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
