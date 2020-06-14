import React from 'react';

import Catalog from '../components/layout/Catalog';

const Production = () => {
    return (
        <section className="container-lg content">
            <div className="row">
                <Catalog />
                <div className="col-md-9">
                    <section className="delivery">
                        <h3 className="block__header">Производство</h3>
                        <article>
                            <h4>
                                ИЗОЛИРУЕМ ТРУБЫ БЫСТРО И КАЧЕСТВЕЕНО НА НОВОМ
                                ОБОРУДОВАНИИ
                            </h4>
                            <p>
                                Полностью замкнутый производственный цикл. Все
                                процессы производства доведены до совершенства.
                            </p>
                            <p>
                                Мы можем поставить вам любое количество трубы в
                                ППУ изоляции и фасонных изделий.
                            </p>
                            <div className="row">
                                <div className="col-md-6 p-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                1. Производство стальной трубы
                                                (ТМК)
                                            </h5>
                                        </div>
                                        <img
                                            src="img/tmk-prod-md.jpg"
                                            className="card-img-bottom"
                                            alt="Производство стальной трубы (ТМК)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 p-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                2. Производство полиэтиленовой
                                                оболочки
                                            </h5>
                                        </div>
                                        <img
                                            src="img/tmk-prod-md.jpg"
                                            className="card-img-bottom"
                                            alt="Производство полиэтиленовой оболочки"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 p-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                3. Производство оцинкованной
                                                оболочки
                                            </h5>
                                        </div>
                                        <img
                                            src="img/zinc.jpe"
                                            className="card-img-bottom"
                                            alt="Производство оцинкованной оболочки"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 p-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                4. Производство фасонных изделий
                                            </h5>
                                        </div>
                                        <img
                                            src="img/tmk-prod-md.jpg"
                                            className="card-img-bottom"
                                            alt="Производство фасонных изделий"
                                        />
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Production;
