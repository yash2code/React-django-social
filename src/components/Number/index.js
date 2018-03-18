import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { incNum, decNum } from '../../actions'
import './style.scss'

class Number extends Component {
    render() {
        console.log('from props: ', this.props);
        return (
            <div className='number'>
              <div className='digit'>
              <p>{this.props.num}</p>
              </div>
              <div className='btn'>
              <button onClick = { () => this.props.incNum(this.props.num) }>Increment</button>
              <button onClick = { () => this.props.decNum(this.props.num) }>Decrement</button>
              </div>  
            </div>
          )
    }
}

const mapStateToProps = (state) => {
    console.log('mapstate: ', state);
    return {
        num: state.num
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ incNum, decNum }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Number)
