import React, { useState } from "react";

const MyModal = (props) => {

  console.log("hola mundo")

  return (
    <>
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
      <div className="modal-body">...</div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Understood
        </button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default MyModal;
