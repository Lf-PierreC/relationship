import React, { useEffect, useState } from 'react';
import styles from './layout/ContainerCasamento.module.css'
import foto1 from './img/foto01.jpg';
import foto2 from './img/foto02.jpg';
import foto3 from './img/foto03.jpg';
import foto4 from './img/foto04.jpg';
import foto5 from './img/foto05.jpg';
import foto6 from './img/foto06.jpg'
import foto7 from './img/foto07.jpg'
import foto8 from './img/foto08.jpg'
import foto9 from './img/foto09.jpg'

const imagens = [foto8, foto7, foto9, foto6, foto1];

function CarrosselCasamento() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 4000); 

    return () => clearInterval(intervalo); 
  }, []);

  const isFoto08 = imagens[index] === foto8;
  const classNameFoto = isFoto08 ? `${styles.foto08}` : '';

  return (
    <div className={styles.fotos}>
      <img src={imagens[index]} alt={`Slide ${index + 1}`} className={classNameFoto}/>
    </div>
  );
}

export default CarrosselCasamento;