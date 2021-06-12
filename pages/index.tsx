import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
	<Head>
            <title>prema</title>
            <link rel="icon" href="/favicon.ico" />
	</Head>
	<div className={styles.hero}>
	    <div>Hello</div>
	</div>
    </div>
  )
}
