import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDF from './Components/PDF';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from './Components/Header';
import Products from './Components/Products';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const objetoEjemplo = {

    name: "NewHome",

  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://localhost:7051/api', objetoEjemplo);
        console.log(response.data)
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // El segundo argumento del useEffect es la dependencia, en este caso, un array vacío significa que se ejecutará solo una vez al montarse el componente.


  const productoData = {
    nombre: "Ejemplo de Producto",
    proveedor: "Proveedor A",
    presentacion: "Presentación X",
    marca: "Marca Y",
    zona: "Zona Z",
    producto: "Producto ABC",
    codigo: "ABC123",
    precio: "$19.99",
    descripcion: "Descripción del producto",
    stock: 100,
    iva: "10%",
    peso: "1.5 kg",
  };




  return (
    <div className="App" style={{ backgroundColor: '#849EB9', flex: 1 }}>
      <Header />
      <Products />
    </div>
  );
};

export default App;
