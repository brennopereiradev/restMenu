import classNames from "classnames";
import { Prato } from "types/Prato";
import styles from "./tagsprato.module.scss";

export default function TagsPrato({
    category,
    size,
    serving,
    price
}: Prato) {
    return (
        <div className={styles.tags}>
            <div className={classNames(
                styles.tags__tipo,
                styles[`tags__tipo__${category.label.toLowerCase()}`]
            )}>
                {category.label}
            </div>
            <div className={styles.tags__porcao}>
                Serve {serving} pessoa{serving === 1 ? '' : 's'}
            </div>
            <div className={styles.tags__qtdpessoas}>
                {size}
            </div>
            <div className={styles.tags__valor}>
                ${price.toFixed(2)}
            </div>
        </div>
    )
}