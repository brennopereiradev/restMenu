import styles from './about.module.scss';
import stylesTema from 'styles/tema.module.scss';
import casa from 'assets/images/casa.png';
import massa1 from 'assets/images/massa1.png';
import massa2 from 'assets/images/massa2.png';

const images = [massa1, massa2];

export default function About(){
    return(
        <section className={styles.about}>
            <h1 className={stylesTema.title}>About</h1>
            <div className={styles.sobreNos}>
                <img src={casa} alt='' />
                <div className={styles.sobreNos__texto}>
                    <p>text 1</p>
                    <p>text 2</p>
                    <p>text 3</p>
                </div>
            </div>
            <div className={styles.imagens}>
                {images.map((imagem, index) =>(
                    <div key={index} className={styles.imagens__imagem}>
                        <img src={imagem} />
                    </div>
                ))}
            </div>
        </section>
    )
}