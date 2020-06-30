import React from 'react';

import CatalogAside from '../components/layout/CatalogAside';

const Contacts = ({contacts}) => {
    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="delivery">
                        <h3 className="block__header">Контакты</h3>
                        <p>Мы находимся по адресу: {contacts.address}</p>
                        <p>
                            Email для связи с нами:{' '}
                            <a
                                href={'mailto:' + contacts.email}
                                className="tell_color"
                            >
                                {contacts.email}
                            </a>
                        </p>
                        <p>
                            Телефон для связи:{' '}
                            <a
                                href={'tel:' + contacts.tel}
                                className="tell_color"
                            >
                                {contacts.tel}
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
