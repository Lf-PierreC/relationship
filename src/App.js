import React from 'react';
import styles from "./App.module.css"
import Header from './components/layout/Header';
import Container from './components/layout/Container';
import ContadorDeTempo from './components/ContadorDeTempo';

function App() {
  return ((
    <div className={styles.App}>
      <Header/>
      <Container/>
      <ContadorDeTempo/>
    </div>)
  );
}

export default App;
