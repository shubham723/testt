import Head from 'next/head';
import Image from 'next/image';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiFillCalendar } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ToggleNotification from '../../components/Reusable Components/ToogleNotification/ToogleNotification';
import { useRouter } from 'next/router';
import ReactHtmlParser from 'react-html-parser';
import Paging from '../../components/Reusable Components/Paging/Paging';
import { Oval } from 'react-loader-spinner';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [totalPage, setTotalPage] = useState();
    const [currentPage, setPage] = useState(1);
    const [trendingBlogs, setTrendingBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        getData();
        getCategory();
        getTrendingBlogs();
    }, []);

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
            let response = await axios.get(`http://3.88.73.172:3001/v1/blogs?page=${currentPage}&limit=10`);
            setBlogs(response.data.data);
            setTotalPage(response.data.meta.total_records);
            setLoading(false);
        } catch (error) {
            ToggleNotification('Error', error?.response?.data?.message);
            setLoading(false);
        }
    };

    const searchPage = async (number) => {
        try {
            setPage(number);
            let response = await axios.get(`http://3.88.73.172:3001/v1/blogs?page=${number}&limit=10`);
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

    const goToBlogDetails = (id, name) => {
        localStorage.setItem('id', id);
        if(typeof name[0]?.props?.children[0] === 'string') {
            router.push(`/${name[0]?.props?.children[0].replace(/\s/g, "-")}`);
        }
        else {
            router.push(`/${name[0]?.props?.children[0].props.children[0].replace(/\s/g, "-")}`);
        }
    };

    const goToBlogCategories = (id, name) => {
        localStorage.setItem('categoryId', id);
        router.push(`/blog/${name.replace(/\s/g, "-")}`);
    };

    return (
        <>
            <Head>
                <title>Maginite</title>
                {/* <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" /> */}
            </Head>

            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" style={{ zIndex: '100' }}>
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
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-5">
                                            <div className="blog-item">
                                                {
                                                    blogs && blogs.map((item, idx) => {
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

                                                                    <button className="btn btn-main btn-icon btn-round-full readMore cursor" onClick={() => goToBlogDetails(item._id, ReactHtmlParser(item.title))}>Read More <i className="icofont-simple-right ml-2"></i></button>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                                <div className="sidebar-widget latest-post mb-3">
                                    <h5>Popular Posts</h5>
                                    {
                                        trendingBlogs?.length > 0 && trendingBlogs.map(item => {
                                            return (
                                                <div className="py-2" key={item._id}>
                                                    <span className="text-sm text-muted">{item?.createdAt}</span>
                                                    <h6 className="my-2 cursor" onClick={() => goToBlogDetails(item._id, ReactHtmlParser(item.title))}>{ReactHtmlParser(item?.title)}</h6>
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
                                                    <li className="align-items-center cursor" onClick={() => goToBlogCategories(item._id, item.name)}>
                                                        <a>{item.name}</a>
                                                    </li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pagination">
                        <div className="col-lg-8">
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
        </>
    )
};

export default Blogs;
