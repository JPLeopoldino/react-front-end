import React from 'react';

const clientContext = React.createContext({
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
    create: ()=>{}
});

export default clientContext;