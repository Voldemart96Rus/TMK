import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import CatalogAside from '../components/layout/CatalogAside';
import CompanyDescription from '../components/CompanyDescription';

function Home() {
    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="about">
                        <h3 className="block__header">О компании</h3>
                        <Carousel indicators={false}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image of_contain carousel__small-image"
                                    src="/img/carousel-1.png"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel-2.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel-3.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel-4.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel-5.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel-6.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel-7.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/bg.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/tmk-prod-lg.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/plant.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                        </Carousel>
                        <CompanyDescription />
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Home;
