import React from 'react';
import styles from "./App.module.css"
import Header from './components/layout/Header';
import Container from './components/layout/Container';

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Container/>
    </div>
  );
}

export default App;
