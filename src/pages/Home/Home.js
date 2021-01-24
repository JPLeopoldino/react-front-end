import React from 'react';
import classes from './Home.module.css';
import bovinos from '../../assets/bovinos.svg';
import aves from '../../assets/aves.svg';
import suinos from '../../assets/suinos.png';
import angus from '../../assets/angus.png';

const home = ()=>{
    return(
        <div className={classes.main}>
            <div className={classes.mainTitle}>
                <h3>Escolha o melhor</h3>
                <h1>Corte para você</h1>
            </div>
            <div className={classes.searchBar}>
                <input className={classes.bar} type="text" placeholder="Buscar um produto..."></input>                
            </div>
                
            <div className={classes.filtro}>
            <h2>Categorias</h2>
                <form>
                        <input type="radio" name="type" id="bovinos" value="bovinos" checked="true"></input>
                        <label htmlFor="bovinos">
                            <div>
                                <i className="bi bi-basket" aria-hidden="true"></i>
                                <span className={classes.noselect}>Bovinos</span>
                            </div>
                        </label>

                        <input type="radio" name="type" id="aves" value="aves"></input>
                        <label htmlFor="aves">
                            <div>
                                <i className="bi bi-basket"></i>
                                <span className={classes.noselect}>Bovinos</span>
                            </div>
                        </label>

                        <input type="radio" name="type" id="suinos" value="suinos"></input>
                        <label htmlFor="suinos">
                            <div>
                                <i className="bi bi-basket"></i>
                                <span className={classes.noselect}>Bovinos</span>
                            </div>
                        </label>

                        <input type="radio" name="type" id="angus" value="angus"></input>
                        <label htmlFor="angus">
                            <div>
                                <i className="bi bi-basket"></i>
                                <span className={classes.noselect}>Bovinos</span>
                            </div>
                        </label>

                        <input type="radio" name="type" id="outros" value="outros"></input>
                        <label htmlFor="outros">
                            <div>
                                <i className="bi bi-basket"></i>
                                <span className={classes.noselect}>Bovinos</span>
                            </div>
                        </label>
                </form>
            </div>
            <div>

            </div>
            
        </div>
    );
}

export default home;