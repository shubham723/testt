import Header from '../../components/Header';
import Image from 'next/image';
import backgroundImage from '../../assets/Images/sports.jpg';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiFillCalendar } from 'react-icons/ai';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ToggleNotification from '../../components/Reusable Components/ToogleNotification/ToogleNotification';
import { Form } from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from "yup";

const Test1 = ({ id }) => {
    const [blog, setBlog] = useState({});
    const [comment] = useState({});

    useEffect(() => {
        blogData();
    }, []);

    const blogData = async () => {
        try {
            let response = await axios.get(`http://3.88.73.172:3001/v1/blogs/${id}`);
            setBlog(response.data.data);
        } catch (error) {
            ToggleNotification("Error", error?.response?.data?.message);
        }
    };

    const submitHandler = async (values) => {
        try {
            console.log(values);
            values.blogId = id;
            let response = await axios.post('http://3.88.73.172:3001/v1/comments', values);
            ToggleNotification("Success", response.data.message);
        } catch (error) {
            ToggleNotification("Error", error?.response?.data?.message);
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

    console.log(blog);
    return (
        <>
            <Header />

            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">News details</span>
                                <h1 className="text-capitalize mb-5 text-lg">Blog Single</h1>
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
                                <div className="col-lg-12 mb-5">
                                    <div className="single-blog-item">
                                        <Image src={`http://3.88.73.172:3001/${blog.blog_Picture}`} alt="Blog Picture" className="img-fluid" width={700} height={300} />

                                        <div className="blog-item-content mt-2">
                                            <div className="blog-item-meta mb-3">
                                                <span className="text-color-2 text-capitalize mr-3"><AiFillCalendar className="icofont-book-mark mr-2" /> Equipment</span>
                                                <span className="text-muted text-capitalize mr-3"><AiOutlineMessage className='ms-2' />5 Comments</span>
                                                <span className="text-black text-capitalize ms-3"><AiFillCalendar className="icofont-calendar" /> 28th January</span>
                                            </div>

                                            <h2 className="mb-4 text-md">{blog?.title}</h2>

                                            <p className="lead mb-4">{blog?.discription}</p>

                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Possimus natus, consectetur?Illum libero vel nihil nisi quae, voluptatem, sapiente necessitatibus distinctio voluptates, iusto qui.Laboriosam autem, nam voluptate in beatae.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quae iure officia nihil nemo, repudiandae itaque similique praesentium non aut nesciunt facere nulla, sequi sunt nam temporibus atque earum, ratione, labore.</p>

                                            <blockquote className="quote">
                                                A brand for a company is like a reputation for a person.You earn reputation by trying to do hard things well.
                                            </blockquote>


                                            <p className="lead mb-4 font-weight-normal text-black">The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule.We quickly learn to fear and thus automatically.</p> */}

                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Iste, rerum beatae repellat tenetur incidunt quisquam libero dolores laudantium.Nesciunt quis itaque quidem, voluptatem autem eos animi laborum iusto expedita sapiente.</p> */}

                                            <div className="mt-5 clearfix">
                                                <ul className="float-left list-inline tag-option">
                                                    <li className="list-inline-item"><a href="#">Advancher</a></li>
                                                    <li className="list-inline-item"><a href="#">Landscape</a></li>
                                                    <li className="list-inline-item"><a href="#">Travel</a></li>
                                                </ul>

                                                {/* <ul className ="float-right list-inline">
                                        <li className ="list-inline-item"> Share: </li>
                                        <li className ="list-inline-item"><a href="#" target="_blank"><i className ="icofont-facebook" aria-hidden="true"></i></a></li>
                                        <li className ="list-inline-item"><a href="#" target="_blank"><i className ="icofont-twitter" aria-hidden="true"></i></a></li>
                                        <li className ="list-inline-item"><a href="#" target="_blank"><i className ="icofont-pinterest" aria-hidden="true"></i></a></li>
                                        <li className ="list-inline-item"><a href="#" target="_blank"><i className ="icofont-linkedin" aria-hidden="true"></i></a></li>
                                        </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="comment-area mt-4 mb-5">
                                        <h4 className="mb-4">2 Comments on Healthy environment... </h4>
                                        <ul className="comment-tree list-unstyled">
                                            <li className="mb-5">
                                                <div className="comment-area-box">
                                                    <div className="comment-thumb float-left">
                                                        <Image alt="" src={backgroundImage} className="img-fluid" />
                                                    </div>

                                                    <div className="comment-info">
                                                        <h5 className="mb-1">John</h5>
                                                        <span>United Kingdom</span>
                                                        <span className="date-comm">| Posted April 7, 2019</span>
                                                    </div>
                                                    {/* <div className="comment-meta mt-2">
                                                        <a href="#"><i className="icofont-reply mr-2 text-muted"></i>Reply</a>
                                                    </div> */}

                                                    <div className="comment-content mt-3">
                                                        <p>Some consultants are employed indirectly by the client via a consultancy staffing company, a company that provides consultants on an agency basis. </p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="comment-area-box">
                                                    <div className="comment-thumb float-left">
                                                        <Image alt="" src={backgroundImage} className="img-fluid" />
                                                    </div>

                                                    <div className="comment-info">
                                                        <h5 className="mb-1">Philip W</h5>
                                                        <span>United Kingdom</span>
                                                        <span className="date-comm">| Posted June 7, 2019</span>
                                                    </div>

                                                    {/* <div className="comment-meta mt-2">
                                                        <a href="#"><i className="icofont-reply mr-2 text-muted"></i>Reply </a>
                                                    </div> */}

                                                    <div className="comment-content mt-3">
                                                        <p>Some consultants are employed indirectly by the client via a consultancy staffing company, a company that provides consultants on an agency basis. </p>
                                                    </div>
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
                                                    <input className="form-control" type="text" name="name" id="name" placeholder="Name:"
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
                                                    <input className="form-control" type="email" name="email" id="email" placeholder="Email:"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.touched.email && formik.errors.email && (
                                                        <div className="error">{formik.errors.email}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <textarea className="form-control mt-3 mb-4" name="comment" id="comment" cols="30" rows="5" placeholder="Comment"
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
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
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
                </div>
            </section>

            {/* <!-- footer Start --> */}
            <Footer />
        </>
    )
};

export async function getServerSideProps(context) {
    return {
        props: {
            id: context.query.id
        }, // will be passed to the page component as props
    }
}

export default Test1;