import React from 'react';

import Login from '../views/login';
import 'bootswatch/dist/flatly/bootstrap.css';
import '../custom.css'
import CadastroUsuario from '../views/cadastroUsuario';
import Router from './routes';
import NavBar from '../components/navbar';

class App extends React.Component {
 
 
  render(){
    return(
      <div>

      <NavBar />
      
      <div className="container">
          <Router />
    
      </div>
    </div>)
  }
}

export default App
