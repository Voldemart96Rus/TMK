import React from 'react';

import {Link} from 'react-router-dom';

import CatalogAside from '../components/layout/CatalogAside';

import './Category.css';

const Category = ({categoryItems, items, category}) => {
    const listItems = categoryItems[category].items;

    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside isActive={category} />
                <div className="col col-md-7 col-lg-9">
                    <h3 className="block__header">
                        {categoryItems[category].title}
                    </h3>
                    <div className="row">
                        {listItems.map((item, i) => (
                            <div className="col-md-4 p-2" key={i}>
                                <Link to={items[item].URL}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title catalog-category">
                                                {items[item].title}
                                            </h5>
                                        </div>
                                        <img
                                            src={items[item].img}
                                            className="card-img-bottom production-card__image catalog-category__img"
                                            alt={items[item].title}
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
