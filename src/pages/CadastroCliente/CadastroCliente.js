import React from 'react';
import Formulario from '../../components/FormPage/FormPage';
import formCadastro from './formularioCadastro.json';
import HeaderPage from '../../components/HeaderPage/HeaderPage';

const cadastroCliente = ()=>{
    return(
        <div>
            <HeaderPage />
            <Formulario info={formCadastro} />
        </div>
    );
}

export default cadastroCliente;