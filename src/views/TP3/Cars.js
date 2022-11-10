import React from "react";
import ListContainer from "../../components/ListContainer";
import { useEffect, useState } from "react";
import CarsAdd from "./CarsAdd";
import CarsModify from "./CarsModify";

function ProductItem({ item }) {
    const deleteCar = async () => {
        await fetch(`http://localhost:5000/cars/${item.id}`, {
            method: "DELETE",
        });
        window.location.reload();
    };
    const modifyCar = async () => {
        await fetch(`http://localhost:5000/cars/${item.id}`, {
            method: "PUT",
        });
        window.location.reload();
    };

    return (
        <>
            {item.brand} {item.name} - {item.price}€, quantitée :{" "}
            {item.quantity} <button onClick={deleteCar}>supprimer</button>
            <button onclick={modifyCar}>Modifier</button>
            <br />
        </>
    );
}

export default function Cart() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/cars")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <>
            <h1>Bienvenu chez AUDI</h1>
            <h2>Voici la liste des véhicules disponible : </h2>
            <ListContainer
                initialItems={products}
                ListItem={ProductItem}
                AddForm={CarsAdd}
                keyProp="products"
            />
        </>
    );
}
