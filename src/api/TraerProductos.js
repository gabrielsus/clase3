import axios from 'axios';
const endpoint = 'http://localhost:8000/api/traer-productos';
const traerProductos = async () => {
    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error al traer productos:', error);
        throw error;
    }
}   

export default traerProductos;
