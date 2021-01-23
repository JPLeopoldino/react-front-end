import React from 'react';
import Formulario from '../../components/FormPage/FormPage';
import formCadastro from './formularioCadastro.json';

const cadastroCliente = ()=>{
    return(
        <Formulario info={formCadastro} />
    );
}

export default cadastroCliente;