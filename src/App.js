import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContext from './contexts/AppContext';
import Routes from './Routes';
import api from './api';
import Css from './App.css';
import Profile from './components/ProfilePage/ProfilePage';
import profilePic from './assets/profile.jpg';
import PerfilDados from './perfil.json';
import { LayoutTextWindowReverse } from 'react-bootstrap-icons';

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
    user: [],
    products: [],
    searchProducts: ''
  }

  componentDidMount(){
    this.listProducts();
    this.searchIdClient();
  };


  // clients----------------------------------------------------------
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

  listClients = async ()=>{
    const resp = await api.get('/clients');
    this.setState({client: resp['data']});
  }

  searchIdClient = async (id)=>{
    const resp = await api.get('/clients/' + id);
    this.setState({client: resp['data']});
  };

  getEmail = async (event)=>{
    const resp = await api.get('/clients/email/' + event.target.value);
    this.setState({client: resp['data']});
  }

  getPassword = async (event)=>{
    const resp = await api.get('/clients/password/' + event.target.value);
    this.setState({client: resp['data']});
  }

  

  //products----------------------------------------------------------
  listProducts = async ()=>{
    const resp = await api.get('/products', {
      headers: {
        'Authorization': 'ti-ara-2019'
      }
    });
    this.setState({products: resp['data']});
  }

  filterProducts = async (event)=>{
    if(event.target.value == 'all'){
      this.listProducts();
    } else{
    const resp = await api.get('/products/type/' + event.target.value);
    this.setState({products: resp['data']});
    }
  }

  searchProducts = async (event)=>{
    if(event.target.value == ''){
      this.listProducts();
    } else{
    const resp = await api.get('/products/name/' + event.target.value);
    this.setState({products: resp['data']});
    }
  }

  //render-section-------------------------------------------------------
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <AppContext.Provider value={{
            client: this.state.client,
            searchC: this.searchIdClient,
            products: this.state.products,
            change: this.handleChangeClient,
            create: this.createClient,
            search: this.searchProducts,
            filter: this.filterProducts
          }}>
            
            <Routes />

            {/* <Profile pic={profilePic} dados={PerfilDados} /> */}
          </AppContext.Provider>
        </BrowserRouter>
      </div>
    );
  } 
}

export default App;
