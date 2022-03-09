import Head from 'next/head'
import React from 'react'

const Test = () => {
    return (
        <>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="description" content="Orbitor,business,company,agency,modern,bootstrap4,tech,software" />
                        <meta name="author" content="themefisher.com" />

                            <title>Novena- Health & Care Medical template</title>


                            <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />


                            <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css" />

                            <link rel="stylesheet" href="plugins/icofont/icofont.min.css" />

                            <link rel="stylesheet" href="plugins/slick-carousel/slick/slick.css" />
                            <link rel="stylesheet" href="plugins/slick-carousel/slick/slick-theme.css" />
                        </Head>
                        <header>
                            <div className="header-top-bar">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                                <li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2"></i>support@magnite.com</a></li>
                                                <li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Dummy Address </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                                                <a href="tel:+23-345-67890" >
                                                    <span>Call Now : </span>
                                                    <span className="h4">*******</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="navbar navbar-expand-lg navigation" id="navbar">
                                <div className="container">
                                    <a className="navbar-brand" href="index.html">
                                        <img src="images/logo.png" alt="" className="img-fluid" />
                                    </a>

                                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icofont-navigation-menu"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarmain">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="index.html">Home</a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>

                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="blog-sidebar.html" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i className="icofont-thin-down"></i></a>
                                                <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                                    <li><a className="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>

                                                    <li><a className="dropdown-item" href="blog-single.html">Blog Single</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </header>



                        <section className="page-title bg-1">
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="block text-center">
                                            <span className="text-white">Our blog</span>
                                            <h1 className="text-capitalize mb-5 text-lg">Blog articles</h1>

                                            {/* <!-- <ul className="list-inline breadcumb-nav">
                                    <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
                                    <li className="list-inline-item"><span className="text-white">/</span></li>
                                    <li className="list-inline-item"><a href="#" className="text-white-50">Our blog</a></li>
                                </ul> --> */}
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
                                                        <img src="images/blog/blog-1.jpg" alt="" className="img-fluid " />
                                                    </div>

                                                    <div className="blog-item-content">
                                                        <div className="blog-item-meta mb-3 mt-4">
                                                            <span className="text-muted text-capitalize mr-3"><i className="icofont-comment mr-2"></i>5 Comments</span>
                                                            <span className="text-black text-capitalize mr-3"><i className="icofont-calendar mr-1"></i> 28th January</span>
                                                        </div>

                                                        <h2 className="mt-3 mb-3"><a href="blog-single.html">Choose quality service over cheap service  all type of things</a></h2>

                                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad.</p>

                                                        <a href="blog-single.html" target="_blank" className="btn btn-main btn-icon btn-round-full">Read More <i className="icofont-simple-right ml-2  "></i></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 mb-5">
                                                <div className="blog-item">
                                                    <div className="blog-thumb">
                                                        <img src="images/blog/blog-2.jpg" alt="" className="img-fluid" />
                                                    </div>

                                                    <div className="blog-item-content">
                                                        <div className="blog-item-meta mb-3 mt-4">
                                                            <span className="text-muted text-capitalize mr-3"><i className="icofont-comment mr-2"></i>5 Comments</span>
                                                            <span className="text-black text-capitalize mr-3"><i className="icofont-calendar mr-1"></i> 28th January</span>
                                                        </div>

                                                        <h2 className="mt-3 mb-3"><a href="blog-single.html">All test cost 25% in always in our laboratory</a></h2>

                                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad.</p>

                                                        <a href="blog-single.html" target="_blank" className="btn btn-main btn-icon btn-round-full">Read More <i className="icofont-simple-right ml-2  "></i></a>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-lg-12 col-md-12 mb-5">
                                                <div className="blog-item">
                                                    <div className="blog-thumb">
                                                        <img src="images/blog/blog-4.jpg" alt="" className="img-fluid" />
                                                    </div>

                                                    <div className="blog-item-content">
                                                        <div className="blog-item-meta mb-3 mt-4">
                                                            <span className="text-muted text-capitalize mr-3"><i className="icofont-comment mr-2"></i>5 Comments</span>
                                                            <span className="text-black text-capitalize mr-3"><i className="icofont-calendar mr-1"></i> 28th January</span>
                                                        </div>
                                                        <h2 className="mt-3 mb-3"><a href="blog-single.html">Get Free consulation from our special surgeon and doctors</a></h2>

                                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad.</p>

                                                        <a href="blog-single.html" target="_blank" className="btn btn-main btn-icon btn-round-full">Read More <i className="icofont-simple-right ml-2  "></i></a>
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
                                                    <h6 className="my-2"><a href="#">Thoughtful living in los Angeles</a></h6>
                                                </div>

                                                <div className="py-2">
                                                    <span className="text-sm text-muted">03 Mar 2018</span>
                                                    <h6 className="my-2"><a href="#">Vivamus molestie gravida turpis.</a></h6>
                                                </div>

                                                <div className="py-2">
                                                    <span className="text-sm text-muted">03 Mar 2018</span>
                                                    <h6 className="my-2"><a href="#">Fusce lobortis lorem at ipsum semper sagittis</a></h6>
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

                                <div className="row mt-5">
                                    <div className="col-lg-8">
                                        <nav className="pagination py-2 d-inline-block">
                                            <div className="nav-links">
                                                <span aria-current="page" className="page-numbers current">1</span>
                                                <a className="page-numbers" href="#">2</a>
                                                <a className="page-numbers" href="#">3</a>
                                                <a className="page-numbers" href="#"><i className="icofont-thin-double-right"></i></a>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- footer Start --> */}
                        <footer className="footer section gray-bg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 mr-auto col-sm-6">
                                        <div className="widget mb-5 mb-lg-0">
                                            <div className="logo mb-4">
                                                <img src="images/logo.png" alt="" className="img-fluid" />
                                            </div>
                                            <p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>

                                            <ul className="list-inline footer-socials mt-4">
                                                <li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="icofont-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="icofont-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="icofont-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-2 col-md-6 col-sm-6">
                                        <div className="widget mb-5 mb-lg-0">
                                            <h4 className="text-capitalize mb-3">Department</h4>
                                            <div className="divider mb-4"></div>

                                            <ul className="list-unstyled footer-menu lh-35">
                                                <li><a href="#">Surgery </a></li>
                                                <li><a href="#">Womes Health</a></li>
                                                <li><a href="#">Radiology</a></li>
                                                <li><a href="#">Cardioc</a></li>
                                                <li><a href="#">Medicine</a></li>
                                            </ul>
                                        </div>
                                    </div> */}

                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="widget mb-5 mb-lg-0">
                                            <h4 className="text-capitalize mb-3">Support</h4>
                                            <div className="divider mb-4"></div>

                                            <ul className="list-unstyled footer-menu lh-35">
                                                <li><a href="#">Terms & Conditions</a></li>
                                                <li><a href="#">Privacy Policy</a></li>
                                                <li><a href="#">Company Support </a></li>
                                                <li><a href="#">FAQuestions</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="widget widget-contact mb-5 mb-lg-0">
                                            <h4 className="text-capitalize mb-3">Get in Touch</h4>
                                            <div className="divider mb-4"></div>

                                            <div className="footer-contact-block mb-4">
                                                <div className="icon d-flex align-items-center">
                                                    <i className="icofont-email mr-3"></i>
                                                    <span className="h6 mb-0">Support Available for 24/7</span>
                                                </div>
                                                <h4 className="mt-2"><a href="tel:+23-345-67890">Support@email.com</a></h4>
                                            </div>

                                            <div className="footer-contact-block">
                                                <div className="icon d-flex align-items-center">
                                                    <i className="icofont-support mr-3"></i>
                                                    <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
                                                </div>
                                                <h4 className="mt-2"><a href="tel:+23-345-67890">+23-456-6588</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer-btm py-4 mt-5">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-lg-6">
                                            <div className="copyright">
                                                &copy; Copyright Reserved to <span className="text-color">Magnitie</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                                                <form action="#" className="subscribe">
                                                    <input type="text" className="form-control" placeholder="Your Email address" />
                                                    <a href="#" className="btn btn-main-2 btn-round-full">Subscribe</a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <a className="backtop js-scroll-trigger" href="#top">
                                                <i className="icofont-long-arrow-up"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </>
                    )
}

                    export default Test