import { useState, useEffect } from "react";

const CarsList = ({
    setName,
    setBrand,
    setPrice,
    setQuantity,
    setIsEdit,
    setId,
}) => {
    const [cars, setCars] = useState([]);

    const getCars = async () => {
        const response = await fetch("http://localhost:5000/cars");
        const data = await response.json();
        setCars(data);
    };

    useEffect(() => {
        getCars();
    }, []);

    const deleteCar = async (id) => {
        await fetch(`http://localhost:5000/cars/${id}`, {
            method: "DELETE",
        });
        window.location.reload();
    };

    const getCar = async (id) => {
        const response = await fetch(`http://localhost:5000/cars/${id}`);
        const data = await response.json();
        setId(data.id);
        setName(data.name);
        setBrand(data.brand);
        setPrice(data.price);
        setQuantity(data.quantity);
        setIsEdit(true);
    };

    return (
        <>
            <h1>Bienvenu chez Audi </h1>
            <h1>Voici nos voitures sportives : </h1>
            <div className="container">
                {cars
                    .filter((car) => car.category === "Sportive")
                    .map((car) => (
                        <div className="card" key={car.id}>
                            <div className="card__content">
                                <ul>
                                    <li>Marque : {car.brand}</li>
                                    <li>Modèle : {car.name}</li>
                                    <li>Prix : {car.price}€</li>
                                    <li>Stock : {car.quantity}</li>
                                </ul>
                            </div>
                            <div className="card__buttons">
                                <button
                                    onClick={() => {
                                        deleteCar(car.id);
                                    }}
                                >
                                    Supprimer
                                </button>
                                <button
                                    onClick={() => {
                                        getCar(car.id);
                                    }}
                                >
                                    Modifier
                                </button>
                            </div>
                        </div>
                    ))}
            </div>

            <h1>Voici nos voitures nos berlines : </h1>
            <div className="container">
                {cars
                    .filter((car) => car.category === "Berline")
                    .map((car) => (
                        <div className="card" key={car.id}>
                            <div className="card__content">
                                <ul>
                                    <li>Marque : {car.brand}</li>
                                    <li>Modèle : {car.name}</li>
                                    <li>Prix : {car.price}€</li>
                                    <li>Stock : {car.quantity}</li>
                                </ul>
                            </div>
                            <div className="card__buttons">
                                <button
                                    onClick={() => {
                                        deleteCar(car.id);
                                    }}
                                >
                                    Supprimer
                                </button>
                                <button
                                    onClick={() => {
                                        getCar(car.id);
                                    }}
                                >
                                    Modifier
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
            <h1>Voici nos 4x4</h1>
            <div className="container">
                {cars
                    .filter((car) => car.category === "4x4")
                    .map((car) => (
                        <div className="card" key={car.id}>
                            <div className="card__content">
                                <ul>
                                    <li>Marque : {car.brand}</li>
                                    <li>Modèle : {car.name}</li>
                                    <li>Prix : {car.price}€</li>
                                    <li>Stock : {car.quantity}</li>
                                </ul>
                            </div>
                            <div className="card__buttons">
                                <button
                                    onClick={() => {
                                        deleteCar(car.id);
                                    }}
                                >
                                    Supprimer
                                </button>
                                <button
                                    onClick={() => {
                                        getCar(car.id);
                                    }}
                                >
                                    Modifier
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
            <h1>Toutes nos voitures :</h1>
            <div className="container">
                {cars.map((car) => (
                    <div className="card" key={car.id}>
                        <div className="card__content">
                            <ul>
                                <li>Marque : {car.brand}</li>
                                <li>Modèle : {car.name}</li>
                                <li>Prix : {car.price}€</li>
                                <li>Stock : {car.quantity}</li>
                            </ul>
                        </div>
                        <div className="card__buttons">
                            <button
                                onClick={() => {
                                    deleteCar(car.id);
                                }}
                            >
                                Supprimer
                            </button>
                            <button
                                onClick={() => {
                                    getCar(car.id);
                                }}
                            >
                                Modifier
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CarsList;
