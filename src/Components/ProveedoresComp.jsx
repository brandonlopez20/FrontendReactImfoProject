import React from "react";

function ProveedoresComp() {
  return (
    <div className="container">
    <div className="form-group mt-2">
      <h1 htmlFor="exampleSelect" className="text-white" style={{ 
        backgroundColor: '#25336D',
        padding: 5
        }}>Selecciona un Proveedor:</h1>
      <select className="form-control bg-" id="exampleSelect">
        <option>Seleccionar Proveedores</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProveedoresComp;
