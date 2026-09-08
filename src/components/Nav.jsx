//import "./Nav.css";
import "./ListaProductos.css";
import {useState, useEffect} from "react";
import imagenFallback from "../assets/notimage.jpg";
const Item = ({description, price, image}) => {
    const [imgSrc, setImgSrc] = useState(image);
    return(
        <div className="item">
            <img src={imgSrc} alt={description} width={150} height={70} onError={() => setImgSrc(imagenFallback)}/>
            <h3>{description}</h3>
            <p>${price ? Number(price).toFixed(2) : '0.00'}</p>
        </div>
    );
};

const ListaProductos = ({productos}) => {
    return (
        <div className="contenedor-lista">
            {productos.map((producto, index) => (
                <Item
                    key={index}
                    description={producto.description}
                    price={producto.price}
                    image={producto.image}
                />
            ))}
        </div>
    );
};

export default ListaProductos;