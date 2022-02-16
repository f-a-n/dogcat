import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dog from './Dog';
// import {Dog} from './Dog.js'

const Cat = () => {
  return (
      <div className="App">
      <header className="App-header">
          
      <div>Test</div>

      </header>
    </div>
  );
}


ReactDOM.render(
  <>
  {/* <Cat /> */}
  <Dog />
  </>
  
  
  ,
  document.getElementById('root')
);

