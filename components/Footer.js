import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = ({ settings }) => {
  return (
    <footer className="footer section gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mr-auto col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <div className="logo mb-4">
                <a href={settings?.facebook} target="_blank" rel="noopener noreferrer">
                  <span style={{ color: "#fff", marginRight: "20px" }}> <FiFacebook /> </span>
                </a>
                <a href={settings?.twitter} target="_blank" rel="noopener noreferrer">
                  <span style={{ color: "#fff", marginRight: "20px" }}> <FiTwitter /> </span>
                </a>
                <a href={settings?.instagram} target="_blank" rel="noopener noreferrer">
                  <span style={{ color: "#fff", marginRight: "20px" }}> <FiInstagram /> </span>
                </a>
                <a href={settings?.youtube} target="_blank" rel="noopener noreferrer">
                  <span style={{ color: "#fff" }}> <FiYoutube /> </span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <BsFillGeoAltFill /> {settings?.address}
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="widget widget-contact mb-5 mb-lg-0">
              <BsFillTelephoneFill /> {settings?.contact}
              <button className="ms-3 consultbtn">Get Consultation</button>
            </div>
          </div>
        </div>

        <div className="footer-btm py-4 mt-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="copyright">
                {/* &copy; Copyright Reserved to <span className="text-color">Magnitie</span> */}
                {settings?.copyRight}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                {/* <form action="#" className="subscribe">
                  <input type="text" className="form-control" placeholder="Your Email address" />
                  <a href="#" className="btn btn-main-2 btn-round-full subscribe-btn">Subscribe</a>
                </form> */}
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
  )
}

export default Footer;