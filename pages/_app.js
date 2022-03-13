import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <NotificationContainer />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  )
};

export default MyApp;
