import * as Types from "../Types/Types"
const initialState = {
    list: []
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
                list: []
            }
        }
        default:
            return state
    }
}
