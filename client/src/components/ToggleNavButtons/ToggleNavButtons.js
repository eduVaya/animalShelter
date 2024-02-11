import React from "react";

export default ({ buttonsProps }) => {
    return (
        <div>
            {
                buttonsProps.map(buttonsProp => {
                    return <p>{buttonsProp.text}</p>
                })
            }
        </div>
    );
}