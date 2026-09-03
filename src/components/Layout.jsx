import Encabezado from "./Header.jsx";
import ListaProductos from "./Nav.jsx"
import Footer from "./Footer.jsx"
import "./global.css"
const productos = [
    { description: "Mancuerna 5 kg", price: 25000.99, image: "https://http2.mlstatic.com/D_NQ_NP_2X_886346-MLA99421493626_112025-F.webp" },
    { description: "Mancuerna 10 kg", price: 30000.99, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=600&auto=format&fit=crop" }
];
const Cuerpo = ({Children}) => {
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