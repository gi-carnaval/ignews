import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useSession, signIn, signOut } from "next-auth/react"

import styles from './styles.module.scss'

export function SignInButton(){
    const { data: session } = useSession()

    return session ? (
        <button 
        type="button"
        className={styles.signInButton}
        onClick={() => signOut()}
        >
            <FaGithub color="#04d361" />
            <span>{session.user?.name}</span>
            <span className={styles.logout}>Logout</span>
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button 
        type="button"
        className={styles.signInButton}
        onClick={() => signIn()}>
            <FaGithub color="#eba417" />
            <span className={styles.signIn}>Sign in</span><span className={styles.signInText}>with Github</span>
        </button>
    )
}