import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ToggleNotification from "../components/Reusable Components/ToogleNotification/ToogleNotification";
import ReactHtmlParser from 'react-html-parser';

const About = () => {
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

    return (
        <div>
            <Head>
                <title>Maginite - About Us</title>
            </Head>
            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" style={{ zIndex: '100' }}>
                            <div className="block text-center">
                                <span className="text-white">About Us</span>
                                <h1 className="text-capitalize mb-5 text-lg">About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section team">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h2 className="mb-4">About Us</h2>
                                <div className="divider mx-auto my-4"></div>
                                <h5>
                                    {ReactHtmlParser(settings?.about_us_heading)}
                                </h5>
                            </div>
                        </div>
                        <div>
                            <p>
                                {ReactHtmlParser(settings?.about_us_detail)}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section team">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h2 className="mb-4">Contact Us for more details</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p>Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
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
                    </div>
                </div>
            </section>
        </div>
    )
};

export default About;
