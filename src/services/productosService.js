import apiClient from './apiClient';

// Obtener la lista de productos desde Spring Boot (GET http://localhost:8080/api/productos)
export const obtenerProductos = async () => {
  const response = await apiClient.get('/productos');
  return response.data;
};

// Crear un producto nuevo (POST http://localhost:8080/api/productos)
export const crearProducto = async (producto) => {
  const response = await apiClient.post('/productos', producto);
  return response.data;
  
};

// Obtener un producto por su ID (GET http://localhost:8080/api/productos/{id})
export const obtenerProductoPorId = async (id) => {
    const response = await apiClient.get(`/productos/${id}`);
    return response.data;
};