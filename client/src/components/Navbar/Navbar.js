import React, { useState } from "react"
import ToggleTextButtons from "../ToggleTextButtons/ToggleNavButtons"
import RoundedButton from "../RoundedButton/RoundedButton"

export default () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        // const navMenu = document.getElementsByClassName('navbar--menu');
        // navMenu ? navMenu.classList.add('')
        // .navbar--showMenu
    };
    return (
        <nav className="navbar">
            <img src="../../assets/icons/paw.svg" className="navbar--icon"></img>
            {/* {showMenu ? ( */}
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
            {/* ) : ( */}
            <div className="navbar--hamburger" onClick={toggleMenu}>
                ☰
            </div>
            {/* )} */}

        </nav>
    )
}