import React from 'react';
import classes from './LogIn.module.css';
import AppContext from '../../contexts/AppContext';

const login = ()=>{

    const submitLogin = ()=>{
        return(
            <AppContext.Consumer>
                {context=>{
                    return(
                        <div></div>
                    );
                }}
            </AppContext.Consumer>
        );
    }

    return(
        <AppContext.Consumer>
            {context=>{
                return(
                    <div>
                        <form className={classes.loginForm} action='/' onSubmit={submitLogin()}>
                            <div className={classes.inputBox}>
                                <input type="text" placeholder="exemplo@exemplo.com" required="required"/>                    
                                <span>Email</span>
                            </div>
                            <div className={classes.inputBox}>
                                <input type="password" placeholder="********" required="required"/>
                                <span>Senha</span>
                            </div>
                            <button type="submit">Log In</button>
                        </form>
                    </div>  
                );
            }}
        </AppContext.Consumer>
    );
}

export default login;