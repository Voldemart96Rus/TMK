import React from 'react';

import './Navbar.css';

const Navbar = () => {
    const current = window.location.pathname;
    console.info(current === '/');
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container d-flex align-items-center">
                <a className="navbar-brand d-flex" href="/#!">
                    <img
                        className="navbar-brand__logo"
                        src="favicon.svg"
                        alt="Лого"
                    />
                    <div>
                        ППУ ТМК
                        <br />
                        &laquo;Промышленная компания&raquo;
                    </div>
                </a>
                <ul className="navbar-nav">
                    <li
                        className={
                            current === '/' ? 'nav-item active' : 'nav-item'
                        }
                    >
                        <a className="nav-link" href="/">
                            О компании
                        </a>
                    </li>
                    <li
                        className={
                            current === '/delivery'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <a className="nav-link" href="/delivery">
                            Доставка
                        </a>
                    </li>
                    <li
                        className={
                            current === '/payment'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <a className="nav-link" href="/payment">
                            Оплата
                        </a>
                    </li>
                    <li
                        className={
                            current === '/active'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <a className="nav-link" href="/job">
                            Вакансии
                        </a>
                    </li>
                    <li
                        className={
                            current === '/quality'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <a className="nav-link" href="/quality">
                            Качество
                        </a>
                    </li>
                    <li
                        className={
                            current === '/production'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <a className="nav-link" href="/production">
                            Производство
                        </a>
                    </li>
                    <li
                        className={
                            current === '/contacts'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <a className="nav-link" href="/contacts">
                            Контакты
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
