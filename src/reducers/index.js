import { INC_NUM, DEC_NUM, ADD_GROCERY } from '../constants'
import groceryItems from '../data/groceryItems.json'

const performAction = (state = { num: 0, groceryItems }, action) => {

    switch(action.type) {
        case INC_NUM:
            console.log('state: ',state,' action', action);
            let num = state.num + 1
            return { num, groceryItems:state.groceryItems }
        case DEC_NUM:
            console.log('state: ',state,' action', action);
            num = state.num - 1
            return { num, groceryItems:state.groceryItems }
        case ADD_GROCERY:
            
            let groceryItems = state.groceryItems.filter(item => item.id!==action.id);
            console.log('grocery clicked ', action);
            return {num:0, groceryItems}
        default:
            return state

    }
}

export default performAction