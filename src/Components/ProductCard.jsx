import React, { useState, useEffect } from "react";
import img from "./img.jpg";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "./PDF";

function Text(props) {
  return (
    <div className="row text-start">
      <h5 className="col-6">{props.title}:</h5>
      <p className="col">{props.text}</p>
    </div>
  );
}

function ProductCard(props) {

  const [datas, setDatas] = useState("");
  const [error, setError] = useState("");

  const [proveedores, setProveedores] = useState(null);
  const [presentaciones, setPresentaciones] = useState(null);
  const [marcas, setMarcas] = useState(null);
  const [zonas, setZonas] = useState(null);

  useEffect(() => {
    const fetchZona = async () => {
      try {
        const response = await axios.post("https://localhost:7051/api/zonas");
        setZonas(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      }
    };

    const fetchMarca = async () => {
      try {
        const response = await axios.post("https://localhost:7051/api/marcas");
        setMarcas(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      }
    };

    const fetchProveerdor = async () => {
      try {
        const response = await axios.post(
          "https://localhost:7051/api/proveedores"
        );
        setProveedores(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      }
    };

    const fetchPretentacion = async () => {
      try {
        const response = await axios.post(
          "https://localhost:7051/api/presentaciones"
        );
        setPresentaciones(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchZona();
    fetchMarca();
    fetchProveerdor();
    fetchPretentacion();
  }, []);



  //text
  const [name, setName] = useState(props.title);
  const [descripcion, setDescripcion] = useState(props.descrip);

  //numbers
  const [stock, setStock] = useState(props.stock);
  const [peso, setPeso] = useState(props.peso);
  const [codigo, setCodigo] = useState(props.codigo);
  const [iva, setIva] = useState(props.iva);
  const [precio, setPresio] = useState(props.precio);

  //Options
  const [proveedorId, setProveedorId] = useState(1);
  const [presentacionId, setPresentacionId] = useState(1);
  const [marcaId, setMarcaId] = useState(1);
  const [zonaId, setZonaId] = useState(1);



  const [showFullDescription, setShowFullDescription] = useState(false);
  const { descrip } = props;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };



  function createProduct() {
    const data = {
      name: name,
      descripcion: descripcion,
      stock: stock,
      peso: peso,
      codigo: codigo,
      iva: iva,
      precio: precio,
      proveedorId: proveedorId,
      presentacionId: presentacionId,
      marcaId: marcaId,
      zonaId: zonaId,
    };

    const fetchData = async () => {
      try {
        const response = await axios.put(`https://localhost:7051/api/${props.id}`, data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData()
    .then(() => window.location.reload());
  }


  const DeleteData = async () => {
    try {
      const response = await axios.delete(`https://localhost:7051/api/${props.id}`);
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded"
      style={{ backgroundColor: "red" }}
    >
      <div className="d-flex justify-content-end align-items-start">
        <img
          src={img}
          className="card-img-top"
          style={{ width: "200px", height: "200px" }}
          alt="Card Image"
        />
        <div className="">
          <button className="btn btn-danger" onClick={DeleteData}>Eliminar</button>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{ props.title }</h5>
        <p className="card-text">
          {showFullDescription ? descrip : `${descrip.slice(0, 10)}...`}
          {descrip.length >= 10 && (
            <button className="btn-link" onClick={toggleDescription}>
              {showFullDescription ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </p>
        <Text title={ "CODIGO" } text={ props.codigo }/>
        <Text title={ "PRECIO" } text={ props.precio }/>
        <Text title={ "PROVEE" } text={ props.proveedor.name }/>
        <Text title={ "STOCK" } text={ props.stock }/>
        <Text title={ "PESO" } text={ props.peso }/>
        <Text title={ "IVA" } text={ props.iva }/>
<div className="d-grid gap-2 col-6 mx-auto">

    <PDFDownloadLink document={<PDF name={props.title}/>} fileName="document">
  <button className="btn btn-warning">PDF</button>
</PDFDownloadLink>


{/*MODAL STAT*/}
<button
  type="button"
  className="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target={`#modal_${props.id}`}  // Prefijo alfanumérico
>
  Editar
</button>

<div
  className="modal fade"
  id={`modal_${props.id}`}  // Prefijo alfanumérico
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabIndex="-1"
  aria-labelledby={`modal_${props.id}_Label`}  // Prefijo alfanumérico
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id={`${props.id}Label`}>
          {props.title}
        </h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
                <div className="container mt-4">


                  <div className="row">
                    {/* Input de texto para 'name' */}
                    <div className="form-group col">
                      <label htmlFor="name">Nombre:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Ingrese el nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    {/* Input numérico para 'stock' */}
                    <div className="form-group col">
                      <label htmlFor="stock">Stock:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="stock"
                        placeholder="Ingrese el stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col">
                      <label htmlFor="peso">Peso:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="peso"
                        placeholder="Ingrese el peso"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                      />
                    </div>

                    <div className="form-group col">
                      <label htmlFor="codigo">Codigo:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="codigo"
                        placeholder="Ingrese el Codigo"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col">
                      <label htmlFor="iva">Iva:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="iva"
                        placeholder="Ingrese el Iva"
                        value={iva}
                        onChange={(e) => setIva(e.target.value)}
                      />
                    </div>

                    <div className="form-group col">
                      <label htmlFor="presio">Presio:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="presio"
                        placeholder="Ingrese el Presio"
                        value={precio}
                        onChange={(e) => setPresio(e.target.value)}
                      />
                    </div>
                  </div>


                  <div className="row">
                    <div className="form-group col">
                      <label htmlFor="proveedorId">Proveedor:</label>
                      <select
                        className="form-control"
                        id="proveedorId"
                        value={proveedorId}
                        onChange={(e) => setProveedorId(e.target.value)}
                      >
                        {proveedores &&
                          proveedores.map((e) => (
                            <option key={e.id} value={e.id}>
                              {e.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="form-group col">
                      <label htmlFor="presentacionId">Presentacion:</label>
                      <select
                        className="form-control"
                        id="presentacionId"
                        value={presentacionId}
                        onChange={(e) => setPresentacionId(e.target.value)}
                      >
                          {presentaciones &&
                          presentaciones.map((e) => (
                            <option key={e.id} value={e.id}>
                              {e.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col">
                      <label htmlFor="marcaId">Marca:</label>
                      <select
                        className="form-control"
                        id="marcaId"
                        value={marcaId}
                        onChange={(e) => setMarcaId(e.target.value)}
                      >
                           {marcas &&
                          marcas.map((e) => (
                            <option key={e.id} value={e.id}>
                              {e.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="form-group col">
                      <label htmlFor="ZonaId">Zona:</label>
                      <select
                        className="form-control"
                        id="ZonaId"
                        value={zonaId}
                        onChange={(e) => setZonaId(e.target.value)}
                      >
                            {zonas &&
                          zonas.map((e) => (
                            <option key={e.id} value={e.id}>
                              {e.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* Input de texto para 'descripcion' */}
                  <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea
                      className="form-control"
                      id="descripcion"
                      placeholder="Ingrese la descripción"
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                  </div>
                </div>



        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cerrar
        </button>
        <button type="button" onClick={createProduct} className="btn btn-primary ms-4">
          Guardar
        </button>
      </div>
    </div>
  </div>
</div>



</div>
      </div>
    </div>
  );
}

export default ProductCard;
