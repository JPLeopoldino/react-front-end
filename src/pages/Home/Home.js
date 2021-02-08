import React from 'react';
import Products from '../../components/ProductsComponent/ProductsPage';
import classes from './Home.module.css';
import AppContext from '../../contexts/AppContext';
import HeaderPage from '../../components/HeaderPage/HeaderPage';

const home = ()=>{
    return(
        <div className={classes.main}>
            <HeaderPage />
            <div className={classes.mainTitle}>
                <h3>Escolha o melhor</h3>
                <h1>Corte para você</h1>
            </div>

            <AppContext.Consumer>
                {context=>{
                    return(
                        <div className={classes.searchBar}>
                            <input className={classes.bar} type="text" placeholder="Buscar um produto..." onChange={context.search}></input>
                        </div>
                    );
                }}
            </AppContext.Consumer>
                
            <div className={classes.filtro}>
            <h2>Categorias</h2>

                <AppContext.Consumer>
                    {context=>{
                        return(
                            <form onChange={context.filter} className={classes.homeForm}>
                                <input type="radio" name="type" id="all" value="all" defaultChecked></input>
                                <label htmlFor="all">
                                    <div>
                                        <i className="bi bi-basket" aria-hidden="true"></i>
                                        <span className={classes.noselect}>Todos</span>
                                    </div>
                                </label>

                                <input type="radio" name="type" id="bovinos" value="bovino"></input>
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
                                        <span className={classes.noselect}>Aves</span>
                                    </div>
                                </label>

                                <input type="radio" name="type" id="suinos" value="suino"></input>
                                <label htmlFor="suinos">
                                    <div>
                                        <i className="bi bi-basket"></i>
                                        <span className={classes.noselect}>Suínos</span>
                                    </div>
                                </label>

                                <input type="radio" name="type" id="angus" value="angus"></input>
                                <label htmlFor="angus">
                                    <div>
                                        <i className="bi bi-basket"></i>
                                        <span className={classes.noselect}>Angus</span>
                                    </div>
                                </label>

                                <input type="radio" name="type" id="outros" value="outro"></input>
                                <label htmlFor="outros">
                                    <div>
                                        <i className="bi bi-basket"></i>
                                        <span className={classes.noselect}>Outros</span>
                                    </div>
                                </label>
                            </form>
                        );
                    }}
                </AppContext.Consumer>

            </div>

            {/* Div dos produtos */}
            
            <div>
                <h2>Produtos</h2>
                <div className={classes.productItem}>
                    <Products />
                </div>
            </div>            
        </div>
    );
}


export default home;