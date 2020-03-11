import React from 'react';

import 'bootswatch/dist/flatly/bootstrap.css';
import '../custom.css'
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
