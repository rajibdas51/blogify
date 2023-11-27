import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            className={styles.image}
            src='/logo.png'
            alt='Blogify'
            width={100}
            height={50}
          />
          <h1 className={styles.logoText}>Blogify</h1>
        </div>
        <p className={styles.desc}>
          Unleash the power of words with our dynamic platform. Immerse yourself
          in a collection of insightful articles covering technology,
          creativity, and personal reflections. Dive into inspiration now!
        </p>
        <div className={styles.icons}>
          <Image src='/facebook.png' alt='' width={18} height={18} />
          <Image src='/instagram.png' alt='' width={18} height={18} />
          <Image src='/youtube.png' alt='' width={18} height={18} />
          <Image src='/tiktok.png' alt='' width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/blog'>Fashion</Link>
          <Link href='/about'>Coding</Link>
          <Link href='/contact'>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/blog'>Instagram</Link>
          <Link href='/about'>Tiktok</Link>
          <Link href='/contact'>Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
