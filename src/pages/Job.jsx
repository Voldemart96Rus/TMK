import React from 'react';

import Catalog from '../components/layout/Catalog';

const Job = () => {
    return (
        <section className="container-lg content">
            <div className="row">
                <Catalog />
                <div className="col-md-9">
                    <section className="block">
                        <h3 className="block__header">Вакансии</h3>
                        <h4>ППУ ТМК "Промышленная компания" требуется:</h4>
                        <ul>
                            <li>- оператор заливочной машины</li>
                            <li>- менеджер по продажам</li>
                            <li>- специалист по логистике</li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Job;
