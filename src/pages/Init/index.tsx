import cardapio from 'data/cardapio.json';
import styles from './init.module.scss';
import nossaCasa from 'assets/images/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Init() {
    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 6);

    const navigate = useNavigate();
    function redirecionarDetalhes(prato: Prato) {
        navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
    }
    return (
        <section>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    See Our Menu
                </div>
            </header>
            <div className={styles.titulo}>
                <i className="fa-solid fa-utensils"></i>
                <h3>Recomendações da Cozinha</h3>
            </div>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button
                            className={styles.recomendado__botao}
                            onClick={() => redirecionarDetalhes(item)}
                        >
                            See More
                        </button>
                    </div>
                ))}
            </div>
            <div className={styles.nossaCasa}>
            <h3 className={styles.title}> <i className="fa-solid fa-house-chimney"></i> Our House </h3>
                <img src={nossaCasa} alt='' />
                <div className={styles.nossaCasa__endereco}>
                    Make Your Reservation
                </div>
            </div>
        </section>
    );
}