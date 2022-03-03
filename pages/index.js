import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Feed from '../components/Feed';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Header from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maginite</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Carousel />
      <Feed />
      <Footer />
    </div>
  )
}
