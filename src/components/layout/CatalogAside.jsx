import React from 'react';

import {Link} from 'react-router-dom';

import './CatalogAside.css';

const CatalogAside = ({isActive}) => {
    return (
        <div className="col-5 col-lg-3 catalog-wrapper">
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

                                <div className="hidden-menu">
                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-spo/"
                                        >
                                            Опоры скользящие СПО
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-homutovye-313-ts-008-011/"
                                        >
                                            Опоры скользящие хомутовые
                                            313.ТС-008.011
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-homutovye-fso-1/"
                                        >
                                            Опоры скользящие хомутовые ФСО 1
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-homutovye-fso-2/"
                                        >
                                            Опоры скользящие хомутовые ФСО 2
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-privarnye-opb1/"
                                        >
                                            Опоры скользящие приварные ОПБ1
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-privarnye-opb2/"
                                        >
                                            Опоры скользящие приварные ОПБ2
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-privarnye-opp1/"
                                        >
                                            Опоры скользящие приварные ОПП1
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-opp2/"
                                        >
                                            Опоры скользящие ОПП2
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-homutovye-oph1/"
                                        >
                                            Опоры скользящие хомутовые ОПХ1
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-homutovye-oph2/"
                                        >
                                            Опоры скользящие хомутовые ОПХ2
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-homutovye-oph3/"
                                        >
                                            Опоры скользящие хомутовые ОПХ3
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-t13/"
                                        >
                                            Опоры скользящие Т13
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-t14/"
                                        >
                                            Опоры скользящие Т14
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-ts-623/"
                                        >
                                            Опоры скользящие ТС-623
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-ts-624/"
                                        >
                                            Опоры скользящие ТС-624
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-ts-625/"
                                        >
                                            Опоры скользящие ТС-625
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-skolzyashchie-ts-631/"
                                        >
                                            Опоры скользящие ТС-631
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-nepodvizhnye-homutovye-t3/"
                                        >
                                            Опоры неподвижные хомутовые Т3
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-nepodvizhnye-lobovye-2-h-upornye-t4/"
                                        >
                                            Опоры неподвижные лобовые 2-х
                                            упорные Т4
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-nepodvizhnye-lobovaya-2-h-upornaya-ts-660/"
                                        >
                                            Опоры неподвижные лобовая 2-х
                                            упорная ТС-660
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-nepodvizhnye-homutovye-korpusnaya-ts-670/"
                                        >
                                            Опоры неподвижные хомутовые
                                            корпусные ТС-670
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opory-nepodvizhnye-homutovye-ts-659/"
                                        >
                                            Опоры неподвижные хомутовые ТС-659
                                        </a>
                                    </div>
                                </div>
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

                                <div className="hidden-menu">
                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/truba_v_ppu_izoljatsii_polietilenovaja_obolochka/"
                                        >
                                            Труба в ППУ изоляции полиэтиленовая
                                            оболочка
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/truba_v_ppu_izoljatsii_otsinkovannaja_obolochka/"
                                        >
                                            Труба в ППУ изоляции оцинкованная
                                            оболочка
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/truba_v_ppmi_izoljatsii/"
                                        >
                                            Труба в ППМИ изоляции
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/truba_v_ppmi_izoljatsii/"
                                        >
                                            Опора неподвижная в ППУ изоляции
                                            полиэтиленовая оболочка
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/truba_v_ppmi_izoljatsii/"
                                        >
                                            Опора неподвижная в ППУ изоляции
                                            оцинкованная оболочка
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/opora_skolzjaschaja_homutovaja_ppu/"
                                        >
                                            Опора скользящая хомутовая ППУ
                                        </a>
                                    </div>
                                </div>
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

                                <div className="hidden-menu">
                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/otvod_v_ppu_izoljatsii_polietilenovaja_obolochka/"
                                        >
                                            Отвод в ППУ изоляции полиэтиленовая
                                            оболочка
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/otvod_v_ppu_izoljatsii_otsinkovannaja_obolochka/"
                                        >
                                            Отвод в ППУ изоляции оцинкованная
                                            оболочка
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/otvod_v_ppu_izoljatsii_stekloplastik/"
                                        >
                                            Отвод в ППУ изоляции стеклопластик
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/otvod_v_ppu_izoljatsii_folga_armofol/"
                                        >
                                            Отвод в ППУ изоляции фольга Армофол
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/otvod_v_ppu_izoljatsii_folga_kashirovannaja/"
                                        >
                                            Отвод в ППУ изоляции фольга
                                            кашированная
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/kozhuh_iz_otsinkovannoj_stali_na_otvod/"
                                        >
                                            Кожух из оцинкованной стали на отвод
                                        </a>
                                    </div>
                                </div>
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

                                <div className="hidden-menu">
                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/skorlupa_ppu_bez_pokrytija/"
                                        >
                                            Скорлупа ППУ без покрытия
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/skorlupa_ppu_stekloplastik/"
                                        >
                                            Скорлупа ППУ стеклопластик
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/skorlupa_ppu_folga_armofol/"
                                        >
                                            Скорлупа ППУ фольга Армофол
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/skorlupa_ppu_folga_kashirovannaja/"
                                        >
                                            Скорлупа ППУ фольга кашированная
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/kozhuh_iz_otsinkovannoj_stali_na_skorlupu/"
                                        >
                                            Кожух из оцинкованной стали на
                                            скорлупу
                                        </a>
                                    </div>
                                </div>
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

                                <div className="hidden-menu">
                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/otvod_mineralovatnyj_bez_pokrytija/"
                                        >
                                            Отвод минераловатный без покрытия
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/otvod_mineralovatnyj_v_otsinkovannoj_obolochke/"
                                        >
                                            Отвод минераловатный в оцинкованной
                                            оболочке
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/otvod_mineralovatnyj_kashirovannyj_folgoj/"
                                        >
                                            Отвод минераловатный кашированный
                                            фольгой
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/otvod_mineralovatnyj_s_zaschitnym_pokrytiem_outside/"
                                        >
                                            Отвод минераловатный с защитным
                                            покрытием Outside
                                        </a>
                                    </div>
                                </div>
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

                                <div className="hidden-menu">
                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/trojnik_mineralovatnyj_bez_pokrytija/"
                                        >
                                            Тройник минераловатный без покрытия
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/trojnik_mineralovatnyj_v_otsinkovannoj_obolochke/"
                                        >
                                            Тройник минераловатный в
                                            оцинкованной оболочке
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/trojnik_mineralovatnyj_kashirovannyj_folgoj/"
                                        >
                                            Тройник минераловатный кашированный
                                            фольгой
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/trojnik_mineralovatnyj_s_zaschitnym_pokrytiem_outside/"
                                        >
                                            Тройник минераловатный с защитным
                                            покрытием Outside
                                        </a>
                                    </div>
                                </div>
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
                                </Link>

                                <div className="hidden-menu">
                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/tsilindr_mineralovatnyj_bez_pokrytija/"
                                        >
                                            Цилиндр минераловатный без покрытия
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/tsilindr_mineralovatnyj_v_otsinkovannoj_obolochke/"
                                        >
                                            Цилиндр минераловатный в
                                            оцинкованной оболочке
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/tsilindr_mineralovatnyj_kashirovannyj_folgoj/"
                                        >
                                            Цилиндр минераловатный кашированный
                                            фольгой
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/tsilindr_mineralovatnyj_s_zaschitnym_pokrytiem_outside/"
                                        >
                                            Цилиндр минераловатный с защитным
                                            покрытием Outside
                                        </a>
                                    </div>
                                </div>
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

                                <div className="hidden-menu">
                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/truba-pnd-dlya-kanalizacii/"
                                        >
                                            Труба ПНД для канализации
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/truba-pnd-v-buhtah/"
                                        >
                                            Труба ПНД в бухтах
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/truba-pnd-dlya-gaza/"
                                        >
                                            Труба ПНД для газа
                                        </a>
                                    </div>

                                    <div className="hidden-menu-item col-md-3 col-12">
                                        <a
                                            className="menu-item-heading"
                                            href="/truba-pnd-dlya-vody/"
                                        >
                                            Труба ПНД для воды
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogAside;
