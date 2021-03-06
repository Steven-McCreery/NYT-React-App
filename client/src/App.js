import React, { Component } from 'react';
import NYTL from './NYT-wordmark.png';
import NYTT from './NYT-T-Logo.png';
import './App.css';
import FirstComponent from './Components/Component-1.js'
import SecondComponent from './Components/Component-2.js'
import SearchButton from './Components/SearchButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={NYTT} className="App-logo pull-left" alt="logo" />
          <img src={NYTL} className="App-logo" alt="logo" />
          <img src={NYTT} className="App-logo pull-right" alt="logo" />          
        </header>
        
        <p className="App-intro">
          Relevant Web Articles Below:
        </p>
        <div className="container" >

          <div className="well" style={{backgroundColor:'black', color:'white'}}>
            <FirstComponent test="Hello World!"/>
          </div>

          <SearchButton />
        </div>

        <hr />

        <div className="well" style={{backgroundColor:'black'}}>
          <SecondComponent test="Hello World!"/>
        </div>

      </div>
    );
  }
}

export default App;
