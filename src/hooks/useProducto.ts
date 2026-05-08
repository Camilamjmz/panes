import {useState, useEffect} from 'react';
import { supabase } from '../utils/supabase';
import type { Producto } from '../types/Producto';





const useProducto = () => {
    // Aquí es donde le dices a TypeScript: "Este estado es un array de Productos"
    const [productos, setProductos] = useState<Producto[]>([]);
    // Este estado es un string que representa el filtro de búsqueda
    const [filtro, setFiltro] = useState<string>('');



//Traer los productos de la base de datos
    const traerProductos = async () => {

        try{// Usamos supabase para traer los productos
            const{data}= await supabase.from('productos').select('*');
            // Si data no es null, actualizamos el estado de productos
            if(data)setProductos(data)
        }
        catch(error){
            console.log("Error al traer productos:", error)
        }
    }

// Usamos useEffect para llamar a traerProductos cuando el componente se monta
    useEffect(()=>{
        traerProductos()
    },[])


    // Aplicamos el filtro antes de retornar
    const productoFiltrado = productos.filter((p) => {
        return p.nombre.toLowerCase().includes(filtro.toLowerCase());
    });// Esto asegura que cada vez que el filtro cambie, el componente se re-renderice con los productos filtrados

    // Retornamos el array de productos filtrados, la función para traer productos y la función para actualizar el filtro
    return {productos:productoFiltrado, traerProductos,  setFiltro};
}

export default useProducto;