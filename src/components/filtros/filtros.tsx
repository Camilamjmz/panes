import {Nav} from "react-bootstrap"

interface Props{
    categoriaActual: string,
    alCambiar:(categoria:string)=>void
}

const Filtros=({categoriaActual, alCambiar}:Props)=>{

    const categorias=["pan","bebida","pastel", "galleta","Todos"] 

    return (
    /* Usamos Nav de react-bootstrap para crear un menú de categorías*/
    /* El activeKey es la categoría actual, y onSelect llama a alCambiar con la nueva categoría seleccionada */
    <Nav 
    variant="pills" 
    activeKey={categoriaActual} 
    onSelect={(k) => alCambiar(k || 'Todos')}
    className="justify-content-center mb-4 bg-white p-2 rounded-pill shadow-sm"
    >
    
    {/* Renderizamos un Nav.Item por cada categoría, usando el nombre de la categoría como key y eventKey */}
    {categorias.map(cat => (
        <Nav.Item key={cat}>
        <Nav.Link eventKey={cat} className="text-capitalize px-4">
            {cat}
        </Nav.Link>
        </Nav.Item>
    ))}

    </Nav>
);
};

export default Filtros;