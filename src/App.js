import { useState } from "react";
import CarsForm from "./views/CarsForm";
import CarsList from "./views/CarsList";

function App() {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    return (
        <>
            <CarsForm
                name={name}
                setName={setName}
                price={price}
                setPrice={setPrice}
                quantity={quantity}
                setQuantity={setQuantity}
                brand={brand}
                setBrand={setBrand}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                id={id}
                setId={setId}
                category={category}
                setCategory={setCategory}
            />
            <CarsList
                name={name}
                setName={setName}
                price={price}
                setPrice={setPrice}
                quantity={quantity}
                setQuantity={setQuantity}
                brand={brand}
                setBrand={setBrand}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                id={id}
                setId={setId}
                category={category}
                setCategory={setCategory}
            />
        </>
    );
}

export default App;
