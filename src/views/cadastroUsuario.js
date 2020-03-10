import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'

class CadastroUsuario extends React.Component{

    state = {
        nome : '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    cadastrar = () => {
        console.log(this.state);
    }
    render(){
        return(
       

                <Card title="Cadastro de Usuário">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputNome">
                                        <input type="text"
                                            id="inputNome" name="nome" className="form-control"
                                            onChange={e => this.setState({nome: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                        <input type="text"
                                            id="inputEmail" name="email" className="form-control"
                                            onChange={e => this.setState({email: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                        <input type="password"
                                            id="inputSenha" name="senha" className="form-control"
                                            onChange={e => this.setState({senha: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                        <input type="password"
                                            id="inputRepitaSenha" name="repitaSenha" className="form-control"
                                            onChange={e => this.setState({repitaSenha: e.target.value})} />
                                </FormGroup>

                                <button type="button" onClick={this.cadastrar} className="btn btn-success">Salvar</button>
                                <button type="button" className="btn btn-danger">Cancelar</button>

                            </div>
                        </div>
                    </div>
                </Card>
           
        )
    }
}

export default CadastroUsuario