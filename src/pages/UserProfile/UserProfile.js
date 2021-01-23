import React from 'react';
import Profile from '../../components/ProfilePage/ProfilePage';
import Perfildados from '../../perfil.json';
import ProfilePic from '../../assets/profile.jpg';

const userPage = ()=>{
    return(
    <Profile dados={Perfildados} pic={ProfilePic}/>
    );
}

export default userPage;
