import React from 'react';
import Card from '../components/card'
import FormGroup from '../components/form-group'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
class Login extends React.Component {
    
state = {
    email: '',
    senha: ''
}

entrar = () => {
   axios.post('http://localhost:8080/api/usuarios/autenticar', {
       email: this.state.email,
       senha: this.state.senha
   }).then( response => {
       console.log(response)
   }).catch( erro => {
       console.log(erro.response)
   }) 

   
}

prepareCadastrar = () => {
  this.props.history.push('/cadastro-usuario')
}

    render(){
        return(
       
            <div className="row">
                <div className="col-md-6" style={{ position: 'relative',left: '300px'}} >
                    <div className="bs-docs-section">
        
                        <Card title="Login">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-component">
                                    <fieldset>
                                        <FormGroup label="Email: *" htmlFor="exampleInputEmail">
                                            <input type="email" className="form-control" id="exampleInputEmail1" onChange={e => this.setState({email: e.target.value})} 
                                                    aria-describedby="emailHelp" placeholder="Digite o Email" />
                                        </FormGroup>
                                        <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                            <input type="password" className="form-control" onChange={e => this.setState({senha: e.target.value})}  id="exampleInputPassword1" placeholder="Password" />
                                        </FormGroup>
                                        
                                    
  
                                        <button onClick={ this.entrar}  className="btn btn-success">Entrar</button>
                                        <button onClick={ this.prepareCadastrar } className="btn btn-danger">Cadastrar</button>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)