import Head from 'next/head';
import Feed from '../components/Feed';
import Carousel from '../components/Carousel';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maginite</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Carousel />
      <Feed />
      <Subscribe />
    </div>
  )
}
