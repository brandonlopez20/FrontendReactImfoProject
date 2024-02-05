import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import MyModal from "./ModalProduct";


function Products() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7051/api");
        setData(response.data);
        console.log(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container text-center">
      <div className="row">
        {data &&
          data.map((e, index) => (
            <div className="col-4" key={index}>
              <ProductCard
                title={e.name}
                descrip={e.descripcion}
                codigo={e.codigo}
                precio={e.precio}
                proveedor={e.proveedor}
                stock={e.stock}
                peso={e.peso}
                iva={e.iva}
                zona={e.zona}
                marca={e.marca}
                presentacion={e.presentacion}
                id={e.id}
              >
   
              </ProductCard>
            </div>
          ))}
      </div>
    </div>
  );
}
{/* <PDFDownloadLink document={<PDF />} fileName="document">
  <button className="btn btn-warning">PDF</button>
</PDFDownloadLink> */}

export default Products;
