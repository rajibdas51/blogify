import React from 'react';
import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Comments = () => {
  const status = 'authenticated';
  return (
    <div className={styles.container}>
      <h1 className={styles.container}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea placeholder='Write a comment..' className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href='/login'>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>12.10.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            sapiente sequi quibusdam odit, tempore nulla vitae consequuntur sunt
            corrupti maxime assumenda illum at inventore alias, fugiat quae?
            Esse, minima doloribus?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>12.10.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            sapiente sequi quibusdam odit, tempore nulla vitae consequuntur sunt
            corrupti maxime assumenda illum at inventore alias, fugiat quae?
            Esse, minima doloribus?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>12.10.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            sapiente sequi quibusdam odit, tempore nulla vitae consequuntur sunt
            corrupti maxime assumenda illum at inventore alias, fugiat quae?
            Esse, minima doloribus?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>12.10.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            sapiente sequi quibusdam odit, tempore nulla vitae consequuntur sunt
            corrupti maxime assumenda illum at inventore alias, fugiat quae?
            Esse, minima doloribus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
