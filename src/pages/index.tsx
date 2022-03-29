import Head from "next/head";
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando Tarefas!!!!</title>
      </Head>
    
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Projeto Board" />
      

        <section className={styles.callToAction}>
          <h1>
            Uma ferramenta para seu dia a dia. Escreva, planeje e organize-se...
          </h1>
          <p>
            <span>100% gratuíto</span> e online!
          </p>
        </section>

        <div className={styles.donaters}>
          <img src='https://sujeitoprogramador.com/steve.png' alt="Apoiador 1" />
         
        </div>
      </main>
    </>
  )
}
