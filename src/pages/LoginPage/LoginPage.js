import React from 'react';
import logo from '../../assets/logo-bravo-white.png';
import ling from '../../assets/linguica.png';
import Login from '../../components/LogIn/LogIn'
import classes from './LoginPage.module.css';
import { Link } from 'react-router-dom';

const loginPage = ()=>{
    return(
        <div className={classes.loginPage}>
            <div className={classes.imgContainer}>
                <img src={logo} />
            </div>
            <div className={classes.loginbox}>
                <div className={classes.loginmenu}>
                    <button type="button">Login</button>
                    <Link to='/singup' className={classes.singupLink}>Sing up</Link>
                </div>
                <div id="login"> 
                    <Login />
                </div>
                {/* <div id="singup">
                    <SingUp />
                </div> */}
            </div>
            <img src={ling} className={classes.ling}/>
        </div>
    );
}



// const showLogin = ()=>{
//     var x = document.getElementById("login");
//     if (x.style.display === "none"){
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

export default loginPage;