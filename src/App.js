import { useState } from "react";
import Cart from "./views/Tp1V2/Cart/Cart";
import ProductList from "./views/Tp1V2/ProductList";
import UserForm from "./views/Tp2/Form";
import Cars from "./views/TP3/Cars";

function App() {
    const [displayForm, setDisplayForm] = useState(true);
    return (
        <>
            {/* <ProductList />
            <Cart />
            <button onClick={() => setDisplayForm(!displayForm)}>
                Display
            </button>
            {displayForm && <UserForm />}
            {displayForm && (
                <UserForm
                    user={{
                        firstname: "myfirst",
                        lastname: "mylast",
                        email: "myfirst.mylast@email.com",
                        password: "",
                        skills: [],
                        rgpd: false,
                    }}
                />
            )} */}
            <Cars />
        </>
    );
}

export default App;
