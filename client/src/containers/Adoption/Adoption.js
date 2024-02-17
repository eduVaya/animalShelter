import React from "react"
import AnimalCard from "../../components/AnimalCard/AnimalCard";

export default () => {
    return (
        <div className="adoption">
            <h2>Encuentra tu compañero perfecto</h2>
            <div className="adoption--filterButtons">
                <button className="btn btn-shadow bg-white-color text-light-gray-color">Todos</button>
                <button className="btn btn-shadow bg-white-color text-light-gray-color">Perros</button>
                <button className="btn btn-shadow bg-white-color text-light-gray-color">Gatos</button>
                <button className="btn btn-shadow bg-white-color text-light-gray-color">Otros</button>
            </div>
            <div className="adoption--cardsContainer">
                <AnimalCard />
                <AnimalCard />
                <AnimalCard />
                <AnimalCard />
                <AnimalCard />
                <AnimalCard />
            </div>
        </div>
    );
}