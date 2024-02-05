import React, { useEffect, useState } from "react";
import axios from "axios";

function ProveedoresComp() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


  const [productos, setProductos] = useState(null);
  const [presio, setPresio] = useState(0);


  const getProveedor = async (proveedorId) => {
    try {
      const response = await axios.post(`https://localhost:7051/api/proveedor/${proveedorId}`);
      setProductos(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
    }
  };




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("https://localhost:7051/api/proveedores");
        setData(response.data);
        console.log(data);

      } catch (error) {
        setError(error);
      }
    };


    const fetchProductos = async () => {
      try {
        const response = await axios.get("https://localhost:7051/api/");
        setProductos(response.data);
        const sumaPrecios = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        setPresio(sumaPrecios);

        console.log(productos);
      } catch (error) {
        setError(error);
      }
    };


    fetchData();
    fetchProductos();
  }, []);


  return (
    <div className="container">
    <div className="form-group mt-2">
      <h1 htmlFor="exampleSelect" className="text-white" style={{ 
        backgroundColor: '#25336D',
        padding: 5
        }}>Selecciona un Proveedor:</h1>
      <select className="form-control bg-" id="exampleSelect" onChange={(e) => getProveedor(e.target.value)}>
        <option value={0}>Seleccionar Proveedores</option>
        { data && 
          data.map((e , index)=> (
            <option value={e.id} key={index}>{ e.name }</option>
          ))
        }
      </select>
    </div>
    <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">PRODUCTO</th>
            <th scope="col">PROVEEDOR</th>
            <th scope="col">STOCK</th>
            <th scope="col">PRECIO</th>
          </tr>
        </thead>
        <tbody>
          {productos && 
            productos.map((e, index)=> (
              <tr>
              <th scope="row">{e.id}</th>
              <td>{e.name}</td>
              <td>{e.proveedor.name}</td>
              <td>{e.stock}</td>
              <td>{e.precio}</td>
            </tr>
            ))
          }

<tr>
              <th scope="row"></th>
              <td className="fs-1">TOTAL:</td>
              <td></td>
              <td></td>
              <td>{presio}</td>
            </tr>

        </tbody>
      </table>
    </div>
  );
}

export default ProveedoresComp;
