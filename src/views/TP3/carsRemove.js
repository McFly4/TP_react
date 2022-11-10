import { useEffect, useState } from "react";
//import { products } from "../../../components/ProductList";

export default function CarsAdd({ onRemove, onSubmit }) {
    const [products, setProducts] = useState([]);

    // console.log(products.map((product) => product.id));
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:5000/cars/${products.id}`, {
            method: "DELETE",
        }).then(() => {
            setProducts(products.filter((p) => p.id !== item.id));
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
