import React from 'react';
import Header from '../layout/Header';
import ContainerCasamento from '../layout/ContainerCasamento';
import ContadorDeTempoCasamento from '../ContadorDeTempoCasamento';

function Casamento() {
  return (
    <div>
        <Header/>
        <ContainerCasamento/>
        <ContadorDeTempoCasamento/>
    </div>
  );
}

export default Casamento;
