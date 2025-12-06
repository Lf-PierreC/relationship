import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        {/* Lista de itens */}
        <ul className={`${styles.list} ${open ? styles.open : ""}`}>
            <li className={styles.item}>
                <Link to="/" onClick={() => setOpen(false)}>RELACIONAMENTO</Link>
            </li>
            <li className={styles.item}>
                <Link to="/casamento" onClick={() => setOpen(false)}>CASAMENTO</Link>
            </li>
            <li className={styles.item}>
                <Link to="/momentos" onClick={() => setOpen(false)}>MOMENTOS</Link>
            </li>
        </ul>

      {/* Ícone do menu */}
      <div 
        className={styles.menuIcon} 
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
