import React from 'react';

import {Link} from 'react-router-dom';

import CatalogAside from '../components/layout/CatalogAside';

import './Category.css';

const Category = ({categoryItems, category}) => {
    const items = categoryItems[category];

    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <h3 className="block__header">{items.title}</h3>
                    <div className="row">
                        {items.items.map((item, i) => (
                            <div className="col-md-4 p-2" key={i}>
                                <Link to="#!">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title catalog-category">
                                                {item.title}
                                            </h5>
                                        </div>
                                        <img
                                            src={item.img}
                                            className="card-img-bottom production-card__image catalog-category__img"
                                            alt={item.title}
                                        />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;
