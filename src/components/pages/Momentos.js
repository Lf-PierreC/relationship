import React from 'react';
import Header from '../layout/Header';
import styles from './Momentos.module.css';

function Momentos() {
  return (
    <div>
        <Header/>
        <div className={styles.container_qrcode}>
            <img src="/images/qrcode_6meses.png" alt="Momentos" className={styles.qrcode} />
        </div>
    </div>
  );
}

export default Momentos;
