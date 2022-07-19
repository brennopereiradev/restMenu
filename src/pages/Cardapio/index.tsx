import styles from "./Cardapio.module.scss";
import {ReactComponent as Logo} from "assets/images/logo.svg";
import Search from "./Search";
import { useState } from "react";
import Filtros from "./Filtros";
import Order from "./Order";
import Itens from "./Itens";

export default function Cardapio() {
  const [search, setSearch ] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [order, setOrder] = useState("");
  return (
    <main>
      <nav className={styles.cardapio}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text} >Text here</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Menu</h3>
        <Search
          search={search}
          setSearch={setSearch}
        />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Order order={order} setOrder={setOrder} />
        </div>
        <Itens search={search} filtro={filtro} order={order} />
      </section>
    </main>
  )
}