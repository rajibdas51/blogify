import React from 'react';
import styles from './menuCategories.module.css';
import Link from 'next/link';
const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link href='/blog?cat=style' className={`${styles.categoryItem} `}>
        <span>Style</span>{' '}
        <span className={`${styles.style} ${styles.catnum}`}>25</span>
      </Link>
      <Link href='/blog?cat=coding' className={`${styles.categoryItem}`}>
        <span>Coding</span>{' '}
        <span className={`${styles.coding} ${styles.catnum}`}>80</span>
      </Link>
      <Link href='/blog?cat=culture' className={`${styles.categoryItem}`}>
        <span>Culture </span>{' '}
        <span className={`${styles.culture} ${styles.catnum}`}>30</span>
      </Link>
      <Link href='/blog?cat=fashion' className={`${styles.categoryItem} `}>
        <span>Fashion</span>{' '}
        <span className={`${styles.fashion} ${styles.catnum}`}>15</span>
      </Link>
      <Link href='/blog?cat=food' className={`${styles.categoryItem} `}>
        <span>Food </span>{' '}
        <span className={`${styles.food} ${styles.catnum}`}>22</span>
      </Link>
      <Link href='/blog?cat=travel' className={`${styles.categoryItem}`}>
        <span>Travel</span>{' '}
        <span className={`${styles.travel} ${styles.catnum}`}>40</span>
      </Link>
    </div>
  );
};

export default MenuCategories;
