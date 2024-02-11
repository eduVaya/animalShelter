import React from "react"
import ToggleNavButtons from "../ToggleNavButtons/ToggleNavButtons"

export default () => {
    return (
        <nav className="navbar">
            <img src="../../assets/icons/paw.svg" className="navbar--icon"></img>
            <ToggleNavButtons buttonsProps={
                [
                    {
                        text: 'Refugios',
                        callback: () => console.log('refugios click'),
                    },
                    {
                        text: 'Adoptar',
                        callback: () => console.log('Adoptar click'),
                    },
                    {
                        text: 'Sobre Nosotros',
                        callback: () => console.log('Sobre Nosotros click'),
                    }
                ]
            } />
        </nav>
    )
}