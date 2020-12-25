import React, { useEffect } from "react"
import axios from 'axios'
import "./scss/app.scss"
import { useDispatch} from "react-redux";

import Header from "./components/Header"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Route } from "react-router-dom"
import { setPizzas } from "./redux/actions/pizzas";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get("http://localhost:3001/pizzas").then(({data}) =>{
            dispatch(setPizzas(data))
        }) 
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" component ={Home} exact />
                <Route path="/cart" component={Cart} exact />
            </div>
        </div>
    )
}

export default App
