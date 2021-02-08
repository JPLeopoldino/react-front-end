import React from 'react';
import Field from './Field';
import AppContext from '../../contexts/AppContext';

const form = (props)=>{
    return(
        <AppContext.Consumer>
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
        </AppContext.Consumer>
        
    );
};

export default form;