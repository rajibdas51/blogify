import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Rajib here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src='/p1.jpeg'
            alt='featured post'
            fill
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            aliquid.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            iure, esse perspiciatis expedita nam hic consequatur libero
            reprehenderit a quibusdam blanditiis ducimus at suscipit perferendis
            deleniti repellendus est reiciendis eius?
          </p>
          <button className={styles.button}>Reade More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
