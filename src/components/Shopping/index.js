import React, { Component } from 'react'
import './styles.scss'
import Grocery from './Grocery.js'


class Shopping extends Component {
    render(){
        return(
            <div style={styles.container}>
                <Grocery/>
                <Grocery/>
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