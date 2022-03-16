import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToggleNotification from '../components/Reusable Components/ToogleNotification/ToogleNotification';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    getSettings();
  }, []);

  const getSettings = async () => {
    try {
      let response = await axios.get('http://3.88.73.172:3001/v1/settings');
      setSettings(response.data.data);
    } catch (error) {
      ToggleNotification("Error", error?.response?.data?.message);
    }
  };

  return (
    <>
      <NotificationContainer />
      <Header settings={settings} />
      <Component {...pageProps} />
      <Footer settings={settings} />
    </>
  )
};

export default MyApp;
