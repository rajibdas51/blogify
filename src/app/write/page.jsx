'use client';
import React, { useState } from 'react';
import styles from './write.module.css';
import Image from 'next/image';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const WritePage = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState('');
  const { status } = useSession();
  const [file, setFile] = useState(null);
  const router = useRouter();
  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === 'unauthenticated') {
    router.push('/');
  }
  return (
    <div className={styles.container}>
      <input type='text' placeholder='Title' className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image src='/plus.png' alt='' width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.button}>
              <Image src='/image.png' alt='' width={16} height={16} />
            </button>
            <button className={styles.button}>
              <Image src='/external.png' alt='' width={16} height={16} />
            </button>
            <button className={styles.button}>
              <Image src='/video.png' alt='' width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme='bubble'
          value={value}
          onChange={setValue}
          placeholder='Tell you story'
          className={styles.textArea}
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
