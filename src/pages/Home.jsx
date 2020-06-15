import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import Catalog from '../components/layout/Catalog';

function Home() {
    return (
        <section className="content">
            <div className="row">
                <Catalog />
                <div className="col col-md-7 col-lg-9">
                    <section className="about">
                        <h3 className="block__header">О компании</h3>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image of_contain pb-5"
                                    src="/img/carousel-1.png"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image pb-5"
                                    src="/img/carousel-2.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image pb-5"
                                    src="/img/carousel-3.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image pb-5"
                                    src="/img/carousel-4.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image pb-5"
                                    src="/img/carousel-5.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                        </Carousel>
                        {/* <img
                            className="block__image"
                            src="img/home.webp"
                            alt="Трубы"
                        /> */}
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Home;
