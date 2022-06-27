import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initStateType, loadingAC} from "./bll/loadingReducer";
import Spin from '../../assets/Spin.svg'

function HW10() {
    const state = useSelector<AppStoreType,initStateType>(state=>state.loading)
    const dispatch = useDispatch()

    const loading = state.isLoading
    console.log(loading)
    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>{
            debugger
            dispatch(loadingAC(false))
            console.log('loading...')
        },3000)
        clearTimeout(setTimeout(()=>{
            debugger
            dispatch(loadingAC(false))
            console.log('loading...')
        },3000))
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div >
                        <img style={{width:'30px',height: '30px'}} src={Spin} alt={'spin'}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
