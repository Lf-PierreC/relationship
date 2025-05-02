import React from 'react';
import Header from '../layout/Header';
import Container from '../layout/Container';
import ContadorDeTempo from '../ContadorDeTempo';

function Home() {
  return (
    <div>
        <Header/>
        <Container/>
        <ContadorDeTempo/>
    </div>
  );
}

export default Home;
