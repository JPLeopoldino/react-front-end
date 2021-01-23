import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ClientContext from './context/ClientContext';
import Routes from './Routes';
import api from './api';
import HeaderPage from './components/HeaderPage/HeaderPage';
import Css from './App.css';
import Profile from './components/ProfilePage/ProfilePage';
import profilePic from './assets/profile.jpg';
import PerfilDados from './perfil.json';

class App extends Component{
  state = {
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
    products: []
  }

  handleChangeClient = (event)=>{
    const updateClient = {...this.state.client};
    updateClient[event.target.name] = event.target.value;
    this.setState({client: updateClient});
  }

  createClient = async (event)=>{
    const resp = await api.post('/clients', this.state.client, {
      headers: {'Content-Type': 'application/json'}
    });
  }

  listProducts = async ()=>{
    const resp = await api.get('/products', {
      headers: {
        'Authorization': 'ti-ara-2019'
      }
    });
    this.setState({products: resp['data']});
  }

  componentDidMount(){
    this.listProducts()
  };

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <ClientContext.Provider value={{
            client: this.state.client,
            products: this.state.products,
            change: this.handleChangeClient,
            create: this.createClient
          }}>
            <HeaderPage />
            <Routes />

            {/* <Profile pic={profilePic} dados={PerfilDados} /> */}
            <h3>Rodapé</h3>
          </ClientContext.Provider>
        </BrowserRouter>
      </div>
    );
  } 
}

export default App;
