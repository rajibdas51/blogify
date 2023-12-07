import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Card = ({ key }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>15.05.23 - </span>
          <span className={styles.category}>Fashion</span>
        </div>
        <Link href='/'>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          totam officia ipsa quos odio, iste eius hic aspernatur quisquam
          eveniet impedit aut recusandae debitis, atque blanditiis itaque
          eligendi, soluta consequuntur.
        </p>
        <Link href='/' className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
