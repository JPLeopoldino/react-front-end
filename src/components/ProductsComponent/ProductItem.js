import React from 'react';
import classes from './ProductItem.module.css';

const productItem = (props)=>{
    return(
        <div className={classes.productContainer}>
            <img src={props.specs.img}></img>
            <h1>{props.specs.productName}</h1>
            <h2>R$ {props.specs.price.toString().replace(".", ",")}</h2>
        </div>
    );
};

export default productItem;