import styles from './styles.module.scss';
export function Header(){
  return(
    <header>
      <div>
        <img src="/images/logo.svg" alt="Logo Meu Board" />
        <a>Home</a>
        <a>Meu Board</a>
        
        <button>
          Entrar com GitHub
        </button>
      </div>
    </header>
  );
}