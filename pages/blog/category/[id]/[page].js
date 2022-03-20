import Head from 'next/head';
// import backgroundImage from '../../assets/Images/sports.jpg';
import Image from 'next/image';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiFillCalendar } from 'react-icons/ai';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ReactHtmlParser from 'react-html-parser';
import ToggleNotification from '../../../../components/Reusable Components/ToogleNotification/ToogleNotification';
import Paging from '../../../../components/Reusable Components/Paging/Paging';

const Test = ({ id, page }) => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [totalPage, setTotalPage] = useState();
    const [currentPage, setPage] = useState();
    const [trendingBlogs, setTrendingBlogs] = useState([]);
    const router = useRouter();

    useEffect(() => {
        getCategory();
        getTrendingBlogs();
    }, []);

    useEffect(() => {
        setPage(page);
        getData();
    }, [id]);

    const getCategory = async () => {
        try {
            let response = await axios.get('http://3.88.73.172:3001/v1/categories');
            setCategories(response.data.data);
        } catch (error) {
            ToggleNotification('Error', error?.response?.data?.message);
        }
    };

    const getData = async () => {
        try {
            console.log(page)
            let response = await axios.get(`http://3.88.73.172:3001/v1/blogs?page=${page}&limit=10&categoryId=${id}`);
            setBlogs(response.data.data);
            setTotalPage(response.data.meta.total_records);
        } catch (error) {
            ToggleNotification('Error', error?.response?.data?.message);
        }
    };

    const searchPage = async (number) => {
        try {
            setPage(number);
            let response = await axios.get(`http://3.88.73.172:3001/v1/blogs?page=${number}&limit=10&categoryId=${id}`);
            setBlogs(response.data.data);
        } catch (error) {
            ToggleNotification('Error', error?.response?.data?.message);
        }
    };

    const getTrendingBlogs = async () => {
        try {
            let response = await axios.get('http://3.88.73.172:3001/v1/blogs?page=1&limit=3&isTreandings=true');
            setTrendingBlogs(response.data.data);
        } catch (error) {
            ToggleNotification('Error', error?.response?.data?.message);
        }
    };
    console.log(blogs)
    console.log(currentPage);

    return (
        <>
            <Head>

                <title>Maginite</title>


                {/* <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" /> */}
            </Head>

            {/* <Header /> */}
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
                                        {
                                            blogs?.length > 0 ? blogs.map((item, idx) => {
                                                return (
                                                    <div key={idx} className='mt-3'>
                                                        <div className="blog-thumb">
                                                            <Image src={`http://3.88.73.172:3001/${item.blog_Picture}`} width={700} height={600} alt="Blog Pic" className="img-fluid" />
                                                        </div>
                                                        <div className="blog-item-content">
                                                            <div className="blog-item-meta mb-3 mt-4">
                                                                <span className="text-muted text-capitalize mr-3"><AiOutlineMessage className='ms-2' />{item?.comments?.length} Comments</span>
                                                                <span className="text-black text-capitalize ms-3"><AiFillCalendar className="icofont-calendar" /> {item.createdAt} </span>
                                                            </div>

                                                            <h2 className="mt-3 mb-3 head">{ReactHtmlParser(item?.title)}</h2>

                                                            <p className="mb-4">{ReactHtmlParser(item?.discription)}</p>

                                                            <button className="btn btn-main btn-icon btn-round-full readMore cursor" onClick={() => router.push(`/blog/detail/${item._id}`)}>Read More <i className="icofont-simple-right ml-2"></i></button>
                                                        </div>
                                                    </div>
                                                )
                                            }) : <>
                                                <h2 className='text-center'>No Blogs Found</h2>
                                            </>
                                        }
                                    </div>
                                </div>

                                {/* <div className="col-lg-12 col-md-12 mb-5">
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
                                </div> */}


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

                                    {
                                        trendingBlogs?.length > 0 && trendingBlogs.map(item => {
                                            return (
                                                <div className="py-2" key={item._id}>
                                                    <span className="text-sm text-muted">{item?.createdAt}</span>
                                                    <h6 className="my-2 cursor" onClick={() => router.push(`/blog/detail/${item._id}`)}>{ReactHtmlParser(item?.title)}</h6>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <div className="sidebar-widget category mb-3">
                                    <h5 className="mb-4">Categories</h5>
                                    {
                                        categories?.length > 0 && categories.map(item => {
                                            return (
                                                <ul className="list-unstyled" key={item._id}>
                                                    <li className="align-items-center cursor" onClick={() => router.push(`/blog/category/${item._id}/1`)}>
                                                        <a href="#">{item.name}</a>
                                                        {/* <span>(14)</span> */}
                                                    </li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>


                                {/* <div className="sidebar-widget tags mb-3">
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
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pagination">
                        <div className="col-lg-8">
                            {/* <nav className="pagination py-2 d-inline-block">
                                <div className="nav-links">
                                    <span aria-current="page" className="page-numbers current">1</span>
                                    <a className="page-numbers" href="#">2</a>
                                    <a className="page-numbers" href="#">3</a>
                                </div>
                            </nav> */}
                            <Paging
                                status={200}
                                page={currentPage}
                                type="user"
                                searchPage={searchPage}
                                totalCount={totalPage}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- footer Start --> */}
            {/* <Footer /> */}
        </>
    )
};

export async function getServerSideProps(context) {
    // console.log(context)
    return {
        props: {
            id: context.query.id,
            page: context.query.page
        }
    }
}

export default Test