import React from 'react'
import HeartBeat from './HeartBeat'
// import "../Pulse.css"

const Hero = props => {
    return (
        <React.Fragment>
            <div className="hero-image">
                <div className="hero-text">
                    <div className='row'>
                        {/* <HeartBeat /> */}
                    </div>
                    {/* <div class="icon icon-heart"><span class="dot"></span><span class="line"></span></div> */}
                    <h1 style={{ fontSize: "75px" }}>I am Tori Stevulak
                    {/* <span className='smaller' style={{ fontSize: "40px" }}>B.S.N.</span> */}
                    </h1>
                    <h3 className=''>And I'm a New Graduate R.N  B.S.N</h3>
                    {/* <button>Hire me</button> */}
                </div>
            </div>
        </React.Fragment>
    )
}
export default Hero