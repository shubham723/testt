import Head from 'next/head';
import Image from 'next/image';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ToggleNotification from '../components/Reusable Components/ToogleNotification/ToogleNotification';
import ReactHtmlParser from 'react-html-parser';
import Banner from '../components/Carousel';
import { Oval } from 'react-loader-spinner';
import dynamic from 'next/dynamic'

const Home = () => {
  

  

  const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/home'),
    { ssr: false }
  )

    // ...


    // use it in render like:
   
  return (
    < DynamicComponentWithNoSSR />
    
  )
};

export default Home;
