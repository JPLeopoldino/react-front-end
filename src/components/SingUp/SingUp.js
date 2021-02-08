import React from 'react';
import classes from './SingUp.module.css';

const singup = ()=>{
    return(
        <div>
            <form className={classes.singupForm} action='/'>
                <div className={classes.inputBox}>
                    <input type="text" placeholder="exemplo@exemplo.com" required></input>
                    <span>Email</span>
                </div>
                <div className={classes.inputBox}>
                    <input type="password" placeholder="********" required></input>
                    <span>Senha</span>
                </div>
                <div className={classes.inputBox}>
                    <input type="password" placeholder="********" required></input>
                    <span>Confirme sua Senha</span>
                </div>
                <button type="submit">Sing Up</button>
            </form>
        </div>
    );
}


export default singup;