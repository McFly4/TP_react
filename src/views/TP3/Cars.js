import React from "react";
import ListContainer from "../../components/ListContainer";
import { useEffect, useState } from "react";
import CarsAdd from "./CarsAdd";

function ProductItem({ item }) {
    return (
        <>
            {item.brand} {item.name} - {item.price}€, quantitée :{" "}
            {item.quantity} <br />
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
