import Head from 'next/head';
import backgroundImage from '../assets/Images/sports.jpg';
import Image from 'next/image';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiFillCalendar } from 'react-icons/ai';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Test = () => {
    return (
        <>
            <Head>
                
                <title>Maginite</title>


                {/* <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" /> */}
            </Head>

            <Header />
            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">Our blog</span>
                                <h1 className="text-capitalize mb-5 text-lg">Blog articles</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section blog-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 mb-5">
                                    <div className="blog-item">
                                        <div className="blog-thumb">
                                            <Image src={backgroundImage} width={700} height={300} alt="" className="img-fluid " />
                                        </div>

                                        <div className="blog-item-content">
                                            <div className="blog-item-meta mb-3 mt-4">
                                                <span className="text-muted text-capitalize mr-3"><AiOutlineMessage className='ms-2' />5 Comments</span>
                                                <span className="text-black text-capitalize ms-3"><AiFillCalendar className="icofont-calendar" /> 28th January</span>
                                            </div>

                                            <h2 className="mt-3 mb-3 head">Choose quality service over cheap service  all type of things</h2>

                                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad.</p>

                                            <button className="btn btn-main btn-icon btn-round-full readMore">Read More <i className="icofont-simple-right ml-2"></i></button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 mb-5">
                                    <div className="blog-item">
                                        <div className="blog-thumb">
                                            <Image src={backgroundImage} alt="" width={700} height={300} className="img-fluid" />
                                        </div>

                                        <div className="blog-item-content">
                                            <div className="blog-item-meta mb-3 mt-4">
                                                <span className="text-muted text-capitalize mr-3"><AiOutlineMessage className='ms-2' />5 Comments</span>
                                                <span className="text-black text-capitalize ms-3"><AiFillCalendar className="icofont-calendar" /> 28th January</span>
                                            </div>

                                            <h2 className="mt-3 mb-3">All test cost 25% in always in our laboratory</h2>

                                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad.</p>

                                            <button className="btn btn-main btn-icon btn-round-full readMore">Read More <i className="icofont-simple-right ml-2  "></i></button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                                {/* <div className="sidebar-widget search  mb-3 ">
                                                <h5>Search Here</h5>
                                                <form action="#" className="search-form">
                                                    <input type="text" className="form-control" placeholder="search" />
                                                    <i className="ti-search"></i>
                                                </form>
                                            </div> */}


                                <div className="sidebar-widget latest-post mb-3">
                                    <h5>Popular Posts</h5>

                                    <div className="py-2">
                                        <span className="text-sm text-muted">03 Mar 2018</span>
                                        <h6 className="my-2">Thoughtful living in los Angeles</h6>
                                    </div>

                                    <div className="py-2">
                                        <span className="text-sm text-muted">03 Mar 2018</span>
                                        <h6 className="my-2">Vivamus molestie gravida turpis.</h6>
                                    </div>

                                    <div className="py-2">
                                        <span className="text-sm text-muted">03 Mar 2018</span>
                                        <h6 className="my-2">Fusce lobortis lorem at ipsum semper sagittis</h6>
                                    </div>
                                </div>

                                <div className="sidebar-widget category mb-3">
                                    <h5 className="mb-4">Categories</h5>

                                    <ul className="list-unstyled">
                                        <li className="align-items-center">
                                            <a href="#">Medicine</a>
                                            <span>(14)</span>
                                        </li>
                                        <li className="align-items-center">
                                            <a href="#">Equipments</a>
                                            <span>(2)</span>
                                        </li>
                                        <li className="align-items-center">
                                            <a href="#">Heart</a>
                                            <span>(10)</span>
                                        </li>
                                        <li className="align-items-center">
                                            <a href="#">Free counselling</a>
                                            <span>(5)</span>
                                        </li>
                                        <li className="align-items-center">
                                            <a href="#">Lab test</a>
                                            <span>(5)</span>
                                        </li>
                                    </ul>
                                </div>


                                <div className="sidebar-widget tags mb-3">
                                    <h5 className="mb-4">Tags</h5>

                                    <a href="#">Doctors</a>
                                    <a href="#">agency</a>
                                    <a href="#">company</a>
                                    <a href="#">medicine</a>
                                    <a href="#">surgery</a>
                                    <a href="#">Marketing</a>
                                    <a href="#">Social Media</a>
                                    <a href="#">Branding</a>
                                    <a href="#">Laboratory</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pagination">
                        <div className="col-lg-8">
                            <nav className="pagination py-2 d-inline-block">
                                <div className="nav-links">
                                    <span aria-current="page" className="page-numbers current">1</span>
                                    <a className="page-numbers" href="#">2</a>
                                    <a className="page-numbers" href="#">3</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- footer Start --> */}
           <Footer />
        </>
    )
}

export default Test