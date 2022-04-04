import { signOut, signIn, useSession } from "next-auth/react"

import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';


export function SignInButton(){
  const {data: session, status } = useSession()

  console.log(session);

  return session ? (
    <button
      type='button'
      className={styles.signInButton}
      onClick={()=> signOut()}
    >
      <img src={session.user.image} alt={session.user.name} />
      {session.user.name}

      <FiX color="#ffb800" className={styles.closeIcon}/>
    </button>
  ): (
    <button
    type='button'
    className={styles.signInButton}
    onClick={()=> signIn('github')}
    >
      <FaGithub color="#ffb800"/>

      Entrar com GitHub
    </button>
  );
}