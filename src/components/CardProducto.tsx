import { Card, Col, Badge } from 'react-bootstrap';

interface Props {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;
    imagen?: string;
}

const CardProducto = ({ nombre, descripcion, precio, imagen }: Props) => {
    return (
        <Col>
            {/* 1. Cambiamos el fondo al crema suave y añadimos una sombra sutil */}
            <Card 
                className="h-100 shadow-sm border-0" 
                style={{ backgroundColor: 'var(--bakery-cream)', borderRadius: '15px' }}
            >
                <Card.Img 
                    variant="top" 
                    src={imagen || 'placeholder.jpg'} 
                    style={{ 
                        height: '200px', 
                        objectFit: 'cover', 
                        borderTopLeftRadius: '15px', 
                        borderTopRightRadius: '15px' 
                    }} 
                />
                <Card.Body className="d-flex flex-column text-center">
                    {/* 2. El título en el café oscuro de la marca */}
                    <Card.Title 
                        className="fw-bold mb-2" 
                        style={{ color: 'var(--bakery-brown)', fontSize: '1.2rem' }}
                    >
                        {nombre}
                    </Card.Title>
                    
                    {/* 3. Texto descriptivo en el café de texto suave */}
                    <Card.Text 
                        className="flex-grow-1" 
                        style={{ color: 'var(--bakery-text)', fontSize: '0.9rem' }}
                    >
                        {descripcion}
                    </Card.Text>
                    
                    {/* 4. El Badge del precio con el tono ocre/madera */}
                    <div className="mt-3">
                        <Badge 
                            className="px-3 py-2 fs-6 rounded-pill border-0"
                            style={{ 
                                backgroundColor: 'var(--bakery-accent)', 
                                color: 'white',
                                fontWeight: '500'
                            }}
                        >
                            ${precio}
                        </Badge>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardProducto;