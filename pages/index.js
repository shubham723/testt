import Head from 'next/head';
import Feed from '../components/Feed';
import Carousel from '../components/Carousel';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';
import Image from 'next/image';
import zirakpur from '../assets/Images/zirakpur.jpg';
import { Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import ToggleNotification from '../components/Reusable Components/ToogleNotification/ToogleNotification';
import ReactHtmlParser from 'react-html-parser';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  // const settings = useContext(SettingContext);

  useEffect(() => {
      getData();
  }, []); 

  const getData = async() => {
    try {
      let trendingBlogs = await axios.get('http://3.88.73.172:3001/v1/blogs?page=1&limit=6&isTreandings=true');
      setBlogs(trendingBlogs.data.data);
    } catch (error) {
      ToggleNotification("Error", error?.response?.data?.message);
    }
  };

  
  // console.log(settings)
  return (
    <div id="top">
      <Head>
        <title>Maginite</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Header settings={settings} /> */}
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                <span className="text-uppercase text-sm letter-spacing ">Total Health care solution</span>
                <h1 className="mb-3 mt-3">Your most trusted health partner</h1>

                <p className="mb-4 pr-5">A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
                <div className="btn-container ">
                  <a target="_blank" className="btn btn-main-2 btn-icon btn-round-full">Make appoinment <i className="icofont-simple-right ml-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-block d-lg-flex">
                <div className="feature-item mb-5 mb-lg-0" style={{ zIndex: '1' }}>
                  <div className="feature-icon mb-4">
                    <i className="icofont-surgeon-alt"></i>
                  </div>
                  <span>Text</span>
                  <h4 className="mb-3">Dummy Text</h4>
                  <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <a className="btn btn-main btn-round-full readMore">Coming Soon</a>
                </div>

                <div className="feature-item mb-5 mb-lg-0" style={{ zIndex: '1' }}>
                  <div className="feature-icon mb-4">
                    <i className="icofont-ui-clock"></i>
                  </div>
                  <span>Text</span>
                  <h4 className="mb-3">Dummy Text</h4>
                  <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <a className="btn btn-main btn-round-full readMore">Coming Soon</a>
                </div>

                <div className="feature-item mb-5 mb-lg-0" style={{ zIndex: '1' }}>
                  <div className="feature-icon mb-4">
                    <i className="icofont-support"></i>
                  </div>
                  <span>Text</span>
                  <h4 className="mb-3">Dummy Text</h4>
                  <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <a className="btn btn-main btn-round-full readMore">Coming Soon</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-6">
              <div className="about-img">
                <Image src={zirakpur} alt="" className="img-fluid" height={400} width={400} />
                <Image src={zirakpur} alt="" className="img-fluid mt-4" height={400} width={400} />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="about-img mt-4 mt-lg-0">
                <Image src={zirakpur} alt="" className="img-fluid" height={800} width={800} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-content pl-4 mt-4 mt-lg-0">
                <h2 className="title-color">Maginite</h2>
                <p className="mt-4 mb-5">We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>

                <a href="service.html" className="btn btn-main-2 btn-round-full btn-icon readMore">Read More<i className="icofont-simple-right ml-3"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section service gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2>Trending Blogs</h2>
                <div className="divider mx-auto my-4"></div>
                <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
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
                          {item.title}
                        </Card.Title>
                        <Card.Text>
                          {ReactHtmlParser(item.discription)}
                        </Card.Text>
                        <Card.Footer className="color point readMore" onClick={() => router.push(`/blog/${item._id}`)}>
                          Read More
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </div>
                )
              })
            }
            {/* {Array.from({ length: 6 }).map((_, idx) => (
              <div className="col-lg-4 col-md-6 col-sm-6 mt-4" key={idx}>
                <Card>
                  <Image variant="left" src={zirakpur} height={300} alt={'Top Categories'} />
                  <Card.Body>
                    <Card.Title>
                      Sports
                    </Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer...
                    </Card.Text>
                    <Card.Footer className="color point readMore">
                      Read More
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </div>
            ))} */}
          </div>
        </div>
      </section>
      {/* <Footer settings={settings} /> */}

    </div>
  )
};

export default Home;
