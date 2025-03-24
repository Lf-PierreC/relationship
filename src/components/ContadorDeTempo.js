import React, { useEffect, useState } from 'react';
import styles from './ContadorDeTempo.module.css'

function ContadorDeTempo() {
  const [tempo, setTempo] = useState({ anos: 0, meses: 0, dias: 0 });

  useEffect(() => {
    const dataInicial = new Date('2025-02-22'); 
    const dataAtual = new Date();

    const calcularDiferenca = (inicio, fim) => {
      let anos = fim.getFullYear() - inicio.getFullYear();
      let meses = fim.getMonth() - inicio.getMonth();
      let dias = fim.getDate() - inicio.getDate();

      if (dias < 0) {
        meses -= 1;
        const ultimoDiaDoMesAnterior = new Date(fim.getFullYear(), fim.getMonth(), 0).getDate();
        dias += ultimoDiaDoMesAnterior;
      }

      if (meses < 0) {
        anos -= 1;
        meses += 12;
      }

      return { anos, meses, dias };
    };

    setTempo(calcularDiferenca(dataInicial, dataAtual));
  }, []);

  return (
        
        <div className={styles.countdown_container}>
            <div className={styles.time_box}>
                <div className={styles.time_number}>{tempo.anos}</div>
                <div className={styles.time_label}>ANO</div>
            </div>
            <div className={styles.time_box}>
                <div className={styles.time_number}>{tempo.meses}</div>
                <div className={styles.time_label}>MÊS</div>
                </div>
            <div className={styles.time_box}>
                <div className={styles.time_number}>{tempo.dias}</div>
                <div className={styles.time_label}>DIA</div>
            </div>
        </div>
  );
}

export default ContadorDeTempo;
