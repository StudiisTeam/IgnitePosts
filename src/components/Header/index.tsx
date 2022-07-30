import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/src/assets/Ignite_simbol.png" alt="" />
      <h1>Ignite feed</h1>
    </header>
  );
};

