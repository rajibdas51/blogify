import Link from 'next/link';
import styles from './homepage.module.css';
import FeaturedSlider from '@/components/featuredSlider/FeaturedSlider';
import CategoryList from '@/components/categoryList/CategoryList';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';
import FeaturedPosts from '@/components/featuredPosts/FeaturedPosts';

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <FeaturedSlider />
      <FeaturedPosts />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
