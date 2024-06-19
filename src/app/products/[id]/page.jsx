'use client'
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const DetailProductPage = () => {

    const { id } = useParams() ;
    const [product, setProduct] = useState({});
    const getProducto = async () =>{
        try {
            const response = await axios.get(`http://localhost:8000/api/productos/${id}`);
            const result = await response.data;
            setProduct(result);
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() =>{
        getProducto();
    },[])

    return(
        <main>
            
            <h1>Detalles del Producto</h1>
            <h3>Titulo: {product.title} </h3>
            <h3>Precio: {product.price} </h3>
            <h3>Descripcion: {product.description} </h3>
        </main>
    )
}

export default DetailProductPage;