import React from 'react';

import CatalogAside from '../components/layout/CatalogAside';

const Contacts = () => {
    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="delivery">
                        <h3 className="block__header">Контакты</h3>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
