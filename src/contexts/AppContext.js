import React from 'react';

const appContext = React.createContext({
    client: {
        name: '',
        lastName: '',
        email: '',
        password: '',
        cpf: '',
        phone: '',
        rua: '',
        numeroRua: '',
        bairro: '',
        estado: '',
        photo: ''
    },
    products: [],
    change: ()=>{},
    create: ()=>{},
    search: ()=>{},
    searchC: ()=>{},
    filter: ()=>{}
});

export default appContext;