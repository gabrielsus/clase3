import Encabezado from "./Header.jsx";
import ListaProductos from "./Nav.jsx"
import Footer from "./Footer.jsx"
import TraerProductos from "../api/TraerProductos.js"
import "./global.css"
import React from "react";

const Cuerpo = ({Children}) => {
    const [productos, setProductos] = React.useState([]);
     
    React.useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const datos = await TraerProductos();
                setProductos(datos);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        obtenerDatos();
    }, []);

    return(
        <div className="page-container">
                <div>
                    <Encabezado/>
                    {Children}
                </div>
                <div className="content-wrap">
                    <h2>Lista de productos</h2>
                    <ListaProductos productos={productos}/>
                </div>
                <div>

                </div>
                <Footer/>
        </div>
    )
}

export default Cuerpo;