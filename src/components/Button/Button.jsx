import React from "react";
import './_button.scss';

const Button = ({title, onClick, className, icon}) => {

    const btnClassName = (`button ${className ? className : ''}`)
    
    const renderIcon = () => {
        if (icon) {
            return <span className="button__icon">{icon}</span>
        }
        return title
    }

    return (
        (
            <button className={btnClassName} onClick={onClick}>
                {renderIcon()}
            </button>
        )
    )
}

export default Button