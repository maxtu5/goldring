export const placesLocal = [
    {
        "latlon": "55.08869, 38.78448",
        "name": "Дворец культуры им. Куйбышева",
        "status": null,
        "visibility": "PUBLIC",
        "cultureStatus": null,
        "appeal": 3,
        "date": "1952",
        "description": "",
        "address": {
            "country": "RUSSIA",
            "region": "MOSCOW_REGION",
            "district": null,
            "municipality": "",
            "settlement": "Коломна",
            "street": "улица Октябрьской Революции",
            "number": "324"
        },
        "genres": [
            "STALIN"
        ],
        "types": [],
        "architects": [],
        "pages": [],
        "pics": 0,
        "dateAdded": "2024-06-01",
        "dateModified": null
    },
    {
        "latlon": "55.74269, 37.58801",
        "name": "Жилой дом городской усадьбы Лодыженских – Загряжских – Рукавишниковых",
        "status": "DONE",
        "visibility": "PUBLIC",
        "cultureStatus": "REVEALED",
        "appeal": 3,
        "date": "1790S",
        "description": "Перестроен в 1830-е. В 1994 надстроен третий этаж",
        "address": {
            "country": "RUSSIA",
            "region": "MOSCOW",
            "district": "Хамовники",
            "municipality": "",
            "settlement": "",
            "street": "Денежный переулок",
            "number": "3с1"
        },
        "genres": [],
        "types": [
            "CITY_ESTATE"
        ],
        "architects": [],
        "pages": [
            "https://wikimapia.org/38190223"
        ],
        "pics": 0,
        "dateAdded": "2024-06-01",
        "dateModified": "2025-02-08"
    },
    {
        "latlon": "55.74466, 37.58459",
        "name": "Усадьба Н.И. Несвицкой. Главный дом",
        "status": "DONE",
        "visibility": "PUBLIC",
        "cultureStatus": "FEDERAL",
        "appeal": 4,
        "date": "1793",
        "description": "Перестраивался в 1801 г. В 1879 г. переделан в исправительный приют для подростков, закрытый в 1918 г.",
        "address": {
            "country": "RUSSIA",
            "region": "MOSCOW",
            "district": null,
            "municipality": "",
            "settlement": "",
            "street": "Смоленская-Сенная площадь",
            "number": "30"
        },
        "genres": [
            "CLASSICISM"
        ],
        "types": [
            "CITY_ESTATE",
            "SHELTER"
        ],
        "architects": [
            "А.Л. Обер"
        ],
        "pages": [
            "https://um.mos.ru/houses/usadba_n_i_nesvitskoy/",
            "https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BC_%D0%9D%D0%B5%D1%81%D0%B2%D0%B8%D1%86%D0%BA%D0%BE%D0%B9"
        ],
        "pics": 0,
        "dateAdded": "2024-06-01",
        "dateModified": "2025-01-05"
    }
]

export const initialDataLocal = {
    "genres": {
        "MODERN": "Модерн",
        "PETER_BAROQUE": "Петровское барокко",
        "MOSCOW_BAROQUE": "Московское барокко",
        "AVANT_GARDE": "Авангард",
        "POSTCONSTRUCTIVISM": "Постконструктивизм",
        "CHINESE": "Шинуазри",
        "BAROQUE": "Барокко",
        "NEO_BYZANTIUM": "Неовизантийский",
        "MIDDLE_AGE": "Средневековое зодчество",
        "SUZDAL": "Суздальский",
        "CLASSICISM": "Классицизм",
        "TENT": "Шатровая церковь",
        "STALIN": "Советский неоклассицизм",
        "FRETWORK": "Узорочье",
        "NARYSHKIN": "Нарышкинское барокко",
        "RUSSIAN_BYZANTIUM": "Русско-византийской",
        "OLD_RUSSIAN": "Древнерусское зодчество",
        "NEO_GREECE": "Неогрек",
        "BRICK": "Кирпичный",
        "ECLECTIC": "Эклектика",
        "ANN_BAROQUE": "Барокко",
        "NEO_CLASSICISM": "Неоклассицизм",
        "CONSTRUCTIVISM": "Конструктивизм",
        "RUSSIAN": "Русский",
        "EARLY_MOSCOW": "Раннемосковский",
        "ROCOCO": "Рококо",
        "ART_DECO": "Ар Деко",
        "EMPIRE": "Ампир",
        "NEO_MUDEJAR": "Неомавританский",
        "NEO_GOTHIC": "Неоготика"
    },
    "types": {
        "BATHS": "Бани",
        "SCHOOL": "Учебное здание",
        "PRICHT": "Дом причта",
        "ORTHODOXY": "Православие",
        "POST": "Почта",
        "WOOD": "Деревянное зодчество",
        "DK": "Дом культуры",
        "MONASTERY": "Монастырь",
        "HOTEL": "Гостиница",
        "FORTRESS": "Крепостное зодчество",
        "CITY_ESTATE": "Городская усадьба",
        "PALATY": "Платы",
        "SHOP": "Торговое здание",
        "CHAPEL": "Часовня",
        "TRANSPORT": "Транспортное здание",
        "OLD_BELIEF": "Старообрядчество",
        "CHURCH": "Церковь",
        "FIRE": "Пожарное здание",
        "STABLES": "Конюшни",
        "BELL_TOWER": "Колокольня",
        "HOUSE": "Жилой дом",
        "SCIENCE": "Научное здание",
        "POLICE": "Полицейское здание",
        "CATHOLIC": "Католичество",
        "PRISON": "Тюрьма",
        "THEATRE": "Театр",
        "INDUSTRY": "Промышленное здание",
        "OUTBUILDING": "Флигель",
        "LIBRARY": "Библиотека",
        "MUSEUM": "Музей",
        "CULTURE": "Культурное здание",
        "EATERY": "Общепит",
        "MILITARY": "Военная постройка",
        "MANSION": "Особняк",
        "PALACE": "Дворец",
        "TREASURE": "Казначейство",
        "HOSPITAL": "Больница",
        "OFFICE": "Конторское здание",
        "SHELTER": "Приют",
        "TOMB": "Мавзолей",
        "PUBLIC": "Общественное здание",
        "RENTAL": "Доходный дом",
        "ESTATE": "Усадьба",
        "PAVILION": "Павильон",
        "GOVERNMENT": "Административное здание"
    },
    "cultureStatuses": {
        "MUNICIPAL": "Памятник архитектуры местного значения",
        "V_FORMING": "Ценный градоформирующий объект",
        "UNESCO": "Объект всемирного наследия ЮНЕСКО",
        "REVEALED": "Памятник архитектуры выявленный",
        "VALUABLE": "Особо ценный объект культурного наследия",
        "FEDERAL": "Памятник архитектуры федерального значения",
        "IGNORED": "",
        "REGIONAL": "Памятник архитектуры регионального значения",
        "HISTORY": "Памятник истории"
    },
    "statuses": [
        "DONE",
        "UNREACHABLE",
        "RUINS",
        "RENOVATION",
        "TODO",
        "WINTER",
        "NET",
        "RESHOT"
    ],
    "visibilities": [
        "PRIVATE",
        "PUBLIC",
        "ADMIN"
    ],
    "linkPrefixes": [
        "wikimapia.org",
        "ru.wikipedia.org",
        "mos.ru",
        "sobory.ru"
    ],
    "lightPlaces": [
        {
            "latlon": "55.10322, 38.76956",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "TQXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.10581, 38.76945",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.11944, 38.76046",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.12073, 38.76122",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.07976, 38.83295",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1809",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "BELL_TOWER",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.75032, 37.59006",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1860",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75096, 37.58973",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1890",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75119, 37.58918",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1880",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74627, 37.59112",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1907",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74496, 37.59192",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1912",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74498, 37.58911",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1907",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74423, 37.58768",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1905",
            "genres": [
                "MODERN"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74517, 37.58688",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "U1833",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74802, 37.58946",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1929",
            "genres": [
                "AVANT_GARDE"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74573, 37.59711",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1886",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74606, 37.59762",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1821",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74592, 37.59715",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1825",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74662, 37.59756",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1820S",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74687, 37.59751",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 2,
            "date": "1870",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74196, 37.58756",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1818",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74486, 37.59665",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1925",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74269, 37.58801",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1790S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74267, 37.58729",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "1790S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74706, 37.58845",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 2,
            "date": "1833",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74433, 37.58869",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1907",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74463, 37.58869",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1909",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74785, 37.58375",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1953",
            "genres": [
                "STALIN"
            ],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.74466, 37.58459",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1793",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE",
                "SHELTER"
            ]
        },
        {
            "latlon": "55.74946, 37.58809",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1711",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.74952, 37.58903",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1820",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75016, 37.58818",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "BGXIX",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75039, 37.58797",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74504, 37.59508",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74484, 37.59556",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1905",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74856, 37.59052",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 2,
            "date": "1827",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74958, 37.59869",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "1908",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74984, 37.59871",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1905",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75022, 37.59879",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1688",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.73915, 37.58664",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1904",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74381, 37.59852",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1816",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "PAVILION",
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74146, 37.59292",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1906",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.73989, 37.58883",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1833",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75095, 37.59655",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1898",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75062, 37.59573",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1848",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75042, 37.59535",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "1903",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75004, 37.59404",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1912",
            "genres": [],
            "types": [
                "RENTAL",
                "SHOP"
            ]
        },
        {
            "latlon": "55.74987, 37.59356",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "1906",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74968, 37.59296",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1839",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74436, 37.60019",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1790S",
            "genres": [],
            "types": [
                "RENTAL",
                "SHOP"
            ]
        },
        {
            "latlon": "55.75089, 37.58738",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1909",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75137, 37.58715",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1910",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75137, 37.59768",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "1911",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75114, 37.59601",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1899",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74615, 37.59545",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "1890",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74599, 37.59543",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1914",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74731, 37.59526",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1893",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74517, 37.59627",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75191, 37.59372",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "HISTORY",
            "rating": 4,
            "date": "1902",
            "genres": [
                "MODERN"
            ],
            "types": [
                "HOSPITAL"
            ]
        },
        {
            "latlon": "55.74545, 37.59879",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1820",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74564, 37.59867",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1911",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74608, 37.59848",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1810S",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75148, 37.59168",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75103, 37.59167",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1909",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75236, 37.60213",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1909",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "THEATRE"
            ]
        },
        {
            "latlon": "55.74757, 37.59754",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10373, 38.75324",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1552",
            "genres": [
                "MIDDLE_AGE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10055, 38.77576",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.10407, 38.77828",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1689",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10005, 38.72534",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "BGXIV",
            "genres": [
                "MIDDLE_AGE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.09834, 38.75724",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.09927, 38.75542",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.09952, 38.75510",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10151, 38.75126",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1830S",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74723, 37.57784",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1911",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.74789, 37.57695",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1956",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.74920, 37.57664",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1956",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.75200, 37.57613",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1939",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.74906, 37.58036",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1686",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.74931, 37.58011",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75023, 37.58007",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1912",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74966, 37.58145",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1900",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75167, 37.58261",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 2,
            "date": "1941",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.74944, 37.58218",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1956",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.74699, 37.58152",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1906",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74683, 37.58040",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1898",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74981, 37.58340",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1832",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.74916, 37.58333",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "1832",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.74723, 37.58346",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1928",
            "genres": [
                "CONSTRUCTIVISM"
            ],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.74999, 37.58470",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75022, 37.58529",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1904",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75041, 37.58662",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "1911",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74969, 37.58706",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1903",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74901, 37.58589",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1901",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74919, 37.58447",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1910S",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.74851, 37.58623",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74825, 37.58613",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "1906",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74893, 37.58791",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74858, 37.58800",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1901",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.74844, 37.58758",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1909",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74809, 37.58653",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "1837",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74259, 37.57749",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1913",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74247, 37.57681",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "1928",
            "genres": [
                "CONSTRUCTIVISM"
            ],
            "types": []
        },
        {
            "latlon": "55.74324, 37.57633",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "HISTORY",
            "rating": 3,
            "date": "1903",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "MANSION",
                "WOOD"
            ]
        },
        {
            "latlon": "55.74315, 37.57709",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74355, 37.57749",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1915",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74219, 37.57499",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "1938",
            "genres": [
                "POSTCONSTRUCTIVISM"
            ],
            "types": []
        },
        {
            "latlon": "55.74142, 37.57325",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "HISTORY",
            "rating": 3,
            "date": "1820",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74178, 37.57380",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1906",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.74190, 37.57630",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1899",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75231, 37.62593",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1804",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.75249, 37.62737",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1698",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.75233, 37.62686",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "ENXV",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75248, 37.62779",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "ENXVIII",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "BELL_TOWER"
            ]
        },
        {
            "latlon": "55.75245, 37.62869",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1684",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.75261, 37.63066",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1657",
            "genres": [
                "FRETWORK",
                "NEO_GOTHIC"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.75017, 37.63092",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "XVI",
            "genres": [
                "EARLY_MOSCOW"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.75450, 37.58145",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "1906",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75411, 37.58221",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "SHXVIII",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.75341, 37.58214",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1913",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75288, 37.58208",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1950",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.74738, 37.58538",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1877",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74753, 37.58588",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "HISTORY",
            "rating": 4,
            "date": "1815",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74722, 37.58608",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 4,
            "date": "1878",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": []
        },
        {
            "latlon": "55.74778, 37.58668",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1912",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74798, 37.58727",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1903",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74805, 37.58754",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1903",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74599, 37.57068",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1955",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.74571, 37.56959",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1933",
            "genres": [
                "CONSTRUCTIVISM"
            ],
            "types": []
        },
        {
            "latlon": "55.75459, 37.56892",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1954",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.75458, 37.57965",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1735",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.75503, 37.58155",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "1912",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75483, 37.58177",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "1912",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74629, 37.57192",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1953",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.74929, 37.57059",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1955",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.67604, 37.89771",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1962",
            "genres": [
                "STALIN"
            ],
            "types": [
                "DK"
            ]
        },
        {
            "latlon": "55.65931, 37.91944",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1951",
            "genres": [
                "STALIN"
            ],
            "types": [
                "SCIENCE"
            ]
        },
        {
            "latlon": "55.65955, 37.92189",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1951",
            "genres": [
                "STALIN"
            ],
            "types": [
                "SCIENCE"
            ]
        },
        {
            "latlon": "55.67275, 38.00506",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1777",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.65893, 37.97582",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1833",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.70377, 37.89031",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1913",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH",
                "WOOD"
            ]
        },
        {
            "latlon": "55.58293, 38.88103",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1890",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.58316, 38.88086",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": [
                "BELL_TOWER",
                "ORTHODOXY",
                "CHURCH",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.58322, 38.88216",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1886",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.64815, 38.01583",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1909",
            "genres": [
                "ECLECTIC"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH",
                "WOOD"
            ]
        },
        {
            "latlon": "55.66039, 37.92061",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1956",
            "genres": [
                "STALIN"
            ],
            "types": [
                "SCIENCE"
            ]
        },
        {
            "latlon": "55.63330, 37.94613",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1754",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.74429, 37.58699",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1823",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74657, 37.58518",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1913",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.79656, 37.58190",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1899",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.79706, 37.58187",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1899",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.79619, 37.58193",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1899",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.79627, 37.58024",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1899",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.79708, 37.58087",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1911",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.79848, 37.58172",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1911",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75339, 37.63429",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1913",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.79473, 37.54680",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 4,
            "date": "1937",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.79968, 37.53535",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1933",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.79934, 37.53618",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1934",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.80383, 37.51399",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1736",
            "genres": [
                "ANN_BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.80774, 37.50875",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1953",
            "genres": [
                "STALIN"
            ],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.81711, 37.50027",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1939",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.83910, 37.48056",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1910",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.30859, 38.14721",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1911",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.31015, 38.14907",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1903",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.30750, 38.17847",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 3,
            "date": "1890S",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.30681, 38.18004",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1895",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "BELL_TOWER",
                "ORTHODOXY",
                "CHURCH",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.30744, 38.18031",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 3,
            "date": "1904",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.30719, 38.17886",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1890",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.30778, 38.17881",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 3,
            "date": "1889",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.30543, 38.26927",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1844",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.30744, 38.17048",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1859",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.31088, 38.15250",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "HISTORY",
            "rating": 3,
            "date": "1890S",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.31894, 38.23463",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1898",
            "genres": [
                "RUSSIAN"
            ],
            "types": []
        },
        {
            "latlon": "56.31867, 38.23687",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.31869, 38.23742",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.31804, 38.23670",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1898",
            "genres": [
                "RUSSIAN"
            ],
            "types": []
        },
        {
            "latlon": "56.31821, 38.23721",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1861",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.29716, 38.18431",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1834",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.31306, 38.13155",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1903",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "TRANSPORT"
            ]
        },
        {
            "latlon": "56.31303, 38.13249",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 3,
            "date": "1894",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.29967, 38.12469",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1767",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.30000, 38.12579",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "56.31153, 38.14099",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.30995, 38.14152",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 4,
            "date": "1854",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.30930, 38.14408",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1880S",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "56.30806, 38.13539",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1904",
            "genres": [],
            "types": [
                "BATHS"
            ]
        },
        {
            "latlon": "56.30581, 38.13410",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.30276, 38.13299",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.30365, 38.13432",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "U1859",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.29745, 38.11553",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1832",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.31366, 38.13309",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1791",
            "genres": [],
            "types": [
                "TRANSPORT",
                "ORTHODOXY",
                "MONASTERY",
                "STABLES"
            ]
        },
        {
            "latlon": "55.63307, 38.05257",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1897",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.60820, 38.04793",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.60820, 38.04888",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1850S",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.30213, 38.12746",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "56.31208, 38.13290",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1866",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.31043, 38.13380",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "UNESCO",
            "rating": 4,
            "date": "1770",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "MONASTERY",
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.31276, 38.13838",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1855",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.31050, 38.13934",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.31209, 38.13571",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1873",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "HOTEL"
            ]
        },
        {
            "latlon": "56.29832, 38.12921",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 4,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.30348, 38.13118",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 3,
            "date": "1779",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.30228, 38.12958",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.30260, 38.12957",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 4,
            "date": "1870S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.30501, 38.12921",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1900",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.31097, 38.13386",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1903",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "SHOP",
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.74658, 37.57974",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.72077, 37.77790",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1957",
            "genres": [
                "STALIN"
            ],
            "types": [
                "SCIENCE",
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.59584, 37.88536",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1805",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.59493, 37.88274",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1691",
            "genres": [
                "TENT"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.58054, 37.90069",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.74974, 37.62329",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1488",
            "genres": [],
            "types": [
                "FORTRESS",
                "MILITARY"
            ]
        },
        {
            "latlon": "55.07927, 38.83216",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1813",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.74857, 37.58331",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.07969, 38.83195",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.07973, 38.83258",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1811",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.07918, 38.83270",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1833",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10800, 38.74895",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "STXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.10844, 38.74991",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "MILITARY",
                "TREASURE"
            ]
        },
        {
            "latlon": "55.74811, 37.61369",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1488",
            "genres": [],
            "types": [
                "FORTRESS",
                "MILITARY"
            ]
        },
        {
            "latlon": "55.74523, 37.58933",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74616, 37.58565",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74587, 37.58632",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1823",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74777, 37.58961",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1909",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.74431, 37.58956",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1900",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "POLICE"
            ]
        },
        {
            "latlon": "55.74531, 37.59761",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74560, 37.59514",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1938",
            "genres": [
                "STALIN"
            ],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.74847, 37.58881",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1936",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.74610, 37.58444",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1951",
            "genres": [
                "STALIN"
            ],
            "types": [
                "GOVERNMENT",
                "OFFICE"
            ]
        },
        {
            "latlon": "54.76360, 38.87674",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1914",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.75125, 37.59743",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1885",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74355, 37.59783",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1816",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75092, 37.59370",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "1912",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "RENTAL",
                "ORTHODOXY",
                "SCHOOL",
                "SHELTER"
            ]
        },
        {
            "latlon": "55.74170, 37.59355",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1904",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74713, 37.58715",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "1910",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74734, 37.58692",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "1910",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74770, 37.59820",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1905",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74490, 37.58398",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74753, 37.58785",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1906",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74657, 37.58627",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1913",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74641, 37.58683",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "HISTORY",
            "rating": 4,
            "date": "1906",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74694, 37.58698",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1911",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "PAVILION",
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74694, 37.58773",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1890",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74452, 37.58970",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74454, 37.58940",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74198, 37.58890",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74705, 37.59302",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1903",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74123, 37.58772",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74791, 37.58918",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74819, 37.59089",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1906",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74372, 37.58743",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1912",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74359, 37.58712",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1910",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74318, 37.58761",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1897",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74287, 37.58840",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74367, 37.58658",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1914",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74393, 37.58708",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1910",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74493, 37.58979",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1905",
            "genres": [
                "MODERN"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74211, 37.58634",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1901",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74221, 37.58671",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1901",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74193, 37.58657",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1901",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74275, 37.58877",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1891",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74669, 37.59714",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1910",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74708, 37.59749",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1904",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75081, 37.58448",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1915",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.09853, 38.75680",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10424, 38.77789",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "PRICHT",
                "ORTHODOXY",
                "WOOD"
            ]
        },
        {
            "latlon": "55.10396, 38.75312",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1850",
            "genres": [],
            "types": [
                "HOUSE",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10397, 38.75249",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1850",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.74653, 37.59838",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "HISTORY",
            "rating": 3,
            "date": "1880",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74980, 37.59467",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1872",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "MANSION",
                "WOOD"
            ]
        },
        {
            "latlon": "55.75152, 37.59811",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1874",
            "genres": [
                "ECLECTIC"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75205, 37.59854",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "RENTAL",
                "EATERY"
            ]
        },
        {
            "latlon": "55.75024, 37.59476",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "HISTORY",
            "rating": 3,
            "date": "1870",
            "genres": [],
            "types": [
                "SHOP",
                "HOSPITAL",
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74329, 37.59712",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1880",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74791, 37.59753",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1856",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.74899, 37.58914",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1888",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74750, 37.59797",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1885",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74907, 37.59082",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74619, 37.58826",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1884",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74544, 37.59328",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1855",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74138, 37.58827",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "1874",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74680, 37.59837",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1898",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74918, 37.58379",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "1830S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74910, 37.59228",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1852",
            "genres": [
                "ECLECTIC"
            ],
            "types": [
                "MANSION",
                "WOOD"
            ]
        },
        {
            "latlon": "55.10312, 38.74968",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "ENXVIII",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10533, 38.76582",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.10858, 38.74892",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1726",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.74585, 37.59553",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "SHXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74629, 37.59582",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "MDXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75241, 37.59959",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "ENXVIII",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "EATERY"
            ]
        },
        {
            "latlon": "55.74424, 37.59971",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "XVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74400, 37.59898",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "XVIII",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.74204, 37.59427",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1764",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "FIRE"
            ]
        },
        {
            "latlon": "55.74884, 37.58882",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1810S",
            "genres": [],
            "types": [
                "CITY_ESTATE",
                "SCHOOL",
                "SHELTER"
            ]
        },
        {
            "latlon": "55.74898, 37.59049",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 3,
            "date": "ENXVIII",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10000, 38.75412",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SQXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10361, 38.75228",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1843",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.74250, 37.59526",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74970, 37.62211",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1480S",
            "genres": [],
            "types": [
                "FORTRESS"
            ]
        },
        {
            "latlon": "55.74620, 37.58606",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "1783",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74512, 37.58640",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.71062, 37.54055",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1813",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75320, 37.58972",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1897",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75350, 37.58840",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1900",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75370, 37.59381",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75380, 37.59343",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1910",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75410, 37.59205",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75440, 37.59019",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1900",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75460, 37.59176",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1911",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75530, 37.59217",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1832",
            "genres": [
                "EMPIRE",
                "NEO_CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75123, 37.58256",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1851",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75262, 37.59754",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": [
                "HOSPITAL"
            ]
        },
        {
            "latlon": "55.75267, 37.59804",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "1900",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75271, 37.59848",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 2,
            "date": "1906",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75273, 37.59894",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1889",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75301, 37.59110",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1905",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75334, 37.59710",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1679",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75374, 37.59621",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1816",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75396, 37.59514",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1813",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.75399, 37.59267",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75454, 37.59532",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1914",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75473, 37.59419",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1900",
            "genres": [
                "MODERN"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75494, 37.59330",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1884",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75537, 37.59099",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1887",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.74682, 37.59499",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1898",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL",
                "MANSION"
            ]
        },
        {
            "latlon": "54.75718, 38.87015",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "54.75769, 38.87203",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "PRICHT",
                "HOUSE"
            ]
        },
        {
            "latlon": "54.75778, 38.87009",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "54.75661, 38.87312",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "54.75784, 38.87162",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "54.75662, 38.87162",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "54.75661, 38.87012",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "54.75691, 38.87071",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "LQXVIII",
            "genres": [],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "54.75697, 38.87096",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "54.75730, 38.87173",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1904",
            "genres": [
                "NEO_CLASSICISM",
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "54.75702, 38.87257",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1681",
            "genres": [
                "MIDDLE_AGE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "54.75794, 38.87171",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62270, 37.84078",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1890",
            "genres": [],
            "types": [
                "INDUSTRY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62107, 37.84050",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1858",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62102, 37.83949",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1858",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62120, 37.84130",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1870",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62158, 37.83998",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1894",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62189, 37.84128",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1858",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62239, 37.83982",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1858",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62233, 37.84023",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1854",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62242, 37.84021",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1763",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62239, 37.84049",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1859",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "BELL_TOWER"
            ]
        },
        {
            "latlon": "55.62182, 37.84044",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1893",
            "genres": [
                "NEO_BYZANTIUM"
            ],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62234, 37.83924",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "XVII",
            "genres": [],
            "types": [
                "MILITARY"
            ]
        },
        {
            "latlon": "55.62235, 37.84125",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1860",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62330, 37.84081",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1855",
            "genres": [],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62362, 37.84179",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1866",
            "genres": [],
            "types": [
                "HOTEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62366, 37.84380",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.62369, 37.84116",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1870S",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "HOTEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.62383, 37.83853",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "WOOD"
            ]
        },
        {
            "latlon": "55.62376, 37.84381",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1860S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.62348, 37.84253",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1854",
            "genres": [],
            "types": [
                "HOTEL"
            ]
        },
        {
            "latlon": "54.75783, 38.87314",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "55.10505, 38.77056",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "XVII",
            "genres": [],
            "types": [
                "CHURCH",
                "OLD_BELIEF"
            ]
        },
        {
            "latlon": "55.10556, 38.75822",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1682",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10584, 38.75805",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1776",
            "genres": [
                "RUSSIAN_BYZANTIUM",
                "MIDDLE_AGE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10617, 38.75841",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1514",
            "genres": [
                "MIDDLE_AGE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10286, 38.75479",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "55.10455, 38.76111",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "55.10582, 38.76331",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "55.10313, 38.75213",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "55.10447, 38.75098",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "55.10377, 38.75152",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1525",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "55.10387, 38.75979",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "56.30921, 38.13097",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "UNESCO",
            "rating": 5,
            "date": "MDXVI",
            "genres": [],
            "types": [
                "MONASTERY",
                "FORTRESS",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.31208, 38.12965",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "UNESCO",
            "rating": 5,
            "date": "XVI",
            "genres": [],
            "types": [
                "MONASTERY",
                "FORTRESS",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.31134, 38.12851",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "UNESCO",
            "rating": 5,
            "date": "1778",
            "genres": [],
            "types": [
                "MONASTERY",
                "FORTRESS",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.30789, 38.13106",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 3,
            "date": "1904",
            "genres": [],
            "types": [
                "SHOP",
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.31108, 38.12774",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "UNESCO",
            "rating": 5,
            "date": "XVII",
            "genres": [],
            "types": [
                "MONASTERY",
                "FORTRESS",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.30949, 38.13243",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "UNESCO",
            "rating": 5,
            "date": "1640",
            "genres": [],
            "types": [
                "MONASTERY",
                "FORTRESS",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.30866, 38.13158",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 3,
            "date": "1892",
            "genres": [],
            "types": [
                "HOTEL",
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.31267, 38.13195",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "UNESCO",
            "rating": 5,
            "date": "XVII",
            "genres": [],
            "types": [
                "MONASTERY",
                "FORTRESS",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.30859, 38.13278",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1700",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.30840, 38.13278",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1547",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.28779, 38.17785",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1832",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "TREASURE",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.28729, 38.17705",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1866",
            "genres": [
                "RUSSIAN_BYZANTIUM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.10483, 38.75672",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVII",
            "genres": [],
            "types": [
                "CHURCH"
            ]
        },
        {
            "latlon": "55.10498, 38.75733",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1705",
            "genres": [
                "MOSCOW_BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10510, 38.76246",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1531",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "55.74330, 37.58470",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1879",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74953, 37.59240",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1873",
            "genres": [],
            "types": [
                "SHOP",
                "HOSPITAL",
                "RENTAL"
            ]
        },
        {
            "latlon": "55.11910, 38.76040",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1790",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.73974, 37.58630",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1905",
            "genres": [
                "MODERN"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.75170, 37.59748",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1898",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74240, 37.59463",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 2,
            "date": "1836",
            "genres": [],
            "types": [
                "FIRE"
            ]
        },
        {
            "latlon": "55.07925, 38.83340",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1700",
            "genres": [
                "OLD_RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10524, 38.75688",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1823",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10499, 38.75906",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1680S",
            "genres": [],
            "types": [
                "SCHOOL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10528, 38.75766",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1825",
            "genres": [],
            "types": [
                "BELL_TOWER",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10369, 38.75396",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1855",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.28797, 38.17814",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "1904",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.72590, 37.95745",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1830S",
            "genres": [],
            "types": [
                "TOMB"
            ]
        },
        {
            "latlon": "55.72605, 37.95755",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1867",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.72597, 37.95706",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1784",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.58045, 37.90858",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1954",
            "genres": [
                "STALIN"
            ],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.58130, 37.90000",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1846",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.64774, 37.87817",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1680",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.64892, 37.85797",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1955",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.70934, 38.05314",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1902",
            "genres": [
                "RUSSIAN"
            ],
            "types": []
        },
        {
            "latlon": "55.72956, 38.03533",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.72990, 38.02671",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1927",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "56.28766, 38.17588",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1893",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "HOTEL",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.28928, 38.14835",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1967",
            "genres": [
                "STALIN"
            ],
            "types": [
                "DK"
            ]
        },
        {
            "latlon": "56.30245, 38.13175",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1876",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.30692, 38.12484",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1773",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.30863, 38.14222",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": [
                "HOSPITAL"
            ]
        },
        {
            "latlon": "56.30979, 38.13597",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1880",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "56.31130, 38.13474",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "RENTAL"
            ]
        },
        {
            "latlon": "56.31179, 38.13582",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1891",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "54.73097, 38.98807",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1860",
            "genres": [
                "ECLECTIC"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "54.73339, 38.95626",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1865",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.31209, 38.13386",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1825",
            "genres": [],
            "types": [
                "HOTEL",
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.31380, 38.13530",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1916",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "RENTAL"
            ]
        },
        {
            "latlon": "56.31247, 38.13511",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "1880S",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.31383, 38.13612",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1890S",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "56.31545, 38.13104",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1818",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.31734, 38.13575",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1954",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "56.31784, 38.12035",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1900",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.32043, 38.12300",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1834",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "54.75592, 38.88005",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "XIX",
            "genres": [],
            "types": [
                "HOUSE",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "54.75598, 38.88057",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1795",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "54.76004, 38.87624",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FQXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "54.76107, 38.87708",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "54.76108, 38.87649",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "54.76114, 38.87566",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1835",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "54.76146, 38.87660",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1875",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "54.69365, 38.93451",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1839",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "54.75326, 38.87189",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1909",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "54.75486, 38.86665",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "54.75639, 38.88079",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1900",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "54.75670, 38.88103",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XVIII",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "54.75782, 38.88125",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "54.75851, 38.88404",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "MANSION",
                "WOOD"
            ]
        },
        {
            "latlon": "54.75854, 38.87603",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1778",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "54.75856, 38.88284",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1910",
            "genres": [],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "54.75865, 38.87735",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "54.75875, 38.87587",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "54.75886, 38.87947",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "54.75903, 38.87795",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "54.75941, 38.88162",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1864",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "54.75946, 38.87762",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "54.75953, 38.87559",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "54.75962, 38.87616",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "54.75981, 38.87621",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "54.75982, 38.87357",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "54.76028, 38.87777",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "54.75994, 38.87418",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "54.76024, 38.87626",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "54.76038, 38.87629",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "54.76054, 38.87651",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "54.76085, 38.87643",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "54.76098, 38.87791",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "54.76105, 38.87452",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "54.76116, 38.87993",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "54.76145, 38.87598",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD",
                "HOUSE"
            ]
        },
        {
            "latlon": "54.76165, 38.87402",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "54.76393, 38.88130",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1879",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "54.76415, 38.87861",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1895",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "54.76454, 38.87860",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "TREASURE"
            ]
        },
        {
            "latlon": "55.10500, 38.76764",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1800S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10060, 38.76129",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.11080, 38.74293",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.09516, 38.76730",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1892",
            "genres": [],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.09719, 38.76798",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "TQXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.09734, 38.75739",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09776, 38.75802",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09781, 38.75818",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.09999, 38.76315",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10061, 38.76216",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1799",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10088, 38.75110",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.10099, 38.76045",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1830S",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10114, 38.76333",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1835",
            "genres": [],
            "types": [
                "HOSPITAL"
            ]
        },
        {
            "latlon": "55.10125, 38.76436",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10128, 38.76360",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1835",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10129, 38.75985",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "FHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.10142, 38.75963",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.10146, 38.76456",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10165, 38.76014",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10183, 38.76512",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1830S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10207, 38.76544",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1830S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10652, 38.75897",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1800",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.10468, 38.77019",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10465, 38.76990",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1810S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10488, 38.76950",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.10480, 38.77184",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.10495, 38.77376",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10502, 38.77160",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10448, 38.76748",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1820S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10511, 38.77252",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.10525, 38.77331",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXVIII",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.10583, 38.77383",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1695",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10569, 38.77432",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "STXIX",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.10525, 38.77441",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1810S",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10561, 38.77238",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10602, 38.77274",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "STXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10598, 38.77206",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "XVII",
            "genres": [],
            "types": [
                "PALATY"
            ]
        },
        {
            "latlon": "55.10630, 38.77212",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "MDXVIII",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10692, 38.76359",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10673, 38.76358",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10649, 38.76417",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1908",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10651, 38.76361",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1830S",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10638, 38.76360",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "STXIX",
            "genres": [],
            "types": [
                "HOUSE",
                "SHOP"
            ]
        },
        {
            "latlon": "55.10615, 38.76362",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10587, 38.76374",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.10584, 38.76358",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1820S",
            "genres": [],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10559, 38.76372",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1840",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10415, 38.76144",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10509, 38.77001",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1716",
            "genres": [],
            "types": [
                "BELL_TOWER"
            ]
        },
        {
            "latlon": "55.10027, 38.75463",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1830S",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.10165, 38.75095",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FTXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10184, 38.75061",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "TQXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10207, 38.75013",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10300, 38.75099",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.10193, 38.74750",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10025, 38.75063",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "STXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.09734, 38.75603",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09980, 38.75070",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10208, 38.76486",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10218, 38.76504",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10010, 38.76233",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10977, 38.74418",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.11015, 38.74346",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "SCHOOL",
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.11044, 38.74285",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "SCHOOL",
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10631, 38.76832",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10517, 38.76803",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "SQXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10556, 38.76794",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10553, 38.76693",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "TQXVIII",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10574, 38.76720",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1828",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.06753, 38.84140",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1828",
            "genres": [
                "NEO_BYZANTIUM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.09934, 38.76875",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09710, 38.76570",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "SQXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10190, 38.75537",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1756",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.09897, 38.78096",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1860S",
            "genres": [],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.10237, 38.77066",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "SHOP",
                "WOOD"
            ]
        },
        {
            "latlon": "55.10219, 38.77031",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "SHOP",
                "WOOD"
            ]
        },
        {
            "latlon": "55.10181, 38.77107",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.10309, 38.77100",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FTXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10284, 38.77158",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10289, 38.77188",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10344, 38.77600",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10463, 38.81550",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1847",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.09869, 38.75250",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09857, 38.75224",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.09882, 38.75273",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.09792, 38.75123",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FQXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10621, 38.75836",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "XVI",
            "genres": [
                "CLASSICISM",
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10279, 38.75750",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10288, 38.75719",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.10268, 38.75600",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "MILITARY"
            ]
        },
        {
            "latlon": "55.10422, 38.75612",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1815",
            "genres": [],
            "types": [
                "CITY_ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.10578, 38.76192",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1764",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10325, 38.75483",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10492, 38.75412",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "STABLES"
            ]
        },
        {
            "latlon": "55.10516, 38.75413",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10397, 38.75477",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "55.10434, 38.75417",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "55.10497, 38.75462",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SQXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10483, 38.75475",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10457, 38.75415",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10522, 38.75461",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "SQXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10480, 38.75061",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1902",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.10556, 38.75616",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1888",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.10577, 38.75679",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1865",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.10564, 38.76135",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "SQXIX",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.10603, 38.76281",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1830S",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.10436, 38.76445",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "STXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10351, 38.76518",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "STXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10393, 38.76501",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10292, 38.76620",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10356, 38.76573",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10362, 38.76558",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "BGXX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.10268, 38.76686",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "STXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10348, 38.76591",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10252, 38.76720",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10278, 38.76729",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10267, 38.76758",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10198, 38.76818",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FQXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10258, 38.76776",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10153, 38.76911",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10153, 38.76976",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10238, 38.76806",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10136, 38.76939",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "STXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10178, 38.76943",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09574, 38.76927",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1779",
            "genres": [
                "BAROQUE",
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.09783, 38.76184",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1830S",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10677, 38.74447",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10649, 38.74584",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "U1917",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10566, 38.74576",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1840S",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.10608, 38.74577",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1840S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10289, 38.75181",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "STABLES"
            ]
        },
        {
            "latlon": "55.10333, 38.75091",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10256, 38.75239",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10235, 38.75284",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10248, 38.75260",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10220, 38.75311",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10187, 38.75373",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10136, 38.75370",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "MDXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10159, 38.75422",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "MDXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10112, 38.75509",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1914",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.10096, 38.75540",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1862",
            "genres": [],
            "types": [
                "HOTEL"
            ]
        },
        {
            "latlon": "55.10030, 38.75663",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10017, 38.75693",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10044, 38.75644",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "HOUSE",
                "SHOP"
            ]
        },
        {
            "latlon": "55.09986, 38.75733",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE",
                "SHOP"
            ]
        },
        {
            "latlon": "55.09974, 38.75763",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.09998, 38.75799",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.09968, 38.75782",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.09942, 38.75830",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.09950, 38.75884",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09912, 38.75884",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "SQXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.09879, 38.75934",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "SQXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09872, 38.76022",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.09845, 38.75992",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09855, 38.76058",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.09829, 38.76024",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09823, 38.76040",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.09839, 38.76006",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.09805, 38.76073",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.09811, 38.76061",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1840S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09838, 38.76082",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.09799, 38.76086",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SQXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09830, 38.76099",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.09777, 38.76125",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "STXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.09753, 38.76169",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FQXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.09727, 38.76214",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.09751, 38.76248",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXVIII",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.09739, 38.76262",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING",
                "WOOD"
            ]
        },
        {
            "latlon": "55.09713, 38.76317",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "HOUSE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.08869, 38.78448",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1952",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.08768, 38.78920",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "BGXX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.10321, 38.77671",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10399, 38.77646",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FQXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10413, 38.77642",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1830S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10433, 38.77636",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1800S",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10440, 38.77584",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10514, 38.77609",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10459, 38.76578",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "FTXIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.10382, 38.76730",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "FQXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10323, 38.76855",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10308, 38.76879",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "SHXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10360, 38.76854",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10353, 38.76879",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1830S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10221, 38.76252",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10190, 38.76305",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SQXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10153, 38.76373",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1897",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.10218, 38.76318",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "XIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.10182, 38.76390",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1840S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09969, 38.76800",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.09733, 38.77191",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09770, 38.75029",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1696",
            "genres": [
                "BAROQUE",
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.10359, 38.76239",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.10122, 38.75943",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.09928, 38.75603",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1840S",
            "genres": [],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.74392, 37.58266",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1956",
            "genres": [
                "STALIN"
            ],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.75145, 37.56546",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 5,
            "date": "1956",
            "genres": [
                "STALIN"
            ],
            "types": [
                "HOTEL"
            ]
        },
        {
            "latlon": "55.75979, 37.67947",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "1900",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76079, 37.67880",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1880",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76161, 37.67936",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1885",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.74480, 37.58163",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1890",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76293, 37.67964",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1847",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76302, 37.67873",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1915",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76306, 37.67828",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76313, 37.67538",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "SH1770",
            "genres": [],
            "types": [
                "CITY_ESTATE",
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.76320, 37.67752",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1890",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76328, 37.67648",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1844",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.85110, 37.46713",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 5,
            "date": "1937",
            "genres": [],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.73154, 37.73242",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1776",
            "genres": [
                "BAROQUE",
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.85585, 37.47038",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1939",
            "genres": [
                "STALIN"
            ],
            "types": [
                "HOUSE"
            ]
        },
        {
            "latlon": "55.85942, 37.46661",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1895",
            "genres": [],
            "types": [
                "HOSPITAL"
            ]
        },
        {
            "latlon": "55.88031, 37.45540",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1730",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.73494, 37.80898",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1755",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ESTATE",
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.73525, 37.80757",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1775",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE",
                "PALACE"
            ]
        },
        {
            "latlon": "55.73589, 37.80669",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1870S",
            "genres": [
                "ECLECTIC"
            ],
            "types": [
                "ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.73818, 37.81035",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1763",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.73521, 37.81118",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1755",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.73499, 37.81037",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1761",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ESTATE",
                "PAVILION"
            ]
        },
        {
            "latlon": "55.73693, 37.80559",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1749",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.73734, 37.80780",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1767",
            "genres": [],
            "types": [
                "ESTATE",
                "PAVILION"
            ]
        },
        {
            "latlon": "55.73456, 37.81133",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1755",
            "genres": [],
            "types": [
                "ESTATE",
                "PAVILION"
            ]
        },
        {
            "latlon": "55.73457, 37.81152",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1755",
            "genres": [],
            "types": [
                "ESTATE",
                "PAVILION"
            ]
        },
        {
            "latlon": "55.73465, 37.81168",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1755",
            "genres": [],
            "types": [
                "ESTATE",
                "PAVILION"
            ]
        },
        {
            "latlon": "55.73485, 37.81163",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1755",
            "genres": [],
            "types": [
                "ESTATE",
                "PAVILION"
            ]
        },
        {
            "latlon": "55.73475, 37.81171",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1755",
            "genres": [],
            "types": [
                "ESTATE",
                "PAVILION"
            ]
        },
        {
            "latlon": "55.75045, 37.59753",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1906",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75019, 37.59745",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1906",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75094, 37.59745",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "1909",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75045, 37.59228",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1897",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75064, 37.59206",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1819",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75007, 37.59044",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1911",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75144, 37.59029",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1860S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75130, 37.58976",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XVIII",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75051, 37.58468",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75025, 37.58481",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75068, 37.59840",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75081, 37.59984",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1910",
            "genres": [],
            "types": [
                "RENTAL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.74490, 37.60081",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1880S",
            "genres": [],
            "types": [
                "SHOP",
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74569, 37.59953",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1879",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74846, 37.59751",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "XVIII",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "PALATY"
            ]
        },
        {
            "latlon": "55.74894, 37.59744",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1890S",
            "genres": [
                "ECLECTIC"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74934, 37.59729",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "XVII",
            "genres": [],
            "types": [
                "PALATY"
            ]
        },
        {
            "latlon": "55.74915, 37.59700",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74705, 37.59840",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1890",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74630, 37.59888",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1830S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74466, 37.59731",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74460, 37.59704",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1810S",
            "genres": [
                "ECLECTIC"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74458, 37.59596",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1816",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.74464, 37.59322",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1911",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74655, 37.58738",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1911",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.74829, 37.58821",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1938",
            "genres": [
                "STALIN"
            ],
            "types": [
                "HOUSE",
                "SHOP"
            ]
        },
        {
            "latlon": "55.74909, 37.58959",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "BGXIX",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74961, 37.58977",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1904",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74931, 37.59021",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1904",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74949, 37.59083",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1903",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74989, 37.59153",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "1947",
            "genres": [
                "STALIN"
            ],
            "types": [
                "THEATRE"
            ]
        },
        {
            "latlon": "55.74999, 37.60632",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1829",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74996, 37.60670",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1909",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75254, 37.60643",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1817",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75191, 37.60524",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1877",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75115, 37.60472",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1898",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75043, 37.60697",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1878",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75105, 37.60720",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1790S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75114, 37.60679",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1864",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75118, 37.60644",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75134, 37.60713",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1838",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75163, 37.60747",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1842",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75194, 37.60761",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1680S",
            "genres": [],
            "types": [
                "PALATY"
            ]
        },
        {
            "latlon": "55.75197, 37.60708",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1787",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75204, 37.60744",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1787",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75259, 37.60475",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1774",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75171, 37.60727",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1842",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75758, 37.57151",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1955",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.75840, 37.57385",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1955",
            "genres": [
                "ECLECTIC"
            ],
            "types": []
        },
        {
            "latlon": "55.75878, 37.57398",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1904",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75960, 37.57227",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1913",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75935, 37.57201",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75890, 37.57121",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1890",
            "genres": [],
            "types": [
                "PRICHT"
            ]
        },
        {
            "latlon": "55.75912, 37.57133",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1848",
            "genres": [],
            "types": [
                "WOOD",
                "PRICHT"
            ]
        },
        {
            "latlon": "55.75860, 37.57086",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "SCHOOL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75872, 37.56899",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74125, 37.58551",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74361, 37.58805",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "HISTORY",
            "rating": 3,
            "date": "1907",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74393, 37.58774",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74378, 37.59054",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1806",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.74452, 37.59252",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1820S",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74412, 37.59821",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "XVII",
            "genres": [],
            "types": [
                "PALATY",
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74354, 37.59699",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74381, 37.59712",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74418, 37.59669",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "STABLES",
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74401, 37.59555",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1817",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74383, 37.59543",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1881",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74361, 37.59545",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1820",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74345, 37.59541",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1881",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74360, 37.59484",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1906",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74344, 37.59348",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1912",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74320, 37.59134",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74706, 37.59253",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "HISTORY",
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74844, 37.59458",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1901",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74711, 37.59532",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1903",
            "genres": [
                "ECLECTIC",
                "MODERN"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.74634, 37.59841",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1912",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74587, 37.59855",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1897",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74504, 37.60160",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1935",
            "genres": [],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.74505, 37.60255",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1810S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.74534, 37.60196",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "FQXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74648, 37.60034",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74683, 37.60052",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74741, 37.60037",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1790S",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "GOVERNMENT",
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74768, 37.60054",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74803, 37.60052",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1825",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74867, 37.60063",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1886",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75315, 37.59022",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1897",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75303, 37.59066",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1912",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75302, 37.59214",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "1895",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75302, 37.59256",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1905",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75302, 37.59301",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1903",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75328, 37.59290",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1904",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75386, 37.59109",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1817",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75354, 37.59422",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1817",
            "genres": [],
            "types": [
                "CITY_ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.75347, 37.59479",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": [
                "RENTAL",
                "HOSPITAL"
            ]
        },
        {
            "latlon": "55.75354, 37.59812",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75433, 37.59558",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1902",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75459, 37.59465",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1912",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75493, 37.59369",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1913",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75403, 37.59429",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1900",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75501, 37.59097",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1880",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75493, 37.59039",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1818",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75481, 37.59012",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75419, 37.59006",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1862",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75409, 37.58686",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "1886",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75409, 37.58721",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1886",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74377, 37.59109",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1872",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74383, 37.59351",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1900",
            "genres": [
                "MODERN"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74391, 37.59295",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1896",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74398, 37.59183",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1895",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74399, 37.59147",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74432, 37.59326",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1911",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74449, 37.59144",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1905",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74482, 37.58720",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "1900",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74505, 37.59361",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1817",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75326, 37.58631",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1900",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74245, 37.59177",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1833",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74258, 37.59138",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1819",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74271, 37.59216",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1820S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74276, 37.59092",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1819",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74289, 37.59154",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74302, 37.59100",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74307, 37.59072",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1810S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74308, 37.59176",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74371, 37.59210",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1820",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.73990, 37.59391",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "U1822",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.73624, 37.61972",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.73637, 37.61983",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1904",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73981, 37.59525",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1906",
            "genres": [
                "MODERN"
            ],
            "types": []
        },
        {
            "latlon": "55.73985, 37.59428",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1834",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.74005, 37.59366",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1912",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74022, 37.59423",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1912",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74232, 37.59227",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1902",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75212, 37.60767",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1676",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73514, 37.62280",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1826",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.73516, 37.62230",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.73516, 37.62346",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.73524, 37.62104",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1862",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73534, 37.62396",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1815",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.73558, 37.61985",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1864",
            "genres": [],
            "types": [
                "RENTAL",
                "SHOP"
            ]
        },
        {
            "latlon": "55.73577, 37.62402",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1810S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.73601, 37.62396",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "XIX",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.73641, 37.62009",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1860",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73688, 37.62396",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1851",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.73800, 37.62408",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1906",
            "genres": [
                "MODERN",
                "NEO_CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "MONASTERY",
                "HOSPITAL"
            ]
        },
        {
            "latlon": "55.73830, 37.62412",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1890",
            "genres": [],
            "types": [
                "HOSPITAL",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.73736, 37.62206",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "BGXX",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHAPEL",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.73757, 37.62168",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": [
                "HOSPITAL",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.73766, 37.62332",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1914",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.73773, 37.62404",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1800S",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.73799, 37.62331",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1867",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.73831, 37.62360",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1911",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "SHELTER"
            ]
        },
        {
            "latlon": "55.73736, 37.62397",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1861",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73769, 37.62030",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1910",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73832, 37.62006",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1770S",
            "genres": [],
            "types": [
                "CITY_ESTATE",
                "SHELTER"
            ]
        },
        {
            "latlon": "55.73859, 37.61981",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1814",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.73879, 37.61989",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1830S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.73915, 37.62393",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1910",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73850, 37.62401",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1904",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76493, 37.63841",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1935",
            "genres": [],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.76488, 37.63737",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1856",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.76441, 37.63837",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1900",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.76392, 37.63944",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1898",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.76350, 37.63970",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1891",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.76318, 37.64037",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1796",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76270, 37.64069",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1794",
            "genres": [
                "STALIN"
            ],
            "types": [
                "CITY_ESTATE",
                "OFFICE"
            ]
        },
        {
            "latlon": "55.76317, 37.63941",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1892",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.76295, 37.63914",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1806",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.76262, 37.63964",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1750",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76247, 37.63938",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1750",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.76272, 37.63888",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1827",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "PRICHT"
            ]
        },
        {
            "latlon": "54.75991, 38.87771",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.10457, 38.76491",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09788, 38.76108",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "SQXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.09885, 38.75906",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.10354, 38.77775",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74938, 37.59170",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75248, 37.60723",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1787",
            "genres": [],
            "types": [
                "CITY_ESTATE",
                "TREASURE",
                "GOVERNMENT",
                "OFFICE"
            ]
        },
        {
            "latlon": "55.74727, 37.58848",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74417, 37.58626",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1899",
            "genres": [
                "MODERN"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74474, 37.58665",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1815",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74751, 37.59128",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1950",
            "genres": [
                "STALIN"
            ],
            "types": [
                "HOSPITAL"
            ]
        },
        {
            "latlon": "55.74894, 37.59441",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1916",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75143, 37.60491",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1900",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74913, 37.59441",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1916",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74931, 37.59445",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1911",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74858, 37.59136",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1912",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74955, 37.59427",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1915",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75079, 37.58847",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1914",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74748, 37.58891",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1909",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75074, 37.59008",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1850S",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": []
        },
        {
            "latlon": "55.74614, 37.59283",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1816",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "MANSION",
                "WOOD"
            ]
        },
        {
            "latlon": "55.75083, 37.59320",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75017, 37.59560",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 2,
            "date": "1903",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74406, 37.59085",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1913",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75110, 37.59686",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75117, 37.59819",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1909",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74729, 37.59373",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1911",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75045, 37.59957",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE",
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.74838, 37.59934",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1889",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74689, 37.59197",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "HISTORY",
            "rating": 4,
            "date": "1820S",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "WOOD",
                "MANSION"
            ]
        },
        {
            "latlon": "55.74805, 37.59926",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1904",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74761, 37.59912",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1902",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74684, 37.59898",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1903",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74551, 37.59957",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1852",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75318, 37.63575",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "HOTEL",
                "OFFICE"
            ]
        },
        {
            "latlon": "55.74511, 37.59974",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1853",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74781, 37.59654",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1912",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.73717, 37.62036",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1887",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74890, 37.59808",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1889",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75081, 37.60507",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "BGXVIII",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.72365, 37.79852",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1645",
            "genres": [
                "TENT"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75053, 37.60578",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1890",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75069, 37.60619",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "XVII",
            "genres": [
                "MIDDLE_AGE"
            ],
            "types": [
                "PALATY"
            ]
        },
        {
            "latlon": "55.75023, 37.60550",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1890",
            "genres": [
                "ECLECTIC"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75023, 37.60742",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1759",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75073, 37.60705",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1794",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75095, 37.60718",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1794",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75090, 37.60679",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1794",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75134, 37.60944",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1941",
            "genres": [
                "ART_DECO"
            ],
            "types": [
                "SCIENCE"
            ]
        },
        {
            "latlon": "55.75204, 37.61096",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1825",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75154, 37.61060",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1868",
            "genres": [],
            "types": [
                "STABLES"
            ]
        },
        {
            "latlon": "55.75105, 37.61027",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1892",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75024, 37.60988",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1820",
            "genres": [
                "NEO_CLASSICISM",
                "NEO_GREECE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75061, 37.61072",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1825",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75040, 37.61111",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1825",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75082, 37.61139",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1825",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74941, 37.61274",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1495",
            "genres": [
                "OLD_RUSSIAN"
            ],
            "types": [
                "FORTRESS",
                "MILITARY"
            ]
        },
        {
            "latlon": "55.75228, 37.61465",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1499",
            "genres": [
                "OLD_RUSSIAN"
            ],
            "types": [
                "FORTRESS",
                "MILITARY"
            ]
        },
        {
            "latlon": "55.75062, 37.61351",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1495",
            "genres": [
                "OLD_RUSSIAN"
            ],
            "types": [
                "FORTRESS",
                "MILITARY"
            ]
        },
        {
            "latlon": "55.75510, 37.61651",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1492",
            "genres": [
                "OLD_RUSSIAN"
            ],
            "types": [
                "FORTRESS",
                "MILITARY"
            ]
        },
        {
            "latlon": "55.75448, 37.61781",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1492",
            "genres": [
                "NEO_GOTHIC",
                "OLD_RUSSIAN"
            ],
            "types": [
                "FORTRESS",
                "MILITARY"
            ]
        },
        {
            "latlon": "55.75349, 37.61960",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1491",
            "genres": [
                "OLD_RUSSIAN"
            ],
            "types": [
                "FORTRESS",
                "MILITARY"
            ]
        },
        {
            "latlon": "55.75256, 37.62140",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1491",
            "genres": [
                "OLD_RUSSIAN"
            ],
            "types": [
                "FORTRESS",
                "MILITARY"
            ]
        },
        {
            "latlon": "55.75222, 37.62170",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1680",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "55.75188, 37.62195",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1495",
            "genres": [
                "OLD_RUSSIAN"
            ],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "55.75120, 37.62247",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1490",
            "genres": [
                "OLD_RUSSIAN"
            ],
            "types": [
                "FORTRESS",
                "MILITARY"
            ]
        },
        {
            "latlon": "55.75121, 37.61153",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1904",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75173, 37.61181",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1868",
            "genres": [
                "RUSSIAN"
            ],
            "types": []
        },
        {
            "latlon": "55.75222, 37.61162",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1838",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75370, 37.61559",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1495",
            "genres": [
                "OLD_RUSSIAN"
            ],
            "types": [
                "FORTRESS",
                "MILITARY"
            ]
        },
        {
            "latlon": "55.75343, 37.61229",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1817",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "MILITARY"
            ]
        },
        {
            "latlon": "55.75051, 37.58688",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1837",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75524, 37.61777",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1883",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "PUBLIC"
            ]
        },
        {
            "latlon": "55.75634, 37.61856",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1892",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "55.75562, 37.61808",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1680",
            "genres": [
                "FRETWORK"
            ],
            "types": []
        },
        {
            "latlon": "55.75257, 37.62413",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1893",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "OFFICE",
                "SHOP"
            ]
        },
        {
            "latlon": "55.75474, 37.62140",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1893",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "PUBLIC",
                "SHOP"
            ]
        },
        {
            "latlon": "55.60980, 36.98811",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1910",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.57678, 36.71615",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1809",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.49398, 36.03272",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1876",
            "genres": [],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.50556, 36.01664",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.50408, 36.01612",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50555, 36.01427",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.50639, 36.01403",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.50693, 36.01408",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50698, 36.01366",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50680, 36.01329",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50710, 36.01273",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50745, 36.01295",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50793, 36.01306",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1871",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.50812, 36.01216",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1871",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50815, 36.01187",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50813, 36.01159",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50835, 36.01225",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.50833, 36.01195",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50918, 36.01037",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1814",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50932, 36.01111",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1853",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50859, 36.01062",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.50866, 36.01019",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50914, 36.00766",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50772, 36.01429",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1840",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.50733, 36.01038",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50679, 36.01528",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50664, 36.01590",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.50794, 36.01679",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1848",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50808, 36.01815",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50869, 36.01840",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50891, 36.01854",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.50883, 36.01716",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50944, 36.01641",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50952, 36.01575",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.50964, 36.01486",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1907",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.51012, 36.01548",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.51166, 36.01654",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1810",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.51152, 36.01727",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1871",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.51146, 36.01774",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.51050, 36.01855",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.51019, 36.01846",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.51039, 36.01945",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.50918, 36.01856",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.50822, 36.01942",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.51357, 35.89700",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "MANSION",
                "WOOD"
            ]
        },
        {
            "latlon": "55.49582, 35.86094",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1953",
            "genres": [
                "STALIN"
            ],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.50392, 35.82839",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1860S",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50414, 35.82968",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1859",
            "genres": [
                "NEO_BYZANTIUM"
            ],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.50450, 35.82947",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1840",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "BELL_TOWER"
            ]
        },
        {
            "latlon": "55.50478, 35.82938",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1817",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50500, 35.82969",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "SQXIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50452, 35.83008",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1820",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.50464, 35.83061",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1839",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50453, 35.83085",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1838",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.50444, 35.83074",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SQXIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50420, 35.83042",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1840S",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50395, 35.83021",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1839",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50376, 35.82982",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "EN1860",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50368, 35.82905",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "EN1860",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50540, 35.82847",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "EN1860",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "HOTEL"
            ]
        },
        {
            "latlon": "55.52707, 35.81920",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1839",
            "genres": [],
            "types": [
                "PUBLIC"
            ]
        },
        {
            "latlon": "55.52728, 35.81793",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1701",
            "genres": [
                "MOSCOW_BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.56397, 35.85627",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1790",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50100, 35.66277",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1875",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50114, 35.66208",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1626",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.50133, 35.66268",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1785",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50130, 35.66109",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1794",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.50076, 35.66231",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FHXVIII",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.53102, 35.60530",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1957",
            "genres": [
                "STALIN"
            ],
            "types": [
                "PUBLIC"
            ]
        },
        {
            "latlon": "55.71510, 37.37341",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1915",
            "genres": [],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.67416, 37.27692",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.67158, 37.28039",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1870",
            "genres": [],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.67064, 37.27677",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1887",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.68210, 37.29309",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1801",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.68242, 37.29337",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1887",
            "genres": [],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.72497, 37.27205",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1759",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.12133, 40.39768",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1912",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13438, 40.37054",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1912",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13376, 40.37020",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13319, 40.36985",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13305, 40.37081",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12829, 40.37073",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1889",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13171, 40.38037",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1904",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13110, 40.38079",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1900",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13165, 40.38588",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "BGXX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.12943, 40.38836",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.12876, 40.38776",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.12851, 40.38892",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12836, 40.38594",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.12761, 40.38574",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1905",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.12796, 40.39199",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1950",
            "genres": [
                "STALIN"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.12779, 40.39337",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1950",
            "genres": [
                "STALIN"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.12721, 40.39340",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1956",
            "genres": [
                "STALIN"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.12619, 40.39411",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1914",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "56.12639, 40.39137",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1938",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "56.12696, 40.39608",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1870S",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.12643, 40.39605",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1916",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "OLD_BELIEF"
            ]
        },
        {
            "latlon": "56.12683, 40.39712",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1164",
            "genres": [
                "OLD_RUSSIAN"
            ],
            "types": []
        },
        {
            "latlon": "56.12730, 40.39694",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1908",
            "genres": [
                "MODERN"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.12675, 40.39778",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1792",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.12691, 40.39856",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12695, 40.39908",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12706, 40.39928",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12715, 40.39963",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12722, 40.39981",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12725, 40.40023",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12740, 40.40085",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12732, 40.40059",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12747, 40.40114",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12754, 40.40141",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1891",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.12757, 40.40175",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1798",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "56.12767, 40.40232",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "MDXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12774, 40.40260",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12784, 40.40279",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12788, 40.40404",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12810, 40.40432",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12813, 40.40483",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1910",
            "genres": [
                "MODERN"
            ],
            "types": []
        },
        {
            "latlon": "56.12814, 40.40453",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12922, 40.40467",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13020, 40.40243",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13049, 40.40192",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1830S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13054, 40.40134",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12998, 40.40112",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1863",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12982, 40.40047",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12908, 40.39840",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12899, 40.39787",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.12863, 40.39708",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1910",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.12854, 40.39772",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1911",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.12840, 40.39768",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.12851, 40.39907",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.12875, 40.40024",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12819, 40.39913",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12816, 40.39887",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.12851, 40.40078",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12843, 40.39568",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1909",
            "genres": [],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "56.12795, 40.39590",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "BGXX",
            "genres": [],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "56.12946, 40.39136",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.12910, 40.39626",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.12931, 40.39631",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.75273, 37.62870",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1681",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75277, 37.62919",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "ENXVII",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75252, 37.62952",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "MDXVIII",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75303, 37.63175",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1894",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75326, 37.63236",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1741",
            "genres": [
                "ANN_BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.75319, 37.63163",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1894",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75359, 37.63184",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1898",
            "genres": [],
            "types": [
                "HOTEL"
            ]
        },
        {
            "latlon": "55.75450, 37.63192",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1903",
            "genres": [
                "MODERN"
            ],
            "types": [
                "HOTEL",
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75564, 37.63053",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1915",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75603, 37.62953",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1812",
            "genres": [],
            "types": [
                "RENTAL",
                "SHOP"
            ]
        },
        {
            "latlon": "55.75557, 37.62837",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1891",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75528, 37.62753",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1882",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75463, 37.62627",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1875",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75371, 37.62739",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1840",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.75301, 37.62868",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1864",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75297, 37.63016",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 4,
            "date": "1892",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75321, 37.63106",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1896",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75362, 37.62588",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1805",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.75455, 37.62388",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1521",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75476, 37.62288",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1893",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.75511, 37.62239",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1873",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.75550, 37.62140",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1874",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74633, 37.60862",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1898",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74713, 37.60794",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1780S",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75642, 37.62194",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1910",
            "genres": [
                "MODERN"
            ],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75601, 37.62229",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1760S",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75635, 37.62283",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1950S",
            "genres": [
                "STALIN"
            ],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "55.75568, 37.62254",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1690",
            "genres": [],
            "types": [
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.75559, 37.62349",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1871",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75579, 37.62317",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1695",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "MONASTERY",
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75479, 37.62514",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1879",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "RENTAL",
                "SHOP",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75524, 37.62561",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1891",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "RENTAL",
                "SHOP",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75549, 37.62682",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1912",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75581, 37.62716",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1928",
            "genres": [
                "CONSTRUCTIVISM"
            ],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75628, 37.62669",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1874",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75607, 37.62612",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XVII",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75573, 37.62554",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1904",
            "genres": [
                "MODERN"
            ],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75603, 37.62536",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1863",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75643, 37.62630",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1899",
            "genres": [
                "MODERN"
            ],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75669, 37.62659",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1899",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75841, 37.62509",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1900",
            "genres": [],
            "types": [
                "OFFICE",
                "SHOP"
            ]
        },
        {
            "latlon": "55.75561, 37.61866",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1744",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "55.75575, 37.61985",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1900",
            "genres": [
                "MODERN"
            ],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.75680, 37.62110",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXVIII",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75705, 37.62127",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1895",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75662, 37.62143",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1895",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "SHOP"
            ]
        },
        {
            "latlon": "55.75645, 37.62111",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1900",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75653, 37.62084",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1709",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.75668, 37.62064",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1686",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.75613, 37.62049",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1897",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "SHOP",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.75684, 37.62175",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1901",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "BELL_TOWER"
            ]
        },
        {
            "latlon": "55.75715, 37.62183",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1893",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "SHOP"
            ]
        },
        {
            "latlon": "55.75743, 37.62252",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1815",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": []
        },
        {
            "latlon": "55.75791, 37.62321",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1870",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75891, 37.62287",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1871",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.75841, 37.62394",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1871",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.75875, 37.62355",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1871",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.75855, 37.62322",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1871",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.75850, 37.62152",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1905",
            "genres": [
                "MODERN"
            ],
            "types": [
                "HOTEL",
                "SHOP"
            ]
        },
        {
            "latlon": "55.75870, 37.62428",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1899",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.75841, 37.62613",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1911",
            "genres": [
                "MODERN"
            ],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75786, 37.62597",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1882",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75754, 37.62660",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1901",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75714, 37.62657",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1870S",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75689, 37.62679",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1900",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75630, 37.62809",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1875",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75654, 37.62871",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1911",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75664, 37.62919",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1911",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75741, 37.62806",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1837",
            "genres": [],
            "types": [
                "OUTBUILDING",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75759, 37.62781",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1837",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75757, 37.62742",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1837",
            "genres": [],
            "types": [
                "OUTBUILDING",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75778, 37.62731",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1882",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "56.26952, 38.67899",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1873",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.26987, 38.68171",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1857",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.27024, 38.68076",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1791",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.26983, 38.67996",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "HOTEL"
            ]
        },
        {
            "latlon": "56.27029, 38.67844",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1806",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.27023, 38.67819",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "WOOD"
            ]
        },
        {
            "latlon": "56.27030, 38.67973",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "SHELTER",
                "WOOD"
            ]
        },
        {
            "latlon": "56.27035, 38.67924",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1896",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.54413, 38.54006",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1873",
            "genres": [],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.35941, 38.42905",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.35959, 38.42816",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.35953, 38.42859",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.35907, 38.42813",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1900",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.35909, 38.42716",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "WOOD"
            ]
        },
        {
            "latlon": "56.35874, 38.42706",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.35869, 38.42767",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHAPEL"
            ]
        },
        {
            "latlon": "56.35839, 38.42812",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1893",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.35799, 38.42925",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.35807, 38.42779",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.35817, 38.42751",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.35828, 38.42671",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "STABLES"
            ]
        },
        {
            "latlon": "56.39187, 38.51709",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1831",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.42302, 38.68591",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1802",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.30835, 38.70933",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1870S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.30813, 38.70989",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1890S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.30801, 38.71080",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1890S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.30961, 38.71731",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1870S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73751, 37.62407",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1912",
            "genres": [],
            "types": [
                "CHAPEL",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.75710, 37.62843",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1875",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75664, 37.62708",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1903",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75241, 37.60543",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1818",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75538, 37.62639",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1911",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75057, 37.58717",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1899",
            "genres": [],
            "types": [
                "SCHOOL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75254, 37.61281",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1516",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "55.75772, 37.62769",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1837",
            "genres": [],
            "types": [
                "OUTBUILDING",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.74715, 37.58972",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 3,
            "date": "1867",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75881, 37.62254",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1538",
            "genres": [],
            "types": [
                "MILITARY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "55.50963, 36.01528",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.10017, 38.75447",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "MDXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.10273, 38.75200",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.09810, 38.76137",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "STXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.09723, 38.76225",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.68484, 37.56018",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1956",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.67918, 37.58583",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.67913, 37.58557",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE",
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.67953, 37.58549",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE",
                "STABLES"
            ]
        },
        {
            "latlon": "55.67898, 37.58515",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE",
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.67889, 37.58499",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.67904, 37.58421",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE",
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.67943, 37.58456",
            "status": null,
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE",
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.67766, 37.58690",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1780S",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.67784, 37.58953",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE",
                "PAVILION"
            ]
        },
        {
            "latlon": "55.67764, 37.58896",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE",
                "PAVILION"
            ]
        },
        {
            "latlon": "55.67925, 37.58784",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE",
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.67834, 37.58619",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.67770, 37.58532",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE",
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.67715, 37.58651",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.67691, 37.58535",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1780S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.74892, 37.60167",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1938",
            "genres": [
                "ART_DECO"
            ],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "55.74942, 37.60073",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1900S",
            "genres": [],
            "types": [
                "MILITARY",
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.74977, 37.60078",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1910S",
            "genres": [],
            "types": [
                "MILITARY"
            ]
        },
        {
            "latlon": "55.75073, 37.60151",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1910S",
            "genres": [],
            "types": [
                "MILITARY",
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.75043, 37.60326",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1801",
            "genres": [
                "STALIN"
            ],
            "types": [
                "MILITARY",
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.75302, 37.60406",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1887",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75317, 37.60530",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1871",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75369, 37.60557",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1871",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75522, 37.60687",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75423, 37.60637",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75389, 37.60625",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "BGXIX",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.75292, 37.60715",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1799",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75284, 37.60827",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1929",
            "genres": [
                "CONSTRUCTIVISM"
            ],
            "types": [
                "HOSPITAL"
            ]
        },
        {
            "latlon": "55.75460, 37.61156",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1836",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75519, 37.60977",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1797",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75472, 37.60900",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1897",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.80007, 37.63845",
            "status": "RUINS",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1835",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.81569, 37.64869",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1954",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.81517, 37.64932",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1955",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.81560, 37.65008",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1954",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.79644, 37.63774",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1900S",
            "genres": [],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.79974, 37.63848",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 2,
            "date": "1835",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.79993, 37.63945",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1835",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.41239, 37.17418",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.41190, 37.17578",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.31694, 37.15087",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.31800, 37.15024",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1760S",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.31514, 37.15171",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "SHXVIII",
            "genres": [],
            "types": [
                "ESTATE",
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.31770, 37.15227",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "SHXVIII",
            "genres": [],
            "types": [
                "ESTATE",
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.79959, 37.64114",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1917",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "CHAPEL"
            ]
        },
        {
            "latlon": "55.80960, 37.64785",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1892",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.80980, 37.64815",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1892",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.80963, 37.64898",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1892",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.80950, 37.64998",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1892",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.80870, 37.65047",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1892",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.80936, 37.65501",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1907",
            "genres": [],
            "types": [
                "SHELTER",
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.80860, 37.65459",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1901",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.80800, 37.65434",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1903",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.80769, 37.65378",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1901",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.80751, 37.65434",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1901",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.80840, 37.65509",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1901",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.80919, 37.65576",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1901",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.80886, 37.65637",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1901",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.82809, 37.65014",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1956",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.81177, 37.63930",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1955",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.81065, 37.63831",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1953",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.80397, 37.63703",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1959",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.75424, 37.60807",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1897",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75354, 37.60770",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1895",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75391, 37.60949",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1691",
            "genres": [
                "NARYSHKIN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75406, 37.60992",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1778",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75399, 37.61025",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1832",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75359, 37.61009",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1911",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.75418, 37.60858",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1937",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.75485, 37.58456",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1953",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.75652, 37.58488",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1912",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75595, 37.59179",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75579, 37.59221",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1888",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75635, 37.59039",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75660, 37.58820",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75631, 37.58888",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1818",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75561, 37.59050",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1823",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75396, 37.58934",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1892",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.75417, 37.58642",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1885",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75439, 37.58645",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1886",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75474, 37.58655",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1822",
            "genres": [],
            "types": [
                "MANSION",
                "WOOD"
            ]
        },
        {
            "latlon": "55.75519, 37.58671",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1913",
            "genres": [],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "55.75550, 37.58685",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1876",
            "genres": [
                "NEO_BYZANTIUM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75578, 37.58699",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1840S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75537, 37.58744",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "FTXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.75590, 37.58748",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "MANSION",
                "WOOD"
            ]
        },
        {
            "latlon": "55.75437, 37.58691",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "1906",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75389, 37.58580",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75735, 37.58509",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1949",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.75482, 37.58707",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75323, 37.60364",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1899",
            "genres": [
                "NEO_MUDEJAR"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75756, 37.58579",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1952",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.75540, 37.59395",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75538, 37.60899",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "XVIII",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75344, 37.60010",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1911",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.79104, 37.57110",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1901",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.79355, 37.55217",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1779",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "PALACE"
            ]
        },
        {
            "latlon": "55.79689, 37.55876",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1939",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.80593, 37.54828",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1949",
            "genres": [
                "STALIN"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.80988, 37.53521",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1954",
            "genres": [
                "STALIN"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.81411, 37.52782",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1901",
            "genres": [],
            "types": [
                "TRANSPORT",
                "WOOD"
            ]
        },
        {
            "latlon": "55.81405, 37.52826",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1901",
            "genres": [],
            "types": [
                "TRANSPORT",
                "WOOD"
            ]
        },
        {
            "latlon": "55.81408, 37.52862",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1901",
            "genres": [],
            "types": [
                "TRANSPORT",
                "WOOD"
            ]
        },
        {
            "latlon": "55.81372, 37.52914",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1901",
            "genres": [],
            "types": [
                "TRANSPORT",
                "WOOD"
            ]
        },
        {
            "latlon": "55.81387, 37.53043",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1901",
            "genres": [],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.80231, 37.52925",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1940",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.80090, 37.53375",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "V_FORMING",
            "rating": 4,
            "date": "1938",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.79615, 37.54348",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1951",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.79760, 37.54093",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1905",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.79739, 37.54923",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1900S",
            "genres": [],
            "types": [
                "EATERY"
            ]
        },
        {
            "latlon": "55.79645, 37.54970",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1908",
            "genres": [
                "MODERN"
            ],
            "types": [
                "HOTEL",
                "EATERY"
            ]
        },
        {
            "latlon": "55.75560, 37.63410",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1844",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75565, 37.63423",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1853",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75468, 37.64056",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1879",
            "genres": [],
            "types": [
                "MONASTERY",
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75393, 37.64043",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "XIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75424, 37.63971",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "XIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75471, 37.63924",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "XIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.79591, 37.55247",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.79568, 37.55284",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1847",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.79673, 37.55323",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1909",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.79616, 37.55912",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1953",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.75840, 37.62979",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1876",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75821, 37.63017",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1694",
            "genres": [
                "NARYSHKIN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75749, 37.63218",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1657",
            "genres": [
                "NARYSHKIN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75765, 37.63314",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL",
                "SHOP",
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75859, 37.63227",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1900",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75841, 37.63100",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "FHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75985, 37.63018",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1897",
            "genres": [],
            "types": [
                "RENTAL",
                "SHOP"
            ]
        },
        {
            "latlon": "55.76267, 37.63709",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1910",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.76265, 37.63780",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1875",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76247, 37.63860",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1836",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75368, 37.64355",
            "status": "RUINS",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1750S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75722, 37.64544",
            "status": "RUINS",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1900",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76318, 37.63894",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1707",
            "genres": [
                "NARYSHKIN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.76193, 37.63911",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1904",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76160, 37.63972",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1900S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76126, 37.64036",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1825",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.76169, 37.64056",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1917",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.76132, 37.64112",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1917",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.76091, 37.64148",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1811",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.76046, 37.64168",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75977, 37.64132",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1912",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75916, 37.64137",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1781",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76097, 37.64069",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1789",
            "genres": [],
            "types": [
                "OUTBUILDING",
                "RENTAL",
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.76052, 37.64010",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76031, 37.63974",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1870",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75985, 37.64026",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "B_XVII",
            "genres": [],
            "types": [
                "PALATY"
            ]
        },
        {
            "latlon": "55.76036, 37.63905",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1863",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.76000, 37.63908",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1774",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75940, 37.63851",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1911",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75913, 37.63893",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1917",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75958, 37.63882",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1820S",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75880, 37.63989",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1877",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75878, 37.64050",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1802",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75882, 37.64093",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75897, 37.64036",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1848",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75919, 37.64065",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1809",
            "genres": [],
            "types": [
                "OUTBUILDING",
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75855, 37.63945",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1880",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75841, 37.63892",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1913",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.75858, 37.63874",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1740S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75877, 37.63773",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1880",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75914, 37.63829",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1790S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75937, 37.63784",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1790S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75877, 37.63835",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1790S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75955, 37.63823",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1790S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75939, 37.63697",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1849",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75916, 37.63632",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1690",
            "genres": [],
            "types": [
                "PALATY"
            ]
        },
        {
            "latlon": "55.75876, 37.63631",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1910",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75934, 37.63519",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1905",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75918, 37.63477",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1887",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.84920, 37.58415",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1859",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.86526, 37.63803",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1640",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75913, 37.63421",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1862",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75847, 37.63411",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75855, 37.63479",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1878",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.75816, 37.63478",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1901",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75820, 37.63430",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1896",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75804, 37.63372",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1816",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75774, 37.63432",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1892",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.75780, 37.63577",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1760S",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "SHELTER",
                "HOTEL",
                "SCHOOL",
                "SHOP"
            ]
        },
        {
            "latlon": "55.75846, 37.63647",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1905",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75796, 37.63677",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1873",
            "genres": [],
            "types": [
                "RENTAL",
                "SHOP"
            ]
        },
        {
            "latlon": "55.75841, 37.63376",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1890",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75839, 37.63304",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1913",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.75866, 37.63276",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1900",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75986, 37.63170",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1871",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74540, 37.59064",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1901",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74524, 37.59169",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "FHXVII",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.75217, 37.60677",
            "status": "RUINS",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1787",
            "genres": [],
            "types": [
                "STABLES"
            ]
        },
        {
            "latlon": "55.74562, 37.60131",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "SHXVIII",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74584, 37.60204",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1857",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "55.74764, 37.59241",
            "status": "NET",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1814",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74732, 37.59022",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "HISTORY",
            "rating": 3,
            "date": "1822",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74589, 37.60175",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1873",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74652, 37.60083",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1816",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74690, 37.60137",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1810S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74712, 37.60157",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1810S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74733, 37.60174",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1835",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74787, 37.60212",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1830",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74859, 37.60211",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1906",
            "genres": [
                "MODERN"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74969, 37.60510",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1911",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74958, 37.60552",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1913",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75003, 37.60499",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1913",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74984, 37.60550",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74956, 37.60634",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1899",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74860, 37.60522",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1900",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74832, 37.60496",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1912",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74748, 37.60727",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 5,
            "date": "1804",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74796, 37.60787",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1788",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74552, 37.60334",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74605, 37.60231",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1830S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74637, 37.60799",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1907",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74750, 37.60233",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74684, 37.60858",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1884",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74713, 37.60867",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1764",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74740, 37.60974",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1812",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74786, 37.61029",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74808, 37.61003",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74795, 37.60940",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1886",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74741, 37.60808",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1906",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74678, 37.58685",
            "status": "NET",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1901",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75500, 37.60881",
            "status": "NET",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "SHXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75354, 37.60726",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1800S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75377, 37.60701",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1800S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75357, 37.60363",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1899",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75085, 37.58897",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1913",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75067, 37.58950",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1901",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74863, 37.59022",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "1827",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74748, 37.59011",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1887",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75046, 37.59930",
            "status": "UNREACHABLE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 0,
            "date": "1909",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74659, 37.60823",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1903",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74709, 37.60755",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1879",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74689, 37.60729",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1811",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75504, 37.59491",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1911",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.75564, 37.59198",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1947",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.75658, 37.58704",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1950",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.75583, 37.58833",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1912",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75551, 37.58936",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "FTXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75523, 37.58881",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1946",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.75465, 37.58840",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1914",
            "genres": [],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.75430, 37.58563",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1905",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75356, 37.58496",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1902",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75371, 37.59995",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75558, 37.60788",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1935",
            "genres": [
                "ART_DECO"
            ],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.75457, 37.60827",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75417, 37.60710",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1899",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75433, 37.61059",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1790S",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.75348, 37.61101",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1901",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.75325, 37.60456",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1888",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74643, 37.60679",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1815",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74663, 37.60519",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74719, 37.60214",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1910",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74649, 37.60169",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1827",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74798, 37.60530",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "U1624",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.74824, 37.60603",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "FTXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74902, 37.60630",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1840",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74925, 37.60651",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1828",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74932, 37.60746",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1760S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74924, 37.60768",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1820S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74828, 37.60821",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74320, 37.59609",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1910",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74375, 37.59419",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1903",
            "genres": [
                "MODERN"
            ],
            "types": [
                "MANSION"
            ]
        },
        {
            "latlon": "55.74223, 37.59357",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1836",
            "genres": [],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "55.73727, 37.57524",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74236, 37.58806",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "BGXIX",
            "genres": [
                "EMPIRE"
            ],
            "types": []
        },
        {
            "latlon": "55.74106, 37.58557",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1892",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74556, 37.58939",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1890",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74310, 37.58891",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1816",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74174, 37.58727",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1818",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74062, 37.59068",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1820 г.",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE",
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.74059, 37.59012",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1820S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74085, 37.59093",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1820S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74090, 37.59000",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1820S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74102, 37.59059",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1820S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.73938, 37.58878",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1817",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "55.73952, 37.58913",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1838",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.73961, 37.58926",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1786",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73999, 37.59010",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1937",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.74025, 37.59080",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74042, 37.59131",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1911",
            "genres": [
                "MODERN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74054, 37.59164",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74069, 37.59215",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "U1802",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74097, 37.59277",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1770S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74133, 37.59366",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1780",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74226, 37.59559",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74276, 37.59683",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1822",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74330, 37.59828",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74376, 37.59942",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.73709, 37.57517",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73572, 37.57408",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1927",
            "genres": [
                "CONSTRUCTIVISM"
            ],
            "types": [
                "DK"
            ]
        },
        {
            "latlon": "55.73195, 37.56969",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1896 г.",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "HOSPITAL"
            ]
        },
        {
            "latlon": "55.72951, 37.56356",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1891",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "HOSPITAL"
            ]
        },
        {
            "latlon": "55.72904, 37.56342",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1903",
            "genres": [
                "RUSSIAN_BYZANTIUM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.73020, 37.56171",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1820",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.73019, 37.56259",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.73195, 37.56340",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1890",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.73235, 37.56321",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.73198, 37.56145",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1911",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.73193, 37.56059",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1911",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.73203, 37.56222",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1880",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.73229, 37.56063",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1911",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.73237, 37.56116",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1911",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.73257, 37.56231",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1900",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.73323, 37.56370",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1889",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.73330, 37.56491",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1887",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.73302, 37.56456",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1886",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.73257, 37.56445",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.73447, 37.56712",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1880S",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.73496, 37.56751",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1800S",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.73500, 37.56801",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1817",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.73608, 37.57232",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1880",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.74415, 37.58292",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1956",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.74200, 37.58383",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1914",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74102, 37.58400",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1819",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73771, 37.57777",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1937",
            "genres": [
                "CONSTRUCTIVISM",
                "ART_DECO"
            ],
            "types": []
        },
        {
            "latlon": "55.73807, 37.57630",
            "status": "RESHOT",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73979, 37.57297",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73889, 37.57710",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1818",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "MANSION",
                "WOOD"
            ]
        },
        {
            "latlon": "55.73899, 37.57859",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73967, 37.57767",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73958, 37.57941",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1900",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73936, 37.58014",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73884, 37.58259",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "EN1830S",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74067, 37.58345",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1912",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74081, 37.58250",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1820S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.73990, 37.58216",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 1,
            "date": "1916",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74052, 37.58194",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1916",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.73975, 37.58123",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1910",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74088, 37.58047",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1898",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74092, 37.57889",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74061, 37.57869",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74031, 37.57804",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74057, 37.57820",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1850S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74128, 37.57834",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1912",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74196, 37.57784",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1912",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74323, 37.57740",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "1891",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74331, 37.57934",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1914 г.",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74228, 37.57937",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1902",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74146, 37.57899",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1886",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75113, 37.61085",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1826",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75151, 37.61118",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1910",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75187, 37.61131",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1868",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75585, 37.61918",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1697",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "PALATY"
            ]
        },
        {
            "latlon": "55.75605, 37.61890",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "XVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75725, 37.62194",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1747",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75753, 37.62212",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1559",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75767, 37.62264",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1759",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75806, 37.62252",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1870",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75837, 37.62281",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1870",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75708, 37.62333",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1691",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75729, 37.62483",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75672, 37.62562",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1880S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75503, 37.62796",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1880S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75463, 37.62816",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1880S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75467, 37.62859",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1892",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75390, 37.62779",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1875",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75372, 37.62926",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1858",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75339, 37.62952",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL",
                "SHOP"
            ]
        },
        {
            "latlon": "55.75366, 37.63036",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1670-е",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "PALATY"
            ]
        },
        {
            "latlon": "55.75350, 37.63043",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1670S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.75400, 37.63141",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1653",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75638, 37.62001",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1821",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.75520, 37.63119",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1915",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75795, 37.62434",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1900S",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75899, 37.62548",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1907",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75825, 37.62648",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1882",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75813, 37.62674",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1882",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75797, 37.62723",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1882",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.75780, 37.62948",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1907",
            "genres": [
                "RUSSIAN",
                "MODERN"
            ],
            "types": [
                "SCIENCE",
                "CULTURE"
            ]
        },
        {
            "latlon": "55.75864, 37.62941",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1874",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.75891, 37.63134",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1882",
            "genres": [],
            "types": [
                "RENTAL",
                "SHOP"
            ]
        },
        {
            "latlon": "55.75922, 37.63094",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1905",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.75889, 37.63089",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1905",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76051, 37.62781",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1948",
            "genres": [
                "STALIN"
            ],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "55.76019, 37.62978",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1895",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.76039, 37.63029",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1908",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.76060, 37.63101",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1787",
            "genres": [
                "ROCOCO"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.76114, 37.62990",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1870S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76093, 37.63162",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1860",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76096, 37.63114",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1790S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76121, 37.63040",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1902",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76120, 37.63120",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76139, 37.63067",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 1,
            "date": "1900S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76146, 37.63143",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1898",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.76193, 37.63147",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1908",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "55.76264, 37.63131",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1830",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "CATHOLIC"
            ]
        },
        {
            "latlon": "55.76305, 37.63074",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1895 г.",
            "genres": [],
            "types": [
                "SHELTER",
                "CATHOLIC"
            ]
        },
        {
            "latlon": "55.76307, 37.63165",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1899",
            "genres": [],
            "types": [
                "SCHOOL",
                "CATHOLIC"
            ]
        },
        {
            "latlon": "55.76433, 37.63156",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1905",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.76585, 37.63351",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1902",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.76535, 37.63297",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1916",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.76535, 37.63415",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "MDXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.76528, 37.63370",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "XVIII",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76516, 37.63437",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "SHXVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.76479, 37.63501",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1899",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.76433, 37.63604",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1793",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.76396, 37.63583",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1893",
            "genres": [
                "CHINESE"
            ],
            "types": [
                "SHOP",
                "RENTAL"
            ]
        },
        {
            "latlon": "55.76419, 37.63523",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.76442, 37.63460",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.76374, 37.63467",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1880",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76407, 37.63468",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76471, 37.63429",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1900",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.76431, 37.63386",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "CATHOLIC",
                "PRICHT"
            ]
        },
        {
            "latlon": "55.76498, 37.63273",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1850",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "CATHOLIC",
                "SHELTER"
            ]
        },
        {
            "latlon": "55.76462, 37.63298",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1845",
            "genres": [
                "NEO_GOTHIC"
            ],
            "types": [
                "CATHOLIC",
                "CHURCH"
            ]
        },
        {
            "latlon": "55.76426, 37.63241",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1905",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76395, 37.63224",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1905",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76400, 37.63269",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "XVIII",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.76340, 37.63300",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1770S",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76265, 37.63207",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1905",
            "genres": [],
            "types": [
                "OUTBUILDING"
            ]
        },
        {
            "latlon": "55.76215, 37.63199",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1842",
            "genres": [
                "EMPIRE"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.76193, 37.63191",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.76209, 37.63309",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1898",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76239, 37.63347",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1892",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.76220, 37.63379",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1913",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "55.76263, 37.63438",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1865",
            "genres": [],
            "types": [
                "RENTAL",
                "SHOP"
            ]
        },
        {
            "latlon": "55.76290, 37.63419",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1898",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.76303, 37.63487",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1910",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "RENTAL",
                "OFFICE"
            ]
        },
        {
            "latlon": "55.76346, 37.63532",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1876",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "56.41597, 38.42616",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1790",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.28755, 38.46798",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1865",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.30946, 38.47230",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1815",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.26920, 38.67900",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "XIX",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.26946, 38.68072",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "XIX в.",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.15521, 38.85911",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "Конец XIX в.",
            "genres": [],
            "types": [
                "EATERY"
            ]
        },
        {
            "latlon": "56.16140, 38.87112",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1850S",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.16118, 38.86918",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1870",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.16199, 38.86877",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.16190, 38.86936",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "U1564",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.16204, 38.86960",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 5,
            "date": "1656",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.16141, 38.86989",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXVII",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.16183, 38.87007",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1866",
            "genres": [
                "RUSSIAN_BYZANTIUM"
            ],
            "types": [
                "MONASTERY",
                "ORTHODOXY",
                "CHURCH",
                "BELL_TOWER"
            ]
        },
        {
            "latlon": "56.16233, 38.87341",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "RENTAL",
                "WOOD",
                "SHOP"
            ]
        },
        {
            "latlon": "56.16260, 38.87403",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16261, 38.87129",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "SCHOOL",
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "56.16290, 38.87005",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "FIRE"
            ]
        },
        {
            "latlon": "56.16382, 38.87065",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.16190, 38.87252",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.16288, 38.87353",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "Вторая половина XIX в.",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.16308, 38.87317",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "OFFICE"
            ]
        },
        {
            "latlon": "56.16431, 38.87188",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.16323, 38.87252",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.16462, 38.87146",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.16512, 38.87275",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "WOOD",
                "OFFICE"
            ]
        },
        {
            "latlon": "56.16545, 38.87349",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "LQXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16560, 38.87384",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "1906",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16430, 38.87255",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "TQXIX",
            "genres": [],
            "types": [
                "WOOD",
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.16388, 38.87315",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16416, 38.87460",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.16357, 38.87338",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.16329, 38.87413",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.16276, 38.87445",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16289, 38.87475",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16315, 38.87525",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.16328, 38.87554",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.16377, 38.87667",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16388, 38.87695",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16338, 38.87923",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.14067, 38.86873",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.14094, 38.86809",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.14786, 38.88258",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "WOOD",
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.15414, 38.86138",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1764",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.15458, 38.86069",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.15673, 38.86980",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1894",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.15440, 38.85759",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.15725, 38.87084",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "Начало XX в.",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.15818, 38.86911",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "LQXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.15882, 38.87065",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.15860, 38.87483",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.15991, 38.87301",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.15941, 38.87100",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "LQXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16068, 38.87162",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1959",
            "genres": [
                "STALIN"
            ],
            "types": [
                "DK"
            ]
        },
        {
            "latlon": "56.16005, 38.86932",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "LQXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.15986, 38.86889",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "LQXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.15979, 38.86877",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1880S",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16012, 38.87728",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.15961, 38.87614",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "Конец XIX в.",
            "genres": [],
            "types": [
                "WOOD",
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.15905, 38.87507",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1897",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16095, 38.87524",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX в.",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16119, 38.87486",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16043, 38.87318",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.16153, 38.87268",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.16159, 38.87285",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.16171, 38.87313",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.16183, 38.87341",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.16203, 38.87382",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.16201, 38.87359",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.16204, 38.87477",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "Конец XIX в.",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16217, 38.87412",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "HOTEL"
            ]
        },
        {
            "latlon": "56.15987, 38.88333",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16217, 38.87789",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16260, 38.87794",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "LQXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16323, 38.87658",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1880",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.16316, 38.87628",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16301, 38.87599",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16287, 38.87584",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.16259, 38.87516",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.16245, 38.87488",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "EATERY"
            ]
        },
        {
            "latlon": "56.16053, 38.88392",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "Конец XIX в.",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16081, 38.88279",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "Конец XIX в.",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16208, 38.88467",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "Начало XX в.",
            "genres": [],
            "types": [
                "WOOD",
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.16221, 38.88489",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1893",
            "genres": [],
            "types": [
                "WOOD",
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.16480, 38.88503",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "LQXIX",
            "genres": [],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "56.16461, 38.88340",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1898",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.16431, 38.88272",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1898",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.16509, 38.88293",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "BGXX",
            "genres": [
                "NEO_CLASSICISM"
            ],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "56.16520, 38.88339",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.16532, 38.88364",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.17190, 38.88559",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD",
                "PRICHT",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.17224, 38.88530",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1846",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.17216, 38.77298",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 4,
            "date": "1748",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.30649, 38.71846",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1890S",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.30741, 38.71885",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "BGXX",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.30809, 38.71744",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1860-е",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.30873, 38.72056",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1893",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.30883, 38.71833",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1867",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.31756, 39.12985",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1501",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.31772, 39.13024",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1751",
            "genres": [],
            "types": [
                "WOOD",
                "ORTHODOXY",
                "MONASTERY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.31500, 39.09425",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1830",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.38231, 39.06220",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "1826",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.36918, 38.64830",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1817",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.39741, 38.72894",
            "status": "NET",
            "visibility": "ADMIN",
            "cultureStatus": null,
            "rating": 0,
            "date": "U1905",
            "genres": [],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "56.37298, 38.58486",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1880S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.37300, 38.58578",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1880S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.37466, 38.58371",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1880S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.37505, 38.58514",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": null,
            "rating": 3,
            "date": "1900S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39798, 38.70466",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1903 г.",
            "genres": [],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "56.39939, 38.70684",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1903",
            "genres": [],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "56.39940, 38.70689",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "56.39824, 38.70568",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1905",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.40214, 38.71242",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.40225, 38.71338",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.31709, 38.71404",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1907",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.31189, 38.70708",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.31177, 38.70717",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.31165, 38.70719",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.30884, 38.71228",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1883",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.30884, 38.71365",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "LQXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39357, 38.71632",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1800",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.39738, 38.71847",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1912",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.39566, 38.72037",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD",
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.39565, 38.72016",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD",
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.39534, 38.72084",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1840S",
            "genres": [],
            "types": [
                "INDUSTRY",
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.39481, 38.72612",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39775, 38.72504",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39306, 38.73283",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39330, 38.73259",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39585, 38.72874",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.39614, 38.72863",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1696",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.39601, 38.72757",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.39693, 38.72836",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "SHELTER",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.39746, 38.72961",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39752, 38.73049",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39764, 38.73214",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.39764, 38.73249",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1873",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.39745, 38.73262",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "XIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.39775, 38.73387",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.39866, 38.74000",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.39938, 38.74206",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "MDXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39868, 38.74220",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1897",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.35967, 38.72863",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 5,
            "date": "XVIII",
            "genres": [],
            "types": [
                "ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "56.37894, 38.97270",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1880",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.37627, 39.01784",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1794",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.27419, 38.97180",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1737",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.30202, 39.21097",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1819",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.42436, 38.66015",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.50348, 38.71035",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1714",
            "genres": [],
            "types": [
                "FORTRESS",
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.50452, 38.71240",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1690",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.50444, 38.71173",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "1714",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.50359, 38.71245",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1712",
            "genres": [
                "NARYSHKIN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.50411, 38.71262",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1684",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.50398, 38.71383",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "FHXVIII",
            "genres": [],
            "types": [
                "MONASTERY",
                "FORTRESS",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.40082, 38.72235",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "SHXVIII",
            "genres": [],
            "types": [
                "MILITARY",
                "STABLES"
            ]
        },
        {
            "latlon": "56.39828, 38.72365",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39801, 38.72264",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1860S",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39799, 38.72312",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.39805, 38.72382",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "MDXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.40164, 38.72756",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.40054, 38.72450",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1855",
            "genres": [],
            "types": [
                "WOOD",
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.39965, 38.72798",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39913, 38.72538",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.39926, 38.72662",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39812, 38.72564",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39818, 38.72662",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "MDXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39821, 38.72689",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39824, 38.72741",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "56.39873, 38.72885",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39872, 38.73011",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39870, 38.73093",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.39875, 38.73159",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.39879, 38.73193",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.39885, 38.73259",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.39843, 38.73306",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.39782, 38.72948",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.39793, 38.73074",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.39797, 38.73197",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.39800, 38.73246",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.39901, 38.73935",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1680S",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "56.39963, 38.74073",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "XVIII",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.40005, 38.74174",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1513",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.40035, 38.74322",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1680S",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "56.40007, 38.73988",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "BGXVI",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "BELL_TOWER",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.40027, 38.74105",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1825",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "CHAPEL"
            ]
        },
        {
            "latlon": "56.40097, 38.74231",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "STABLES"
            ]
        },
        {
            "latlon": "56.40057, 38.74088",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1823",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.40091, 38.74055",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1513",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.40051, 38.73944",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1513",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.40012, 38.73856",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1682",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.40000, 38.73864",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "XVIII",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.40221, 38.74097",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1680S",
            "genres": [],
            "types": [
                "MONASTERY",
                "FORTRESS",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.40196, 38.74070",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REVEALED",
            "rating": 0,
            "date": "XIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.40127, 38.73941",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1682",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.40104, 38.73774",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1680S",
            "genres": [],
            "types": [
                "MONASTERY",
                "FORTRESS",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.39913, 38.74140",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "MONASTERY",
                "HOTEL",
                "WOOD",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.39805, 38.73308",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "SCHOOL",
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.40159, 38.73806",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1742",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.40141, 38.73628",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "1843",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.40309, 38.73689",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.43442, 38.78348",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1698",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.52098, 38.78152",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1808",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.46181, 38.83771",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1820",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.46659, 38.90186",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1839",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.41302, 38.93992",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1831",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.44314, 38.96049",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1827",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.48780, 39.03337",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1819",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.54416, 39.05508",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1830",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.37805, 39.23007",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1881",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.43867, 39.17408",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REVEALED",
            "rating": 0,
            "date": "1765",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.53676, 39.22074",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1858",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.38978, 39.36095",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "XVIII",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.40917, 39.34131",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1872",
            "genres": [
                "RUSSIAN_BYZANTIUM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.44990, 39.47958",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1777",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.49904, 39.49770",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1838",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.42037, 39.53311",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REVEALED",
            "rating": 0,
            "date": "1820",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.57106, 39.49459",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1821",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.59070, 39.58005",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1830",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.58381, 39.62389",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1812",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.64623, 39.55144",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1891",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.59644, 39.70829",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1894",
            "genres": [],
            "types": [
                "BELL_TOWER",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.72995, 39.65807",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1886",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.66721, 39.83566",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "TQXVII",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.45939, 39.32301",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1836",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.36345, 39.37032",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1741",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.36428, 39.43283",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1807",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.51351, 39.50675",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1846",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.49748, 39.66897",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1846",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.50401, 39.66827",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.50450, 39.66841",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.50615, 39.67118",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.50693, 39.67146",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.50679, 39.67460",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "1903",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.50719, 39.67473",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "1904",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.50534, 39.67932",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.50383, 39.67933",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": [
                "WOOD",
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.50314, 39.67849",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.50524, 39.68241",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "1870",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.50146, 39.63684",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1792",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.51049, 39.58201",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1810",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.55731, 39.51772",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1826",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.55552, 39.65893",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1805",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.62873, 39.49952",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1761",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.64275, 39.59452",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1829",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.64230, 39.58171",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "XIX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.64181, 39.58312",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "XIX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.64193, 39.58372",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "XIX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "55.74144, 37.58610",
            "status": "NET",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1904",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74577, 37.59675",
            "status": "NET",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1908",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74876, 37.60596",
            "status": "NET",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1914",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74784, 37.60274",
            "status": "NET",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1711",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74774, 37.60666",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1907",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74792, 37.60662",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1870S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74761, 37.61066",
            "status": "NET",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "XVIII",
            "genres": [],
            "types": [
                "SCHOOL",
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74782, 37.60756",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "1788",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74794, 37.60731",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "TQXVII",
            "genres": [],
            "types": [
                "CITY_ESTATE",
                "PALATY"
            ]
        },
        {
            "latlon": "55.74815, 37.60746",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "1788",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74825, 37.60735",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "1806",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74838, 37.60717",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "1810S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74948, 37.60478",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1900",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74900, 37.60409",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "U1752",
            "genres": [],
            "types": [
                "CITY_ESTATE",
                "MUSEUM"
            ]
        },
        {
            "latlon": "55.74629, 37.60333",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "1880",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74627, 37.60374",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74607, 37.58662",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1914",
            "genres": [],
            "types": [
                "HOSPITAL",
                "MANSION"
            ]
        },
        {
            "latlon": "55.74639, 37.58785",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1800",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74692, 37.59430",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1871",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74663, 37.59416",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1898",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74620, 37.59422",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REVEALED",
            "rating": 0,
            "date": "XIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74411, 37.59416",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1902",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74215, 37.59084",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1901",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74333, 37.58673",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1898",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74302, 37.58678",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1890S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74278, 37.58695",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REVEALED",
            "rating": 0,
            "date": "1911",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74174, 37.58768",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1886",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74147, 37.58769",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "HISTORY",
            "rating": 0,
            "date": "BGXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74104, 37.58682",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1914",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74057, 37.58741",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1901",
            "genres": [],
            "types": [
                "POLICE"
            ]
        },
        {
            "latlon": "55.74431, 37.59691",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "XIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74416, 37.59722",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "XIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74448, 37.59868",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74450, 37.59909",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1840S",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74449, 37.59941",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REVEALED",
            "rating": 0,
            "date": "1806",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "55.74015, 37.58811",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "HISTORY",
            "rating": 0,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "POLICE"
            ]
        },
        {
            "latlon": "55.74385, 37.60196",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "1904",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "56.68261, 39.54822",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.68298, 39.54736",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.68310, 39.54832",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "SHXVIII",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.68566, 39.55295",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1775",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.68605, 39.55403",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 1,
            "date": "XIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.68553, 39.55537",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.76432, 39.52958",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "ESTATE",
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.76532, 39.53074",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1902",
            "genres": [],
            "types": [
                "ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "56.76634, 39.52999",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1902",
            "genres": [],
            "types": [
                "ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "56.76662, 39.53013",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "56.76688, 39.53260",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.76573, 39.53440",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "BGXX",
            "genres": [],
            "types": [
                "ESTATE",
                "WOOD"
            ]
        },
        {
            "latlon": "56.76757, 39.53105",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "BGXX",
            "genres": [],
            "types": [
                "ESTATE",
                "INDUSTRY"
            ]
        },
        {
            "latlon": "56.68790, 39.80586",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1659",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.99748, 38.84203",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1916",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.96538, 38.97359",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "U1917",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.09596, 38.86710",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1828",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.04903, 39.01976",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1825",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.03493, 38.94280",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1823",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.00173, 38.92873",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1890",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.03384, 39.05044",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1837",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.00983, 39.00851",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1887",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "CHAPEL"
            ]
        },
        {
            "latlon": "56.00953, 39.01052",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1908",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.99324, 38.99521",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1813",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "BELL_TOWER"
            ]
        },
        {
            "latlon": "55.96981, 39.10007",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1827",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.92592, 39.12003",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "XIX",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.92562, 39.11931",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "XIX",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.92552, 39.11976",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1775",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.92531, 39.11993",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1894",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.92059, 39.16996",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1910",
            "genres": [
                "MODERN"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.92060, 39.17301",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "HOSPITAL"
            ]
        },
        {
            "latlon": "55.91936, 39.17746",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": [
                "WOOD",
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.91946, 39.17779",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1910",
            "genres": [],
            "types": [
                "WOOD",
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.91874, 39.17773",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1836",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.91812, 39.17623",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.23642, 39.15366",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1829",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.23566, 39.19916",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REVEALED",
            "rating": 0,
            "date": "1863",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.22826, 39.28334",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1842",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.18049, 39.10491",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1814",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.18940, 39.16496",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1843",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.20759, 39.46434",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1815",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.10611, 39.01504",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1890S",
            "genres": [],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.15029, 39.19464",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1819",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.14297, 39.14272",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REVEALED",
            "rating": 0,
            "date": "1903",
            "genres": [],
            "types": [
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.09571, 39.09077",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1831",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.08584, 39.17480",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "FHXIX",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.02172, 39.18920",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1885",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.99699, 39.32838",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1835",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.91944, 39.17859",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "TREASURE"
            ]
        },
        {
            "latlon": "55.91844, 39.17947",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.91857, 39.18064",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.91854, 39.18088",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.91859, 39.18130",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.91864, 39.18165",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.91866, 39.18208",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.91926, 39.18383",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "55.91925, 39.18403",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "55.91933, 39.18460",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.94758, 39.21840",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1835",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.98443, 39.35615",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1912",
            "genres": [],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.93932, 39.46916",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1910",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.01042, 39.54966",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "BG1890S",
            "genres": [],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.03010, 39.62750",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "ENXIX",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHAPEL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.07789, 39.58313",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1867",
            "genres": [
                "RUSSIAN_BYZANTIUM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.13180, 39.52222",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1730",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.13182, 39.52276",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1864",
            "genres": [
                "RUSSIAN_BYZANTIUM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.07335, 39.44658",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.18714, 39.47415",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1849",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.15208, 39.61070",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1867",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.18656, 39.76231",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.08617, 40.01581",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1837",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.03156, 39.65114",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1783",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.02914, 39.64744",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1774",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.03277, 39.65065",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.03104, 39.64811",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1774",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.03139, 39.65210",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.03065, 39.64685",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "SHXVIII",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.03116, 39.65104",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "1783",
            "genres": [],
            "types": [
                "ESTATE",
                "STABLES"
            ]
        },
        {
            "latlon": "56.02894, 39.64789",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1779",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ESTATE",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.07345, 39.44933",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1771",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.00995, 39.86452",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1769",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.00980, 39.86395",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1875",
            "genres": [],
            "types": [
                "ESTATE",
                "SHELTER"
            ]
        },
        {
            "latlon": "56.00871, 39.86524",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 1,
            "date": "XVIII",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.04932, 40.07343",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "SCHOOL",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.04959, 40.07381",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1832",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.00739, 39.92498",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1693",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.10375, 39.92380",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1823",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.14839, 39.96382",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "LQXIX",
            "genres": [
                "RUSSIAN_BYZANTIUM"
            ],
            "types": [
                "ORTHODOXY",
                "CHAPEL"
            ]
        },
        {
            "latlon": "56.12708, 39.83813",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1851",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.12293, 39.65590",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1832",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.18473, 39.76542",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1763",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.20855, 39.61281",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "1836",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.21879, 39.54755",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1841",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.15459, 39.41938",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1822",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.18820, 39.47097",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "XIX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.18529, 39.76565",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "XVIII",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.18554, 39.76563",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "XVIII",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.15705, 39.87807",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "XIX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.15686, 39.87767",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "XVIII",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.51191, 39.68407",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1877",
            "genres": [
                "RUSSIAN_BYZANTIUM"
            ],
            "types": [
                "CHURCH",
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.51185, 39.68460",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1853",
            "genres": [
                "RUSSIAN_BYZANTIUM"
            ],
            "types": [
                "CHURCH",
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.49613, 39.68068",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "MUNICIPAL",
            "rating": 0,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.51230, 39.68462",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.51151, 39.68386",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1902",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "BELL_TOWER",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.51062, 39.68442",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1780",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.50667, 39.68387",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.50665, 39.68456",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.50621, 39.68505",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "ENXVII",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.50614, 39.68454",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1808",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.50453, 39.68292",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "1883",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.50213, 39.68409",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.50310, 39.68223",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "1870",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.49891, 39.68366",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 4,
            "date": "BGXX",
            "genres": [],
            "types": [
                "FIRE"
            ]
        },
        {
            "latlon": "56.49894, 39.68312",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "STABLES",
                "FIRE"
            ]
        },
        {
            "latlon": "56.49899, 39.68259",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "FIRE"
            ]
        },
        {
            "latlon": "56.49962, 39.68226",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1877",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.49966, 39.68182",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1877",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.49975, 39.68121",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1877",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.49979, 39.68077",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1877",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.50036, 39.68220",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.50104, 39.68282",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1904",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "SHELTER"
            ]
        },
        {
            "latlon": "56.50107, 39.68161",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1760",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.50069, 39.68158",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "HOTEL"
            ]
        },
        {
            "latlon": "56.50058, 39.68156",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "1870",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "56.49937, 39.67998",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.49943, 39.67899",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "1847",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.50134, 39.68112",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.50108, 39.68007",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1766",
            "genres": [],
            "types": [
                "CHURCH",
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.50128, 39.67994",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1666",
            "genres": [],
            "types": [
                "CHURCH",
                "MONASTERY",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.50041, 39.67847",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.50171, 39.67908",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.50217, 39.67789",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1914",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.49755, 39.68423",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.49697, 39.68506",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.49678, 39.68465",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.49863, 39.68130",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "XVII",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "56.49832, 39.68238",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "XVII",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "56.49711, 39.68283",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "XVII",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "56.49720, 39.68166",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "XVII",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "56.49753, 39.68085",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "XVII",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "56.49733, 39.68080",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "XVII",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "56.49833, 39.68115",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "XVII",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "FORTRESS"
            ]
        },
        {
            "latlon": "56.49835, 39.68157",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 5,
            "date": "BGXVIII",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "MONASTERY",
                "WOOD"
            ]
        },
        {
            "latlon": "56.49785, 39.68202",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1806",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.49755, 39.68184",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1625",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.49800, 39.68169",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1688",
            "genres": [],
            "types": [
                "BELL_TOWER",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.49815, 39.68168",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "CHAPEL",
                "WOOD",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.49789, 39.68102",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1670",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.49769, 39.68120",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1763",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.49710, 39.68076",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 2,
            "date": "1905",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.49679, 39.68045",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1914",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.49648, 39.68002",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "VALUABLE",
            "rating": 5,
            "date": "1234",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.49691, 39.67932",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 2,
            "date": "1860",
            "genres": [],
            "types": [
                "POST"
            ]
        },
        {
            "latlon": "56.49711, 39.67941",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "BGXX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.49804, 39.67720",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.49719, 39.67971",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 3,
            "date": "1809",
            "genres": [],
            "types": [
                "GOVERNMENT"
            ]
        },
        {
            "latlon": "56.49835, 39.68065",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.49845, 39.67741",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.49922, 39.67805",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.49885, 39.67625",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 2,
            "date": "ENXIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.49941, 39.67653",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 2,
            "date": "1891",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.49688, 39.67293",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1796",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.49672, 39.67351",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1769",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.49592, 39.67189",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 2,
            "date": "1908",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.39014, 39.58461",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1810",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.30873, 39.40729",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1797",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.29938, 39.39767",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1915",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.30041, 39.37881",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1896",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.29999, 39.37799",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1914",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.29921, 39.35549",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1792",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.47804, 39.68173",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1803",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.43880, 39.74889",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "STABLES",
                "ESTATE"
            ]
        },
        {
            "latlon": "56.43930, 39.74807",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.43911, 39.74823",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "FEDERAL",
            "rating": 0,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.43110, 39.82490",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "XIX",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.26093, 39.57050",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REVEALED",
            "rating": 0,
            "date": "1819",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.25459, 39.75999",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1779",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.30461, 39.53919",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1652",
            "genres": [
                "SUZDAL"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.30474, 39.54201",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1798",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.23935, 39.71982",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "SHELTER",
                "ESTATE"
            ]
        },
        {
            "latlon": "56.23884, 39.72122",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1813",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.31646, 39.77268",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.31611, 39.77180",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.36437, 39.76849",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1832",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.47299, 39.82517",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1805",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.37437, 39.93428",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1811",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.36522, 39.99606",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1910S",
            "genres": [
                "STALIN"
            ],
            "types": [
                "SCHOOL",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.36262, 39.99835",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1657",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.36294, 39.99729",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1694",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.36255, 39.99771",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1669",
            "genres": [
                "FRETWORK"
            ],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.19215, 39.88428",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1809",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.16896, 39.97137",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "MDXVIII",
            "genres": [
                "BAROQUE",
                "NEO_GOTHIC"
            ],
            "types": [
                "ESTATE"
            ]
        },
        {
            "latlon": "56.16805, 39.97205",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1731",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ESTATE",
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.32567, 40.11971",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "1825",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.22052, 39.80186",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1850",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.35067, 39.94214",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REVEALED",
            "rating": 0,
            "date": "1826",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.29160, 39.95150",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1836",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.25213, 39.87729",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1787",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.28296, 40.11403",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1828",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.27952, 39.85288",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1763",
            "genres": [],
            "types": [
                "ESTATE",
                "STABLES"
            ]
        },
        {
            "latlon": "56.27812, 39.85506",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1763",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH",
                "ESTATE"
            ]
        },
        {
            "latlon": "56.18788, 39.76197",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1805",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.18757, 39.76239",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1736",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "BELL_TOWER"
            ]
        },
        {
            "latlon": "56.27407, 40.12716",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1796",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.24374, 40.12847",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1829",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.20213, 40.18112",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1699",
            "genres": [
                "NARYSHKIN"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.19017, 40.09824",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1778",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.15618, 40.14053",
            "status": "RENOVATION",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1817",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.13322, 40.27018",
            "status": "RENOVATION",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1799",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.12935, 40.37059",
            "status": "RUINS",
            "visibility": "ADMIN",
            "cultureStatus": "IGNORED",
            "rating": 0,
            "date": "1889",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12638, 40.39192",
            "status": "RENOVATION",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "SHXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12667, 40.37423",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "PRISON"
            ]
        },
        {
            "latlon": "56.17196, 40.16217",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1763",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.17219, 40.16123",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1763",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.17212, 40.16345",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "XVI",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.17231, 40.16181",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "1727",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.17246, 40.16117",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "XVII",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.17307, 40.16258",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "XVII",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.17256, 40.16172",
            "status": "UNREACHABLE",
            "visibility": "ADMIN",
            "cultureStatus": "REGIONAL",
            "rating": 0,
            "date": "TQXVIII",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.13526, 40.00971",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13509, 40.01051",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13465, 40.01603",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "ENXIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13433, 40.01661",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13415, 40.01619",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.13265, 40.01367",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13404, 40.01434",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13174, 40.01336",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "MUNICIPAL",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13401, 40.01602",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13346, 40.01408",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.13342, 40.01490",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1868",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.13336, 40.01404",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 2,
            "date": "XIX",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13317, 40.01483",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1798",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.15161, 40.25084",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "BGXX",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.13341, 40.27062",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1799",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.12037, 40.26108",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 3,
            "date": "1895",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.15939, 40.32639",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1833",
            "genres": [
                "CLASSICISM"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.12667, 40.37778",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1807",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.12573, 40.38743",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1885",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.12712, 40.39771",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1822",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.12723, 40.39811",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1822",
            "genres": [],
            "types": [
                "CITY_ESTATE"
            ]
        },
        {
            "latlon": "56.12764, 40.39996",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "SHXIX",
            "genres": [],
            "types": [
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "56.12772, 40.40036",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1913",
            "genres": [],
            "types": [
                "THEATRE"
            ]
        },
        {
            "latlon": "56.12779, 40.40069",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12786, 40.40101",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "ENXVIII",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.12848, 40.40394",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 3,
            "date": "1792",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.12909, 40.40402",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.12858, 40.40153",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 2,
            "date": "BGXIX",
            "genres": [],
            "types": [
                "SHOP"
            ]
        },
        {
            "latlon": "56.12993, 40.40310",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "1905",
            "genres": [],
            "types": []
        },
        {
            "latlon": "56.13021, 40.40013",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.12984, 40.39797",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "U1917",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.13049, 40.39604",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 4,
            "date": "BGXX",
            "genres": [],
            "types": [
                "WOOD"
            ]
        },
        {
            "latlon": "56.13076, 40.39785",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1765",
            "genres": [
                "BAROQUE"
            ],
            "types": [
                "ORTHODOXY",
                "CHURCH"
            ]
        },
        {
            "latlon": "56.13083, 40.39906",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1877",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "SCHOOL"
            ]
        },
        {
            "latlon": "56.13108, 40.39882",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1865",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.13122, 40.39859",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "MDXIX",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "WOOD"
            ]
        },
        {
            "latlon": "56.13135, 40.39808",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1856",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.13193, 40.39803",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1856",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "WOOD"
            ]
        },
        {
            "latlon": "56.13170, 40.39854",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 4,
            "date": "1789",
            "genres": [],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "56.13216, 40.39847",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1856",
            "genres": [],
            "types": [
                "ORTHODOXY",
                "MONASTERY",
                "WOOD"
            ]
        },
        {
            "latlon": "56.13170, 40.39921",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "FEDERAL",
            "rating": 5,
            "date": "1510",
            "genres": [
                "EARLY_MOSCOW"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY",
                "MONASTERY"
            ]
        },
        {
            "latlon": "55.76291, 37.63868",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1910",
            "genres": [],
            "types": []
        },
        {
            "latlon": "55.74853, 37.60858",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 3,
            "date": "1913",
            "genres": [],
            "types": [
                "RENTAL"
            ]
        },
        {
            "latlon": "55.74688, 37.60187",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "FHXIX",
            "genres": [],
            "types": [
                "SCHOOL"
            ]
        },
        {
            "latlon": "55.88676, 37.59821",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REGIONAL",
            "rating": 3,
            "date": "1893",
            "genres": [
                "RUSSIAN"
            ],
            "types": [
                "CHURCH",
                "ORTHODOXY"
            ]
        },
        {
            "latlon": "55.75034, 37.57117",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 4,
            "date": "1940",
            "genres": [
                "STALIN"
            ],
            "types": []
        },
        {
            "latlon": "55.75213, 37.60152",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "REVEALED",
            "rating": 5,
            "date": "1935",
            "genres": [
                "ART_DECO"
            ],
            "types": [
                "TRANSPORT"
            ]
        },
        {
            "latlon": "55.75071, 37.59744",
            "status": "DONE",
            "visibility": "PUBLIC",
            "cultureStatus": "IGNORED",
            "rating": 2,
            "date": "1880S",
            "genres": [],
            "types": []
        }
    ]
}