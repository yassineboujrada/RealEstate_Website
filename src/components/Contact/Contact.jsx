import React from 'react'
import './contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {BiSolidMessageRounded} from 'react-icons/bi'

const Contact = () => {
  return (
    <span className="c-wrapper">
        <div className='paddings innerWidth c-container flexCenter'>
            <div className='c-left flexColStart'>
                <span className='orangeText'>
                    Our Contact 
                </span>
                <span className='primaryText'>
                    For More Information
                </span>

                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call Us</span>
                                    <span className="secondaryText">+91 1234567890</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat With Us</span>
                                    <span className="secondaryText">+91 1234567890</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>

                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BiSolidMessageRounded size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Message Us</span>
                                <span className="secondaryText">+91 1234567890</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Message Now</div>
                    </div>
                    
                </div>
            </div>

            <div className='c-right'>
                <div className='image-container'>
                    <img src='./contact.jpg' alt='contact' />
                </div>
            </div>
        </div>
    </span>
  )
}

export default Contact