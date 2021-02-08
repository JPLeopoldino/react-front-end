import React from 'react';
import logo from '../../assets/logo-bravo-white.png';
import ling from '../../assets/linguica.png';
import Singup from '../../components/SingUp/SingUp';
import classes from './SingupPage.module.css';
import { Link } from 'react-router-dom';

const singupPage = ()=>{
    return(
        <div className={classes.singupPage}>
            <div className={classes.imgContainer}>
                <img src={logo} />
            </div>
            <div className={classes.singupbox}>
                <div className={classes.singupmenu}>
                    <Link to='/login'  className={classes.loginLink}>Login</Link>
                    <button type="button">Sing up</button>
                </div>
                <div id="singup">
                    <Singup />
                </div>
            </div>
            <img src={ling} className={classes.ling}/>
        </div>
    );
}

export default singupPage;