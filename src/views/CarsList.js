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
            {cars.map((car) => (
                <div key={car.id}>
                    Marque : {car.brand} <br /> Modèle : {car.name} <br /> Prix
                    : {car.price}€ <br /> Stock : {car.quantity}
                    <br />
                    <button
                        onClick={() => {
                            deleteCar(car.id);
                        }}
                    >
                        supprimer
                    </button>
                    <button
                        onClick={() => {
                            getCar(car.id);
                        }}
                    >
                        Modifier
                    </button>
                </div>
            ))}
        </>
    );
};

export default CarsList;
