import * as Types from "../Types/Types";

export const add_dice = (item) => dispatch => {
    dispatch({
        type: Types.ADD_DICE,
        payload: item
    })
}

export const clear_dice = () => dispatch => {
    dispatch({
        type: Types.CLEAR_DICE,
        payload: null
    })
}
