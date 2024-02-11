import React from "react"

export default ({ className = '', text }) => {
    return (
        <button className={`roundedButton ${className}`}>{text}</button>
    );
}