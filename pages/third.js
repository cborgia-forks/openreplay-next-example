import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { startTracker } from "../utils/tracker";

export default function Third({ projectKey }) {
  useEffect(() => {
    startTracker({
      userIdEnabled: true,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>This is the third page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is the THIRD page of this application
        </h1>

        <Link href="/">Go back home</Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      projectKey: process.env.OPENREPLAY_PROJECT_KEY,
    },
  };
}
