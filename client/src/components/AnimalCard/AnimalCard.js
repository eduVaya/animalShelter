import React from "react";
import noImage from '../../assets/images/no_image.jpg'
import RoundedProfilePicture from "../RoundedProfilePicture/RoundedProfilePicture";
export default ({ image = noImage }) => {
    return (
        <div className="animalCard">
            {/* <img className="animalCard--img" src={image}></img> */}
            <img className="animalCard--img" src='https://via.placeholder.com/150'></img>
            <h3 className="animalCard--title">Titulo</h3>
            <div className="animalCard--bottomContainer">
                <RoundedProfilePicture />
                <h4 className="animalCard--bottomContainer--shelterName">Nombre del refugio</h4>
                <button className=" animalCard--button btn bg-main-color text-white-color">Ver</button>

            </div>
        </div>
    )
}