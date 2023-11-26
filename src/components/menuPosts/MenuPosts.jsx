import Image from 'next/image';
import styles from './menuPosts.module.css';
import Link from 'next/link';

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href='/' className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src='/coding.png' alt='' fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span> - 12.11.2023</span>
          </div>
        </div>
      </Link>
      <Link href='/' className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src='/food.png' alt='' fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span> - 12.11.2023</span>
          </div>
        </div>
      </Link>
      <Link href='/' className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src='/fashion.png' alt='' fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span> - 12.11.2023</span>
          </div>
        </div>
      </Link>
      <Link href='/' className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src='/culture.png' alt='' fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span> - 12.11.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
