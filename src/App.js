import React from 'react';

class App extends React.Component {

  state = {
    numero1 : '',
    numero2 : '',
    resultado: ''
  }

  somar = () => {
    const resultado =  parseInt(this.state.numero1) + parseInt(this.state.numero2);
    this.setState({resultado: resultado})
  }
  render(){
    return(
      <div>
        <label>numero1:</label>
        <input type="text" value={this.state.numero1} onChange={(e) => this.setState({numero1: e.target.value})}  />
        <br/>
        <label>numero2:</label>
        <input type="text" value={this.state.numero2} onChange={(e) => this.setState({numero2: e.target.value})}  />
        <br/>
        <button onClick={this.somar}>somar</button>
        <br/>
        o resultado é {this.state.resultado}
      </div>
    )
  }
}

export default App;
