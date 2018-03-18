import { INC_NUM, DEC_NUM } from '../constants'

const performAction = (state = { num: 0 }, action) => {

    switch(action.type) {
        case INC_NUM:
            console.log('state: ',state,' action', action);
            let num = state.num + 1
            return { num }
        case DEC_NUM:
            console.log('state: ',state,' action', action);
            num = state.num - 1
            return { num }
        default:
            return state

    }
}

export default performAction