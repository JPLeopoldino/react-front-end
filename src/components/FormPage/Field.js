import React from 'react';
import classes from './Field.module.css';

const field = (props)=>{
    let input;

    switch(props.especification.type){
        case 'select':
            input = <select {...props.especification.attributes}>
                { props.especification.options.map((opt, i)=>{
                        return(
                            <option key={opt.value + i} value={opt.value}>
                                {opt.subtitle}
                            </option>
                        )
                    })
                }
            </select>;
            break;
        default:
            input = <input type={props.especification.type} {...props.especification.attributes} />;
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