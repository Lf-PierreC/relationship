import React from 'react';
import Header from '../layout/Header';
import styles from './Momentos.module.css';

function Momentos() {
  return (
    <div>
      <Header/>
      <div className={styles.container_qrcode}>
        <a 
          href="https://www.youtube.com/playlist?list=PLR5AIsvMbHkZf6OvMSHrY0pqwt4waayS9"  
          target="_blank"             
          rel="noopener noreferrer"  
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
