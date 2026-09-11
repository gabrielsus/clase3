//import "./Nav.css";
import "./ListaProductos.css";
import {useState, useEffect} from "react";
import imagenFallback from "../assets/notimage.jpg";
const Item = ({description, price, image,favoritoInicial}) => {
    const [imgSrc, setImgSrc] = useState(image);
    const [esFavorito, setEsFavorito] = useState(favoritoInicial);
    const handleFavoritoClick = () => {
        setEsFavorito(!esFavorito);
    }
    return(
        <div className="item">
            <img src={imgSrc} alt={description} width={150} height={70} onError={() => setImgSrc(imagenFallback)}/>
            <h3>{description}</h3>
            <p>${price ? Number(price).toFixed(2) : '0.00'}</p>
            <button onClick={handleFavoritoClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                {esFavorito ? '❤️' : '🤍'}
            </button>
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
                    favoritoInicial={producto.favorito}
                />
            ))}
        </div>
    );
};

export default ListaProductos;