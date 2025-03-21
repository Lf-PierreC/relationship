import React from "react";
import styles from './Container.module.css'
import Carrossel from "../Carrossel";

function Container() {
    return (
        <div className={styles.fotos}>
            <Carrossel/>
        </div>
    )
}

export default Container;