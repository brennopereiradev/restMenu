import styles from "./Cardapio.module.scss";
import Search from "./Search";
import { useState } from "react";
import Filtros from "./Filtros";
import Order from "./Order";
import Itens from "./Itens";
import stylesTema from 'styles/tema.module.scss';

export default function Cardapio() {
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [order, setOrder] = useState("");
  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardapio</h3>
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

  )
}