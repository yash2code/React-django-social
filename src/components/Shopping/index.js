import React, { Component } from 'react'
import './styles.scss'
import Grocery from './Grocery'
import ShoppingBag from './shoppingBag'


class Shopping extends Component {
    render(){
        return(
            <div style={styles.container}>
                <Grocery/>
                <ShoppingBag/>
                <Grocery/>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
    },
}

export default Shopping