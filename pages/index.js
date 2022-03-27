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

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getData();
    getSettings();
  }, []);

  const getData = async () => {
    try {
      let trendingBlogs = await axios.get('http://3.88.73.172:3001/v1/blogs?page=1&limit=6&isTreandings=true');
      setBlogs(trendingBlogs.data.data);
    } catch (error) {
      ToggleNotification("Error", error?.response?.data?.message);
    }
  };

  const goToBlogDetails = (id, name) => {
    localStorage.setItem('id', id);
    router.push(`/${name[0]?.props?.children[0].replace(/\s/g, "-").toLowerCase()}`);
  };

  const getSettings = async () => {
    setLoading(true);
    try {
      let response = await axios.get('http://3.88.73.172:3001/v1/settings');
      setSettings(response.data.data);
      setLoading(false);
    } catch (error) {
      ToggleNotification("Error", error?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <div id="top">
      <Head>
        <title>Maginite</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {
        loading ? <div style={{
          width: '100px',
          height: '100px',
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          margin: 'auto'
        }}>
          <Oval
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
          />
        </div> :
          <>
            <Banner settings={settings} />
            <section className="section about">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-sm-6">
                    <div className="about-img">
                      <Image src={`http://3.88.73.172:3001/${settings?.logo}`} alt="" className="img-fluid" height={500} width={700} />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="about-content pl-4 mt-4 mt-lg-0">
                      <h2 className="title-color"> {ReactHtmlParser(settings?.about_us_heading)} </h2>
                      <p className="mt-4 mb-5"> {ReactHtmlParser(settings?.about_us_detail)} </p>
                      <a className="btn btn-main-2 btn-round-full btn-icon readMore head" onClick={() => router.push('/about')}>Read More<i className="icofont-simple-right ml-3"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section service">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7 text-center">
                    <div className="section-title">
                      <h2>Trending Blogs</h2>
                      <div className="divider mx-auto my-4"></div>
                      {/* <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p> */}
                    </div>
                  </div>
                </div>

                <div className="row">
                  {
                    blogs?.length > 0 && blogs.map((item, idx) => {
                      return (
                        <div className="col-lg-4 col-md-6 col-sm-6 mt-4" key={idx}>
                          <Card>
                            <Image variant="left" src={`http://3.88.73.172:3001/${item.blog_Picture}`} width={300} height={300} alt={'Top Categories'} />
                            <Card.Body>
                              <Card.Title>
                                {ReactHtmlParser(item.title)}
                              </Card.Title>
                              <Card.Text>
                                {
                                  ReactHtmlParser(item?.discription)[0].props.children[0].length > 1000 ? ReactHtmlParser(item?.discription)[0].props.children[0].substring(0, 999) + '...' : ReactHtmlParser(item?.discription)[0].props.children[0]
                                }
                              </Card.Text>
                              <Card.Footer className="color point readMore head" onClick={() => goToBlogDetails(item._id, ReactHtmlParser(item.title))}>
                                Read More
                              </Card.Footer>
                            </Card.Body>
                          </Card>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section>
          </>
      }
    </div>
  )
};

export default Home;
