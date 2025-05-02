import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">RELACIONAMENTO</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/casamento">CASAMENTO</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar