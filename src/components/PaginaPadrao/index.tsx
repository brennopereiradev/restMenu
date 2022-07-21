import styles from './paginapadrao.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/tema.module.scss';

export default function PaginaPadrao() {
    return (
       <>
        <header className={styles.header}>
            <div className={styles.header__text}>
                Text here
            </div>
        </header>
        <div className={stylesTema.container}>
            <Outlet  />
        </div>
       </>
    )
}