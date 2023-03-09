import styles from './about.module.scss';
import house1 from 'assets/images/house1.jpg';
import house2 from 'assets/images/house2.jpg';
import house3 from 'assets/images/house3.jpg';
import house4 from 'assets/images/house4.jpg';
import house5 from 'assets/images/house5.jpg';

const images = [house1, house2, house3, house4, house5];

export default function About(){
    return(
        <section className={styles.about}>
            <h1 className={styles.title1}>About</h1>
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