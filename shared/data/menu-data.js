window.menuData = {
    restaurant: {
        name: {
            en: "BAIA",
            ru: "БАЙЯ"
        },
        description: {
            en: "Authentic Italian cuisine with a modern twist, crafted from the freshest seasonal ingredients.",
            ru: "Аутентичная итальянская кухня с современными нотками из самых свежих сезонных ингредиентов."
        },
        address: {
            en: "Via Roma 123, Milano",
            ru: "ул. Рома 123, Милан"
        }
    },

    categories: {
        sushi: {
            name: {
                en: "SUSHI, POKÉ MENU",
                ru: "СУШИ, ПОКЕ МЕНЮ"
            },
            subcategory: {
                en: "APPETIZERS",
                ru: "ЗАКУСКИ"
            },
            dishes: [
                {
                    id: 1,
                    title: {
                        en: "SPRING ROLLS",
                        ru: "СПРИНГ-РОЛЛЫ"
                    },
                    description: {
                        en: "4 pieces of homemade spring rolls stuffed with mixed vegetables and served with sweet and sour sauce",
                        ru: "4 шт. домашних спринг-роллов, фаршированных овощной смесью и подаваемых с кисло-сладким соусом"
                    },
                    price: "€6",
                    image: "../shared/img/APPETIZERS/SPRING ROLLS.jpeg"
                },
                {
                    id: 2,
                    title: {
                        en: "STEAMED RAVIOLI",
                        ru: "РАВИОЛИ НА ПАРУ"
                    },
                    description: {
                        en: "Stuffed with: pork, chicken or vegetables 4 pieces",
                        ru: "Начинка: свинина, курица или овощи 4 штуки"
                    },
                    price: "€5",
                    image: "../shared/img/APPETIZERS/STEAMED RAVIOLI.jpeg"
                },
                {
                    id: 3,
                    title: {
                        en: "SHRIMP SPRING ROLLS",
                        ru: "СПРИНГ-РОЛЛЫ С КРЕВЕТКАМИ"
                    },
                    description: {
                        en: "4 pieces of homemade spring rolls stuffed with shrimp and served with sweet and sour sauce",
                        ru: "4 шт. домашних спринг-роллов с начинкой из креветок, подаются с кисло-сладким соусом"
                    },
                    price: "€8",
                    image: "../shared/img/APPETIZERS/SHRIMP SPRING ROLLS.jpg"
                },
                {
                    id: 4,
                    title: {
                        en: "SHRIMP TEMPURA",
                        ru: "КРЕВЕТКИ ТЕМПУРА"
                    },
                    description: {
                        en: "4 pieces homemade tempura shrimp",
                        ru: "4 шт. домашних креветок темпура"
                    },
                    price: "€10",
                    image: "../shared/img/APPETIZERS/SHRIMP TEMPURA.jpg"
                }
            ]
        },

        aperitifs: {
            name: {
                en: "APERITIFS",
                ru: "АПЕРИТИВЫ"
            },
            dishes: [
                {
                    id: 1,
                    title: {
                        en: "SELECTION OF FISH-BASED TAPAS",
                        ru: "АССОРТИМЕНТ РЫБНЫХ ТАПАС"
                    },
                    description: {
                        en: "(drink included)",
                        ru: "(напиток включен)"
                    },
                    price: "€22",
                    image: "../shared/img/APERITIFS/APERITIFS.jpg"
                },
                {
                    id: 2,
                    title: {
                        en: "14 ШТУК РАЗНЫХ СУШИ",
                        ru: "РАВИОЛИ НА ПАРУ"
                    },
                    description: {
                        en: "(drink included)",
                        ru: "(напиток включен)"
                    },
                    price: "€20",
                    image: "../shared/img/APERITIFS/14 PIECES OF ASSORTED SUSHI.jpeg"
                }
            ]
        },

        burgers: {
            name: {
                en: "BURGERS",
                ru: "Бургеры"
            },
            dishes: [
                {
                    id: 1,
                    title: {
                        en: "BACON BURGER",
                        ru: "БУРГЕР С БЕКОНОМ"
                    },
                    description: {
                        en: "180g beef burger with our homemade brioche bun, cheddar, bacon, iceberg lettuce and burger sauce served with fries.",
                        ru: "Бургер из говядины (180 г) с нашей домашней булочкой бриошь, сыром чеддер, беконом, салатом айсберг и соусом для бургера, подается с картофелем фри."
                    },
                    price: "€11",
                    image: "../shared/img/BURGERS/BACON BURGER.jpg"
                },
                {
                    id: 2,
                    title: {
                        en: "BRIE BURGER",
                        ru: "БРИ БУРГЕР"
                    },
                    description: {
                        en: "180g beef burger with our homemade brioche bun, burger sauce, brie cheese, bacon, lamb's lettuce and caramelized onion served with fries.",
                        ru: "Бургер из говядины (180 г) с нашей домашней булочкой бриошь, соусом для бургера, сыром бри, беконом, салатом из баранины и карамелизированным луком, подается с картофелем фри."
                    },
                    price: "€12",
                    image: "../shared/img/APERITIFS/14 PIECES OF ASSORTED SUSHI.jpeg"
                }
            ]
        },

        first: {
            name: {
                en: "FIRST COURSES",
                ru: "ПЕРВЫЕ БЛЮДА"
            },
            dishes: [
                {
                    id: 1,
                    title: {
                        en: "FIRST OF THE DAY",
                        ru: "ПЕРВЫЕ БЛЮДА"
                    },
                    description: {
                        en: "Our pasta dishes change periodically according to the season and our fresh fish arrivals, ask the waiter for the First Courses of the Day",
                        ru: "Наши блюда из пасты периодически меняются в зависимости от сезона и поступления свежей рыбы. Спросите официанта о первых блюдах дня."
                    },
                    price: "",
                    image: "../shared/img/APERITIFS/14 PIECES OF ASSORTED SUSHI.jpeg"
                }
            ]
        },
    },

    ui: {
        reservations: {
            en: "Reservations",
            ru: "Резервация"
        },
        viewMenu: {
            en: "View Menu",
            ru: "Меню"
        },
        makeReservation: {
            en: "Make a Reservation",
            ru: "Забронировать столик"
        },
    }
};