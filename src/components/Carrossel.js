import React, { useEffect, useState } from 'react';
import styles from './Carrossel.module.css';

import foto1 from './img/foto08.jpg';
import foto2 from './img/foto06.jpg';
import foto3 from './img/foto10.jpg';
import foto4 from './img/foto11.jpg';
import foto5 from './img/foto12.jpg';
import foto6 from './img/foto07.jpg';
import foto7 from './img/foto13.jpg';
import foto8 from './img/foto14.jpg';
import foto9 from './img/foto15.jpg';
import foto10 from './img/foto16.jpg';
import foto11 from './img/foto17.jpg';

const imagens = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11];

function Carrossel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  // Verificações de classe
  let classNameFoto = '';
  if (imagens[index] === foto1) {
    classNameFoto = styles.foto01;
  } else if (imagens[index] === foto7) {
    classNameFoto = styles.foto07;
  }

  return (
    <div className="carousel">
      <img src={imagens[index]} alt={`Slide ${index + 1}`} className={classNameFoto} />
    </div>
  );
}

export default Carrossel;
