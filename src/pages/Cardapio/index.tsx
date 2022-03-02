import { useState } from 'react';
import Buscador from './Buscador';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Cardapio.module.scss';
import Filtros from './Filtros';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <span className={styles.header__text}>A casa do código e da massa</span>
      </header>
      <section className={styles.cardapio}>
        <h1 className={styles.cardapio__titulo}>Cardápio</h1>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
        </div>
      </section>
    </main>
  );
}
