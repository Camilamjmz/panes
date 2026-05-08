import './App.css';
import useProducto from './hooks/useProducto';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container } from 'react-bootstrap';
import CardProducto from './components/CardProducto';
import Search from './components/search/search';
import Filtros from './components/filtros/filtros';
import { useState } from 'react';
import Estadisticas from './components/estadisticas/estadisticas';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Usamos tu hook personalizado para obtener los productos filtrados y la función para actualizar el filtro de búsqueda
  const {productos, setFiltro} = useProducto();
  
  // Este estado es para la categoría seleccionada en los filtros
  const [categoria, setCategoria] = useState('Todos');
  

  // Lógica de filtrado combinada
  const productosMostrados = productos.filter(p => 
    // Primero filtramos por el texto de búsqueda (esto ya lo hace tu hook), y luego aplicamos el filtro de categoría
    categoria === 'Todos' || p.categoria === categoria
    // Esto asegura que si la categoría seleccionada es "Todos", se muestren todos los productos, de lo contrario, solo los productos que coincidan con la categoría seleccionada
  );


  // Cálculos para las estadísticas
  const total = productosMostrados.length;
  // Aquí calculamos el precio promedio, asegurándonos de manejar el caso cuando no hay productos para evitar división por cero
  const promedio = total > 0
    // Si hay productos, calculamos el promedio sumando los precios y dividiendo por el total, y luego formateamos a 2 decimales. Si no hay productos, el promedio es 0.
    ? (productosMostrados.reduce((acc, p) => acc + p.precio, 0) / total).toFixed(2) 
    : 0;


return (
<div style={{ backgroundColor: '#FDF8F5', minHeight: '100vh', width: '100%' }}>
    
    {/* Banner Café - Ahora con clase para forzar el color */}
    <header className="bakery-header shadow-lg text-center">
        <h1 className="bakery-title" style={{ fontSize: '3.5rem', margin: 0 }}>
          KOA'S BAKERY
        </h1>
        <p className="text-white-50 mt-2">POSTRES, PANES Y BEBIDAS</p>
     <div className="d-flex justify-content-center w-100 my-5">
  <div className="search-container" style={{ width: '100%', maxWidth: '600px' }}>
    <Search alEscribir={(v) => setFiltro(v)} />
  </div>
</div>

    </header>

    {/* El resto del contenido sí va dentro del Container para que esté centrado */}
    <Container className="mt-5">
      
      <Filtros categoriaActual={categoria} alCambiar={setCategoria} />

      <Estadisticas total={total} promedio={promedio} />
      
      <Row xs={1} md={3} className="g-4 pb-5">
        {productosMostrados.map((p) => (
          <CardProducto key={p.id} {...p} />
        ))}
      </Row>
    </Container>
  </div>
);
}

export default App
