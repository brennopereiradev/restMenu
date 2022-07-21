import {ReactComponent as Logo} from "assets/images/logo.svg";
import styles from './menu.module.scss';
import {Link} from 'react-router-dom';

export default function Menu(){
    const rotas = [
        {
        label: 'Inicio',
        to: '/'
        },
        {
        label: 'Cardapio',
        to: '/cardapio'
        },
        {
        label: 'About',
        to: '/about'
        }
    ];
    return(
        <nav className={styles.menu}>
            <Logo />
            <ul className={styles.menu__list}>
                {rotas.map((rota, index)=> (
                    <li key={index} className={styles.menu__link}>
                        <Link  to={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}