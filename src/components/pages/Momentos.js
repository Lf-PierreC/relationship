import React from 'react';
import Header from '../layout/Header';
import styles from './Momentos.module.css';

function Momentos() {
  return (
    <div>
      <Header/>
      <div className={styles.container_qrcode}>
        <a 
          href="https://youtu.be/-_rsnrywox0?si=E6eHeV99RJ2ObeIT"  // 🔗 coloque aqui o link do QR Code
          target="_blank"             // abre em nova aba
          rel="noopener noreferrer"   // segurança
        >
          <img 
            src="/images/qrcode_6meses.png" 
            alt="Momentos" 
            className={styles.qrcode} 
          />
        </a>
      </div>
      <p className={styles.descricao}>Clique ou leia o QR Code</p>
    </div>
  );
}

export default Momentos;
