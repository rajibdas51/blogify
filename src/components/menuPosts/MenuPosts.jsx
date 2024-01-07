import Image from 'next/image';
import styles from './menuPosts.module.css';
import Link from 'next/link';

const getData = async (page, cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=2`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
};
const MenuPosts = async ({ withImage }) => {
  const { posts, count } = await getData();

  return (
    <div className={styles.items}>
      {posts.map((item) => (
        <Link href='/' className={styles.item} key={item._id}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={item.img} alt='' fill className={styles.image} />
            </div>
          )}

          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              {item.catSlug}
            </span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>item.user.name</span>
              <span> - {item.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
