import React from 'react';
import classes from './ProfilePage.module.css';

const profile = (props)=>{
    return(
        <div className="container">
            <h1 className="display-3">Perfil</h1>
            <div className="row">
                <figure className="col-12">
                    <img src={props.pic} className={classes.pic} alt="Foto de Pefil"/>
                </figure>
                <div>
                    <h2>Dados Pessoais</h2>
                    <div>
                        <label>Nome:</label>
                        <input type="text" value={props.dados.name} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={props.dados.email} />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" value={props.dados.password} />
                    </div>
                    <div>
                        <label>CPF:</label>
                        <input type="text" value={props.dados.cpf} />
                    </div>
                    <div>
                        <label>Telefone:</label>
                        <input type="tel" value={props.dados.phone} />
                    </div>
                </div>
            </div>

            <div>
                <h2>Endereço</h2>
            </div>
        </div>
    );
}

export default profile;