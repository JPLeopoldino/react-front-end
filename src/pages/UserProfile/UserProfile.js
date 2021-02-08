import React from 'react';
import Profile from '../../components/ProfilePage/ProfilePage';
import Perfildados from '../../perfil.json';
import ProfilePic from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';
import HeaderPage from '../../components/HeaderPage/HeaderPage';
import classes from './UserProfile.module.css';

const userPage = ()=>{
    return(
    <div>
        <HeaderPage />
        <div className={classes.Main}>
            <Profile dados={Perfildados} pic={ProfilePic}/>
            <Link to='/login'>Logoff</Link>
        </div>
    </div>
    );
}

export default userPage;
