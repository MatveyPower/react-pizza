import React from "react";

const Button = ({onClick,outline,className,children}) => {
    return (
        <button onClick ={onClick} className ={`button ${className} ${outline ? 'button--outline': ''}`}>{children}</button>
    )
}

export default Button