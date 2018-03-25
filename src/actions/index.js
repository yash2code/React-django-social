import { INC_NUM, DEC_NUM, ADD_GROCERY } from '../constants'

export const incNum = (num) => {
    const action = {
        type: INC_NUM,
        num
    }
    return action
}

export const decNum = (num) => {
    const action = {
        type: DEC_NUM,
        num
    }
    return action
}

export const addGrocery = (id) => {
    const action = {
        type: ADD_GROCERY,
        id
    }
    return action
}