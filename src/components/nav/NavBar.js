import React from 'react'
import {Link} from "react-router-dom";

export const NavBar = ({brand}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{brand}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/captura'>Captura</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/evaluacion">Evaluación</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Listado</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}
