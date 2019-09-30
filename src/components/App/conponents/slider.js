import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const BodyWrapper = styled.div`
    margin: 0;
    text-align: center;
    img {
        height: 50%;
    }
`;

class Slider extends Component {
    render() {
        return (
            <BodyWrapper>
                <Carousel dynamicHeight="true" autoPlay="true" infiniteLoop="true">
                    <div>
                        <img src="/slider1.jpg" alt="logo" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="/slider2.jpg" alt="logo" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="/slider3.jpg" alt="logo" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src="/slider4.jpg" alt="logo" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </BodyWrapper>
        );
    }
}

export default Slider;
