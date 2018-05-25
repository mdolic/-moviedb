import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor(props){
    super(props);
    console.log('constructor');
  }

  componentWillMount(){
    //fired before the compoenent mounts
    console.log('will mount');
  }
  componentDidMount(){
    console.log('mounted');
  }

  
  state = {
    toggle: true
  }

  toggle = () =>{
    this.setState({
      toggle:!this.state.toggle
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text= "Welcome to using props and state" toggle={this.state.toggle}/> {/* text is the props that gets passe ddown*/}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.toggle && 
        <p>This button should show and hide</p>
        }
        <button onClick={this.toggle}> Show/Hide</button>
      </div>
    );
  }
}
class Welcome extends Component{
  render() {
    const { text, toggle} = this.props;
    console.log(toggle);
    return (
      <h1 className="App-title">{text}</h1> //text is the props 
     // <h1 className="App-title">{toggle}</h1>
    )
  }
}
export default App;
