import Image from 'next/image';
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss'

export function Header(){

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.logoIgnews}>
                    <Link href="/">
                        <a>
                            <img src="/images/logo.svg" alt="logo ig.news" />
                        </a>
                    </Link>
                </div>
                <div className={styles.mobileMenu}>
                    <div className={styles.lines}></div>
                </div>
                
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}