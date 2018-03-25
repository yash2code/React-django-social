import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Number from './components/Number'
import Shopping from './components/Shopping'

class App extends Component {
    render() {
        return (
            <div className='app'>
              <HelloWorld/>
              <Number/>
              <Shopping/>
            </div>
          )
    }
}

export default App
