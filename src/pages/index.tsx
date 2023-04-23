import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wars App</title>
        <meta
          name='description'
          content='List starships by using Star Wars API'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/icon.ico' />
      </Head>
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}
