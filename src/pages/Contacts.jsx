import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

import CatalogAside from '../components/layout/CatalogAside';

const Contacts = ({contacts}) => {
    const mapData = {
        center: [56.818405, 60.616743],
        zoom: 16.2,
        behaviors: ['default', 'scrollZoom'],
        controls: [],
        placemarkProperties: {
            iconCaption: 'ППУТМК «Промышленная компания»',
        },
    };

    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="delivery">
                        <h3 className="block__header">Контакты</h3>
                        <div className="row">
                            <div className="col-lg-6 pb-4 pb-lg-0">
                                <YMaps>
                                    <Map width={'100%'} defaultState={mapData}>
                                        <Placemark
                                            geometry={mapData.center}
                                            properties={
                                                mapData.placemarkProperties
                                            }
                                        />
                                    </Map>
                                </YMaps>
                            </div>
                            <div className="col-lg-6 px-lg-3">
                                <p>
                                    Мы находимся по адресу: {contacts.address}
                                </p>
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
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
