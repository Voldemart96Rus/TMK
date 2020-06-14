import React from 'react';

import Catalog from '../components/layout/Catalog';

function Home() {
    return (
        <section className="container-lg content">
            <div className="row">
                <Catalog />
                <div className="col-md-9">
                    <section className="about">
                        <h3 className="block__header">О компании</h3>
                        <img
                            className="block__image"
                            src="img/pipes.jpg"
                            alt="Трубы"
                        />
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Home;
