import React from 'react';
import Field from './Field';

const form = (props)=>{
    return(
        <form className="d-flex flex-column align-items-center">
            <h1 className="display-3">{props.info.titulo}</h1>
            {
                props.info.campos.map((field, i)=>{
                    return (
                        <Field key={i} especification={field} />
                    )
                })
            }
        </form>
    );
};

export default form;