'use client';
import React, { useEffect, useState } from 'react';
import styles from './featuredSlider.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleSlide from '../slide/SingleSlide';
import useSWR from 'swr';
import SwiperCore from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data?.message);
    throw error;
  }

  return data;
};

const Featured = () => {
  const { data, isLoading } = useSWR(
    'http://localhost:3000/api/posts',
    fetcher
  );
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(data);
  }, [data]);
  //console.log(data);
  SwiperCore.use[Autoplay];
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {data?.posts?.map((item, i) => (
          <SwiperSlide key={i}>
            <SingleSlide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;
