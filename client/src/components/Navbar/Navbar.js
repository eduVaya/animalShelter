import React, { useState } from "react"
import paw from '../../assets/icons/paw.svg'
import ToggleTextButtons from "../ToggleTextButtons/ToggleNavButtons"
import RoundedButton from "../RoundedButton/RoundedButton"
import RoundedProfilePicture from "../RoundedProfilePicture/RoundedProfilePicture";

export default () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src={paw} className="navbar--icon"></img>
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
                <div className="navbar--accountContainer">
                    {/* <RoundedButton className="navbar--roundedButton" text='Cuenta' ></RoundedButton> */}
                    <button className="btn bg-main-color text-white-color">Cuenta</button>
                    <RoundedProfilePicture />
                </div>
            </div>
            <div className="navbar--hamburger" onClick={() => setShowMenu(!showMenu)}>
                ☰
            </div>
        </nav>
    )
}