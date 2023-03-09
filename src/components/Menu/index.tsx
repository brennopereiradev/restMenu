import styles from './menu.module.scss';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';

export default function Menu(){
    const rotas = [
        {
        label: 'Home',
        to: '/'
        },
        {
        label: 'Menu',
        to: '/cardapio'
        },
        {
        label: 'About',
        to: '/about'
        }
    ];
    return(
        <nav className={styles.menu}>
            <img src={Logo} />
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