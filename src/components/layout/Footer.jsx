import React from 'react';
import {Link} from 'react-router-dom';

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
                                <Link className="footer__nav-link" to="/">
                                    О компании
                                </Link>
                            </li>
                            <li className="nav-item nav-item__catalog">
                                <Link
                                    className="footer__nav-link"
                                    to="/catalog"
                                >
                                    Каталог
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="footer__nav-link"
                                    to="/delivery"
                                >
                                    Доставка
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="footer__nav-link"
                                    to="/payment"
                                >
                                    Оплата
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="footer__nav-link" to="/job">
                                    Вакансии
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="footer__nav-link"
                                    to="/quality"
                                >
                                    Качество
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="footer__nav-link"
                                    to="/production"
                                >
                                    Производство
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="footer__nav-link"
                                    to="/contacts"
                                >
                                    Контакты
                                </Link>
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
