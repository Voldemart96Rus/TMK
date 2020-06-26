const initialState = {
    category: [
        {
            id: 0,
            title: 'Опоры трубопроводов',
            img:
                '/img/catalog/Опоры трубопроводов/Опора_скользящая_хомутовая_313.ТС-008.011.png',
            URL: '/category/Opory_truboprovodov',
        },
        {
            id: 1,
            title: 'Трубы и опоры в изоляции',
            img: '/img/ppu-prod.00_jpg_srz',
            URL: '/category/Truby_i_opory_v_izolyatsii',
        },
        {
            id: 2,
            title: 'Отводы в изоляции',
            img: '/img/catalog/Отводы В Изоляции/ppu-zinc-shaped.png',
            URL: '/category/Otvody_v_izolyatsii',
        },
        {
            id: 3,
            title: 'Скорлупа ППУ',
            img: '/img/catalog/Скорлупа ППУ/Скорлупа_ППУ.jpg',
            URL: '/category/skorlupa_ppu',
        },
        {
            id: 4,
            title: 'Отвод минераловатный',
            img:
                '/img/catalog/Отвод Минераловатный/Отвод_минераловатный_в_оцинкованной_оболочке.jpg',
            URL: '/category/Otvod_mineralovatnyy',
        },
        {
            id: 5,
            title: 'Тройник минераловатный',
            img:
                '/img/catalog/Тройник Минераловатный/Тройник_минераловатный_в_оцинкованной_оболочке.jpg',
            URL: '/category/Troynik_mineralovatnyy',
        },
        {
            id: 6,
            title: 'Цилиндр минераловатный',
            img: '/img/catalog/Цилиндр Минераловатный/350х350.png',
            URL: '/category/Tsilindr_mineralovatnyy',
        },
        {
            id: 7,
            title: 'Труба ПНД',
            img: '/img/catalog/Труба ПНД/ПНД_для_канализации.png',
            URL: '/category/Truba_PND',
        },
    ],
    categoryItems: {
        Opory_truboprovodov: {
            title: 'Опоры трубопроводов',
            items: [
                'Opory_skolzyashchiye_SPO',
                'Opory_skolzyashchiye_khomutovyye_313.TS-008.011',
                'Opory_skolzyashchiye_khomutovyye_FSO_1',
                'Opory_skolzyashchiye_khomutovyye_FSO_2',
                'Opory_skolzyashchiye_privarnyye_OPB1',
                'Opory_skolzyashchiye_privarnyye_OPB2',
                'Opory_skolzyashchiye_privarnyye_OPP1',
                'Opory_skolzyashchiye_OPP2',
                'Opory_skolzyashchiye_khomutovyye_OPKH1',
                'Opory_skolzyashchiye_khomutovyye_OPKH2',
                'Opory_skolzyashchiye_khomutovyye_OPKH3',
                'Opory_skolzyashchiye_T13',
                'Opory_skolzyashchiye_T14',
                'Opory_skolzyashchiye_TS-623',
                'Opory_skolzyashchiye_TS-624',
                'Opory_skolzyashchiye_TS-625',
                'Opory_skolzyashchiye_TS-631',
                'Opory_nepodvizhnyye_khomutovyye_T3',
                'Opory_nepodvizhnyye_lobovyye_2-kh_upornyye_T4',
                'Opory_nepodvizhnyye_lobovaya_2-kh_upornaya_TS-660',
                'Opory_nepodvizhnyye_khomutovyye_korpusnyye_TS-670',
                'Opory_nepodvizhnyye_khomutovyye_TS-659',
            ],
        },
        Truby_i_opory_v_izolyatsii: {
            title: 'Трубы и опоры в изоляции',
            items: [
                'Truba_v_PPU_izolyatsii_polietilenovaya_obolochka',
                'Truba_v_PPU_izolyatsii_otsinkovannaya_obolochka',
                'Truba_v_PPMI_izolyatsii',
                'Opora_skolzyashchaya_khomutovaya_PPU',
                'Opora_nepodvizhnaja_v_ppu_izoljatsii_polietilenovaja_obolochka',
                'Opora_nepodvizhnaja_v_ppu_izoljatsii_otsinkovannaja_obolochka',
            ],
        },
        Otvody_v_izolyatsii: {
            title: 'Отводы в изоляции',
            items: [
                'Otvod_v_PPU_izolyatsii_polietilenovaya_obolochka',
                'Otvod_v_PPU_izolyatsii_otsinkovannaya_obolochka',
                'Otvod_v_PPU_izolyatsii_stekloplastik',
                'Otvod_v_PPU_izolyatsii_folga_Armofol',
                'Otvod_v_PPU_izolyatsii_folga_kashirovannaya',
                'Kozhukh_iz_otsinkovannoy_stali_na_otvod',
            ],
        },
        skorlupa_ppu: {
            title: 'Скорлупа ППУ',
            items: [
                'Skorlupa_PPU_bez_pokrytiya',
                'Skorlupa_PPU_stekloplastik',
                'Skorlupa_PPU_folga_Armofol',
                'Skorlupa_PPU_folga_kashirovannaya',
                'Kozhukh_iz_otsinkovannoy_stali_na_skorlupu',
            ],
        },
        Otvod_mineralovatnyy: {
            title: 'Отвод минераловатный',
            items: [
                'Otvod_mineralovatnyy_bez_pokrytiya',
                'Otvod_mineralovatnyy_v_otsinkovannoy_obolochke',
                'Otvod_mineralovatnyy_kashirovannyy_folgoy',
                'Otvod_mineralovatnyy_s_zashchitnym_pokrytiyem_Outside',
            ],
        },
        Troynik_mineralovatnyy: {
            title: 'Тройник минераловатный',
            items: [
                'Troynik_mineralovatnyy_bez_pokrytiya',
                'Troynik_mineralovatnyy_v_otsinkovannoy_obolochke',
                'Troynik_mineralovatnyy_kashirovannyy_folgoy',
                'Troynik_mineralovatnyy_s_zashchitnym_pokrytiyem_Outside',
            ],
        },
        Tsilindr_mineralovatnyy: {
            title: 'Цилиндр минераловатный',
            items: [
                'Tsilindr_mineralovatnyy_bez_pokrytiya',
                'Tsilindr_mineralovatnyy_v_otsinkovannoy_obolochke',
                'Tsilindr_mineralovatnyy_kashirovannyy_folgoy',
                'Tsilindr_mineralovatnyy_s_zashchitnym_pokrytiyem_Outside',
            ],
        },
        Truba_PND: {
            title: 'Труба ПНД',
            items: [
                'Truba_PND_dlya_kanalizatsii',
                'Truba_PND_v_bukhtakh',
                'Truba_PND_dlya_gaza',
                'Truba_PND_dlya_vody',
            ],
        },
    },
    items: {
        Opory_skolzyashchiye_SPO: {
            title: 'Опоры скользящие СПО',
            img: '/img/catalog/Опоры трубопроводов/Опора_скользящая_СПО.png',
            URL: '/product/Opory_skolzyashchiye_SPO',
            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        426,
                        530,
                        630,
                        720,
                        820,
                        1020,
                        1200,
                        1420,
                    ],
                },
                {
                    name: 'Диаметр оболочки, мм',
                    values: [
                        125,
                        140,
                        160,
                        180,
                        225,
                        250,
                        315,
                        400,
                        450,
                        560,
                        710,
                        800,
                        900,
                        1000,
                        1020,
                        1400,
                        1600,
                    ],
                },
            ],
        },
        'Opory_skolzyashchiye_khomutovyye_313.TS-008.011': {
            title: 'Опоры скользящие хомутовые 313.ТС-008.011',
            img:
                '/img/catalog/Опоры трубопроводов/Опора_скользящая_хомутовая_313.ТС-008.011.png',
            URL: '/product/Opory_skolzyashchiye_khomutovyye_313.TS-008.011',
            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        25,
                        32,
                        40,
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        325,
                        377,
                        426,
                    ],
                },
                {
                    name: 'Диаметр оболочки, мм',
                    values: [
                        110,
                        125,
                        140,
                        160,
                        180,
                        225,
                        250,
                        315,
                        450,
                        500,
                        560,
                    ],
                },
            ],
        },
        Opory_skolzyashchiye_khomutovyye_FSO_1: {
            title: 'Опоры скользящие хомутовые ФСО 1',
            img: '/img/catalog/Опоры трубопроводов/Опоры_скользящие_ФСО_1.png',
            URL: '/product/Opory_skolzyashchiye_khomutovyye_FSO_1',
            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        426,
                        530,
                        630,
                    ],
                },
                {
                    name: 'Диаметр футляра, мм',
                    values: [325, 377, 426, 530, 630, 720, 920, 1020],
                },
            ],
        },
        Opory_skolzyashchiye_khomutovyye_FSO_2: {
            title: 'Опоры скользящие хомутовые ФСО 2',
            img: '/img/catalog/Опоры трубопроводов/Опоры_скользящие_ФСО_2.png',
            URL: '/product/Opory_skolzyashchiye_khomutovyye_FSO_2',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        426,
                        530,
                        630,
                    ],
                },
                {
                    name: 'Диаметр футляра, мм',
                    values: [325, 377, 426, 530, 630, 720, 920, 1020],
                },
            ],
        },
        Opory_skolzyashchiye_privarnyye_OPB1: {
            title: 'Опоры скользящие приварные ОПБ1',
            img: '/img/catalog/Опоры трубопроводов/Опоры_подвижные_ОПБ_1.png',
            URL: '/product/Opory_skolzyashchiye_privarnyye_OPB1',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        21,
                        30,
                        26,
                        80,
                        32,
                        42,
                        30,
                        48,
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        377,
                        426,
                        530,
                    ],
                },
            ],
        },
        Opory_skolzyashchiye_privarnyye_OPB2: {
            title: 'Опоры скользящие приварные ОПБ2',
            img: '/img/catalog/Опоры трубопроводов/Опоры_подвижные_ОПБ_2.png',
            URL: '/product/Opory_skolzyashchiye_privarnyye_OPB2',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        21,
                        30,
                        26,
                        80,
                        32,
                        42,
                        30,
                        48,
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        377,
                        426,
                        530,
                    ],
                },
            ],
        },
        Opory_skolzyashchiye_privarnyye_OPP1: {
            title: 'Опоры скользящие приварные ОПП1',
            img: '/img/catalog/Опоры трубопроводов/Опоры_подвижные_ОПП_1.png',
            URL: '/product/Opory_skolzyashchiye_privarnyye_OPP1',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [21, 30, 26, 80, 32, 42, 30, 48],
                },
            ],
        },
        Opory_skolzyashchiye_OPP2: {
            title: 'Опоры скользящие ОПП2',
            img: '/img/catalog/Опоры трубопроводов/Опоры_подвижные_ОПП_2.png',
            URL: '/product/Opory_skolzyashchiye_OPP2',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        377,
                        426,
                        530,
                    ],
                },
                {
                    name: 'Высота, мм',
                    values: [100],
                },
            ],
        },
        Opory_skolzyashchiye_khomutovyye_OPKH1: {
            title: 'Опоры скользящие хомутовые ОПХ1',
            img: '/img/catalog/Опоры трубопроводов/Опоры_подвижные_ОПХ_1.png',
            URL: '/product/Opory_skolzyashchiye_khomutovyye_OPKH1',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [21, 30, 26, 80, 32, 42, 30, 48],
                },
                {
                    name: 'Высота, мм',
                    values: [70],
                },
            ],
        },
        Opory_skolzyashchiye_khomutovyye_OPKH2: {
            title: 'Опоры скользящие хомутовые ОПХ2',
            img: '/img/catalog/Опоры трубопроводов/Опоры_подвижные_ОПХ_2.png',
            URL: '/product/Opory_skolzyashchiye_khomutovyye_OPKH2',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        377,
                        426,
                        530,
                    ],
                },
                {
                    name: 'Высота, мм',
                    values: [100],
                },
            ],
        },
        Opory_skolzyashchiye_khomutovyye_OPKH3: {
            title: 'Опоры скользящие хомутовые ОПХ3',
            img: '/img/catalog/Опоры трубопроводов/Опоры_подвижные_ОПХ_3.png',
            URL: '/product/Opory_skolzyashchiye_khomutovyye_OPKH3',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        377,
                        426,
                        530,
                    ],
                },

                {
                    name: 'Высота, мм',
                    values: [100],
                },
            ],
        },
        Opory_skolzyashchiye_T13: {
            title: 'Опоры скользящие Т13',
            img: '/img/catalog/Опоры трубопроводов/Опоры_подвижные_Т13.png',
            URL: '/product/Opory_skolzyashchiye_T13',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        32,
                        45,
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        377,
                        426,
                        530,
                    ],
                },

                {
                    name: 'Высота, мм',
                    values: [100],
                },
            ],
        },
        Opory_skolzyashchiye_T14: {
            title: 'Опоры скользящие Т14',
            img: '/img/catalog/Опоры трубопроводов/Опоры_подвижные_Т14.png',
            URL: '/product/Opory_skolzyashchiye_T14',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        32,
                        45,
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        377,
                        426,
                        530,
                    ],
                },

                {
                    name: 'Высота, мм',
                    values: [100],
                },
            ],
        },
        'Opory_skolzyashchiye_TS-623': {
            title: 'Опоры скользящие ТС-623',
            img: '/img/catalog/Опоры трубопроводов/Опоры_подвижные_ТС-623.png',
            URL: '/product/Opory_skolzyashchiye_TS-623',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [32, 45, 57, 76, 89, 108, 133, 159],
                },

                {
                    name: 'Высота, мм',
                    values: [100],
                },
            ],
        },
        'Opory_skolzyashchiye_TS-624': {
            title: 'Опоры скользящие ТС-624',
            img: '/img/catalog/Опоры трубопроводов/Опоры_подвижные_ТС-624.png',
            URL: '/product/Opory_skolzyashchiye_TS-624',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [219, 273, 325, 377, 426, 530],
                },

                {
                    name: 'Высота, мм',
                    values: [100],
                },
            ],
        },
        'Opory_skolzyashchiye_TS-625': {
            title: 'Опоры скользящие ТС-625',
            img: '/img/catalog/Опоры трубопроводов/Опоры_подвижные_ТС-625.png',
            URL: '/product/Opory_skolzyashchiye_TS-625',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [32, 38, 45, 57, 76, 89],
                },

                {
                    name: 'Высота, мм',
                    values: [113, 117, 122, 126, 140, 148],
                },
            ],
        },
        'Opory_skolzyashchiye_TS-631': {
            title: 'Опоры скользящие ТС-631',
            img: '/img/catalog/Опоры трубопроводов/Опоры_подвижные_ТС-631.png',
            URL: '/product/Opory_skolzyashchiye_TS-631',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [108, 133, 159, 219, 273, 325, 377, 426, 530, 630],
                },

                {
                    name: 'Высота, мм',
                    values: [311, 321, 336, 360, 413, 477, 532, 596, 516, 616],
                },
            ],
        },
        Opory_nepodvizhnyye_khomutovyye_T3: {
            title: 'Опоры неподвижные хомутовые Т3',
            img: '/img/catalog/Опоры трубопроводов/Опоры_неподвижные_Т3.png',
            URL: '/product/Opory_nepodvizhnyye_khomutovyye_T3',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [32, 38, 45, 57, 76, 89, 108, 133, 159, 219],
                },
            ],
        },
        'Opory_nepodvizhnyye_lobovyye_2-kh_upornyye_T4': {
            title: 'Опоры неподвижные лобовые 2-х упорные Т4',
            img: '/img/catalog/Опоры трубопроводов/Опоры_неподвижные_Т4.png',
            URL: '/product/Opory_nepodvizhnyye_lobovyye_2-kh_upornyye_T4',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [108, 133, 159, 219, 273, 325, 377, 426, 530, 630],
                },
            ],
        },
        'Opory_nepodvizhnyye_lobovaya_2-kh_upornaya_TS-660': {
            title: 'Опоры неподвижные лобовая 2-х упорная ТС-660',
            img: '/img/catalog/Опоры трубопроводов/Опоры_неподвижные_Т4.png',
            URL: '/product/Opory_nepodvizhnyye_lobovaya_2-kh_upornaya_TS-660',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        32,
                        38,
                        45,
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        377,
                        426,
                        530,
                        630,
                    ],
                },
            ],
        },
        'Opory_nepodvizhnyye_khomutovyye_korpusnyye_TS-670': {
            title: 'Опоры неподвижные хомутовые корпусные ТС-670',
            img:
                '/img/catalog/Опоры трубопроводов/Опоры_неподвижные_ТС-670.png',
            URL: '/product/Opory_nepodvizhnyye_khomutovyye_korpusnyye_TS-670',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [57, 76, 89, 108, 133, 159, 219, 273, 325, 377],
                },
            ],
        },
        'Opory_nepodvizhnyye_khomutovyye_TS-659': {
            title: 'Опоры неподвижные хомутовые ТС-659',
            img: '/img/catalog/Опоры трубопроводов/Опоры_неподвижные_ТС659.png',
            URL: '/product/Opory_nepodvizhnyye_khomutovyye_TS-659',

            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [32, 38, 45, 57, 76, 89, 108, 133, 159, 219],
                },
            ],
        },
        Truba_v_PPU_izolyatsii_polietilenovaya_obolochka: {
            title: 'Труба в ППУ изоляции полиэтиленовая оболочка',
            img:
                '/img/catalog/Трубы И Опоры В Изоляции/изоляция_труб_ППУ_полиэтилен.jpg',
            URL: '/product/Truba_v_PPU_izolyatsii_polietilenovaya_obolochka',
            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        40,
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        426,
                        530,
                        630,
                        720,
                        820,
                    ],
                },
                {
                    name: 'Толщина стенки трубы, мм',
                    values: [
                        3.5,
                        3,
                        3,
                        3.5,
                        3.5,
                        4,
                        4,
                        4.5,
                        6,
                        6,
                        6,
                        7,
                        7,
                        8,
                        10,
                        10,
                    ],
                },
                {
                    name: 'Диаметр оболочки, мм',
                    values: [
                        125,
                        140,
                        160,
                        180,
                        200,
                        225,
                        250,
                        315,
                        400,
                        450,
                        560,
                        710,
                        800,
                        900,
                        975,
                    ],
                },
            ],
        },
        Truba_v_PPU_izolyatsii_otsinkovannaya_obolochka: {
            title: 'Труба в ППУ изоляции оцинкованная оболочка',
            img:
                '/img/catalog/Трубы И Опоры В Изоляции/изоляция_труб_ППУ_оцинк.jpg',
            URL: '/product/Truba_v_PPU_izolyatsii_otsinkovannaya_obolochka',
            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        40,
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        426,
                        530,
                        630,
                        720,
                        820,
                    ],
                },
                {
                    name: 'Толщина стенки трубы, мм',
                    values: [3, 3.5, 4, 4.5, 6, 7, 8, 10],
                },
                {
                    name: 'Диаметр оболочки, мм',
                    values: [
                        125,
                        140,
                        160,
                        180,
                        200,
                        225,
                        250,
                        315,
                        400,
                        450,
                        560,
                        710,
                        800,
                        900,
                        975,
                    ],
                },
            ],
        },
        Truba_v_PPMI_izolyatsii: {
            title: 'Труба в ППМИ изоляции',
            img: '/img/catalog/Трубы И Опоры В Изоляции/изоляция_труб_ППМИ.jpg',
            URL: '/product/Truba_v_PPMI_izolyatsii',
            options: [
                {
                    name: 'Наружный диаметр трубы, мм',
                    values: [
                        25,
                        32,
                        40,
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        377,
                        426,
                        530,
                        630,
                        720,
                        820,
                    ],
                },
                {
                    name: 'Толщина стенки трубы, мм',
                    values: [3, 3.2, 3.5, 4, 6, 8],
                },
                {
                    name: 'Диаметр оболочки, мм',
                    values: [
                        121,
                        150,
                        180,
                        205,
                        257,
                        309,
                        359,
                        412,
                        462,
                        514,
                        650,
                        750,
                        860,
                        960,
                    ],
                },
            ],
        },
        Opora_skolzyashchaya_khomutovaya_PPU: {
            title: 'Опора скользящая хомутовая ППУ',
            img:
                '/img/catalog/Трубы И Опоры В Изоляции/Опора_скользящая_хомутовая.jpg',
            URL: '/product/Opora_skolzyashchaya_khomutovaya_PPU',
            options: [
                {
                    name: 'Наружный диаметр опоры, мм',
                    value: [
                        40,
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        426,
                        530,
                        630,
                        720,
                        820,
                    ],
                },
                {
                    name: 'Толщина стенки опоры, мм',
                    value: [3, 3.4, 4, 4.5, 6, 7, 8, 10],
                },
                {
                    name: 'Диаметр оболочки, мм',
                    values: [
                        125,
                        140,
                        160,
                        180,
                        200,
                        225,
                        250,
                        315,
                        400,
                        450,
                        560,
                        710,
                        800,
                        900,
                        975,
                    ],
                },
            ],
        },
        Opora_nepodvizhnaja_v_ppu_izoljatsii_polietilenovaja_obolochka: {
            title: 'Опора неподвижная в ППУ изоляции полиэтиленовая',
            img:
                '/img/catalog/Трубы И Опоры В Изоляции/Опора_неподвижная_в_ППУ_изоляции_полиэтиленовая_оболочка.jpg',
            URL:
                '/product/Opora_nepodvizhnaja_v_ppu_izoljatsii_polietilenovaja_obolochka',

            options: [
                {
                    name: 'Наружный диаметр опоры, мм',
                    values: [
                        40,
                        57,
                        76,
                        89,
                        108,
                        133,
                        159,
                        219,
                        273,
                        325,
                        426,
                        530,
                        630,
                        720,
                        820,
                    ],
                },
                {
                    name: 'Толщина стенки опоры, мм',
                    values: [3, 3.5, 4, 4.5, 6, 7, 8, 10],
                },
                {
                    name: 'Диаметр оболочки, мм',
                    values: [
                        125,
                        140,
                        160,
                        180,
                        200,
                        225,
                        250,
                        315,
                        400,
                        450,
                        560,
                        710,
                        800,
                        900,
                        975,
                    ],
                },
            ],
        },
        Opora_nepodvizhnaja_v_ppu_izoljatsii_otsinkovannaja_obolochka: {
            title: 'Опора неподвижная в ППУ изоляции оцинкованная оболочка',
            img:
                '/img/catalog/Трубы И Опоры В Изоляции/Опора_неподвижная_в_ППУ_изоляции_оцинкованная_оболочка.jpg',
            URL:
                '/product/Opora_nepodvizhnaja_v_ppu_izoljatsii_otsinkovannaja_obolochka',
        },
        Otvod_v_PPU_izolyatsii_polietilenovaya_obolochka: {
            title: 'Отвод в ППУ изоляции полиэтиленовая оболочка',
            img:
                '/img/catalog/Отводы В Изоляции/отвод_в_ППУ_изоляции_полиэтилен.jpg',
            URL: '/product/Otvod_v_PPU_izolyatsii_polietilenovaya_obolochka',
        },
        Otvod_v_PPU_izolyatsii_otsinkovannaya_obolochka: {
            title: 'Отвод в ППУ изоляции оцинкованная оболочка',
            img:
                '/img/catalog/Отводы В Изоляции/отвод_в_ППУ_изоляции_оцинк.jpg',
            URL: '/product/Otvod_v_PPU_izolyatsii_otsinkovannaya_obolochka',
        },
        Otvod_v_PPU_izolyatsii_stekloplastik: {
            title: 'Отвод в ППУ изоляции стеклопластик',
            img:
                '/img/catalog/Отводы В Изоляции/отвод_в_ППУ_изоляции_стеклопластик.jpg',
            URL: '/product/Otvod_v_PPU_izolyatsii_stekloplastik',
        },
        Otvod_v_PPU_izolyatsii_folga_Armofol: {
            title: 'Отвод в ППУ изоляции фольга Армофол',
            img:
                '/img/catalog/Отводы В Изоляции/Отвод_в_ППУ_изоляции_фольга_Армофол.jpg',
            URL: '/product/Otvod_v_PPU_izolyatsii_folga_Armofol',
        },
        Otvod_v_PPU_izolyatsii_folga_kashirovannaya: {
            title: 'Отвод в ППУ изоляции фольга кашированная',
            img:
                '/img/catalog/Отводы В Изоляции/Отвод_в_ППУ_изоляции_фольга_кашированная.jpg',
            URL: '/product/Otvod_v_PPU_izolyatsii_folga_kashirovannaya',
        },
        Kozhukh_iz_otsinkovannoy_stali_na_otvod: {
            title: 'Кожух из оцинкованной стали на отвод',
            img:
                '/img/catalog/Отводы В Изоляции/Кожух_из_оцинкованной_стали_на_отвод.jpg',
            URL: '/product/Kozhukh_iz_otsinkovannoy_stali_na_otvod',
        },
        Skorlupa_PPU_bez_pokrytiya: {
            title: 'Скорлупа ППУ без покрытия',
            img: '/img/catalog/Скорлупа ППУ/Скорлупа_ППУ.jpg',
            URL: '/product/Skorlupa_PPU_bez_pokrytiya',
        },
        Skorlupa_PPU_stekloplastik: {
            title: 'Скорлупа ППУ стеклопластик',
            img: '/img/catalog/Скорлупа ППУ/Скорлупа_ППУ_стеклопластик.jpg',
            URL: '/product/Skorlupa_PPU_stekloplastik',
        },
        Skorlupa_PPU_folga_Armofol: {
            title: 'Скорлупа ППУ фольга Армофол',
            img: '/img/catalog/Скорлупа ППУ/Скорлупа_ППУ_фольга_Армофол.jpg',
            URL: '/product/Skorlupa_PPU_folga_Armofol',
        },
        Skorlupa_PPU_folga_kashirovannaya: {
            title: 'Скорлупа ППУ фольга кашированная',
            img:
                '/img/catalog/Скорлупа ППУ/Скорлупа_ППУ_фольга_кашированная.jpg',
            URL: '/product/Skorlupa_PPU_folga_kashirovannaya',
        },
        Kozhukh_iz_otsinkovannoy_stali_na_skorlupu: {
            title: 'Кожух из оцинкованной стали на скорлупу',
            img:
                '/img/catalog/Скорлупа ППУ/Кожух_из_оцинкованной_стали_на_скорлупу.jpg',
            URL: '/product/Kozhukh_iz_otsinkovannoy_stali_na_skorlupu',
        },
        Otvod_mineralovatnyy_bez_pokrytiya: {
            title: 'Отвод минераловатный без покрытия',
            img: '/img/catalog/Отвод Минераловатный/Отвод_минераловатный.jpg',
            URL: '/product/Otvod_mineralovatnyy_bez_pokrytiya',
        },
        Otvod_mineralovatnyy_v_otsinkovannoy_obolochke: {
            title: 'Отвод минераловатный в оцинкованной оболочке',
            img:
                '/img/catalog/Отвод Минераловатный/Отвод_минераловатный_в_оцинкованной_оболочке.jpg',
            URL: '/product/Otvod_mineralovatnyy_v_otsinkovannoy_obolochke',
        },
        Otvod_mineralovatnyy_kashirovannyy_folgoy: {
            title: 'Отвод минераловатный кашированный фольгой',
            img:
                '/img/catalog/Отвод Минераловатный/Отвод_минераловатный_кашированный_фольгой.jpg',
            URL: '/product/Otvod_mineralovatnyy_kashirovannyy_folgoy',
        },
        Otvod_mineralovatnyy_s_zashchitnym_pokrytiyem_Outside: {
            title: 'Отвод минераловатный с защитным покрытием Outside',
            img:
                '/img/catalog/Отвод Минераловатный/Отвод_минераловатный_с_защитным_покрытием_Outside.jpg',
            URL:
                '/product/Otvod_mineralovatnyy_s_zashchitnym_pokrytiyem_Outside',
        },
        Troynik_mineralovatnyy_bez_pokrytiya: {
            title: 'Тройник минераловатный без покрытия',
            img:
                '/img/catalog/Тройник Минераловатный/Тройник_минераловатный_без_покрытия.jpg',
            URL: '/product/Troynik_mineralovatnyy_bez_pokrytiya',
        },
        Troynik_mineralovatnyy_v_otsinkovannoy_obolochke: {
            title: 'Тройник минераловатный в оцинкованной оболочке',
            img:
                '/img/catalog/Тройник Минераловатный/Тройник_минераловатный_в_оцинкованной_оболочке.jpg',
            URL: '/product/Troynik_mineralovatnyy_v_otsinkovannoy_obolochke',
        },
        Troynik_mineralovatnyy_kashirovannyy_folgoy: {
            title: 'Тройник минераловатный кашированный фольгой',
            img:
                '/img/catalog/Тройник Минераловатный/Тройник_минераловатный_кашированный_фольгой.jpg',
            URL: '/product/Troynik_mineralovatnyy_kashirovannyy_folgoy',
        },
        Troynik_mineralovatnyy_s_zashchitnym_pokrytiyem_Outside: {
            title: 'Тройник минераловатный с защитным покрытием Outside',
            img:
                '/img/catalog/Тройник Минераловатный/Тройник_минераловатный_с_защитным_покрытием_Outside.jpg',
            URL:
                '/product/Troynik_mineralovatnyy_s_zashchitnym_pokrytiyem_Outside',
        },
        Tsilindr_mineralovatnyy_bez_pokrytiya: {
            title: 'Цилиндр минераловатный без покрытия',
            img:
                '/img/catalog/Цилиндр Минераловатный/Цилиндр_минераловатный.jpg',
            URL: '/product/Tsilindr_mineralovatnyy_bez_pokrytiya',
        },
        Tsilindr_mineralovatnyy_v_otsinkovannoy_obolochke: {
            title: 'Цилиндр минераловатный в оцинкованной оболочке',
            img: '/img/catalog/Цилиндр Минераловатный/350х350.png',
            URL: '/product/Tsilindr_mineralovatnyy_v_otsinkovannoy_obolochke',
        },
        Tsilindr_mineralovatnyy_kashirovannyy_folgoy: {
            title: 'Цилиндр минераловатный кашированный фольгой',
            img:
                '/img/catalog/Цилиндр Минераловатный/Цилиндр_минераловатный_кашированный_фольгой.jpg',
            URL: '/product/Tsilindr_mineralovatnyy_kashirovannyy_folgoy',
        },
        Tsilindr_mineralovatnyy_s_zashchitnym_pokrytiyem_Outside: {
            title: 'Цилиндр минераловатный с защитным покрытием Outside',
            img:
                '/img/catalog/Цилиндр Минераловатный/Цилиндр_минераловатный_с_защитным_покрытием_Outside.jpg',
            URL:
                '/product/Tsilindr_mineralovatnyy_s_zashchitnym_pokrytiyem_Outside',
        },
        Truba_PND_dlya_kanalizatsii: {
            title: 'Труба ПНД для канализации',
            img: '/img/catalog/Труба ПНД/ПНД_для_канализации.png',
            URL: '/product/Truba_PND_dlya_kanalizatsii',
        },
        Truba_PND_v_bukhtakh: {
            title: 'Труба ПНД в бухтах',
            img: '/img/catalog/Труба ПНД/ПНД_Бухта.png',
            URL: '/product/Truba_PND_v_bukhtakh',
        },
        Truba_PND_dlya_gaza: {
            title: 'Труба ПНД для газа',
            img: '/img/catalog/Труба ПНД/ПНД_на_газ.png',
            URL: '/product/Truba_PND_dlya_gaza',
        },
        Truba_PND_dlya_vody: {
            title: 'Труба ПНД для воды',
            img: '/img/catalog/Труба ПНД/ПНД_для_воды.png',
            URL: '/product/Truba_PND_dlya_vody',
        },
    },
};

export default initialState;
