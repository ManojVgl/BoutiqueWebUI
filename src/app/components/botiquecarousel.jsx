import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './header.css';

import one from '../assets/images/1.jpg';
import two from '../assets/images/2.jpg';
import three from '../assets/images/3.jpg';
import four from '../assets/images/4.jpg';


export default class BotiqueCarousel extends Component {
    render() {
        return (
            <Carousel
            autoPlay
            centerMode
            dynamicHeight
            centerSlidePercentage={50}
            infiniteLoop
            interval={1000}
            emulateTouch
            >
                <div>
                    <img src={one} alt='boutique' className='imgresponsive' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img  src={two} alt='boutique'  className='imgresponsive' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img  src={three} alt='boutique'  className='imgresponsive' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img  src={four} alt='boutique'  className='imgresponsive' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
};