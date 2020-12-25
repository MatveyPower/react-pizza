import React, {useCallback} from "react"
import { useSelector, useDispatch } from "react-redux"

import Categories from "../components/Categories"
import PizzaBlock from "../components/PizzaBlock"
import SortPopup from "../components/SortPopup"
import { setCategory } from "../redux/actions/filters"

const categoryNames = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
]

const sortItems = [
    { name: "популярности", type: "popular" },
    { name: "цена", type: "price" },
    { name: "алфавит", type: "alphabet" },
]

function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)

    const onSelectCategory = useCallback(
        (index) => {
            dispatch(setCategory(index))
        }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items &&
                    items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
        </div>
    )
}

export default Home
