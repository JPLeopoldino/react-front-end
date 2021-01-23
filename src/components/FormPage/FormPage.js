import React from 'react';
import Field from './Field';
import ClientContext from '../../context/ClientContext';

const form = (props)=>{
    return(
        <ClientContext.Consumer>
            {context=>{
                return(
                    <form className="d-flex flex-column align-items-center" onSubmit={context.create} action='/'>
                        <h1 className="display-3">{props.info.titulo}</h1>
                        {
                            props.info.campos.map((field, i) => {
                                return (
                                    <Field key={i} especification={field} />
                                )
                            })
                        }
                        <button type='submit'>Enviar</button>
                    </form>
                );
            }}
        </ClientContext.Consumer>
        
    );
};

export default form;