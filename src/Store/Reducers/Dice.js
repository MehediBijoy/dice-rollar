import * as Types from "../Types/Types"
const initialState = {
    list: [],
    sum: 0
}

export default function (state=initialState, action){
    switch (action.type){
        case Types.ADD_DICE:
        {
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        }
        case Types.CLEAR_DICE:
        {
            return {
                ...state,
                list: [],
                sum: 0
            }
        }
        case Types.SUM:
        {
            return {
                ...state,
                sum: state.sum + action.payload
            }
        }
        default:
            return state
    }
}
