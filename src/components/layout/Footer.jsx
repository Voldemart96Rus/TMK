import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-3">
                        <div className="hr-bt">
                            <h5>О НАС</h5>
                        </div>
                        <ul className="footer__nav">
                            <li className="nav-item">
                                <a className="footer__nav-link" href="/">
                                    О компании
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="footer__nav-link"
                                    href="/delivery.html"
                                >
                                    Доставка
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="footer__nav-link"
                                    href="/payment.html"
                                >
                                    Оплата
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="footer__nav-link"
                                    href="/job.html"
                                >
                                    Вакансии
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="footer__nav-link"
                                    href="/quality.html"
                                >
                                    Качество
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="footer__nav-link"
                                    href="/production.html"
                                >
                                    Производство
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="footer__nav-link"
                                    href="/contacts.html"
                                >
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3">
                        <div className="hr-bt">
                            <h5>КОНТАКТЫ</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hr-top">
                <div className="container">
                    <div className="copyright py-4">
                        © 2020 Все права защищены.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
