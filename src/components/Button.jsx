import React from "react";

const Button = ({outline,className,children}) => {
    return (
        <button className ={`button ${className} ${outline ? 'button--outline': ''}`}>{children}</button>
    )
}

export default Button