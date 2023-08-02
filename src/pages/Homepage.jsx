import { useEffect, useState} from "react";
import { get } from "../services/ApiCalls";


const HomePage = ()=>{
    const [products, setProducts] = useState([])
    useEffect( () => {
        get('products')
            .then((res) => setProducts(res.data))
    }, [])
    // {
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //         "rate": 3.9,
    //         "count": 120
    // }
    return(
        <>
        <h2>Home Page</h2>
        {console.log(products)}
        </>
    )
}
export default HomePage;