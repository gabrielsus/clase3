import "./Nav.css";
const Item = ({description, price, image}) => {
    return(
        <div className="item">
            <img src={image} alt={description} width={150} height={70}/>
            <h3>{description}</h3>
            <p>${price.toFixed(2)}</p>
        </div>
    );
};

const ListaProductos = ({productos}) => {
    return (
        <div className="contenedor-lista  ">
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