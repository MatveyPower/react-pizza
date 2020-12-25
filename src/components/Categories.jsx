import React, { useState } from "react"

export default function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState(null)

    return (
        <div>
            <div className="categories">
                <ul>
                    <li
                        className={activeItem === null ? "active" : ""}
                        onClick={() => setActiveItem(null)}
                    >
                        Все
                    </li>
                    {items &&
                        items.map((name, index) => (
                            <li
                                className={activeItem === index ? "active" : ""}
                                onClick={() => setActiveItem(index)}
                                key={`${name}_${index}`}
                            >
                                {name}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}
