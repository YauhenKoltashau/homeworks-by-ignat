import React, {useState} from 'react'
import Affairs from './Affairs'


// types
export type defaultAffairsType = Array<AffairType>
export type AffairType = {
    _id: number
    name: string
    priority: string
}
export type FilterType = 'all' | 'low' | 'middle' | 'high'

// constants
const defaultAffairs: defaultAffairsType = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: defaultAffairsType, filter: string): defaultAffairsType => { // need to fix any
  if (filter ==="all") return affairs
    else return affairs.filter((el)=>el.priority === filter)// need to fix
}

export const deleteAffair = (affairs: defaultAffairsType, _id: number) => { // need to fix any
    console.log(_id)
    return affairs.filter((el) => el._id !== _id)// need to fix
}

function HW2() {
    let [affairs, setAffairs] = useState<defaultAffairsType>(defaultAffairs) // need to fix any
    let [filter, setFilter] = useState<FilterType>('all')

    let filteredAffairs = filterAffairs(affairs, filter)
    const filterAffairCallBack = (filterValue: FilterType ) =>{
        setFilter(filterValue)
    }

    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs, _id)) // need to fix any
    }//
    const affairsStyles = {
        paddingLeft: "10px"
    }



    return (
        <div style={affairsStyles}>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}//
                // filterValue={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filterAffairCallBack={filterAffairCallBack}

            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
