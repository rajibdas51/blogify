import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/MenuCategories';
const Menu = () => {
  return (
    <div className={styles.container}>
      {/* Category list section*/}
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      {/* popular posts*/}

      <h2 className={styles.subtitle}>{'Chosen by Editor'} </h2>
      <h1 className={styles.title}>Popular posts</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
