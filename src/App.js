import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Number from './components/Number'

class App extends Component {
    render() {
        return (
            <div className='app'>
              <HelloWorld/>
              <Number/>
            </div>
          )
    }
}

export default App
