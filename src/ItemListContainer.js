import { useState } from "react";
import './body.css';
const productos = [
    {
        id: "1",
        name: "Tarjeta Grafica",
        description: "Tarjeta Grafica description",
        stock: "10",
        img:"https://http2.mlstatic.com/D_NQ_NP_696492-MLA49851449808_052022-W.jpg"
    },
    {
        id: "2",
        name: "Microprocesador",
        description: "Microprocesador description",
        stock: "4",
        img:"http://img.directindustry.es/images_di/photo-g/microprocesador-multimedia-ordenador-sobremesa-33710-7881419.jpg"
    },
    {
        id: "3",
        name: "Memoria Ram",
        description: "Memoria Ram description",
        stock: "7",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYM3QwTyIXmBV_aTu6cdsjU-4PtMHzWpr2g&usqp=CAU"
    }

];

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const productList = new Promise ((resolve) => setTimeout(() => 
    {
        resolve(productos);

    },3000)
    );

    productList.then((data) => setProducts(data));
    
    
    return (
    <div>
        <ul>
            {products.map((product) => (
            <div>
                <img src={product.img} className="product_img"/>
                <li> {product.name} </li>
            </div>
            ))}
        </ul>
     </div> 
    )
};

export default ItemListContainer;