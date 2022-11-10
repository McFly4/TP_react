import { useEffect, useState } from "react";
//import { products } from "../../../components/ProductList";

export default function CarsAdd({ onSubmit }) {
    const [products, setProducts] = useState([]);

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [brand, setBrand] = useState("");

    // console.log(products.map((product) => product.id));
    function handleSubmit(e) {
        e.preventDefault();
        // Récupération des valeurs du formulaire en JS natif
        //const formData = new FormData(e.target);
        //const itemId = parseInt(formData.get("product"));
        //const quantity = parseInt(formData.get("quantity"));
        fetch("http://localhost:5000/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                brand,
                name,
                price,
                quantity,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                onSubmit(data);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nom du véhicule"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                name="price"
                placeholder="Prix du véhicule"
                onChange={(e) => setPrice(parseInt(e.target.value))}
            />
            <input
                type="text"
                name="brand"
                placeholder="Marque du véhicule"
                onChange={(e) => setBrand(e.target.value)}
            />
            <input
                type="number"
                name="quantity"
                placeholder="Quantité"
                onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <input type="submit" value="Add to Cart" />
        </form>
    );
}
