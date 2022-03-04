import React from 'react'

const Footer = () => {
  return (
    <div className='text-center footer'>
      <div className="footerContent">
        <div className="footerHeadercontent">
          <h1>
            Maginite
          </h1>
        </div>
        <div className="footerText">
          <div className="t">
            <h4>About</h4>
          </div>
          <div className="t">
            <h4>Get in Touch</h4>
          </div>
          <div className="t">
            <h4>Career</h4>
          </div>
          <div className="t">
            <h4>Contact Us</h4>
          </div>
        </div>
        <div className="finalfooterline">
          <p>Call us at ****** &copy; by Maginite 2022</p>
        </div>
      </div>

      {/* <h1 className='mt-3 pt-4'> Maginite </h1>
      <div className='link mt-3'>
        <p className='mr-3'>
          About
        </p>
        <p> 
          Get in Touch
        </p>
        <p> 
          Career
        </p>
      </div>
      <section className='mt-3'>Powered By Blogger</section>
      <section>Call us at ****** &copy; by Maginite 2022</section> */}
    </div>
  )
}

export default Footer;