import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
        <section className="g-wrapper">
            <div className="g-container paddings innerWidth">
                <div className="flexColCenter inner-container">
                    <span className='primaryText'>Get Started With Our Services</span>
                    <span className='secondaryText'>Subscribe and find your dream residence</span>
                    <button className="button">
                        <a href='mailto:legend.eleve@gmail.com'>Subscribe</a>
                    </button>
                </div>
            </div>
        </section>

        <section className="f-wrapper">
            <div className="f-container paddings innerWidth flexCenter">
                <div className="flexColStart f-left">
                    <img src='./logo2.png' alt='logo' width={120} />
                    <span className='secondaryText'>
                        Our goal is to make people find they dream house <br />
                        Or find place to live
                    </span>
                </div>

                <div className="flexColStart f-right">
                    <span className='primaryText'>
                        More Information
                    </span>
                    <span className='secondaryText'>
                        Hay el massira 2, Casablanca
                    </span>
                    <div className="f-menu flexCenter">
                        <span>About Us</span>
                        <span>Services</span>
                        <span>Residences</span>
                        <span>Property</span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer