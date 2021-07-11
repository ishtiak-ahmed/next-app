import styles from '../styles/Home.module.scss';
import Link from 'next/dist/client/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage | Ninja List</title>
      </Head>
      <div>
        <h2 className={styles.title}>Homepage</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed voluptas tenetur quasi magni ut suscipit modi, quas, fugit aperiam eos, eligendi quis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed voluptas tenetur quasi magni ut suscipit modi, quas, fugit aperiam eos, eligendi quis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed voluptas tenetur quasi magni ut suscipit modi, quas, fugit aperiam eos, eligendi quis?</p>
        <Link href="/ninjas/">
          <a className={styles.btn}>Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
