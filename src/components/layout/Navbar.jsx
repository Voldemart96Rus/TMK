import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    const [currentURL, setCurrentURL] = useState(window.location.pathname);
    useEffect(() => {
        setCurrentURL(window.location.pathname);
    }, []);
    const onclickMenu = (ev) => {
        ev.preventDefault();
        const menu = document.querySelector('.dropdown-menu');
        menu.classList.toggle('menu-mobile_visible');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container d-flex align-items-center navbar-inner">
                <Link to="/" className="navbar-brand d-flex">
                    <img
                        className="navbar-brand__logo"
                        src="/favicon.svg"
                        alt="Лого"
                    />
                    <div className="company-description">
                        ППУ ТМК
                        <br />
                        &laquo;Промышленная компания&raquo;
                    </div>
                </Link>
                <h2 className="catalog-mobile">Каталог</h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    role="img"
                    focusable="false"
                    className="menu-mobile"
                    onClick={onclickMenu}
                >
                    <title>Меню</title>
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M4 7h22M4 15h22M4 23h22"
                    ></path>
                </svg>
                <ul className="dropdown-menu nav-mobile">
                    <li
                        className={
                            currentURL === '/'
                                ? 'dropdown-item active'
                                : 'dropdown-item'
                        }
                    >
                        <Link className="nav-link" to="/">
                            О&nbsp;компании
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/delivery'
                                ? 'dropdown-item active'
                                : 'dropdown-item'
                        }
                    >
                        <Link className="nav-link" to="/delivery">
                            Доставка
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/payment'
                                ? 'dropdown-item active'
                                : 'dropdown-item'
                        }
                    >
                        <Link className="nav-link" to="/payment">
                            Оплата
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/job'
                                ? 'dropdown-item active'
                                : 'dropdown-item'
                        }
                    >
                        <Link className="nav-link" to="/job">
                            Вакансии
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/quality'
                                ? 'dropdown-item active'
                                : 'dropdown-item'
                        }
                    >
                        <Link className="nav-link" to="/quality">
                            Качество
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/production'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/production">
                            Производство
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/contacts'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/contacts">
                            Контакты
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li
                        className={
                            currentURL === '/' ? 'nav-item active' : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/">
                            О&nbsp;компании
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/delivery'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/delivery">
                            Доставка
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/payment'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/payment">
                            Оплата
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/job'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/job">
                            Вакансии
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/quality'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/quality">
                            Качество
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/production'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/production">
                            Производство
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/contacts'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/contacts">
                            Контакты
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
