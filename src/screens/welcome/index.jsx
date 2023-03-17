import React, { PureComponent, Fragment } from 'react';
import BotiqueCarousel from '../../app/components/botiquecarousel';
import './styles.css';
export default class Welcome extends PureComponent {
    render() {
        return (
            <div className="carouselcontainer">
                <div className="border scrollable">
                    <div className="border" >
                        <BotiqueCarousel></BotiqueCarousel>

                    </div>
                    {/* <div className="border" >
                        <BotiqueCarousel></BotiqueCarousel>

                    </div>
                    <div className="border" >
                        <BotiqueCarousel></BotiqueCarousel>

                    </div> */}


                </div>
            </div>
        )

    }
}