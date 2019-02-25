import React, {Component} from 'react'
import {
    BrowserRouter as Router
}from 'react-router-dom'

import LayOut from './components/layout'
import "./static/css/index.css"

class App extends Component {


    render() {
        return (
            <Router>
                <LayOut />
            </Router>
    )
    }
}

export default App;
