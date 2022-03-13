import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FlexpaLogin } from "@flexpa/login"

function App() {
  return (
    <div className="App">
      <FlexpaLogin sandbox />
    </div>
  );
}

export default App;
