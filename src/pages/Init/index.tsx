import cardapio from 'data/cardapio.json';
import styles from './init.module.scss';
import stylesTema from 'styles/tema.module.scss';
import nossaCasa from 'assets/images/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Init(){
    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

    const navigate = useNavigate();
    function redirecionarDetalhes(prato: Prato){
        navigate(`/prato/${prato.id}`, {state: { prato }, replace : true});
    }
    return(
        <section>
            <h3 className={stylesTema.titulo}>
                Recomendações da Cozinha
            </h3>
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
            <h3 className={stylesTema.titulo}> Nossa Casa </h3>
            <div className={styles.nossaCasa}>
                <img src={nossaCasa} alt='' />
                <div className={styles.nossaCasa__endereco}>
                    Text about
                </div>
            </div>
        </section>
    );
}