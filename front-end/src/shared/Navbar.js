import React from 'react'
import "../App.css"
 
const Navbar = () => {
    return (
        <div>
         <div className="navbar navbar-expand-lg bg-light navbar-light fixed-top">
            <div className="container-fluid">
                <h1 href="index.html" className="navbar-brand">Nass<span className="spana">X</span></h1>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between " id="navbarCollapse">
                    <div className="navbar-nav  ml-auto">
                        <a href="#home" className="nav-item nav-link active">Accueil</a>
                        <a href="#about" className="nav-item nav-link">À propos</a>
                        <a href="#service" className="nav-item nav-link">Nos Service</a>
                        <a href="#experience" className="nav-item nav-link">Actualités</a>
                        <a href="#contact" className="nav-item nav-link">Partenaires</a>
                        <a href="#contact" className="nav-item nav-link">Contact</a>
                        <a href="#contact" className="nav-item nav-link">Sign in</a>
                        <a className="btn " id="connet-btn" href="">Register</a>

 
                    </div>
                </div>
            </div>
        </div>
       
        </div>
    )
}

export default Navbar
