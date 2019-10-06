import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Plan extends Component {
    render() {
        return (
            <div id="plan_banner">
                <h2 id="plan">
                    <b> Communities </b>
                </h2>
                <div id="flex">
                    <Slide left>
                        <div className="card">
                            <div id="num">
                                <h2 style={{ color: '#333E51' }}>GOOGLE</h2>
                            </div>
                            <div id="inner">
                                <h4 style={{ color: 'white' }}>
                                    <span className="yellow">Google</span> Developers Community
                                </h4>
                                <br />
                                <h5 style={{ color: 'white' }}>IMSU</h5>
                                <h5 style={{ color: 'white' }}>Poly Nekede</h5>
                                <h5 style={{ color: 'white' }}>FUTO</h5>
                            </div>
                        </div>
                        <div className="card">
                            <div id="num">
                                <h2 style={{ color: '#333E51' }}>FACEBOOK</h2>
                            </div>
                            <div id="inner">
                                <h4 style={{ color: 'white' }}>
                                    <span className="yellow">Facebook</span> Developers Circles
                                </h4>
                                <br />
                                <h5 style={{ color: 'white' }}>IMSU</h5>
                                <h5 style={{ color: 'white' }}>Poly Nekede</h5>
                                <h5 style={{ color: 'white' }}>FUTO</h5>
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="card">
                            <div id="num">
                                <h2 style={{ color: '#333E51' }}>WORDPRESS</h2>
                            </div>
                            <div id="inner">
                                <h4 style={{ color: 'white' }}>
                                    <span className="yellow">Wordpress</span> Community
                                </h4>
                                <br />
                                <h5 style={{ color: 'white' }}>IMSU</h5>
                                <h5 style={{ color: 'white' }}>Poly Nekede</h5>
                                <h5 style={{ color: 'white' }}>FUTO</h5>
                            </div>
                        </div>
                        <div className="card">
                            <div id="num">
                                <h2 style={{ color: '#333E51' }}>GOOGLE</h2>
                            </div>
                            <div id="inner">
                                <h4 style={{ color: 'white' }}>
                                    <span className="yellow">Google</span> Developers Community
                                </h4>
                                <br />
                                <h5 style={{ color: 'white' }}>IMSU</h5>
                                <h5 style={{ color: 'white' }}>Poly Nekede</h5>
                                <h5 style={{ color: 'white' }}>FUTO</h5>
                            </div>
                        </div>
                    </Slide>
                </div>
                <style jsx>{`
                    .card {
                        height: 300px;
                        width: 250px;
                        background-color: #001529;
                        color: white;
                        border-bottom-left-radius: 30px;
                        border-bottom-right-radius: 30px;
                        margin-bottom: 20px;
                    }
                    #num {
                        background-color: #1890ff;
                        width: 200px;
                        color: #333e51;
                        height: 70px;
                        text-align: center;
                        padding-top: 10px;
                        margin-bottom: 10px;
                        margin-top: 14px;
                    }
                    #inner {
                        padding-left: 30px;
                    }
                    .yellow {
                        color: #1890ff;
                    }
                    #flex {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-around;
                    }
                    #plan {
                        text-align: center;
                        color: #333e51;
                        margin: 30px;
                    }
                    #plan_banner {
                        background-color: #f4f3ea;
                        margin: 10px;
                        clear: all;
                    }
                `}</style>
            </div>
        );
    }
}

export default Plan;
