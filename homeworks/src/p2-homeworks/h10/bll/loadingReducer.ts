export type initStateType = {
    isLoading: boolean
}
const initState: initStateType = {
    isLoading: false

}
type loadingActionType = {
    type: 'IS-LOADING'
    isLoading: boolean
}
export const loadingReducer = (state = initState, action: loadingActionType): initStateType => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): loadingActionType => {
    return {
        type: 'IS-LOADING',
        isLoading

    }
} // fix any