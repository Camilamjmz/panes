import { Row, Col } from 'react-bootstrap';

interface Props {
    total: number;
    promedio: string | number;

    // Aquí le dices a TypeScript que el prop "promedio" puede ser un string o un número, dependiendo de si hay productos o no. Esto es útil para evitar errores de tipo cuando el promedio se muestra como "0" en lugar de 0.
}

// Este componente recibe el total de productos y el precio promedio como props, y los muestra en un diseño de dos columnas usando react-bootstrap
const Estadisticas = ({ total, promedio }: Props) => {
    // Usamos Row y Col de react-bootstrap para crear un diseño responsivo con dos columnas, una para el total de productos y otra para el precio promedio
    return (
    <Row className="mb-5 justify-content-center g-3">
<Col md={4}>
    <div className="stats-pill text-center">
    <div className="stats-label">Total Productos</div>
    <div className="stats-value">{total}</div>
    </div>
    </Col>
    <Col md={4}>
    <div className="stats-pill text-center">
    <div className="stats-label">Precio Promedio</div>
    <div className="stats-value">${promedio}</div>
    </div>
</Col>
</Row>
);
};

export default Estadisticas;