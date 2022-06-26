import {UsersType} from "../HW8";

export const homeWorkReducer = (state: UsersType, action: any): UsersType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload === 'up'){
                let copy = [...state].sort(function (a,b){
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                });
                return copy
            }
            if(action.payload === 'down'){
                let copy = [...state].sort(function (a,b){
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                });
                return copy
            }
            if(action.payload === 'check'){
                return [...state].filter(u=>u.age>=18)
            }
            return state
        }

        default: return state
    }
}