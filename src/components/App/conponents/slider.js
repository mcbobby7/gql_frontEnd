import React, { Component } from 'react';
import { Carousel } from 'antd';
import Styled from 'styled-components';

const SliderWrapper = Styled.div`
    height: 100%;
    width: 100%;
    background-color: #001529;
    padding-top: 20px;
    img {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        margin: auto;
        margin-top: 20px;
    }
    .text {
        color: white;
        margin: auto;
        font-size: 20px;
        padding-bottom: 50px;
        padding-left: 10px;
        padding-right: 10px;
    }
    @media (max-width: 760px) {
    .text {
        width: 80%
    }
  }
  @media (min-width: 769px) {
    .text {
        width: 50%;
    }
  }
  h3 {
      padding: 30px;
      color: #1890ff;
  }
`;
class Slider extends Component {
    render() {
        return (
            <SliderWrapper>
                <Carousel autoplay>
                    <div>
                        <img className="image" src="/home3.jpg" alt="logo" />
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit
                            </p>
                            <h3>Commisioner Of Technology Development</h3>
                        </div>
                    </div>
                    <div>
                        <img className="image" src="/home3.jpg" alt="logo" />
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit
                            </p>
                            <h3>Commisioner Of Technology Development</h3>
                        </div>
                    </div>
                    <div>
                        <img className="image" src="/home3.jpg" alt="logo" />
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit
                            </p>
                            <h3>Commisioner Of Technology Development</h3>
                        </div>
                    </div>
                    <div>
                        <img className="image" src="/home3.jpg" alt="logo" />
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit
                            </p>
                            <h3>Commisioner Of Technology Development</h3>
                        </div>
                    </div>
                </Carousel>
            </SliderWrapper>
        );
    }
}

export default Slider;
