import "./home.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

export default function Home() {
    return (
        <section className="home-wrapper">
            <div className="paddings innerWidth home-container flexCenter">
                <div className="flexColStart home-left">
                    <div className="home-title">
                        <div className="orange-circle" />
                        <h1>Discover <br />Most Suitable<br /> Property For You</h1>
                    </div>

                    <div className="flexColStart home-describe">
                        <span>Find your dream home</span>
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>

                    <div className="flexCenter home-stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Premium Products</span>
                        </div>

                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={1000} end={1298} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customers</span>
                        </div>
                    </div>
                </div>

                <div className="home-right flexCenter">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="home" />
                    </div>
                </div>
            </div>
        </section>
    )
}