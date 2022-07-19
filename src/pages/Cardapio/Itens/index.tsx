import cardapio from './itens.json';
import Item from './Item';
import styles from './itens.module.scss';
import { useEffect, useState } from 'react';

interface Props {
    search: string,
    filtro: number | null,
    order: string
  }
  
  export default function Itens(props: Props) {
    const [list, setList] = useState(cardapio);
    const { search, filtro, order } = props;
  
    function testSearch(title: string) {
      const regex = new RegExp(search, 'i');
      return regex.test(title);
    }
  
    function testaFiltro(id: number) {
      if(filtro !== null) return filtro === id;
      return true;
    }
  
    function ordenar(newList: typeof cardapio) {
      switch(order) {
        case 'porcao': 
          return newList.sort((a, b) => a.size > b.size ? 1 : -1);
        case 'qtd_pessoas':
          return newList.sort((a,b) => a.serving > b.serving ? 1 : -1);
        case 'preco':
          return newList.sort((a,b) => a.price > b.price ? 1 : -1);
        default:
          return newList; 
      }
    }
  
    useEffect(() => {
      const newList = cardapio.filter(item => testSearch(item.title) && testaFiltro(item.category.id));
      setList(ordenar(newList));
    },[search, filtro, order])
  
    return (
      <div className={styles.itens}>
        {list.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    )
}