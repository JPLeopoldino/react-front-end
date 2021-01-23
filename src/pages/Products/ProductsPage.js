import React from 'react';
import ClientContext from '../../context/ClientContext';

const productsPage = ()=>{
    return(
        <ClientContext.Consumer>
            {context=>{
                return(
                    <div>
                        {context.products.map((p)=>{
                            return <p key={p.id}>{p.productName}</p>
                        })}
                    </div>
                );
            }}
        </ClientContext.Consumer>
    );
}

export default productsPage;