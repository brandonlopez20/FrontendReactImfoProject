import React from "react";
import img from "./header.jpg"
import logo from "./Logo2.jpg"

function Header() {
  return (
<nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#25336D' }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src={logo} style={{ width: "100px" }} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/productos"><p className="text-white fs-5">Productos</p></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/proveedores"><p className="text-white fs-5">Proveedores</p></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href=""><p className="text-white fs-5"></p></a>
        </li>
      </ul>
      <div className="d-flex" role="search">
        <img src={img} style={{ width: "300px" }} />
      </div>
    </div>
  </div>
</nav>
  );
}

export default Header;
