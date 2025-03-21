import React, { useEffect, useState } from 'react';
import foto1 from './img/foto01.jpg';
import foto2 from './img/foto02.jpg';
import foto3 from './img/foto03.jpg';
import foto4 from './img/foto04.jpg';
import foto5 from './img/foto05.jpg';

const imagens = [foto1, foto2, foto3, foto4, foto5];

function Carrossel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 4000); 

    return () => clearInterval(intervalo); 
  }, []);

  return (
    <div className="carousel">
      <img src={imagens[index]} alt={`Slide ${index + 1}`} />
    </div>
  );
}

export default Carrossel;