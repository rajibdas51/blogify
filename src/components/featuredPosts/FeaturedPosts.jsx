import React from 'react';
import styles from './featuredPosts.module.css';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedPosts = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured Posts</h1>
      <div className={styles.postContainer}>
        <div className={styles.singlePost}>
          <div className={styles.SingleImageContainer}>
            <Image
              src='/singleImage1.webp'
              alt=''
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.singleTextContainer}>
            <div className={styles.detail}>
              <span className={styles.category}>Fashion</span>
              <br />
              <span className={styles.date}>01.05.2023 </span>
            </div>
            <Link href={`/posts/5`}>
              <h2 className={styles.postTitle}>
                Style Odyssey: Navigating the Seas of Self-Expression
              </h2>
            </Link>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.post}>
            <div className={styles.imageContainer}>
              <Image
                src='/singleImage2.webp'
                alt=''
                fill
                className={styles.image}
              />{' '}
            </div>

            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <span className={styles.category}>Coding</span>
                <br />
                <span className={styles.date}>05.11.2023</span>
              </div>
              <Link href={`/posts/4`}>
                <h2 className={styles.postTitle}>
                  CodeCraft: Navigating the Digital Landscape of Innovation
                </h2>
              </Link>
            </div>
          </div>
          <div className={styles.post}>
            <div className={styles.imageContainer}>
              <Image
                src='/singleImage3.webp'
                alt=''
                fill
                className={styles.image}
              />{' '}
            </div>

            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <span className={styles.category}>Style</span>
                <br />
                <span className={styles.date}>10.05.2023</span>
              </div>
              <Link href={`/posts/4`}>
                <h1 className={styles.postTitle}>
                  Exploring Timeless Elegance in Haute Couture
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
