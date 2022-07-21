import styles from './footer.module.scss';
import { ReactComponent as Logo } from 'assets/images/logo.svg'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <Logo />
        </footer>
    )
}