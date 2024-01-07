import Link from 'next/link';
import styles from './homepage.module.css';
import FeaturedSlider from '@/components/featuredSlider/FeaturedSlider.jsx';
import CategoryList from '@/components/categoryList/CategoryList.jsx';
import CardList from '@/components/cardList/CardList.jsx';
import Menu from '../components/menu/Menu.jsx';
import FeaturedPosts from '@/components/featuredPosts/FeaturedPosts.jsx';

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
