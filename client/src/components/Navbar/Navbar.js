import React, { useState } from "react"
import ToggleTextButtons from "../ToggleTextButtons/ToggleNavButtons"
import RoundedButton from "../RoundedButton/RoundedButton"

export default () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src="../../assets/icons/paw.svg" className="navbar--icon"></img>
            <div className={`navbar--menu ${showMenu ? 'navbar--showMenu' : ''}`}>
                <ToggleTextButtons buttonsProps={
                    [
                        {
                            text: 'Adoptar',
                            callback: () => console.log('Adoptar click'),
                            selected: true
                        },
                        {
                            text: 'Refugios',
                            callback: () => console.log('refugios click'),
                            selected: false
                        },
                        {
                            text: 'Sobre Nosotros',
                            callback: () => console.log('Sobre Nosotros click'),
                            selected: false
                        }
                    ]
                } />
                <RoundedButton className="navbar--roundedButton" text='Cuenta' ></RoundedButton>
            </div>
            <div className="navbar--hamburger" onClick={() => setShowMenu(!showMenu)}>
                ☰
            </div>
        </nav>
    )
}