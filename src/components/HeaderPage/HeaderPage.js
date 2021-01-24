import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-bravo-black.png';
import classes from './HeaderPage.module.css'
import { PersonCircle, Cart2 } from 'react-bootstrap-icons';
import ProfilePic from '../../assets/profile.jpg';


const headerPage = (props) => {
    return(
    <header>
        <nav>
            <a className={classes.icons}><img src={logo}></img></a>
            <Link className={classes.link} to='/'>Loja</Link>
            <Link className={classes.link} to='/perfil'>Perfil</Link>
            <Link className={classes.link} to='/products'>Carrinho</Link>
            <Link className={classes.link} to='/cadastroCliente'>Sobre</Link>
            <Link to='/perfil' className={classes.icons}><img src={ProfilePic} className={classes.userpic}></img></Link>
        </nav>
    </header>
    );
}

export default headerPage;

{/* <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid d-flex">
                <a className="navbar-brand" href="#">
                    <img src={logo} className={classes.logo}/>
                </a>
                <Link className=" flex-end" to='/perfil'>
                    <PersonCircle className={classes.icon}></PersonCircle>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to='/'>Loja</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to='/perfil'>Perfil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/products">Carrinho</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/cadastroCliente">Sobre</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav> */}