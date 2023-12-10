
import React from 'react';
import logo from '../../assets/logo4.png'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">
          <a href="#home" className='ms-2'>
            <img src={logo} alt="" width={50} />
            </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link fw-bolder" id='top-button' aria-current="page" href="#skills">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bolder" id='top-button' href="#projects">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" id='top-button' href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
