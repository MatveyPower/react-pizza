import React from "react"


import "./scss/app.scss"

import Header from "./components/Header"
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Route } from "react-router-dom"


function App() {
    



    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path= '/' component= {Home} exact />
                <Route path= '/cart' component= {Cart} exact />
            </div>
        </div>
    )
}

export default App
