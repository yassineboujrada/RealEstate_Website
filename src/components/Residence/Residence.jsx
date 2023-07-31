import React from 'react'
import './Residence.css'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import "swiper/css"
import data from "../../utils/slider.json"
import {slidersSettings} from "../../utils/common"

const Residence = () => {
  return (
    <section className='r-wrapper'>
        <div className='paddings innerWidth r-container'>
            <div className='r-head flexColStart'>
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>For you</span>
            </div>

            <Swiper {...slidersSettings}>
                {
                    data.map((item,index)=>(
                        <SwiperSlide key={index}>
                            <div className='flexColStart r-card'>
                                <img src={item.image} alt='residence' />
                                <span className='secondaryText r-price'>
                                    <span style={{color:"orange"}}>$</span><span>{item.price}</span>
                                </span>
                                <span className='primaryText'>{item.name}</span>
                                <span className='secondaryText'>{item.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residence
