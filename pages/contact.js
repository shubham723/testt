import Header from "../components/Header";
import Footer from "../components/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import ToggleNotification from "../components/Reusable Components/ToogleNotification/ToogleNotification";

const Contact = () => {
    const [contact] = useState({
        name: '',
        message: '',
        email: '',
        queryTopic: '',
        phone_number: ''
    });
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

    const submitHandler = async (values, { resetForm }) => {
        try {
            let response = await axios.post('http://3.88.73.172:3001/v1/contact', values);
            ToggleNotification("Success", response.data.message);
            resetForm();
        } catch (error) {
            ToggleNotification("Error", error?.response?.data?.message);
            resetForm();
        }
    };

    const validationSchema = Yup.object({
        name: Yup.string().trim().required("Name is required"),
        message: Yup.string().required("Message is required"),
        queryTopic: Yup.string().trim().required("Topic is required"),
        email: Yup.string()
            .email("Must be Valid Email")
            .trim()
            .required("Email is required"),
        phone_number: Yup.number().required("Mobile Number is required"),
    });

    const formik = useFormik({
        initialValues: contact,
        onSubmit: submitHandler,
        validationSchema: validationSchema,
        validateOnMount: true,
    });

    return (
        <>
            {/* <Header /> */}
            <div id="top">
                <section className="page-title bg-1">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block text-center">
                                    <span className="text-white">Contact Us</span>
                                    <h1 className="text-capitalize mb-5 text-lg">Get in Touch</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section contact-info pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="contact-block mb-4 mb-lg-0">
                                    <i className="icofont-live-support"></i>
                                    <h5>Call Us</h5>
                                    {settings?.contact}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="contact-block mb-4 mb-lg-0">
                                    <i className="icofont-support-faq"></i>
                                    <h5>Email Us</h5>
                                    {settings?.email}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="contact-block mb-4 mb-lg-0">
                                    <i className="icofont-location-pin"></i>
                                    <h5>Location</h5>
                                    {settings?.address}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-form-wrap section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center">
                                    <h2 className="text-md mb-2">Contact us</h2>
                                    <div className="divider mx-auto my-4"></div>
                                    <p className="mb-5">Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <Form id="contact-form" className="contact__form" onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="name" id="name" type="text" value={formik.values.name || ''} className="form-control" placeholder="Your Full Name"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.touched.name && formik.errors.name && (
                                                    <div className="error">{formik.errors.name}</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="email" id="email" type="email" value={formik.values.email || ''} className="form-control" placeholder="Your Email Address"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.touched.email && formik.errors.email && (
                                                    <div className="error">{formik.errors.email}</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="queryTopic" id="queryTopic" value={formik.values.queryTopic || ''}  type="text" className="form-control" placeholder="Your Query Topic"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.touched.queryTopic && formik.errors.queryTopic && (
                                                    <div className="error">{formik.errors.queryTopic}</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="phone_number" id="phone_number" type="number" value={formik.values.phone_number || ''}  className="form-control" placeholder="Your Phone Number"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.touched.phone_number && formik.errors.phone_number && (
                                                    <div className="error">{formik.errors.phone_number}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group-2 mb-4">
                                        <textarea name="message" id="message" className="form-control" rows="8"  value={formik.values.message || ''} placeholder="Your Message"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}>
                                        </textarea>
                                        {formik.touched.message && formik.errors.message && (
                                            <div className="error">{formik.errors.message}</div>
                                        )}
                                    </div>

                                    <div className="text-center">
                                        <button className="btn btn-main btn-round-full readMore" type="submit"> Send Message </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <Footer /> */}
        </>
    )
};

export default Contact;