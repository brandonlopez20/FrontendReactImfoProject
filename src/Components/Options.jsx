import axios from "axios";
import React, { useState, useEffect } from "react";

function Options() {
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
  const [name, setName] = useState("");
  const [descripcion, setDescripcion] = useState("");

  //numbers
  const [stock, setStock] = useState("");
  const [peso, setPeso] = useState("");
  const [codigo, setCodigo] = useState("");
  const [iva, setIva] = useState("");
  const [precio, setPresio] = useState("");

  //Options
  const [proveedorId, setProveedorId] = useState(1);
  const [presentacionId, setPresentacionId] = useState(1);
  const [marcaId, setMarcaId] = useState(1);
  const [zonaId, setZonaId] = useState(1);

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
        const response = await axios.post("https://localhost:7051/api", data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData()
    .then(e => {
      window.location.reload();
    })
  }
  return (
    <>
      <div className="container m-5">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Agregar
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  AGREGAR PRODUCTO
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

                  {/* Select para 'proveedorId' */}
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
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Descartar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={createProduct}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Options;
