import React from 'react';

import Catalog from '../components/layout/Catalog';

const NotFound = () => {
    return (
        <section className="container-lg content">
            <div className="row">
                <Catalog />
                <div class="col-md-9">
                    <section class="delivery">
                        <h3 class="block__header">
                            Запрашиваемая Вами страница не существует!
                        </h3>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
