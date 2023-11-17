import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Blogify</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href='/'>Homepage</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/about'>About</Link>
        <AuthLinks />
      </div>
      <div className={styles.social}>
        <Image src='/facebook.png' alt='facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='Instagram' width={24} height={24} />
        <Image src='/tiktok.png' alt='tiktok' width={24} height={24} />
        <Image src='/youtube.png' alt='Youtube' width={24} height={24} />
      </div>
    </div>
  );
};

export default Navbar;
