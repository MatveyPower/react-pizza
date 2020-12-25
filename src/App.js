import React, { useState, useEffect } from "react"
import axios from 'axios'
import "./scss/app.scss"

import Header from "./components/Header"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Route } from "react-router-dom"

function App() {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/db.json").then(({data}) =>{
            setPizzas(data.pizzas)
        }) 
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" render = {() => <Home items = {pizzas}/>} exact />
                <Route path="/cart" component={Cart} exact />
            </div>
        </div>
    )
}

export default App
