const CarsForm = ({
    name,
    setName,
    brand,
    setBrand,
    price,
    setPrice,
    quantity,
    setQuantity,
    isEdit,
    id,
    category,
    setCategory,
}) => {
    function handleSubmit(e) {
        if (isEdit === false) {
            e.preventDefault();
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
                    category,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                });

            window.location.reload();
        } else {
            e.preventDefault();
            console.log(id);
            fetch(`http://localhost:5000/cars/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    brand,
                    name,
                    price,
                    quantity,
                    category,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                });

            window.location.reload();
        }
    }
    return (
        <>
            {console.log(category)}
            <form onSubmit={handleSubmit}>
                <select
                    defaultValue={category}
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    id="category"
                >
                    <option value="">Choisir une catégory</option>
                    <option value="Berline">Berline</option>
                    <option value="4x4">4x4</option>
                    <option value="Sportive">Sportive</option>
                </select>

                <input
                    type="text"
                    name="brand"
                    placeholder="Marque du véhicule"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Modèle du véhicule"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Prix du véhicule"
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                />

                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantité"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <input
                    type="submit"
                    value={
                        isEdit ? "Modifier une voiture" : "Ajouter une voiture"
                    }
                />
            </form>
        </>
    );
};

export default CarsForm;
