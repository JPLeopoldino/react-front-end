import React from 'react';
import AppContext from '../../contexts/AppContext';
import HeaderPage from '../../components/HeaderPage/HeaderPage';

const productsPage = ()=>{
    return(
        <div>
            <HeaderPage />
            <AppContext.Consumer>
                {context=>{
                    return(
                        context.products.map((p)=>{
                                return <p key={p.id}>{p.productName}</p>
                        })
                    );
                }}
            </AppContext.Consumer>
        </div>
    );
}

export default productsPage;