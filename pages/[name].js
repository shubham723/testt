import Image from 'next/image';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiFillCalendar } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactHtmlParser from 'react-html-parser';
import { useRouter } from 'next/router';
import ToggleNotification from '../components/Reusable Components/ToogleNotification/ToogleNotification';
import Head from 'next/head';
import { Oval } from 'react-loader-spinner';

const BlogDetails = ({ name }) => {
    const [blog, setBlog] = useState({});
    const [categories, setCategories] = useState([]);
    const [comment] = useState({});
    const [trendingBlogs, setTrendingBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setBlog(localStorage.getItem('id'));
        blogData();
        getCategory();
        getTrendingBlogs();
    }, [name]);

    const getCategory = async () => {
        try {
            let response = await axios.get('http://3.88.73.172:3001/v1/categories');
            setCategories(response.data.data);
        } catch (error) {
            ToggleNotification('Error', error?.response?.data?.message);
        }
    };

    const blogData = async () => {
        try {
            let response = await axios.get(`http://3.88.73.172:3001/v1/blogs/${localStorage.getItem('id')}`);
            setBlog(response.data.data);
            setLoading(false);
        } catch (error) {
            ToggleNotification("Error", error?.response?.data?.message);
            setLoading(false);
        }
    };

    const submitHandler = async (values, { resetForm }) => {
        try {
            values.blogId = localStorage.getItem('id');
            let response = await axios.post(`http://3.88.73.172:3001/v1/comments/${localStorage.getItem('id')}`, values);
            await blogData();
            ToggleNotification("Success", response.data.message);
            resetForm();
        } catch (error) {
            ToggleNotification("Error", error?.response?.data?.message);
            resetForm();
        }
    };

    const validationSchema = Yup.object({
        name: Yup.string().trim().required("Name is required"),
        comment: Yup.string().required("Comment is required"),
        email: Yup.string()
            .email("Must be Valid Email")
            .trim()
            .required("Email is required"),
    });

    const formik = useFormik({
        initialValues: comment,
        onSubmit: submitHandler,
        validationSchema: validationSchema,
        validateOnMount: true,
    });

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
        router.push(`/${name[0]?.props?.children[0].replace(/\s/g, "")}`);
    };

    const goToBlogCategories = (id, name) => {
        localStorage.setItem('categoryId', id);
        router.push(`/blog/${name.replace(/\s/g, "")}`);
    };

    return (
        <>
            <Head>
                <title> Blogs - {name} </title>
            </Head>
            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" style={{ zIndex: '100' }}>
                            <div className="block text-center">
                                <span className="text-white">BLog Details</span>
                                <h1 className="text-capitalize mb-5 text-lg">Blog Details</h1>
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
                                        <div className="col-lg-12 mb-5">
                                            <div className="single-blog-item">
                                                <Image src={`http://3.88.73.172:3001/${blog.blog_Picture}`} alt="Blog Picture" className="img-fluid" width={700} height={500} />

                                                <div className="blog-item-content mt-2">
                                                    <div className="blog-item-meta mb-3">
                                                        <span className="text-color-2 text-capitalize mr-3"><AiFillCalendar className="icofont-book-mark mr-2" /> {blog?.categoryId?.name} </span>
                                                        <span className="text-muted text-capitalize mr-3"><AiOutlineMessage className='ms-2' />{blog?.comments?.length} Comments</span>
                                                    </div>

                                                    <h2 className="mb-4 text-md">{ReactHtmlParser(blog?.title)}</h2>

                                                    <p className="lead mb-4">{ReactHtmlParser(blog?.discription)}</p>
                                                    <div className="mt-5 clearfix">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="comment-area mt-4 mb-5">
                                                <h4 className="mb-4">{blog?.comments?.length} Comments </h4>
                                                <ul className="comment-tree list-unstyled">
                                                    <li className="mb-5">
                                                        <div className="comment-area-box">
                                                            <div className="comment-thumb float-left">
                                                            </div>
                                                            {
                                                                blog?.comments?.length > 0 && blog?.comments?.map(item => {
                                                                    return (
                                                                        <div key={item._id}>
                                                                            <div className="comment-info">
                                                                                <h5 className="mb-1">{item?.name}</h5>
                                                                                <span className="date-comm"> Posted April 7, 2019</span>
                                                                            </div>
                                                                            <div className="comment-content mt-3">
                                                                                <p> {item?.comment} </p>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <Form className="comment-form my-5" id="comment-form" onSubmit={formik.handleSubmit}>
                                                <h4 className="mb-4">Write a comment</h4>
                                                <div className="row">

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input className="form-control" type="text" name="name" value={formik.values.name || ''} id="name" placeholder="Name:"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            {formik.touched.name && formik.errors.name && (
                                                                <div className="error">{formik.errors.name}</div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input className="form-control" type="email" name="email" value={formik.values.email || ''} id="email" placeholder="Email:"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            {formik.touched.email && formik.errors.email && (
                                                                <div className="error">{formik.errors.email}</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                <textarea className="form-control mt-3 mb-4" name="comment" id="comment" value={formik.values.comment || ''} cols="30" rows="5" placeholder="Comment"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                >
                                                </textarea>
                                                {formik.touched.comment && formik.errors.comment && (
                                                    <div className="error">{formik.errors.comment}</div>
                                                )}
                                                <button className="btn btn-main-2 btn-round-full submit-btn" type="submit"> Submit Message </button>
                                            </Form>
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
                </div>
            </section>
        </>
    )
};

export async function getServerSideProps(context) {
    return {
        props: {
            name: context.query.name
        }, // will be passed to the page component as props
    }
}

export default BlogDetails;
