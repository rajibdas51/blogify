import React from 'react';
import styles from './singlePage.module.css';
import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src='/p1.jpeg' alt='' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.usernaame}>John Doe</span>
              <span className={styles.date}> - 01.11.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit nisi, ab beatae aspernatur, necessitatibus, porro
              temporibus quasi iusto omnis quas sunt quo possimus blanditiis.
              Nisi odio fugit consectetur. Veniam, accusantium.
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              perferendis cum voluptatum eum tempore vel nesciunt quia dolorem,
              repudiandae corrupti, magnam reprehenderit! Perferendis modi
              tempore maxime. Sunt consequuntur nisi iure?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis adipisci quae omnis, similique dolore dolor reiciendis
              velit accusamus beatae sed commodi. Nemo sapiente repellendus sit
              tenetur eaque corrupti iusto consectetur asperiores distinctio
              quaerat nobis ab quidem accusamus, voluptatum nesciunt? Ipsam
              consequatur accusantium voluptatibus pariatur eos enim dolor quia
              nostrum dicta ut. Aliquam atque esse amet, neque dignissimos,
              inventore quis vel sit consectetur alias exercitationem quibusdam
              voluptatum at, deleniti velit doloremque maxime culpa ullam enim
              consequuntur iure. Atque, accusamus animi. Dolorum vitae quia
              facere ex ut minima quibusdam debitis similique dolores doloribus
              ipsa, obcaecati ipsum soluta impedit inventore laboriosam et
              beatae.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
