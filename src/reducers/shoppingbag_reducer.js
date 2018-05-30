import { ADD_GROCERY } from '../constants'
import groceryItems from '../data/groceryItems.json'

const shopping = (state=[], action) => {

    switch(action.type) {
        case ADD_GROCERY:
            
            let shoppingBag = [...state, addToBag(action.id)];
            console.log('shopping bag  ', action, 'items',shoppingBag);
            return shoppingBag
        default:
            return state

    }
}

const addToBag = (id) => {
    let item = groceryItems.find( item => item.id == id)
    return item
}

export default shopping