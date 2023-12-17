import React from 'react';
import styles from './singleSlide.module.css';
import Image from 'next/image';
import Link from 'next/link';
const SingleSlide = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.image}
          src={item.img}
          alt='featured post'
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{' '}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className={styles.postTitle}>{item.title}</h1>
          <p className={styles.postDesc}>{item.desc.substring(0, 250)}</p>
        </Link>
        <Link href={`/posts/${item.slug}`} className={styles.button}>
          Reade More
        </Link>
      </div>
    </div>
  );
};

export default SingleSlide;
