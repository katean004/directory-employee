import React from 'react';
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import "./App.css";
  
export default function App() {
    return (
      <div className="App">
        <Wrapper>
            <Header />
            <Main />
        </Wrapper>
      </div>
    );
  }
