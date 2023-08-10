import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerwidth flexCenter f-container">

            { /* left side */ }
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120} />

                <span className="secondaryText">
                    Our Vision is to make All People
                    <br />
                    Dwell in the Best Place
               </span>
            </div>

            { /* right side */ }

            <div className="flexColStart f-right">
              <span className="primaryText">Information</span>
              <span className="secondaryText">531-1-KA, WASA Road, Madinabag, Dhaka-1214</span>

              <div className="flexCenter f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Products</span>
                <span>About Us</span>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Footer