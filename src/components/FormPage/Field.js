import React from 'react';
import AppContext from '../../contexts/AppContext';
import classes from './Field.module.css';

const field = (props)=>{
    let input;

    switch(props.especification.type){
        case 'select':
            input =
            <AppContext.Consumer>
                { context=>{
                    return(
                        <select {...props.especification.attributes} onChange={ context.change }>
                            { props.especification.options.map((opt, i) => {
                                return (
                                    <option key={opt.value + i} value={opt.value}>
                                        {opt.subtitle}
                                    </option>
                                );
                            })}
                        </select>
                    );
                }}
            </AppContext.Consumer>;
            break;
        default:
            input =
            <AppContext.Consumer>
                { context=>{
                    return(
                        <input type={props.especification.type} {...props.especification.attributes} onChange={ context.change }/>
                    );
                }}
            </AppContext.Consumer>;
            break;
    }
    
    return(
        <div className={classes.inputBox}>
            <label htmlFor={props.especification.attributes.id}>{props.especification.label}: </label>
            {input}
        </div>
    );
}

export default field;