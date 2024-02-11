import React from "react";

export default ({ buttonsProps }) => {

    const toggleActive = (button, buttonsProp) => {
        const buttons = document.querySelectorAll('.toggleTextButtons--button');
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        button.classList.add('active');
        buttonsProp.callback();
    }
    return (
        <div className="toggleTextButtons">
            {
                buttonsProps.map((buttonsProp, index) => {
                    return <button
                        key={index}
                        className={`toggleTextButtons--button ${buttonsProp.selected ? 'active' : ''}`}
                        onClick={e => toggleActive(e.target, buttonsProp)}
                    >{buttonsProp.text}</button>
                })
            }
        </div>
    );
}