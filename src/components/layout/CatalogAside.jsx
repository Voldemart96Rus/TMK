import React from 'react';

import {Link} from 'react-router-dom';

import './CatalogAside.css';

const CatalogAside = ({isActive}) => {
    return (
        <div className="col-5 col-lg-3 catalog-wrapper p-0 pr-2">
            <div className="left-category-menu hidden-sm hidden-xs">
                <div className="left-product-cat">
                    <div className="category-heading">
                        <Link to="/catalog">
                            <h2 className="catalog-description">Каталог</h2>
                        </Link>
                    </div>
                    <div className="category-menu-list">
                        <ul className="catalog">
                            <li
                                className={
                                    isActive === 'Opory_truboprovodov'
                                        ? 'category-menu category-menu_active'
                                        : 'category-menu'
                                }
                            >
                                <Link
                                    to="/category/Opory_truboprovodov"
                                    className="catalog-links"
                                >
                                    Опоры трубопроводов
                                </Link>
                            </li>
                            <li
                                className={
                                    isActive === 'Truby_i_opory_v_izolyatsii'
                                        ? 'category-menu category-menu_active'
                                        : 'category-menu'
                                }
                            >
                                <Link
                                    to="/category/Truby_i_opory_v_izolyatsii"
                                    className="catalog-links"
                                >
                                    Трубы и опоры в изоляции
                                </Link>
                            </li>
                            <li
                                className={
                                    isActive === 'Otvody_v_izolyatsii'
                                        ? 'category-menu category-menu_active'
                                        : 'category-menu'
                                }
                            >
                                <Link
                                    to="/category/Otvody_v_izolyatsii"
                                    className="catalog-links"
                                >
                                    Отводы в изоляции
                                </Link>
                            </li>
                            <li
                                className={
                                    isActive === 'skorlupa_ppu'
                                        ? 'category-menu category-menu_active'
                                        : 'category-menu'
                                }
                            >
                                <Link
                                    to="/category/skorlupa_ppu"
                                    className="catalog-links"
                                >
                                    Скорлупа ППУ
                                </Link>
                            </li>
                            <li
                                className={
                                    isActive === 'Otvod_mineralovatnyy'
                                        ? 'category-menu category-menu_active'
                                        : 'category-menu'
                                }
                            >
                                <Link
                                    to="/category/Otvod_mineralovatnyy"
                                    className="catalog-links"
                                >
                                    Отвод минераловатный
                                </Link>
                            </li>
                            <li
                                className={
                                    isActive === 'Troynik_mineralovatnyy'
                                        ? 'category-menu category-menu_active'
                                        : 'category-menu'
                                }
                            >
                                <Link
                                    to="/category/Troynik_mineralovatnyy"
                                    className="catalog-links"
                                >
                                    Тройник минераловатный
                                </Link>
                            </li>
                            <li
                                className={
                                    isActive === 'Tsilindr_mineralovatnyy'
                                        ? 'category-menu category-menu_active'
                                        : 'category-menu'
                                }
                            >
                                <Link
                                    to="/category/Tsilindr_mineralovatnyy"
                                    className="catalog-links"
                                >
                                    Цилиндр минераловатный
                                </Link>{' '}
                            </li>
                            <li
                                className={
                                    isActive === 'Truba_PND'
                                        ? 'category-menu category-menu_active'
                                        : 'category-menu'
                                }
                            >
                                <Link
                                    to="/category/Truba_PND"
                                    className="catalog-links"
                                >
                                    Труба ПНД
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogAside;
