import { INC_NUM, DEC_NUM } from '../constants'

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