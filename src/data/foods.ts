export interface FoodPreset {
  id: string
  name: string
  /** на порцию по умолчанию */
  portion: string
  kcal: number
  protein: number
  carbs: number
  fat: number
}

/** Пресеты продуктов и блюд — быстрый ввод (~1000) */
export const FOOD_PRESETS: FoodPreset[] = [
  {
    "id": "egg",
    "name": "Яйцо куриное",
    "portion": "1 шт",
    "kcal": 78,
    "protein": 6.5,
    "carbs": 0.6,
    "fat": 5.3
  },
  {
    "id": "egg-white",
    "name": "Белок яйца",
    "portion": "1 шт",
    "kcal": 17,
    "protein": 3.6,
    "carbs": 0.2,
    "fat": 0.1
  },
  {
    "id": "egg-yolk",
    "name": "Желток яйца",
    "portion": "1 шт",
    "kcal": 55,
    "protein": 2.7,
    "carbs": 0.6,
    "fat": 4.5
  },
  {
    "id": "egg-boiled",
    "name": "Яйцо варёное",
    "portion": "1 шт",
    "kcal": 70,
    "protein": 6.3,
    "carbs": 0.5,
    "fat": 4.8
  },
  {
    "id": "egg-omelette-2",
    "name": "Омлет из 2 яиц",
    "portion": "1 порция",
    "kcal": 180,
    "protein": 13,
    "carbs": 1.5,
    "fat": 14
  },
  {
    "id": "egg-scrambled-2",
    "name": "Яичница из 2 яиц",
    "portion": "1 порция",
    "kcal": 185,
    "protein": 13,
    "carbs": 1,
    "fat": 14
  },
  {
    "id": "egg-fried",
    "name": "Яйцо жареное",
    "portion": "1 шт",
    "kcal": 90,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 7
  },
  {
    "id": "egg-poached",
    "name": "Яйцо пашот",
    "portion": "1 шт",
    "kcal": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8
  },
  {
    "id": "egg-quail",
    "name": "Яйцо перепелиное",
    "portion": "1 шт",
    "kcal": 14,
    "protein": 1.2,
    "carbs": 0.1,
    "fat": 1
  },
  {
    "id": "egg-duck",
    "name": "Яйцо утиное",
    "portion": "1 шт",
    "kcal": 130,
    "protein": 9,
    "carbs": 1,
    "fat": 10
  },
  {
    "id": "chicken-breast",
    "name": "Куриная грудка",
    "portion": "100 г",
    "kcal": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6
  },
  {
    "id": "chicken-breast-grill",
    "name": "Куриная грудка гриль",
    "portion": "100 г",
    "kcal": 150,
    "protein": 30,
    "carbs": 0,
    "fat": 2.5
  },
  {
    "id": "chicken-breast-boil",
    "name": "Куриная грудка варёная",
    "portion": "100 г",
    "kcal": 137,
    "protein": 30,
    "carbs": 0,
    "fat": 1.8
  },
  {
    "id": "chicken-thigh",
    "name": "Куриное бедро без кожи",
    "portion": "100 г",
    "kcal": 177,
    "protein": 24,
    "carbs": 0,
    "fat": 8
  },
  {
    "id": "chicken-thigh-skin",
    "name": "Куриное бедро с кожей",
    "portion": "100 г",
    "kcal": 210,
    "protein": 22,
    "carbs": 0,
    "fat": 13
  },
  {
    "id": "chicken-drum",
    "name": "Куриная голень",
    "portion": "100 г",
    "kcal": 170,
    "protein": 22,
    "carbs": 0,
    "fat": 9
  },
  {
    "id": "chicken-wing",
    "name": "Куриное крыло",
    "portion": "100 г",
    "kcal": 203,
    "protein": 19,
    "carbs": 0,
    "fat": 14
  },
  {
    "id": "chicken-fillet",
    "name": "Куриное филе",
    "portion": "100 г",
    "kcal": 110,
    "protein": 23,
    "carbs": 0,
    "fat": 1.2
  },
  {
    "id": "chicken-grill",
    "name": "Курица гриль",
    "portion": "100 г",
    "kcal": 184,
    "protein": 27,
    "carbs": 0,
    "fat": 8
  },
  {
    "id": "chicken-stew",
    "name": "Курица тушёная",
    "portion": "100 г",
    "kcal": 170,
    "protein": 25,
    "carbs": 1,
    "fat": 7
  },
  {
    "id": "chicken-soup-meat",
    "name": "Курица для супа",
    "portion": "100 г",
    "kcal": 140,
    "protein": 25,
    "carbs": 0,
    "fat": 4
  },
  {
    "id": "chicken-liver",
    "name": "Печень куриная",
    "portion": "100 г",
    "kcal": 140,
    "protein": 20,
    "carbs": 1.5,
    "fat": 6
  },
  {
    "id": "chicken-heart",
    "name": "Сердце куриное",
    "portion": "100 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 0.8,
    "fat": 10
  },
  {
    "id": "chicken-stomach",
    "name": "Желудки куриные",
    "portion": "100 г",
    "kcal": 114,
    "protein": 18,
    "carbs": 0.6,
    "fat": 4.5
  },
  {
    "id": "turkey-breast",
    "name": "Индейка грудка",
    "portion": "100 г",
    "kcal": 135,
    "protein": 29,
    "carbs": 0,
    "fat": 2
  },
  {
    "id": "turkey-thigh",
    "name": "Индейка бедро",
    "portion": "100 г",
    "kcal": 160,
    "protein": 24,
    "carbs": 0,
    "fat": 7
  },
  {
    "id": "turkey-fillet",
    "name": "Индейка филе",
    "portion": "100 г",
    "kcal": 120,
    "protein": 26,
    "carbs": 0,
    "fat": 1.5
  },
  {
    "id": "turkey-cutlet",
    "name": "Котлета из индейки",
    "portion": "100 г",
    "kcal": 140,
    "protein": 16,
    "carbs": 4,
    "fat": 6
  },
  {
    "id": "turkey-ground",
    "name": "Фарш индейки",
    "portion": "100 г",
    "kcal": 150,
    "protein": 20,
    "carbs": 0,
    "fat": 8
  },
  {
    "id": "duck-roast",
    "name": "Утка запечённая",
    "portion": "100 г",
    "kcal": 240,
    "protein": 19,
    "carbs": 0,
    "fat": 18
  },
  {
    "id": "duck-breast",
    "name": "Утиная грудка",
    "portion": "100 г",
    "kcal": 200,
    "protein": 23,
    "carbs": 0,
    "fat": 12
  },
  {
    "id": "goose",
    "name": "Гусь запечённый",
    "portion": "100 г",
    "kcal": 270,
    "protein": 18,
    "carbs": 0,
    "fat": 22
  },
  {
    "id": "quail",
    "name": "Перепёлка",
    "portion": "100 г",
    "kcal": 168,
    "protein": 25,
    "carbs": 0,
    "fat": 7
  },
  {
    "id": "turkey-cutlet-pc",
    "name": "Котлета из индейки",
    "portion": "1 шт ~80 г",
    "kcal": 140,
    "protein": 16,
    "carbs": 4,
    "fat": 6
  },
  {
    "id": "chicken-nuggets",
    "name": "Наггетсы куриные",
    "portion": "6 шт ~100 г",
    "kcal": 280,
    "protein": 14,
    "carbs": 18,
    "fat": 16
  },
  {
    "id": "chicken-shawarma-meat",
    "name": "Курица для шаурмы",
    "portion": "100 г",
    "kcal": 190,
    "protein": 26,
    "carbs": 2,
    "fat": 9
  },
  {
    "id": "beef-lean",
    "name": "Говядина постная",
    "portion": "100 г",
    "kcal": 187,
    "protein": 26,
    "carbs": 0,
    "fat": 9
  },
  {
    "id": "beef-steak",
    "name": "Стейк говяжий",
    "portion": "100 г",
    "kcal": 180,
    "protein": 26,
    "carbs": 0,
    "fat": 8
  },
  {
    "id": "beef-tenderloin",
    "name": "Говяжья вырезка",
    "portion": "100 г",
    "kcal": 158,
    "protein": 26,
    "carbs": 0,
    "fat": 6
  },
  {
    "id": "beef-stew",
    "name": "Говядина тушёная",
    "portion": "100 г",
    "kcal": 232,
    "protein": 24,
    "carbs": 0,
    "fat": 15
  },
  {
    "id": "beef-boil",
    "name": "Говядина варёная",
    "portion": "100 г",
    "kcal": 175,
    "protein": 25,
    "carbs": 0,
    "fat": 8
  },
  {
    "id": "beef-roast",
    "name": "Говядина запечённая",
    "portion": "100 г",
    "kcal": 200,
    "protein": 27,
    "carbs": 0,
    "fat": 10
  },
  {
    "id": "beef-tongue",
    "name": "Язык говяжий",
    "portion": "100 г",
    "kcal": 210,
    "protein": 16,
    "carbs": 0,
    "fat": 16
  },
  {
    "id": "beef-liver",
    "name": "Печень говяжья",
    "portion": "100 г",
    "kcal": 127,
    "protein": 20,
    "carbs": 4,
    "fat": 3.6
  },
  {
    "id": "beef-heart",
    "name": "Сердце говяжье",
    "portion": "100 г",
    "kcal": 112,
    "protein": 17,
    "carbs": 0,
    "fat": 5
  },
  {
    "id": "veal",
    "name": "Телятина",
    "portion": "100 г",
    "kcal": 144,
    "protein": 28,
    "carbs": 0,
    "fat": 3
  },
  {
    "id": "pork-lean",
    "name": "Свинина постная",
    "portion": "100 г",
    "kcal": 242,
    "protein": 27,
    "carbs": 0,
    "fat": 14
  },
  {
    "id": "pork-chop",
    "name": "Свиная отбивная",
    "portion": "100 г",
    "kcal": 230,
    "protein": 23,
    "carbs": 0,
    "fat": 15
  },
  {
    "id": "pork-neck",
    "name": "Свиная шея",
    "portion": "100 г",
    "kcal": 260,
    "protein": 20,
    "carbs": 0,
    "fat": 20
  },
  {
    "id": "pork-ribs",
    "name": "Свиные рёбра",
    "portion": "100 г",
    "kcal": 280,
    "protein": 18,
    "carbs": 0,
    "fat": 23
  },
  {
    "id": "pork-stew",
    "name": "Свинина тушёная",
    "portion": "100 г",
    "kcal": 250,
    "protein": 22,
    "carbs": 0,
    "fat": 18
  },
  {
    "id": "pork-knuckle",
    "name": "Рулька свиная",
    "portion": "100 г",
    "kcal": 270,
    "protein": 20,
    "carbs": 0,
    "fat": 21
  },
  {
    "id": "mince-beef",
    "name": "Фарш говяжий 10%",
    "portion": "100 г",
    "kcal": 176,
    "protein": 20,
    "carbs": 0,
    "fat": 10
  },
  {
    "id": "mince-beef-20",
    "name": "Фарш говяжий 20%",
    "portion": "100 г",
    "kcal": 250,
    "protein": 17,
    "carbs": 0,
    "fat": 20
  },
  {
    "id": "mince-pork",
    "name": "Фарш свиной",
    "portion": "100 г",
    "kcal": 260,
    "protein": 16,
    "carbs": 0,
    "fat": 21
  },
  {
    "id": "mince-mixed",
    "name": "Фарш смешанный",
    "portion": "100 г",
    "kcal": 220,
    "protein": 17,
    "carbs": 0,
    "fat": 16
  },
  {
    "id": "mince-chicken",
    "name": "Фарш куриный",
    "portion": "100 г",
    "kcal": 143,
    "protein": 20,
    "carbs": 0,
    "fat": 7
  },
  {
    "id": "lamb",
    "name": "Баранина",
    "portion": "100 г",
    "kcal": 209,
    "protein": 25,
    "carbs": 0,
    "fat": 12
  },
  {
    "id": "lamb-leg",
    "name": "Баранина окорок",
    "portion": "100 г",
    "kcal": 230,
    "protein": 24,
    "carbs": 0,
    "fat": 14
  },
  {
    "id": "lamb-chop",
    "name": "Баранья котлета на кости",
    "portion": "100 г",
    "kcal": 250,
    "protein": 22,
    "carbs": 0,
    "fat": 18
  },
  {
    "id": "rabbit",
    "name": "Кролик",
    "portion": "100 г",
    "kcal": 156,
    "protein": 25,
    "carbs": 0,
    "fat": 6
  },
  {
    "id": "horse",
    "name": "Конина",
    "portion": "100 г",
    "kcal": 140,
    "protein": 25,
    "carbs": 0,
    "fat": 4
  },
  {
    "id": "venison",
    "name": "Оленина",
    "portion": "100 г",
    "kcal": 158,
    "protein": 30,
    "carbs": 0,
    "fat": 3
  },
  {
    "id": "beef-steak-150",
    "name": "Стейк говяжий",
    "portion": "150 г",
    "kcal": 271,
    "protein": 39,
    "carbs": 0,
    "fat": 12
  },
  {
    "id": "pork-chop-120",
    "name": "Свиная отбивная",
    "portion": "120 г",
    "kcal": 280,
    "protein": 28,
    "carbs": 0,
    "fat": 18
  },
  {
    "id": "cutlet-beef",
    "name": "Котлета мясная",
    "portion": "1 шт ~80 г",
    "kcal": 180,
    "protein": 12,
    "carbs": 6,
    "fat": 12
  },
  {
    "id": "cutlet-chicken",
    "name": "Котлета куриная",
    "portion": "1 шт ~80 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 5,
    "fat": 8
  },
  {
    "id": "meatball",
    "name": "Тефтели",
    "portion": "3 шт ~120 г",
    "kcal": 220,
    "protein": 16,
    "carbs": 10,
    "fat": 12
  },
  {
    "id": "kebab-pork",
    "name": "Шашлык свиной",
    "portion": "100 г",
    "kcal": 280,
    "protein": 20,
    "carbs": 1,
    "fat": 22
  },
  {
    "id": "kebab-chicken",
    "name": "Шашлык куриный",
    "portion": "100 г",
    "kcal": 200,
    "protein": 25,
    "carbs": 1,
    "fat": 10
  },
  {
    "id": "kebab-lamb",
    "name": "Шашлык бараний",
    "portion": "100 г",
    "kcal": 270,
    "protein": 22,
    "carbs": 1,
    "fat": 20
  },
  {
    "id": "lula-kebab",
    "name": "Люля-кебаб",
    "portion": "100 г",
    "kcal": 250,
    "protein": 18,
    "carbs": 2,
    "fat": 19
  },
  {
    "id": "sausage-doctor",
    "name": "Колбаса докторская",
    "portion": "50 г",
    "kcal": 129,
    "protein": 6.5,
    "carbs": 0.8,
    "fat": 11
  },
  {
    "id": "sausage-servelat",
    "name": "Сервелат",
    "portion": "50 г",
    "kcal": 210,
    "protein": 8,
    "carbs": 0.5,
    "fat": 20
  },
  {
    "id": "sausage-salami",
    "name": "Салями",
    "portion": "40 г",
    "kcal": 160,
    "protein": 6,
    "carbs": 0.5,
    "fat": 15
  },
  {
    "id": "sausage-chicken",
    "name": "Сосиски куриные",
    "portion": "2 шт ~100 г",
    "kcal": 180,
    "protein": 12,
    "carbs": 2,
    "fat": 14
  },
  {
    "id": "sausage-milk",
    "name": "Сосиски молочные",
    "portion": "2 шт ~100 г",
    "kcal": 220,
    "protein": 11,
    "carbs": 2,
    "fat": 18
  },
  {
    "id": "sausage-hunting",
    "name": "Охотничьи колбаски",
    "portion": "50 г",
    "kcal": 230,
    "protein": 10,
    "carbs": 1,
    "fat": 21
  },
  {
    "id": "ham",
    "name": "Ветчина",
    "portion": "50 г",
    "kcal": 90,
    "protein": 10,
    "carbs": 1,
    "fat": 5
  },
  {
    "id": "ham-turkey",
    "name": "Ветчина из индейки",
    "portion": "50 г",
    "kcal": 70,
    "protein": 11,
    "carbs": 1,
    "fat": 2
  },
  {
    "id": "bacon",
    "name": "Бекон",
    "portion": "30 г",
    "kcal": 162,
    "protein": 5,
    "carbs": 0.3,
    "fat": 16
  },
  {
    "id": "bresaola",
    "name": "Брезаола",
    "portion": "40 г",
    "kcal": 70,
    "protein": 13,
    "carbs": 0,
    "fat": 2
  },
  {
    "id": "pastrami",
    "name": "Пастрами",
    "portion": "50 г",
    "kcal": 80,
    "protein": 10,
    "carbs": 1,
    "fat": 4
  },
  {
    "id": "bologna",
    "name": "Варёная колбаса",
    "portion": "50 г",
    "kcal": 130,
    "protein": 6,
    "carbs": 1,
    "fat": 11
  },
  {
    "id": "salmon",
    "name": "Лосось",
    "portion": "100 г",
    "kcal": 208,
    "protein": 20,
    "carbs": 0,
    "fat": 13
  },
  {
    "id": "salmon-smoked",
    "name": "Лосось копчёный",
    "portion": "100 г",
    "kcal": 180,
    "protein": 22,
    "carbs": 0,
    "fat": 10
  },
  {
    "id": "trout",
    "name": "Форель",
    "portion": "100 г",
    "kcal": 119,
    "protein": 20,
    "carbs": 0,
    "fat": 4
  },
  {
    "id": "tuna-fresh",
    "name": "Тунец свежий",
    "portion": "100 г",
    "kcal": 144,
    "protein": 23,
    "carbs": 0,
    "fat": 5
  },
  {
    "id": "tuna-canned",
    "name": "Тунец консерв. в собств. соку",
    "portion": "100 г",
    "kcal": 116,
    "protein": 26,
    "carbs": 0,
    "fat": 1
  },
  {
    "id": "tuna-oil",
    "name": "Тунец консерв. в масле",
    "portion": "100 г",
    "kcal": 190,
    "protein": 25,
    "carbs": 0,
    "fat": 9
  },
  {
    "id": "cod",
    "name": "Треска",
    "portion": "100 г",
    "kcal": 82,
    "protein": 18,
    "carbs": 0,
    "fat": 0.7
  },
  {
    "id": "pollock",
    "name": "Минтай",
    "portion": "100 г",
    "kcal": 72,
    "protein": 16,
    "carbs": 0,
    "fat": 0.9
  },
  {
    "id": "hake",
    "name": "Хек",
    "portion": "100 г",
    "kcal": 86,
    "protein": 17,
    "carbs": 0,
    "fat": 1.5
  },
  {
    "id": "haddock",
    "name": "Пикша",
    "portion": "100 г",
    "kcal": 74,
    "protein": 17,
    "carbs": 0,
    "fat": 0.5
  },
  {
    "id": "perch",
    "name": "Окунь",
    "portion": "100 г",
    "kcal": 91,
    "protein": 19,
    "carbs": 0,
    "fat": 1
  },
  {
    "id": "pike",
    "name": "Щука",
    "portion": "100 г",
    "kcal": 84,
    "protein": 18,
    "carbs": 0,
    "fat": 1
  },
  {
    "id": "carp",
    "name": "Карп",
    "portion": "100 г",
    "kcal": 127,
    "protein": 18,
    "carbs": 0,
    "fat": 5.5
  },
  {
    "id": "mackerel",
    "name": "Скумбрия",
    "portion": "100 г",
    "kcal": 191,
    "protein": 18,
    "carbs": 0,
    "fat": 13
  },
  {
    "id": "mackerel-smoked",
    "name": "Скумбрия копчёная",
    "portion": "100 г",
    "kcal": 220,
    "protein": 20,
    "carbs": 0,
    "fat": 15
  },
  {
    "id": "herring",
    "name": "Селёдка",
    "portion": "100 г",
    "kcal": 161,
    "protein": 17,
    "carbs": 0,
    "fat": 10
  },
  {
    "id": "herring-salt",
    "name": "Селёдка солёная",
    "portion": "100 г",
    "kcal": 170,
    "protein": 17,
    "carbs": 0,
    "fat": 11
  },
  {
    "id": "sardine",
    "name": "Сардины консерв.",
    "portion": "100 г",
    "kcal": 200,
    "protein": 20,
    "carbs": 0,
    "fat": 13
  },
  {
    "id": "anchovy",
    "name": "Анчоусы",
    "portion": "100 г",
    "kcal": 130,
    "protein": 20,
    "carbs": 0,
    "fat": 5
  },
  {
    "id": "sprat",
    "name": "Шпроты",
    "portion": "100 г",
    "kcal": 250,
    "protein": 17,
    "carbs": 0,
    "fat": 20
  },
  {
    "id": "catfish",
    "name": "Сом",
    "portion": "100 г",
    "kcal": 140,
    "protein": 17,
    "carbs": 0,
    "fat": 8
  },
  {
    "id": "pangasius",
    "name": "Пангасиус",
    "portion": "100 г",
    "kcal": 90,
    "protein": 15,
    "carbs": 0,
    "fat": 3
  },
  {
    "id": "tilapia",
    "name": "Тилапия",
    "portion": "100 г",
    "kcal": 96,
    "protein": 20,
    "carbs": 0,
    "fat": 1.7
  },
  {
    "id": "sea-bass",
    "name": "Сибас",
    "portion": "100 г",
    "kcal": 110,
    "protein": 20,
    "carbs": 0,
    "fat": 3
  },
  {
    "id": "dorado",
    "name": "Дорадо",
    "portion": "100 г",
    "kcal": 100,
    "protein": 20,
    "carbs": 0,
    "fat": 2
  },
  {
    "id": "shrimp",
    "name": "Креветки",
    "portion": "100 г",
    "kcal": 99,
    "protein": 24,
    "carbs": 0.2,
    "fat": 0.3
  },
  {
    "id": "shrimp-boil",
    "name": "Креветки варёные",
    "portion": "100 г",
    "kcal": 95,
    "protein": 23,
    "carbs": 0.2,
    "fat": 0.5
  },
  {
    "id": "prawn",
    "name": "Королевские креветки",
    "portion": "100 г",
    "kcal": 100,
    "protein": 24,
    "carbs": 0,
    "fat": 0.5
  },
  {
    "id": "squid",
    "name": "Кальмар",
    "portion": "100 г",
    "kcal": 100,
    "protein": 18,
    "carbs": 3,
    "fat": 1.5
  },
  {
    "id": "octopus",
    "name": "Осьминог",
    "portion": "100 г",
    "kcal": 82,
    "protein": 15,
    "carbs": 2,
    "fat": 1
  },
  {
    "id": "mussel",
    "name": "Мидии",
    "portion": "100 г",
    "kcal": 86,
    "protein": 12,
    "carbs": 3.5,
    "fat": 2
  },
  {
    "id": "oyster",
    "name": "Устрицы",
    "portion": "100 г",
    "kcal": 70,
    "protein": 8,
    "carbs": 4,
    "fat": 2
  },
  {
    "id": "crab",
    "name": "Краб",
    "portion": "100 г",
    "kcal": 90,
    "protein": 18,
    "carbs": 0,
    "fat": 1.5
  },
  {
    "id": "crab-sticks",
    "name": "Крабовые палочки",
    "portion": "100 г",
    "kcal": 80,
    "protein": 6,
    "carbs": 10,
    "fat": 2
  },
  {
    "id": "lobster",
    "name": "Омар / лобстер",
    "portion": "100 г",
    "kcal": 90,
    "protein": 19,
    "carbs": 0.5,
    "fat": 1
  },
  {
    "id": "scallop",
    "name": "Гребешок",
    "portion": "100 г",
    "kcal": 90,
    "protein": 17,
    "carbs": 3,
    "fat": 1
  },
  {
    "id": "caviar-red",
    "name": "Икра красная",
    "portion": "100 г",
    "kcal": 250,
    "protein": 30,
    "carbs": 2,
    "fat": 13
  },
  {
    "id": "caviar-black",
    "name": "Икра чёрная",
    "portion": "100 г",
    "kcal": 235,
    "protein": 26,
    "carbs": 2,
    "fat": 14
  },
  {
    "id": "eel",
    "name": "Угорь",
    "portion": "100 г",
    "kcal": 180,
    "protein": 18,
    "carbs": 0,
    "fat": 12
  },
  {
    "id": "caviar-red-20",
    "name": "Икра красная",
    "portion": "20 г",
    "kcal": 50,
    "protein": 6,
    "carbs": 0.4,
    "fat": 2.5
  },
  {
    "id": "fish-cutlet",
    "name": "Рыбная котлета",
    "portion": "1 шт ~80 г",
    "kcal": 130,
    "protein": 12,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "fish-sticks",
    "name": "Рыбные палочки",
    "portion": "4 шт ~100 г",
    "kcal": 220,
    "protein": 12,
    "carbs": 18,
    "fat": 10
  },
  {
    "id": "sushi-salmon",
    "name": "Суши с лососем",
    "portion": "2 шт",
    "kcal": 90,
    "protein": 6,
    "carbs": 12,
    "fat": 2
  },
  {
    "id": "roll-philadelphia",
    "name": "Ролл Филадельфия",
    "portion": "4 шт",
    "kcal": 280,
    "protein": 12,
    "carbs": 30,
    "fat": 12
  },
  {
    "id": "roll-california",
    "name": "Ролл Калифорния",
    "portion": "4 шт",
    "kcal": 220,
    "protein": 8,
    "carbs": 28,
    "fat": 8
  },
  {
    "id": "cottage-0",
    "name": "Творог 0–2%",
    "portion": "100 г",
    "kcal": 86,
    "protein": 18,
    "carbs": 3.3,
    "fat": 0.6
  },
  {
    "id": "cottage-5",
    "name": "Творог 5%",
    "portion": "100 г",
    "kcal": 121,
    "protein": 17,
    "carbs": 3,
    "fat": 5
  },
  {
    "id": "cottage-9",
    "name": "Творог 9%",
    "portion": "100 г",
    "kcal": 159,
    "protein": 16,
    "carbs": 3,
    "fat": 9
  },
  {
    "id": "cottage-18",
    "name": "Творог 18%",
    "portion": "100 г",
    "kcal": 220,
    "protein": 14,
    "carbs": 2.8,
    "fat": 18
  },
  {
    "id": "cottage-grain",
    "name": "Зернёный творог",
    "portion": "100 г",
    "kcal": 110,
    "protein": 14,
    "carbs": 3,
    "fat": 5
  },
  {
    "id": "greek-yog",
    "name": "Йогурт греческий",
    "portion": "100 г",
    "kcal": 97,
    "protein": 9,
    "carbs": 3.6,
    "fat": 5
  },
  {
    "id": "greek-yog-0",
    "name": "Йогурт греческий 0%",
    "portion": "100 г",
    "kcal": 55,
    "protein": 10,
    "carbs": 3.5,
    "fat": 0
  },
  {
    "id": "yog-nat",
    "name": "Йогурт натуральный",
    "portion": "100 г",
    "kcal": 60,
    "protein": 4,
    "carbs": 5,
    "fat": 3
  },
  {
    "id": "yog-fruit",
    "name": "Йогурт фруктовый",
    "portion": "100 г",
    "kcal": 90,
    "protein": 3.5,
    "carbs": 14,
    "fat": 2.5
  },
  {
    "id": "skyr",
    "name": "Скир",
    "portion": "100 г",
    "kcal": 65,
    "protein": 11,
    "carbs": 4,
    "fat": 0.2
  },
  {
    "id": "quark",
    "name": "Кварк",
    "portion": "100 г",
    "kcal": 70,
    "protein": 12,
    "carbs": 4,
    "fat": 0.5
  },
  {
    "id": "sour-cream-10",
    "name": "Сметана 10%",
    "portion": "100 г",
    "kcal": 115,
    "protein": 3,
    "carbs": 3.5,
    "fat": 10
  },
  {
    "id": "sour-cream-15",
    "name": "Сметана 15%",
    "portion": "100 г",
    "kcal": 160,
    "protein": 2.9,
    "carbs": 3,
    "fat": 15
  },
  {
    "id": "sour-cream-20",
    "name": "Сметана 20%",
    "portion": "100 г",
    "kcal": 205,
    "protein": 2.8,
    "carbs": 3,
    "fat": 20
  },
  {
    "id": "cream-10",
    "name": "Сливки 10%",
    "portion": "100 г",
    "kcal": 120,
    "protein": 3,
    "carbs": 4,
    "fat": 10
  },
  {
    "id": "cream-20",
    "name": "Сливки 20%",
    "portion": "100 г",
    "kcal": 205,
    "protein": 2.8,
    "carbs": 3.5,
    "fat": 20
  },
  {
    "id": "cream-33",
    "name": "Сливки 33%",
    "portion": "100 г",
    "kcal": 320,
    "protein": 2.2,
    "carbs": 3,
    "fat": 33
  },
  {
    "id": "cheese-rf",
    "name": "Сыр российский",
    "portion": "100 г",
    "kcal": 363,
    "protein": 23,
    "carbs": 1,
    "fat": 30
  },
  {
    "id": "cheese-dutch",
    "name": "Сыр голландский",
    "portion": "100 г",
    "kcal": 350,
    "protein": 24,
    "carbs": 0.5,
    "fat": 28
  },
  {
    "id": "cheese-mozz",
    "name": "Моцарелла",
    "portion": "100 г",
    "kcal": 280,
    "protein": 22,
    "carbs": 2,
    "fat": 20
  },
  {
    "id": "cheese-mozz-light",
    "name": "Моцарелла лёгкая",
    "portion": "100 г",
    "kcal": 160,
    "protein": 19,
    "carbs": 2,
    "fat": 8
  },
  {
    "id": "cheese-feta",
    "name": "Фета",
    "portion": "100 г",
    "kcal": 265,
    "protein": 15,
    "carbs": 4,
    "fat": 21
  },
  {
    "id": "cheese-brie",
    "name": "Бри",
    "portion": "100 г",
    "kcal": 330,
    "protein": 20,
    "carbs": 0.5,
    "fat": 28
  },
  {
    "id": "cheese-camembert",
    "name": "Камамбер",
    "portion": "100 г",
    "kcal": 300,
    "protein": 20,
    "carbs": 0.5,
    "fat": 24
  },
  {
    "id": "cheese-parmesan",
    "name": "Пармезан",
    "portion": "100 г",
    "kcal": 390,
    "protein": 33,
    "carbs": 3,
    "fat": 28
  },
  {
    "id": "cheese-cheddar",
    "name": "Чеддер",
    "portion": "100 г",
    "kcal": 400,
    "protein": 25,
    "carbs": 1.3,
    "fat": 33
  },
  {
    "id": "cheese-gouda",
    "name": "Гауда",
    "portion": "100 г",
    "kcal": 356,
    "protein": 25,
    "carbs": 2,
    "fat": 27
  },
  {
    "id": "cheese-suluguni",
    "name": "Сулугуни",
    "portion": "100 г",
    "kcal": 290,
    "protein": 20,
    "carbs": 0.5,
    "fat": 22
  },
  {
    "id": "cheese-adygea",
    "name": "Адыгейский сыр",
    "portion": "100 г",
    "kcal": 260,
    "protein": 19,
    "carbs": 1,
    "fat": 20
  },
  {
    "id": "cheese-tofu",
    "name": "Тофу",
    "portion": "100 г",
    "kcal": 76,
    "protein": 8,
    "carbs": 2,
    "fat": 4.5
  },
  {
    "id": "cheese-paneer",
    "name": "Панир",
    "portion": "100 г",
    "kcal": 265,
    "protein": 18,
    "carbs": 3,
    "fat": 20
  },
  {
    "id": "cheese-ricotta",
    "name": "Рикотта",
    "portion": "100 г",
    "kcal": 170,
    "protein": 11,
    "carbs": 4,
    "fat": 13
  },
  {
    "id": "cheese-cottage-soft",
    "name": "Мягкий творожный сыр",
    "portion": "100 г",
    "kcal": 180,
    "protein": 8,
    "carbs": 4,
    "fat": 15
  },
  {
    "id": "butter",
    "name": "Масло сливочное",
    "portion": "100 г",
    "kcal": 748,
    "protein": 0.5,
    "carbs": 0.8,
    "fat": 82
  },
  {
    "id": "butter-ghee",
    "name": "Топлёное масло / гхи",
    "portion": "100 г",
    "kcal": 880,
    "protein": 0,
    "carbs": 0,
    "fat": 99
  },
  {
    "id": "milk-05",
    "name": "Молоко 0.5%",
    "portion": "200 мл",
    "kcal": 70,
    "protein": 6.6,
    "carbs": 9.6,
    "fat": 1
  },
  {
    "id": "milk-1",
    "name": "Молоко 1%",
    "portion": "200 мл",
    "kcal": 84,
    "protein": 6.6,
    "carbs": 9.6,
    "fat": 2
  },
  {
    "id": "milk-25",
    "name": "Молоко 2.5%",
    "portion": "200 мл",
    "kcal": 104,
    "protein": 6.4,
    "carbs": 9.4,
    "fat": 5
  },
  {
    "id": "milk-32",
    "name": "Молоко 3.2%",
    "portion": "200 мл",
    "kcal": 120,
    "protein": 6,
    "carbs": 9.4,
    "fat": 6.4
  },
  {
    "id": "milk-oat",
    "name": "Овсяное молоко",
    "portion": "200 мл",
    "kcal": 90,
    "protein": 1.5,
    "carbs": 14,
    "fat": 3
  },
  {
    "id": "milk-almond",
    "name": "Миндальное молоко",
    "portion": "200 мл",
    "kcal": 40,
    "protein": 1,
    "carbs": 2,
    "fat": 3
  },
  {
    "id": "milk-soy",
    "name": "Соевое молоко",
    "portion": "200 мл",
    "kcal": 70,
    "protein": 6,
    "carbs": 4,
    "fat": 3.5
  },
  {
    "id": "milk-coconut",
    "name": "Кокосовое молоко питьевое",
    "portion": "200 мл",
    "kcal": 50,
    "protein": 0.5,
    "carbs": 3,
    "fat": 4
  },
  {
    "id": "kefir-1",
    "name": "Кефир 1%",
    "portion": "250 мл",
    "kcal": 95,
    "protein": 7.5,
    "carbs": 10,
    "fat": 2.5
  },
  {
    "id": "kefir-25",
    "name": "Кефир 2.5%",
    "portion": "250 мл",
    "kcal": 125,
    "protein": 7.5,
    "carbs": 10,
    "fat": 6
  },
  {
    "id": "kefir-32",
    "name": "Кефир 3.2%",
    "portion": "250 мл",
    "kcal": 140,
    "protein": 7,
    "carbs": 10,
    "fat": 8
  },
  {
    "id": "ryazhenka",
    "name": "Ряженка 4%",
    "portion": "250 мл",
    "kcal": 168,
    "protein": 7.5,
    "carbs": 10,
    "fat": 10
  },
  {
    "id": "prostokvasha",
    "name": "Простокваша",
    "portion": "250 мл",
    "kcal": 130,
    "protein": 7,
    "carbs": 10,
    "fat": 6
  },
  {
    "id": "airan",
    "name": "Айран",
    "portion": "250 мл",
    "kcal": 80,
    "protein": 5,
    "carbs": 6,
    "fat": 3.5
  },
  {
    "id": "tan",
    "name": "Тан",
    "portion": "250 мл",
    "kcal": 70,
    "protein": 4.5,
    "carbs": 5,
    "fat": 3
  },
  {
    "id": "yog-drink",
    "name": "Йогурт питьевой",
    "portion": "250 мл",
    "kcal": 150,
    "protein": 7,
    "carbs": 22,
    "fat": 3
  },
  {
    "id": "cottage-syrniki",
    "name": "Сырники",
    "portion": "2 шт ~120 г",
    "kcal": 220,
    "protein": 14,
    "carbs": 22,
    "fat": 8
  },
  {
    "id": "cheese-rf-30",
    "name": "Сыр российский",
    "portion": "30 г",
    "kcal": 109,
    "protein": 7,
    "carbs": 0.3,
    "fat": 9
  },
  {
    "id": "cheese-mozz-50",
    "name": "Моцарелла",
    "portion": "50 г",
    "kcal": 140,
    "protein": 11,
    "carbs": 1,
    "fat": 10
  },
  {
    "id": "cheese-feta-40",
    "name": "Фета",
    "portion": "40 г",
    "kcal": 106,
    "protein": 6,
    "carbs": 1.5,
    "fat": 9
  },
  {
    "id": "sour-cream-15-30",
    "name": "Сметана 15%",
    "portion": "30 г",
    "kcal": 48,
    "protein": 0.9,
    "carbs": 1,
    "fat": 4.5
  },
  {
    "id": "butter-10",
    "name": "Масло сливочное",
    "portion": "10 г",
    "kcal": 75,
    "protein": 0.1,
    "carbs": 0.1,
    "fat": 8.3
  },
  {
    "id": "rice-white",
    "name": "Рис белый варёный",
    "portion": "100 г",
    "kcal": 130,
    "protein": 2.7,
    "carbs": 28,
    "fat": 0.3
  },
  {
    "id": "rice-brown",
    "name": "Рис бурый варёный",
    "portion": "100 г",
    "kcal": 112,
    "protein": 2.5,
    "carbs": 23,
    "fat": 0.8
  },
  {
    "id": "rice-basmati",
    "name": "Рис басмати варёный",
    "portion": "100 г",
    "kcal": 120,
    "protein": 3,
    "carbs": 25,
    "fat": 0.4
  },
  {
    "id": "rice-jasmine",
    "name": "Рис жасмин варёный",
    "portion": "100 г",
    "kcal": 130,
    "protein": 2.5,
    "carbs": 28,
    "fat": 0.3
  },
  {
    "id": "rice-wild",
    "name": "Дикий рис варёный",
    "portion": "100 г",
    "kcal": 100,
    "protein": 4,
    "carbs": 21,
    "fat": 0.3
  },
  {
    "id": "buckwheat",
    "name": "Гречка варёная",
    "portion": "100 г",
    "kcal": 110,
    "protein": 4,
    "carbs": 21,
    "fat": 0.7
  },
  {
    "id": "quinoa",
    "name": "Киноа варёная",
    "portion": "100 г",
    "kcal": 120,
    "protein": 4.4,
    "carbs": 21,
    "fat": 1.9
  },
  {
    "id": "bulgur",
    "name": "Булгур варёный",
    "portion": "100 г",
    "kcal": 83,
    "protein": 3,
    "carbs": 19,
    "fat": 0.2
  },
  {
    "id": "couscous",
    "name": "Кускус варёный",
    "portion": "100 г",
    "kcal": 112,
    "protein": 3.8,
    "carbs": 23,
    "fat": 0.2
  },
  {
    "id": "pearl",
    "name": "Перловка варёная",
    "portion": "100 г",
    "kcal": 109,
    "protein": 3,
    "carbs": 24,
    "fat": 0.4
  },
  {
    "id": "millet",
    "name": "Пшёнка варёная",
    "portion": "100 г",
    "kcal": 90,
    "protein": 2.7,
    "carbs": 19,
    "fat": 0.8
  },
  {
    "id": "barley",
    "name": "Ячневая каша",
    "portion": "100 г",
    "kcal": 95,
    "protein": 2.5,
    "carbs": 20,
    "fat": 0.5
  },
  {
    "id": "corn-grits",
    "name": "Кукурузная каша",
    "portion": "100 г",
    "kcal": 90,
    "protein": 2,
    "carbs": 20,
    "fat": 0.5
  },
  {
    "id": "oatmeal-water",
    "name": "Овсянка на воде",
    "portion": "100 г",
    "kcal": 72,
    "protein": 2.5,
    "carbs": 13,
    "fat": 1.5
  },
  {
    "id": "oatmeal-milk",
    "name": "Овсянка на молоке",
    "portion": "100 г",
    "kcal": 100,
    "protein": 3.5,
    "carbs": 15,
    "fat": 3
  },
  {
    "id": "semolina",
    "name": "Манная каша на молоке",
    "portion": "100 г",
    "kcal": 100,
    "protein": 3,
    "carbs": 16,
    "fat": 2.5
  },
  {
    "id": "pasta",
    "name": "Макароны варёные",
    "portion": "100 г",
    "kcal": 132,
    "protein": 4.5,
    "carbs": 26,
    "fat": 0.8
  },
  {
    "id": "pasta-whole",
    "name": "Паста цельнозерновая",
    "portion": "100 г",
    "kcal": 124,
    "protein": 5,
    "carbs": 25,
    "fat": 1
  },
  {
    "id": "noodles-egg",
    "name": "Лапша яичная",
    "portion": "100 г",
    "kcal": 138,
    "protein": 4.5,
    "carbs": 25,
    "fat": 1.7
  },
  {
    "id": "noodles-rice",
    "name": "Рисовая лапша",
    "portion": "100 г",
    "kcal": 110,
    "protein": 1,
    "carbs": 25,
    "fat": 0.2
  },
  {
    "id": "noodles-soba",
    "name": "Соба",
    "portion": "100 г",
    "kcal": 100,
    "protein": 5,
    "carbs": 20,
    "fat": 0.2
  },
  {
    "id": "potato-boil",
    "name": "Картофель варёный",
    "portion": "100 г",
    "kcal": 87,
    "protein": 2,
    "carbs": 20,
    "fat": 0.1
  },
  {
    "id": "potato-bake",
    "name": "Картофель запечённый",
    "portion": "100 г",
    "kcal": 93,
    "protein": 2.3,
    "carbs": 21,
    "fat": 0.1
  },
  {
    "id": "potato-mash",
    "name": "Пюре картофельное",
    "portion": "100 г",
    "kcal": 106,
    "protein": 2,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "potato-fry",
    "name": "Картофель жареный",
    "portion": "100 г",
    "kcal": 192,
    "protein": 2.8,
    "carbs": 23,
    "fat": 10
  },
  {
    "id": "sweet-potato",
    "name": "Батат запечённый",
    "portion": "100 г",
    "kcal": 90,
    "protein": 2,
    "carbs": 21,
    "fat": 0.1
  },
  {
    "id": "oats-dry-50",
    "name": "Овсянка сухая",
    "portion": "50 г",
    "kcal": 185,
    "protein": 6.5,
    "carbs": 33,
    "fat": 3.5
  },
  {
    "id": "rice-150",
    "name": "Рис варёный",
    "portion": "150 г",
    "kcal": 195,
    "protein": 4,
    "carbs": 42,
    "fat": 0.4
  },
  {
    "id": "buckwheat-150",
    "name": "Гречка варёная",
    "portion": "150 г",
    "kcal": 165,
    "protein": 6,
    "carbs": 32,
    "fat": 1
  },
  {
    "id": "pasta-150",
    "name": "Макароны варёные",
    "portion": "150 г",
    "kcal": 198,
    "protein": 7,
    "carbs": 39,
    "fat": 1.2
  },
  {
    "id": "potato-150",
    "name": "Картофель варёный",
    "portion": "150 г",
    "kcal": 130,
    "protein": 3,
    "carbs": 30,
    "fat": 0.2
  },
  {
    "id": "bread-whole",
    "name": "Хлеб цельнозерновой",
    "portion": "1 ломтик",
    "kcal": 80,
    "protein": 3.5,
    "carbs": 14,
    "fat": 1
  },
  {
    "id": "bread-white",
    "name": "Хлеб белый",
    "portion": "1 ломтик",
    "kcal": 75,
    "protein": 2.5,
    "carbs": 14,
    "fat": 1
  },
  {
    "id": "bread-rye",
    "name": "Хлеб ржаной",
    "portion": "1 ломтик",
    "kcal": 70,
    "protein": 2.5,
    "carbs": 13,
    "fat": 0.5
  },
  {
    "id": "bread-borodino",
    "name": "Хлеб бородинский",
    "portion": "1 ломтик",
    "kcal": 75,
    "protein": 2.5,
    "carbs": 15,
    "fat": 0.5
  },
  {
    "id": "bread-toast",
    "name": "Тостовый хлеб",
    "portion": "1 ломтик",
    "kcal": 70,
    "protein": 2.5,
    "carbs": 13,
    "fat": 1
  },
  {
    "id": "lavash",
    "name": "Лаваш",
    "portion": "50 г",
    "kcal": 140,
    "protein": 4.5,
    "carbs": 28,
    "fat": 1
  },
  {
    "id": "tortilla",
    "name": "Тортилья",
    "portion": "1 шт ~50 г",
    "kcal": 150,
    "protein": 4,
    "carbs": 25,
    "fat": 3.5
  },
  {
    "id": "pita",
    "name": "Пита",
    "portion": "1 шт",
    "kcal": 165,
    "protein": 5.5,
    "carbs": 33,
    "fat": 1
  },
  {
    "id": "bagel",
    "name": "Бублик",
    "portion": "1 шт",
    "kcal": 200,
    "protein": 7,
    "carbs": 40,
    "fat": 1.5
  },
  {
    "id": "croissant",
    "name": "Круассан",
    "portion": "1 шт",
    "kcal": 230,
    "protein": 5,
    "carbs": 26,
    "fat": 12
  },
  {
    "id": "bun",
    "name": "Булочка сдобная",
    "portion": "1 шт",
    "kcal": 220,
    "protein": 5,
    "carbs": 35,
    "fat": 7
  },
  {
    "id": "ciabatta",
    "name": "Чиабатта",
    "portion": "50 г",
    "kcal": 135,
    "protein": 4.5,
    "carbs": 26,
    "fat": 1.5
  },
  {
    "id": "bagel-sesame",
    "name": "Бейгл кунжутный",
    "portion": "1 шт",
    "kcal": 260,
    "protein": 10,
    "carbs": 48,
    "fat": 3
  },
  {
    "id": "oats-dry",
    "name": "Овсяные хлопья",
    "portion": "100 г",
    "kcal": 370,
    "protein": 13,
    "carbs": 66,
    "fat": 7
  },
  {
    "id": "rice-dry",
    "name": "Рис сухой",
    "portion": "100 г",
    "kcal": 350,
    "protein": 7,
    "carbs": 78,
    "fat": 0.6
  },
  {
    "id": "buckwheat-dry",
    "name": "Гречка сухая",
    "portion": "100 г",
    "kcal": 340,
    "protein": 13,
    "carbs": 68,
    "fat": 3
  },
  {
    "id": "pasta-dry",
    "name": "Макароны сухие",
    "portion": "100 г",
    "kcal": 350,
    "protein": 12,
    "carbs": 72,
    "fat": 1.5
  },
  {
    "id": "quinoa-dry",
    "name": "Киноа сухая",
    "portion": "100 г",
    "kcal": 368,
    "protein": 14,
    "carbs": 64,
    "fat": 6
  },
  {
    "id": "lentil-dry",
    "name": "Чечевица сухая",
    "portion": "100 г",
    "kcal": 350,
    "protein": 25,
    "carbs": 60,
    "fat": 1.5
  },
  {
    "id": "chickpea-dry",
    "name": "Нут сухой",
    "portion": "100 г",
    "kcal": 360,
    "protein": 19,
    "carbs": 61,
    "fat": 6
  },
  {
    "id": "beans-dry",
    "name": "Фасоль сухая",
    "portion": "100 г",
    "kcal": 330,
    "protein": 21,
    "carbs": 58,
    "fat": 1.5
  },
  {
    "id": "borscht",
    "name": "Борщ",
    "portion": "300 мл",
    "kcal": 150,
    "protein": 7,
    "carbs": 15,
    "fat": 6
  },
  {
    "id": "shchi",
    "name": "Щи",
    "portion": "300 мл",
    "kcal": 120,
    "protein": 6,
    "carbs": 12,
    "fat": 5
  },
  {
    "id": "soup-chicken",
    "name": "Куриный суп",
    "portion": "300 мл",
    "kcal": 120,
    "protein": 10,
    "carbs": 10,
    "fat": 4
  },
  {
    "id": "soup-pea",
    "name": "Гороховый суп",
    "portion": "300 мл",
    "kcal": 180,
    "protein": 10,
    "carbs": 22,
    "fat": 5
  },
  {
    "id": "soup-solyanka",
    "name": "Солянка",
    "portion": "300 мл",
    "kcal": 220,
    "protein": 12,
    "carbs": 10,
    "fat": 14
  },
  {
    "id": "soup-mushroom",
    "name": "Грибной суп",
    "portion": "300 мл",
    "kcal": 110,
    "protein": 4,
    "carbs": 12,
    "fat": 5
  },
  {
    "id": "soup-fish",
    "name": "Уха",
    "portion": "300 мл",
    "kcal": 100,
    "protein": 12,
    "carbs": 5,
    "fat": 3
  },
  {
    "id": "soup-tomato",
    "name": "Томатный суп",
    "portion": "300 мл",
    "kcal": 130,
    "protein": 3,
    "carbs": 18,
    "fat": 5
  },
  {
    "id": "soup-pumpkin",
    "name": "Тыквенный крем-суп",
    "portion": "300 мл",
    "kcal": 160,
    "protein": 3,
    "carbs": 18,
    "fat": 8
  },
  {
    "id": "soup-miso",
    "name": "Мисо-суп",
    "portion": "250 мл",
    "kcal": 60,
    "protein": 4,
    "carbs": 6,
    "fat": 2
  },
  {
    "id": "okroshka-kefir",
    "name": "Окрошка на кефире",
    "portion": "350 мл",
    "kcal": 160,
    "protein": 8,
    "carbs": 14,
    "fat": 7
  },
  {
    "id": "okroshka-kvass",
    "name": "Окрошка на квасе",
    "portion": "350 мл",
    "kcal": 140,
    "protein": 6,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "plov",
    "name": "Плов",
    "portion": "250 г",
    "kcal": 350,
    "protein": 14,
    "carbs": 40,
    "fat": 14
  },
  {
    "id": "plov-chicken",
    "name": "Плов с курицей",
    "portion": "250 г",
    "kcal": 320,
    "protein": 16,
    "carbs": 38,
    "fat": 12
  },
  {
    "id": "pelmeni",
    "name": "Пельмени",
    "portion": "200 г",
    "kcal": 340,
    "protein": 16,
    "carbs": 36,
    "fat": 14
  },
  {
    "id": "vareniki-potato",
    "name": "Вареники с картошкой",
    "portion": "200 г",
    "kcal": 280,
    "protein": 8,
    "carbs": 48,
    "fat": 6
  },
  {
    "id": "vareniki-cottage",
    "name": "Вареники с творогом",
    "portion": "200 г",
    "kcal": 300,
    "protein": 14,
    "carbs": 42,
    "fat": 8
  },
  {
    "id": "vareniki-cherry",
    "name": "Вареники с вишней",
    "portion": "200 г",
    "kcal": 290,
    "protein": 7,
    "carbs": 52,
    "fat": 5
  },
  {
    "id": "golubtsy",
    "name": "Голубцы",
    "portion": "2 шт ~200 г",
    "kcal": 260,
    "protein": 16,
    "carbs": 18,
    "fat": 14
  },
  {
    "id": "stuffed-pepper",
    "name": "Перец фаршированный",
    "portion": "1 шт ~180 г",
    "kcal": 220,
    "protein": 12,
    "carbs": 16,
    "fat": 12
  },
  {
    "id": "lasagna",
    "name": "Лазанья",
    "portion": "250 г",
    "kcal": 380,
    "protein": 20,
    "carbs": 32,
    "fat": 18
  },
  {
    "id": "ravioli",
    "name": "Равиоли",
    "portion": "200 г",
    "kcal": 300,
    "protein": 12,
    "carbs": 36,
    "fat": 12
  },
  {
    "id": "risotto",
    "name": "Ризотто",
    "portion": "250 г",
    "kcal": 320,
    "protein": 8,
    "carbs": 45,
    "fat": 12
  },
  {
    "id": "paella",
    "name": "Паэлья",
    "portion": "250 г",
    "kcal": 340,
    "protein": 18,
    "carbs": 40,
    "fat": 12
  },
  {
    "id": "pizza-margherita",
    "name": "Пицца маргарита",
    "portion": "1 кусок",
    "kcal": 220,
    "protein": 9,
    "carbs": 26,
    "fat": 9
  },
  {
    "id": "pizza-pepperoni",
    "name": "Пицца пепперони",
    "portion": "1 кусок",
    "kcal": 280,
    "protein": 12,
    "carbs": 26,
    "fat": 14
  },
  {
    "id": "burger",
    "name": "Бургер простой",
    "portion": "1 шт",
    "kcal": 450,
    "protein": 22,
    "carbs": 35,
    "fat": 24
  },
  {
    "id": "cheeseburger",
    "name": "Чизбургер",
    "portion": "1 шт",
    "kcal": 500,
    "protein": 25,
    "carbs": 36,
    "fat": 28
  },
  {
    "id": "shawarma",
    "name": "Шаурма куриная",
    "portion": "1 шт",
    "kcal": 480,
    "protein": 28,
    "carbs": 42,
    "fat": 22
  },
  {
    "id": "shawarma-beef",
    "name": "Шаурма говяжья",
    "portion": "1 шт",
    "kcal": 520,
    "protein": 30,
    "carbs": 40,
    "fat": 26
  },
  {
    "id": "hotdog",
    "name": "Хот-дог",
    "portion": "1 шт",
    "kcal": 320,
    "protein": 12,
    "carbs": 28,
    "fat": 18
  },
  {
    "id": "sandwich-chicken",
    "name": "Сэндвич с курицей",
    "portion": "1 шт",
    "kcal": 350,
    "protein": 22,
    "carbs": 32,
    "fat": 12
  },
  {
    "id": "sandwich-tuna",
    "name": "Сэндвич с тунцом",
    "portion": "1 шт",
    "kcal": 320,
    "protein": 20,
    "carbs": 30,
    "fat": 12
  },
  {
    "id": "wrap-chicken",
    "name": "Ролл / врап с курицей",
    "portion": "1 шт",
    "kcal": 400,
    "protein": 25,
    "carbs": 35,
    "fat": 16
  },
  {
    "id": "salad-caesar",
    "name": "Салат Цезарь с курицей",
    "portion": "250 г",
    "kcal": 320,
    "protein": 24,
    "carbs": 10,
    "fat": 20
  },
  {
    "id": "salad-greek",
    "name": "Греческий салат",
    "portion": "200 г",
    "kcal": 180,
    "protein": 6,
    "carbs": 8,
    "fat": 14
  },
  {
    "id": "salad-olivie",
    "name": "Оливье",
    "portion": "150 г",
    "kcal": 220,
    "protein": 6,
    "carbs": 12,
    "fat": 16
  },
  {
    "id": "salad-vinaigrette",
    "name": "Винегрет",
    "portion": "150 г",
    "kcal": 120,
    "protein": 2.5,
    "carbs": 14,
    "fat": 6
  },
  {
    "id": "salad-crab",
    "name": "Салат крабовый",
    "portion": "150 г",
    "kcal": 200,
    "protein": 8,
    "carbs": 12,
    "fat": 14
  },
  {
    "id": "salad-veg-oil",
    "name": "Овощной салат + масло",
    "portion": "150 г",
    "kcal": 90,
    "protein": 2,
    "carbs": 8,
    "fat": 6
  },
  {
    "id": "salad-caprese",
    "name": "Капрезе",
    "portion": "150 г",
    "kcal": 180,
    "protein": 10,
    "carbs": 4,
    "fat": 14
  },
  {
    "id": "salad-nicoise",
    "name": "Нисуаз",
    "portion": "250 г",
    "kcal": 280,
    "protein": 22,
    "carbs": 12,
    "fat": 16
  },
  {
    "id": "pancake-2",
    "name": "Блины",
    "portion": "2 шт",
    "kcal": 180,
    "protein": 6,
    "carbs": 28,
    "fat": 5
  },
  {
    "id": "pancake-caviar",
    "name": "Блины с икрой",
    "portion": "2 шт",
    "kcal": 250,
    "protein": 10,
    "carbs": 28,
    "fat": 10
  },
  {
    "id": "syrniki-cream",
    "name": "Сырники со сметаной",
    "portion": "2 шт + сметана",
    "kcal": 280,
    "protein": 15,
    "carbs": 24,
    "fat": 14
  },
  {
    "id": "porridge-rice-milk",
    "name": "Рисовая каша на молоке",
    "portion": "250 г",
    "kcal": 210,
    "protein": 6,
    "carbs": 38,
    "fat": 4
  },
  {
    "id": "porridge-semolina",
    "name": "Манная каша",
    "portion": "250 г",
    "kcal": 200,
    "protein": 6,
    "carbs": 36,
    "fat": 4
  },
  {
    "id": "porridge-pumpkin",
    "name": "Тыквенная каша",
    "portion": "250 г",
    "kcal": 180,
    "protein": 4,
    "carbs": 32,
    "fat": 4
  },
  {
    "id": "omelette-veg",
    "name": "Омлет с овощами",
    "portion": "1 порция",
    "kcal": 220,
    "protein": 14,
    "carbs": 6,
    "fat": 16
  },
  {
    "id": "shakshuka",
    "name": "Шакшука",
    "portion": "1 порция",
    "kcal": 250,
    "protein": 14,
    "carbs": 12,
    "fat": 16
  },
  {
    "id": "fried-rice",
    "name": "Жареный рис с яйцом",
    "portion": "250 г",
    "kcal": 350,
    "protein": 12,
    "carbs": 45,
    "fat": 12
  },
  {
    "id": "stir-fry-chicken",
    "name": "Стир-фрай с курицей",
    "portion": "250 г",
    "kcal": 320,
    "protein": 25,
    "carbs": 20,
    "fat": 14
  },
  {
    "id": "curry-chicken",
    "name": "Карри с курицей",
    "portion": "250 г",
    "kcal": 340,
    "protein": 22,
    "carbs": 22,
    "fat": 18
  },
  {
    "id": "butter-chicken",
    "name": "Баттер чикен",
    "portion": "250 г",
    "kcal": 380,
    "protein": 24,
    "carbs": 14,
    "fat": 24
  },
  {
    "id": "falafel",
    "name": "Фалафель",
    "portion": "4 шт",
    "kcal": 280,
    "protein": 10,
    "carbs": 28,
    "fat": 14
  },
  {
    "id": "hummus-plate",
    "name": "Хумус с лавашом",
    "portion": "150 г",
    "kcal": 280,
    "protein": 10,
    "carbs": 30,
    "fat": 14
  },
  {
    "id": "ratatouille",
    "name": "Рататуй",
    "portion": "200 г",
    "kcal": 100,
    "protein": 2,
    "carbs": 12,
    "fat": 5
  },
  {
    "id": "stuffed-zucchini",
    "name": "Кабачки фаршированные",
    "portion": "200 г",
    "kcal": 180,
    "protein": 12,
    "carbs": 12,
    "fat": 10
  },
  {
    "id": "cabbage-rolls-lazy",
    "name": "Ленивые голубцы",
    "portion": "200 г",
    "kcal": 240,
    "protein": 14,
    "carbs": 16,
    "fat": 12
  },
  {
    "id": "zharkoye",
    "name": "Жаркое",
    "portion": "250 г",
    "kcal": 320,
    "protein": 18,
    "carbs": 22,
    "fat": 16
  },
  {
    "id": "beef-stroganoff",
    "name": "Бефстроганов",
    "portion": "200 г",
    "kcal": 280,
    "protein": 22,
    "carbs": 10,
    "fat": 18
  },
  {
    "id": "chicken-kiev",
    "name": "Котлета по-киевски",
    "portion": "1 шт",
    "kcal": 350,
    "protein": 20,
    "carbs": 12,
    "fat": 24
  },
  {
    "id": "schnitzel",
    "name": "Шницель",
    "portion": "1 шт ~150 г",
    "kcal": 320,
    "protein": 24,
    "carbs": 12,
    "fat": 18
  },
  {
    "id": "fried-eggs-bacon",
    "name": "Яичница с беконом",
    "portion": "1 порция",
    "kcal": 320,
    "protein": 18,
    "carbs": 2,
    "fat": 26
  },
  {
    "id": "avocado-toast",
    "name": "Тост с авокадо",
    "portion": "1 шт",
    "kcal": 250,
    "protein": 6,
    "carbs": 22,
    "fat": 16
  },
  {
    "id": "porridge-chia",
    "name": "Чиа-пудинг",
    "portion": "200 г",
    "kcal": 220,
    "protein": 8,
    "carbs": 20,
    "fat": 12
  },
  {
    "id": "cucumber",
    "name": "Огурец",
    "portion": "100 г",
    "kcal": 15,
    "protein": 0.8,
    "carbs": 2.5,
    "fat": 0.1
  },
  {
    "id": "tomato",
    "name": "Помидор",
    "portion": "100 г",
    "kcal": 20,
    "protein": 1,
    "carbs": 3.5,
    "fat": 0.2
  },
  {
    "id": "cherry-tomato",
    "name": "Черри",
    "portion": "100 г",
    "kcal": 18,
    "protein": 0.9,
    "carbs": 3.2,
    "fat": 0.2
  },
  {
    "id": "pepper-red",
    "name": "Перец болгарский красный",
    "portion": "100 г",
    "kcal": 27,
    "protein": 1.3,
    "carbs": 5,
    "fat": 0.3
  },
  {
    "id": "pepper-green",
    "name": "Перец болгарский зелёный",
    "portion": "100 г",
    "kcal": 20,
    "protein": 0.9,
    "carbs": 4,
    "fat": 0.2
  },
  {
    "id": "broccoli",
    "name": "Брокколи",
    "portion": "100 г",
    "kcal": 34,
    "protein": 2.8,
    "carbs": 7,
    "fat": 0.4
  },
  {
    "id": "cauliflower",
    "name": "Цветная капуста",
    "portion": "100 г",
    "kcal": 30,
    "protein": 2.5,
    "carbs": 5,
    "fat": 0.3
  },
  {
    "id": "cabbage",
    "name": "Капуста белокочанная",
    "portion": "100 г",
    "kcal": 27,
    "protein": 1.8,
    "carbs": 5,
    "fat": 0.1
  },
  {
    "id": "cabbage-red",
    "name": "Капуста красная",
    "portion": "100 г",
    "kcal": 30,
    "protein": 1.5,
    "carbs": 6,
    "fat": 0.2
  },
  {
    "id": "cabbage-beijing",
    "name": "Пекинская капуста",
    "portion": "100 г",
    "kcal": 16,
    "protein": 1.2,
    "carbs": 2.5,
    "fat": 0.2
  },
  {
    "id": "sauerkraut",
    "name": "Квашеная капуста",
    "portion": "100 г",
    "kcal": 20,
    "protein": 1,
    "carbs": 3,
    "fat": 0.1
  },
  {
    "id": "carrot",
    "name": "Морковь",
    "portion": "100 г",
    "kcal": 41,
    "protein": 0.9,
    "carbs": 10,
    "fat": 0.2
  },
  {
    "id": "beet",
    "name": "Свёкла",
    "portion": "100 г",
    "kcal": 43,
    "protein": 1.6,
    "carbs": 10,
    "fat": 0.2
  },
  {
    "id": "zucchini",
    "name": "Кабачок",
    "portion": "100 г",
    "kcal": 24,
    "protein": 1.2,
    "carbs": 4.5,
    "fat": 0.3
  },
  {
    "id": "eggplant",
    "name": "Баклажан",
    "portion": "100 г",
    "kcal": 24,
    "protein": 1,
    "carbs": 5,
    "fat": 0.2
  },
  {
    "id": "onion",
    "name": "Лук репчатый",
    "portion": "100 г",
    "kcal": 40,
    "protein": 1.1,
    "carbs": 9,
    "fat": 0.1
  },
  {
    "id": "onion-green",
    "name": "Зелёный лук",
    "portion": "100 г",
    "kcal": 20,
    "protein": 1.3,
    "carbs": 3.5,
    "fat": 0.1
  },
  {
    "id": "garlic",
    "name": "Чеснок",
    "portion": "100 г",
    "kcal": 149,
    "protein": 6.5,
    "carbs": 30,
    "fat": 0.5
  },
  {
    "id": "spinach",
    "name": "Шпинат",
    "portion": "100 г",
    "kcal": 23,
    "protein": 2.9,
    "carbs": 3.6,
    "fat": 0.4
  },
  {
    "id": "lettuce",
    "name": "Салат листовой",
    "portion": "100 г",
    "kcal": 15,
    "protein": 1.4,
    "carbs": 2.5,
    "fat": 0.2
  },
  {
    "id": "arugula",
    "name": "Руккола",
    "portion": "100 г",
    "kcal": 25,
    "protein": 2.6,
    "carbs": 3.7,
    "fat": 0.7
  },
  {
    "id": "kale",
    "name": "Кейл",
    "portion": "100 г",
    "kcal": 49,
    "protein": 4.3,
    "carbs": 9,
    "fat": 0.9
  },
  {
    "id": "celery",
    "name": "Сельдерей",
    "portion": "100 г",
    "kcal": 16,
    "protein": 0.7,
    "carbs": 3,
    "fat": 0.2
  },
  {
    "id": "radish",
    "name": "Редис",
    "portion": "100 г",
    "kcal": 16,
    "protein": 0.7,
    "carbs": 3.4,
    "fat": 0.1
  },
  {
    "id": "daikon",
    "name": "Дайкон",
    "portion": "100 г",
    "kcal": 18,
    "protein": 0.6,
    "carbs": 4,
    "fat": 0.1
  },
  {
    "id": "mushroom-champ",
    "name": "Шампиньоны",
    "portion": "100 г",
    "kcal": 27,
    "protein": 4.3,
    "carbs": 1,
    "fat": 1
  },
  {
    "id": "mushroom-oyster",
    "name": "Вёшенки",
    "portion": "100 г",
    "kcal": 33,
    "protein": 3.3,
    "carbs": 6,
    "fat": 0.4
  },
  {
    "id": "mushroom-porcini",
    "name": "Белые грибы",
    "portion": "100 г",
    "kcal": 34,
    "protein": 3.7,
    "carbs": 1.1,
    "fat": 1.7
  },
  {
    "id": "corn",
    "name": "Кукуруза варёная",
    "portion": "100 г",
    "kcal": 96,
    "protein": 3.4,
    "carbs": 21,
    "fat": 1.5
  },
  {
    "id": "peas",
    "name": "Горошек зелёный",
    "portion": "100 г",
    "kcal": 81,
    "protein": 5.4,
    "carbs": 14,
    "fat": 0.4
  },
  {
    "id": "beans-green",
    "name": "Стручковая фасоль",
    "portion": "100 г",
    "kcal": 31,
    "protein": 1.8,
    "carbs": 7,
    "fat": 0.1
  },
  {
    "id": "beans-boil",
    "name": "Фасоль варёная",
    "portion": "100 г",
    "kcal": 127,
    "protein": 8.7,
    "carbs": 22,
    "fat": 0.5
  },
  {
    "id": "chickpea-boil",
    "name": "Нут варёный",
    "portion": "100 г",
    "kcal": 164,
    "protein": 8.9,
    "carbs": 27,
    "fat": 2.6
  },
  {
    "id": "lentil-boil",
    "name": "Чечевица варёная",
    "portion": "100 г",
    "kcal": 116,
    "protein": 9,
    "carbs": 20,
    "fat": 0.4
  },
  {
    "id": "edamame",
    "name": "Эдамаме",
    "portion": "100 г",
    "kcal": 120,
    "protein": 11,
    "carbs": 9,
    "fat": 5
  },
  {
    "id": "asparagus",
    "name": "Спаржа",
    "portion": "100 г",
    "kcal": 20,
    "protein": 2.2,
    "carbs": 3.9,
    "fat": 0.1
  },
  {
    "id": "artichoke",
    "name": "Артишок",
    "portion": "100 г",
    "kcal": 47,
    "protein": 3.3,
    "carbs": 11,
    "fat": 0.2
  },
  {
    "id": "pumpkin",
    "name": "Тыква",
    "portion": "100 г",
    "kcal": 26,
    "protein": 1,
    "carbs": 7,
    "fat": 0.1
  },
  {
    "id": "squash",
    "name": "Патиссон",
    "portion": "100 г",
    "kcal": 19,
    "protein": 0.6,
    "carbs": 4,
    "fat": 0.1
  },
  {
    "id": "turnip",
    "name": "Репа",
    "portion": "100 г",
    "kcal": 28,
    "protein": 0.9,
    "carbs": 6,
    "fat": 0.1
  },
  {
    "id": "parsley",
    "name": "Петрушка",
    "portion": "100 г",
    "kcal": 36,
    "protein": 3,
    "carbs": 6,
    "fat": 0.8
  },
  {
    "id": "dill",
    "name": "Укроп",
    "portion": "100 г",
    "kcal": 40,
    "protein": 2.5,
    "carbs": 6,
    "fat": 0.5
  },
  {
    "id": "basil",
    "name": "Базилик",
    "portion": "100 г",
    "kcal": 23,
    "protein": 3.2,
    "carbs": 2.7,
    "fat": 0.6
  },
  {
    "id": "ginger",
    "name": "Имбирь",
    "portion": "100 г",
    "kcal": 80,
    "protein": 1.8,
    "carbs": 18,
    "fat": 0.8
  },
  {
    "id": "chili",
    "name": "Перец чили",
    "portion": "100 г",
    "kcal": 40,
    "protein": 1.9,
    "carbs": 9,
    "fat": 0.4
  },
  {
    "id": "olives-green",
    "name": "Оливки зелёные",
    "portion": "100 г",
    "kcal": 145,
    "protein": 1,
    "carbs": 4,
    "fat": 15
  },
  {
    "id": "olives-black",
    "name": "Маслины",
    "portion": "100 г",
    "kcal": 115,
    "protein": 0.8,
    "carbs": 6,
    "fat": 11
  },
  {
    "id": "pickle",
    "name": "Огурец маринованный",
    "portion": "100 г",
    "kcal": 12,
    "protein": 0.5,
    "carbs": 2,
    "fat": 0.1
  },
  {
    "id": "kimchi",
    "name": "Кимчи",
    "portion": "100 г",
    "kcal": 20,
    "protein": 1.1,
    "carbs": 3,
    "fat": 0.5
  },
  {
    "id": "hummus",
    "name": "Хумус",
    "portion": "50 г",
    "kcal": 120,
    "protein": 4,
    "carbs": 8,
    "fat": 8
  },
  {
    "id": "guacamole",
    "name": "Гуакамоле",
    "portion": "50 г",
    "kcal": 80,
    "protein": 1,
    "carbs": 4,
    "fat": 7
  },
  {
    "id": "onion-50",
    "name": "Лук",
    "portion": "50 г",
    "kcal": 20,
    "protein": 0.6,
    "carbs": 4.5,
    "fat": 0.1
  },
  {
    "id": "garlic-10",
    "name": "Чеснок",
    "portion": "10 г",
    "kcal": 15,
    "protein": 0.6,
    "carbs": 3,
    "fat": 0
  },
  {
    "id": "banana",
    "name": "Банан",
    "portion": "100 г",
    "kcal": 89,
    "protein": 1.1,
    "carbs": 23,
    "fat": 0.3
  },
  {
    "id": "apple",
    "name": "Яблоко",
    "portion": "100 г",
    "kcal": 52,
    "protein": 0.3,
    "carbs": 14,
    "fat": 0.2
  },
  {
    "id": "pear",
    "name": "Груша",
    "portion": "100 г",
    "kcal": 57,
    "protein": 0.4,
    "carbs": 15,
    "fat": 0.1
  },
  {
    "id": "orange",
    "name": "Апельсин",
    "portion": "100 г",
    "kcal": 47,
    "protein": 0.9,
    "carbs": 12,
    "fat": 0.1
  },
  {
    "id": "mandarin",
    "name": "Мандарин",
    "portion": "100 г",
    "kcal": 53,
    "protein": 0.8,
    "carbs": 13,
    "fat": 0.3
  },
  {
    "id": "grapefruit",
    "name": "Грейпфрут",
    "portion": "100 г",
    "kcal": 42,
    "protein": 0.8,
    "carbs": 11,
    "fat": 0.1
  },
  {
    "id": "lemon",
    "name": "Лимон",
    "portion": "100 г",
    "kcal": 29,
    "protein": 1.1,
    "carbs": 9,
    "fat": 0.3
  },
  {
    "id": "lime",
    "name": "Лайм",
    "portion": "100 г",
    "kcal": 30,
    "protein": 0.7,
    "carbs": 11,
    "fat": 0.2
  },
  {
    "id": "kiwi",
    "name": "Киви",
    "portion": "100 г",
    "kcal": 61,
    "protein": 1.1,
    "carbs": 15,
    "fat": 0.5
  },
  {
    "id": "grape",
    "name": "Виноград",
    "portion": "100 г",
    "kcal": 69,
    "protein": 0.7,
    "carbs": 17,
    "fat": 0.2
  },
  {
    "id": "strawberry",
    "name": "Клубника",
    "portion": "100 г",
    "kcal": 33,
    "protein": 0.7,
    "carbs": 8,
    "fat": 0.3
  },
  {
    "id": "blueberry",
    "name": "Голубика",
    "portion": "100 г",
    "kcal": 57,
    "protein": 0.7,
    "carbs": 14,
    "fat": 0.3
  },
  {
    "id": "raspberry",
    "name": "Малина",
    "portion": "100 г",
    "kcal": 52,
    "protein": 1.2,
    "carbs": 12,
    "fat": 0.7
  },
  {
    "id": "blackberry",
    "name": "Ежевика",
    "portion": "100 г",
    "kcal": 43,
    "protein": 1.4,
    "carbs": 10,
    "fat": 0.5
  },
  {
    "id": "cherry",
    "name": "Вишня",
    "portion": "100 г",
    "kcal": 50,
    "protein": 1,
    "carbs": 12,
    "fat": 0.3
  },
  {
    "id": "sweet-cherry",
    "name": "Черешня",
    "portion": "100 г",
    "kcal": 63,
    "protein": 1.1,
    "carbs": 15,
    "fat": 0.2
  },
  {
    "id": "watermelon",
    "name": "Арбуз",
    "portion": "100 г",
    "kcal": 30,
    "protein": 0.6,
    "carbs": 8,
    "fat": 0.2
  },
  {
    "id": "melon",
    "name": "Дыня",
    "portion": "100 г",
    "kcal": 34,
    "protein": 0.8,
    "carbs": 8,
    "fat": 0.2
  },
  {
    "id": "peach",
    "name": "Персик",
    "portion": "100 г",
    "kcal": 39,
    "protein": 0.9,
    "carbs": 10,
    "fat": 0.3
  },
  {
    "id": "nectarine",
    "name": "Нектарин",
    "portion": "100 г",
    "kcal": 44,
    "protein": 1.1,
    "carbs": 11,
    "fat": 0.3
  },
  {
    "id": "apricot",
    "name": "Абрикос",
    "portion": "100 г",
    "kcal": 48,
    "protein": 1.4,
    "carbs": 11,
    "fat": 0.4
  },
  {
    "id": "plum",
    "name": "Слива",
    "portion": "100 г",
    "kcal": 46,
    "protein": 0.7,
    "carbs": 11,
    "fat": 0.3
  },
  {
    "id": "mango",
    "name": "Манго",
    "portion": "100 г",
    "kcal": 60,
    "protein": 0.8,
    "carbs": 15,
    "fat": 0.4
  },
  {
    "id": "pineapple",
    "name": "Ананас",
    "portion": "100 г",
    "kcal": 50,
    "protein": 0.5,
    "carbs": 13,
    "fat": 0.1
  },
  {
    "id": "papaya",
    "name": "Папайя",
    "portion": "100 г",
    "kcal": 43,
    "protein": 0.5,
    "carbs": 11,
    "fat": 0.3
  },
  {
    "id": "pomegranate",
    "name": "Гранат",
    "portion": "100 г",
    "kcal": 83,
    "protein": 1.7,
    "carbs": 19,
    "fat": 1.2
  },
  {
    "id": "fig",
    "name": "Инжир свежий",
    "portion": "100 г",
    "kcal": 74,
    "protein": 0.8,
    "carbs": 19,
    "fat": 0.3
  },
  {
    "id": "persimmon",
    "name": "Хурма",
    "portion": "100 г",
    "kcal": 70,
    "protein": 0.6,
    "carbs": 18,
    "fat": 0.2
  },
  {
    "id": "avocado",
    "name": "Авокадо",
    "portion": "100 г",
    "kcal": 160,
    "protein": 2,
    "carbs": 9,
    "fat": 15
  },
  {
    "id": "coconut",
    "name": "Кокос мякоть",
    "portion": "100 г",
    "kcal": 354,
    "protein": 3.3,
    "carbs": 15,
    "fat": 33
  },
  {
    "id": "dates",
    "name": "Финики",
    "portion": "100 г",
    "kcal": 277,
    "protein": 1.8,
    "carbs": 75,
    "fat": 0.2
  },
  {
    "id": "dried-apricot",
    "name": "Курага",
    "portion": "100 г",
    "kcal": 241,
    "protein": 5,
    "carbs": 63,
    "fat": 0.5
  },
  {
    "id": "raisin",
    "name": "Изюм",
    "portion": "100 г",
    "kcal": 299,
    "protein": 3,
    "carbs": 79,
    "fat": 0.5
  },
  {
    "id": "prune",
    "name": "Чернослив",
    "portion": "100 г",
    "kcal": 240,
    "protein": 2.2,
    "carbs": 64,
    "fat": 0.4
  },
  {
    "id": "dried-fig",
    "name": "Инжир сушёный",
    "portion": "100 г",
    "kcal": 249,
    "protein": 3.3,
    "carbs": 64,
    "fat": 0.9
  },
  {
    "id": "cranberry",
    "name": "Клюква",
    "portion": "100 г",
    "kcal": 46,
    "protein": 0.4,
    "carbs": 12,
    "fat": 0.1
  },
  {
    "id": "gooseberry",
    "name": "Крыжовник",
    "portion": "100 г",
    "kcal": 44,
    "protein": 0.9,
    "carbs": 10,
    "fat": 0.6
  },
  {
    "id": "currant-black",
    "name": "Смородина чёрная",
    "portion": "100 г",
    "kcal": 44,
    "protein": 1.1,
    "carbs": 10,
    "fat": 0.4
  },
  {
    "id": "currant-red",
    "name": "Смородина красная",
    "portion": "100 г",
    "kcal": 39,
    "protein": 0.6,
    "carbs": 9,
    "fat": 0.2
  },
  {
    "id": "banana-chip",
    "name": "Банановые чипсы",
    "portion": "100 г",
    "kcal": 520,
    "protein": 2,
    "carbs": 60,
    "fat": 30
  },
  {
    "id": "banana-1",
    "name": "Банан",
    "portion": "1 шт",
    "kcal": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.4
  },
  {
    "id": "apple-1",
    "name": "Яблоко",
    "portion": "1 шт",
    "kcal": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3
  },
  {
    "id": "orange-1",
    "name": "Апельсин",
    "portion": "1 шт",
    "kcal": 80,
    "protein": 1.5,
    "carbs": 19,
    "fat": 0.2
  },
  {
    "id": "mandarin-1",
    "name": "Мандарин",
    "portion": "1 шт",
    "kcal": 40,
    "protein": 0.6,
    "carbs": 10,
    "fat": 0.2
  },
  {
    "id": "pear-1",
    "name": "Груша",
    "portion": "1 шт",
    "kcal": 100,
    "protein": 0.6,
    "carbs": 25,
    "fat": 0.2
  },
  {
    "id": "kiwi-1",
    "name": "Киви",
    "portion": "1 шт",
    "kcal": 42,
    "protein": 0.8,
    "carbs": 10,
    "fat": 0.4
  },
  {
    "id": "peach-1",
    "name": "Персик",
    "portion": "1 шт",
    "kcal": 60,
    "protein": 1,
    "carbs": 15,
    "fat": 0.3
  },
  {
    "id": "avocado-half",
    "name": "Авокадо",
    "portion": "½ шт",
    "kcal": 120,
    "protein": 1.5,
    "carbs": 6,
    "fat": 11
  },
  {
    "id": "dates-3",
    "name": "Финики",
    "portion": "3 шт",
    "kcal": 66,
    "protein": 0.5,
    "carbs": 18,
    "fat": 0
  },
  {
    "id": "dried-apricot-30",
    "name": "Курага",
    "portion": "30 г",
    "kcal": 72,
    "protein": 1.5,
    "carbs": 18,
    "fat": 0.2
  },
  {
    "id": "raisin-30",
    "name": "Изюм",
    "portion": "30 г",
    "kcal": 90,
    "protein": 1,
    "carbs": 22,
    "fat": 0.2
  },
  {
    "id": "watermelon-200",
    "name": "Арбуз",
    "portion": "200 г",
    "kcal": 60,
    "protein": 1.2,
    "carbs": 15,
    "fat": 0.2
  },
  {
    "id": "melon-150",
    "name": "Дыня",
    "portion": "150 г",
    "kcal": 50,
    "protein": 0.9,
    "carbs": 12,
    "fat": 0.2
  },
  {
    "id": "almond",
    "name": "Миндаль",
    "portion": "100 г",
    "kcal": 579,
    "protein": 21,
    "carbs": 22,
    "fat": 50
  },
  {
    "id": "walnut",
    "name": "Грецкий орех",
    "portion": "100 г",
    "kcal": 654,
    "protein": 15,
    "carbs": 14,
    "fat": 65
  },
  {
    "id": "cashew",
    "name": "Кешью",
    "portion": "100 г",
    "kcal": 553,
    "protein": 18,
    "carbs": 30,
    "fat": 44
  },
  {
    "id": "pistachio",
    "name": "Фисташки",
    "portion": "100 г",
    "kcal": 560,
    "protein": 20,
    "carbs": 28,
    "fat": 45
  },
  {
    "id": "hazelnut",
    "name": "Фундук",
    "portion": "100 г",
    "kcal": 628,
    "protein": 15,
    "carbs": 17,
    "fat": 61
  },
  {
    "id": "peanut",
    "name": "Арахис",
    "portion": "100 г",
    "kcal": 567,
    "protein": 26,
    "carbs": 16,
    "fat": 49
  },
  {
    "id": "brazil",
    "name": "Бразильский орех",
    "portion": "100 г",
    "kcal": 659,
    "protein": 14,
    "carbs": 12,
    "fat": 67
  },
  {
    "id": "pecan",
    "name": "Пекан",
    "portion": "100 г",
    "kcal": 691,
    "protein": 9,
    "carbs": 14,
    "fat": 72
  },
  {
    "id": "macadamia",
    "name": "Макадамия",
    "portion": "100 г",
    "kcal": 718,
    "protein": 8,
    "carbs": 14,
    "fat": 76
  },
  {
    "id": "pine-nut",
    "name": "Кедровый орех",
    "portion": "100 г",
    "kcal": 673,
    "protein": 14,
    "carbs": 13,
    "fat": 68
  },
  {
    "id": "seeds-sun",
    "name": "Семечки подсолнечника",
    "portion": "100 г",
    "kcal": 584,
    "protein": 21,
    "carbs": 20,
    "fat": 51
  },
  {
    "id": "seeds-pumpkin",
    "name": "Тыквенные семечки",
    "portion": "100 г",
    "kcal": 559,
    "protein": 30,
    "carbs": 11,
    "fat": 49
  },
  {
    "id": "seeds-chia",
    "name": "Семена чиа",
    "portion": "100 г",
    "kcal": 486,
    "protein": 17,
    "carbs": 42,
    "fat": 31
  },
  {
    "id": "seeds-flax",
    "name": "Льняное семя",
    "portion": "100 г",
    "kcal": 534,
    "protein": 18,
    "carbs": 29,
    "fat": 42
  },
  {
    "id": "seeds-sesame",
    "name": "Кунжут",
    "portion": "100 г",
    "kcal": 573,
    "protein": 18,
    "carbs": 23,
    "fat": 50
  },
  {
    "id": "seeds-hemp",
    "name": "Конопляное семя",
    "portion": "100 г",
    "kcal": 553,
    "protein": 32,
    "carbs": 9,
    "fat": 49
  },
  {
    "id": "peanut-butter-20",
    "name": "Арахисовая паста",
    "portion": "20 г",
    "kcal": 118,
    "protein": 5,
    "carbs": 4,
    "fat": 10
  },
  {
    "id": "almond-butter-20",
    "name": "Миндальная паста",
    "portion": "20 г",
    "kcal": 120,
    "protein": 4,
    "carbs": 4,
    "fat": 11
  },
  {
    "id": "almond-20",
    "name": "Миндаль",
    "portion": "20 г",
    "kcal": 116,
    "protein": 4,
    "carbs": 4,
    "fat": 10
  },
  {
    "id": "walnut-20",
    "name": "Грецкий орех",
    "portion": "20 г",
    "kcal": 131,
    "protein": 3,
    "carbs": 2.5,
    "fat": 13
  },
  {
    "id": "cashew-20",
    "name": "Кешью",
    "portion": "20 г",
    "kcal": 110,
    "protein": 3.5,
    "carbs": 6,
    "fat": 9
  },
  {
    "id": "pistachio-20",
    "name": "Фисташки",
    "portion": "20 г",
    "kcal": 112,
    "protein": 4,
    "carbs": 5.5,
    "fat": 9
  },
  {
    "id": "seeds-sun-20",
    "name": "Семечки подсолнечника",
    "portion": "20 г",
    "kcal": 117,
    "protein": 4,
    "carbs": 4,
    "fat": 10
  },
  {
    "id": "seeds-chia-15",
    "name": "Семена чиа",
    "portion": "15 г",
    "kcal": 73,
    "protein": 2.5,
    "carbs": 6,
    "fat": 4.5
  },
  {
    "id": "seeds-flax-15",
    "name": "Льняное семя",
    "portion": "15 г",
    "kcal": 80,
    "protein": 2.7,
    "carbs": 4,
    "fat": 6
  },
  {
    "id": "olive-oil-tbsp",
    "name": "Оливковое масло",
    "portion": "1 ст.л.",
    "kcal": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5
  },
  {
    "id": "sunflower-oil-tbsp",
    "name": "Подсолнечное масло",
    "portion": "1 ст.л.",
    "kcal": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 13.6
  },
  {
    "id": "coconut-oil-tbsp",
    "name": "Кокосовое масло",
    "portion": "1 ст.л.",
    "kcal": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14
  },
  {
    "id": "mayo-tbsp",
    "name": "Майонез",
    "portion": "1 ст.л.",
    "kcal": 90,
    "protein": 0.2,
    "carbs": 0.5,
    "fat": 10
  },
  {
    "id": "mayo-light-tbsp",
    "name": "Майонез лёгкий",
    "portion": "1 ст.л.",
    "kcal": 50,
    "protein": 0.2,
    "carbs": 2,
    "fat": 4.5
  },
  {
    "id": "water",
    "name": "Вода",
    "portion": "250 мл",
    "kcal": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": "coffee-black",
    "name": "Кофе чёрный",
    "portion": "200 мл",
    "kcal": 2,
    "protein": 0.2,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": "coffee-milk",
    "name": "Кофе с молоком",
    "portion": "200 мл",
    "kcal": 50,
    "protein": 2.5,
    "carbs": 4,
    "fat": 2.5
  },
  {
    "id": "americano",
    "name": "Американо",
    "portion": "200 мл",
    "kcal": 5,
    "protein": 0.3,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": "espresso",
    "name": "Эспрессо",
    "portion": "30 мл",
    "kcal": 3,
    "protein": 0.1,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": "latte",
    "name": "Латте",
    "portion": "250 мл",
    "kcal": 120,
    "protein": 6,
    "carbs": 10,
    "fat": 5
  },
  {
    "id": "cappuccino",
    "name": "Капучино",
    "portion": "200 мл",
    "kcal": 80,
    "protein": 4,
    "carbs": 6,
    "fat": 4
  },
  {
    "id": "flat-white",
    "name": "Флэт уайт",
    "portion": "180 мл",
    "kcal": 90,
    "protein": 5,
    "carbs": 7,
    "fat": 4
  },
  {
    "id": "mocha",
    "name": "Моккачино",
    "portion": "250 мл",
    "kcal": 180,
    "protein": 7,
    "carbs": 22,
    "fat": 6
  },
  {
    "id": "tea",
    "name": "Чай без сахара",
    "portion": "200 мл",
    "kcal": 2,
    "protein": 0,
    "carbs": 0.5,
    "fat": 0
  },
  {
    "id": "tea-milk",
    "name": "Чай с молоком",
    "portion": "200 мл",
    "kcal": 40,
    "protein": 2,
    "carbs": 4,
    "fat": 2
  },
  {
    "id": "green-tea",
    "name": "Зелёный чай",
    "portion": "200 мл",
    "kcal": 2,
    "protein": 0,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": "matcha-latte",
    "name": "Матча-латте",
    "portion": "250 мл",
    "kcal": 120,
    "protein": 5,
    "carbs": 12,
    "fat": 4
  },
  {
    "id": "cocoa",
    "name": "Какао на молоке",
    "portion": "200 мл",
    "kcal": 150,
    "protein": 6,
    "carbs": 18,
    "fat": 5
  },
  {
    "id": "hot-chocolate",
    "name": "Горячий шоколад",
    "portion": "200 мл",
    "kcal": 220,
    "protein": 6,
    "carbs": 28,
    "fat": 9
  },
  {
    "id": "juice-orange",
    "name": "Сок апельсиновый",
    "portion": "200 мл",
    "kcal": 90,
    "protein": 1.5,
    "carbs": 21,
    "fat": 0.2
  },
  {
    "id": "juice-apple",
    "name": "Сок яблочный",
    "portion": "200 мл",
    "kcal": 92,
    "protein": 0.2,
    "carbs": 23,
    "fat": 0.2
  },
  {
    "id": "juice-tomato",
    "name": "Сок томатный",
    "portion": "200 мл",
    "kcal": 40,
    "protein": 2,
    "carbs": 8,
    "fat": 0.2
  },
  {
    "id": "juice-grape",
    "name": "Сок виноградный",
    "portion": "200 мл",
    "kcal": 120,
    "protein": 0.5,
    "carbs": 30,
    "fat": 0.2
  },
  {
    "id": "smoothie-berry",
    "name": "Смузи ягодный",
    "portion": "300 мл",
    "kcal": 180,
    "protein": 4,
    "carbs": 35,
    "fat": 2
  },
  {
    "id": "smoothie-protein",
    "name": "Протеиновый смузи",
    "portion": "300 мл",
    "kcal": 250,
    "protein": 25,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "kvass",
    "name": "Квас",
    "portion": "250 мл",
    "kcal": 75,
    "protein": 0.5,
    "carbs": 18,
    "fat": 0
  },
  {
    "id": "kompot",
    "name": "Компот",
    "portion": "250 мл",
    "kcal": 80,
    "protein": 0.2,
    "carbs": 20,
    "fat": 0
  },
  {
    "id": "mors",
    "name": "Морс",
    "portion": "250 мл",
    "kcal": 70,
    "protein": 0.2,
    "carbs": 17,
    "fat": 0
  },
  {
    "id": "lemonade",
    "name": "Лимонад",
    "portion": "250 мл",
    "kcal": 100,
    "protein": 0,
    "carbs": 25,
    "fat": 0
  },
  {
    "id": "cola",
    "name": "Газировка сладкая",
    "portion": "330 мл",
    "kcal": 140,
    "protein": 0,
    "carbs": 35,
    "fat": 0
  },
  {
    "id": "cola-zero",
    "name": "Газировка zero",
    "portion": "330 мл",
    "kcal": 1,
    "protein": 0,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": "energy-drink",
    "name": "Энергетик",
    "portion": "250 мл",
    "kcal": 110,
    "protein": 0,
    "carbs": 28,
    "fat": 0
  },
  {
    "id": "beer",
    "name": "Пиво светлое",
    "portion": "500 мл",
    "kcal": 210,
    "protein": 2.5,
    "carbs": 18,
    "fat": 0
  },
  {
    "id": "beer-dark",
    "name": "Пиво тёмное",
    "portion": "500 мл",
    "kcal": 230,
    "protein": 2.5,
    "carbs": 22,
    "fat": 0
  },
  {
    "id": "wine-red",
    "name": "Вино красное сухое",
    "portion": "150 мл",
    "kcal": 125,
    "protein": 0.1,
    "carbs": 3,
    "fat": 0
  },
  {
    "id": "wine-white",
    "name": "Вино белое сухое",
    "portion": "150 мл",
    "kcal": 120,
    "protein": 0.1,
    "carbs": 3,
    "fat": 0
  },
  {
    "id": "champagne",
    "name": "Игристое вино",
    "portion": "150 мл",
    "kcal": 110,
    "protein": 0.1,
    "carbs": 4,
    "fat": 0
  },
  {
    "id": "vodka",
    "name": "Водка",
    "portion": "50 мл",
    "kcal": 115,
    "protein": 0,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": "kombucha",
    "name": "Комбуча",
    "portion": "250 мл",
    "kcal": 40,
    "protein": 0,
    "carbs": 10,
    "fat": 0
  },
  {
    "id": "chocolate-dark",
    "name": "Шоколад тёмный 70%",
    "portion": "20 г",
    "kcal": 120,
    "protein": 1.5,
    "carbs": 9,
    "fat": 8.5
  },
  {
    "id": "chocolate-85",
    "name": "Шоколад тёмный 85%",
    "portion": "20 г",
    "kcal": 115,
    "protein": 2,
    "carbs": 6,
    "fat": 10
  },
  {
    "id": "chocolate-milk",
    "name": "Шоколад молочный",
    "portion": "20 г",
    "kcal": 110,
    "protein": 1.5,
    "carbs": 12,
    "fat": 6
  },
  {
    "id": "chocolate-white",
    "name": "Шоколад белый",
    "portion": "20 г",
    "kcal": 110,
    "protein": 1.2,
    "carbs": 12,
    "fat": 6.5
  },
  {
    "id": "cookie",
    "name": "Печенье",
    "portion": "2 шт",
    "kcal": 100,
    "protein": 1.5,
    "carbs": 15,
    "fat": 4
  },
  {
    "id": "cookie-oat",
    "name": "Овсяное печенье",
    "portion": "2 шт",
    "kcal": 120,
    "protein": 2,
    "carbs": 18,
    "fat": 4.5
  },
  {
    "id": "cookie-protein",
    "name": "Протеиновое печенье",
    "portion": "1 шт",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "ice-cream",
    "name": "Мороженое пломбир",
    "portion": "100 г",
    "kcal": 230,
    "protein": 3.5,
    "carbs": 24,
    "fat": 13
  },
  {
    "id": "ice-cream-fruit",
    "name": "Мороженое фруктовое",
    "portion": "100 г",
    "kcal": 140,
    "protein": 2,
    "carbs": 28,
    "fat": 2
  },
  {
    "id": "sorbet",
    "name": "Сорбет",
    "portion": "100 г",
    "kcal": 110,
    "protein": 0.5,
    "carbs": 28,
    "fat": 0
  },
  {
    "id": "honey",
    "name": "Мёд",
    "portion": "1 ст.л.",
    "kcal": 64,
    "protein": 0.1,
    "carbs": 17,
    "fat": 0
  },
  {
    "id": "jam",
    "name": "Варенье",
    "portion": "1 ст.л.",
    "kcal": 50,
    "protein": 0.1,
    "carbs": 13,
    "fat": 0
  },
  {
    "id": "sugar",
    "name": "Сахар",
    "portion": "1 ч.л.",
    "kcal": 20,
    "protein": 0,
    "carbs": 5,
    "fat": 0
  },
  {
    "id": "maple",
    "name": "Кленовый сироп",
    "portion": "1 ст.л.",
    "kcal": 52,
    "protein": 0,
    "carbs": 13,
    "fat": 0
  },
  {
    "id": "protein-bar",
    "name": "Протеиновый батончик",
    "portion": "1 шт",
    "kcal": 200,
    "protein": 20,
    "carbs": 18,
    "fat": 7
  },
  {
    "id": "granola-bar",
    "name": "Батончик мюсли",
    "portion": "1 шт",
    "kcal": 160,
    "protein": 3,
    "carbs": 24,
    "fat": 6
  },
  {
    "id": "granola",
    "name": "Гранола",
    "portion": "40 г",
    "kcal": 180,
    "protein": 4,
    "carbs": 28,
    "fat": 6
  },
  {
    "id": "muesli",
    "name": "Мюсли",
    "portion": "40 г",
    "kcal": 150,
    "protein": 4,
    "carbs": 28,
    "fat": 3
  },
  {
    "id": "chips",
    "name": "Чипсы",
    "portion": "30 г",
    "kcal": 160,
    "protein": 2,
    "carbs": 15,
    "fat": 10
  },
  {
    "id": "chips-baked",
    "name": "Чипсы запечённые",
    "portion": "30 г",
    "kcal": 130,
    "protein": 2,
    "carbs": 20,
    "fat": 4
  },
  {
    "id": "popcorn",
    "name": "Попкорн",
    "portion": "30 г",
    "kcal": 110,
    "protein": 3,
    "carbs": 20,
    "fat": 2
  },
  {
    "id": "cracker",
    "name": "Крекеры",
    "portion": "30 г",
    "kcal": 130,
    "protein": 2.5,
    "carbs": 20,
    "fat": 4
  },
  {
    "id": "waffle",
    "name": "Вафля",
    "portion": "1 шт",
    "kcal": 140,
    "protein": 2,
    "carbs": 18,
    "fat": 7
  },
  {
    "id": "donut",
    "name": "Пончик",
    "portion": "1 шт",
    "kcal": 250,
    "protein": 3,
    "carbs": 30,
    "fat": 13
  },
  {
    "id": "muffin",
    "name": "Маффин",
    "portion": "1 шт",
    "kcal": 280,
    "protein": 4,
    "carbs": 36,
    "fat": 13
  },
  {
    "id": "cake-piece",
    "name": "Торт кусок",
    "portion": "100 г",
    "kcal": 350,
    "protein": 4,
    "carbs": 40,
    "fat": 18
  },
  {
    "id": "cheesecake",
    "name": "Чизкейк",
    "portion": "100 г",
    "kcal": 320,
    "protein": 6,
    "carbs": 28,
    "fat": 20
  },
  {
    "id": "eclair",
    "name": "Эклер",
    "portion": "1 шт",
    "kcal": 220,
    "protein": 4,
    "carbs": 22,
    "fat": 13
  },
  {
    "id": "marshmallow",
    "name": "Зефир",
    "portion": "1 шт",
    "kcal": 80,
    "protein": 0.5,
    "carbs": 20,
    "fat": 0
  },
  {
    "id": "marmalade",
    "name": "Мармелад",
    "portion": "30 г",
    "kcal": 90,
    "protein": 0.2,
    "carbs": 22,
    "fat": 0
  },
  {
    "id": "halva",
    "name": "Халва",
    "portion": "30 г",
    "kcal": 160,
    "protein": 3,
    "carbs": 14,
    "fat": 10
  },
  {
    "id": "pastila",
    "name": "Пастила",
    "portion": "30 г",
    "kcal": 90,
    "protein": 0.5,
    "carbs": 22,
    "fat": 0
  },
  {
    "id": "kozinak",
    "name": "Козинак",
    "portion": "30 г",
    "kcal": 150,
    "protein": 4,
    "carbs": 16,
    "fat": 8
  },
  {
    "id": "whey",
    "name": "Протеин сывороточный",
    "portion": "1 порция",
    "kcal": 120,
    "protein": 24,
    "carbs": 3,
    "fat": 1.5
  },
  {
    "id": "whey-iso",
    "name": "Изолят сыворотки",
    "portion": "1 порция",
    "kcal": 110,
    "protein": 25,
    "carbs": 1,
    "fat": 0.5
  },
  {
    "id": "casein",
    "name": "Казеин",
    "portion": "1 порция",
    "kcal": 110,
    "protein": 24,
    "carbs": 3,
    "fat": 0.5
  },
  {
    "id": "plant-protein",
    "name": "Растительный протеин",
    "portion": "1 порция",
    "kcal": 120,
    "protein": 20,
    "carbs": 5,
    "fat": 2
  },
  {
    "id": "mass-gainer",
    "name": "Гейнер",
    "portion": "1 порция",
    "kcal": 350,
    "protein": 25,
    "carbs": 55,
    "fat": 3
  },
  {
    "id": "bcaa",
    "name": "BCAA",
    "portion": "1 порция",
    "kcal": 20,
    "protein": 5,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": "eaa",
    "name": "EAA",
    "portion": "1 порция",
    "kcal": 30,
    "protein": 7,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": "creatine",
    "name": "Креатин",
    "portion": "5 г",
    "kcal": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": "preworkout",
    "name": "Предтрен",
    "portion": "1 порция",
    "kcal": 20,
    "protein": 0,
    "carbs": 5,
    "fat": 0
  },
  {
    "id": "iso-drink",
    "name": "Изотоник",
    "portion": "500 мл",
    "kcal": 80,
    "protein": 0,
    "carbs": 20,
    "fat": 0
  },
  {
    "id": "amino",
    "name": "Аминокислоты жидкие",
    "portion": "1 порция",
    "kcal": 25,
    "protein": 6,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": "collagen",
    "name": "Коллаген",
    "portion": "10 г",
    "kcal": 35,
    "protein": 9,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": "ketchup",
    "name": "Кетчуп",
    "portion": "1 ст.л.",
    "kcal": 20,
    "protein": 0.2,
    "carbs": 5,
    "fat": 0
  },
  {
    "id": "mustard",
    "name": "Горчица",
    "portion": "1 ч.л.",
    "kcal": 10,
    "protein": 0.5,
    "carbs": 1,
    "fat": 0.5
  },
  {
    "id": "soy-sauce",
    "name": "Соевый соус",
    "portion": "1 ст.л.",
    "kcal": 10,
    "protein": 1.5,
    "carbs": 1,
    "fat": 0
  },
  {
    "id": "teriyaki",
    "name": "Соус терияки",
    "portion": "1 ст.л.",
    "kcal": 25,
    "protein": 1,
    "carbs": 5,
    "fat": 0
  },
  {
    "id": "pesto",
    "name": "Песто",
    "portion": "1 ст.л.",
    "kcal": 80,
    "protein": 2,
    "carbs": 1,
    "fat": 8
  },
  {
    "id": "salsa",
    "name": "Сальса",
    "portion": "2 ст.л.",
    "kcal": 15,
    "protein": 0.5,
    "carbs": 3,
    "fat": 0
  },
  {
    "id": "tzatziki",
    "name": "Дзадзики",
    "portion": "30 г",
    "kcal": 40,
    "protein": 1.5,
    "carbs": 2,
    "fat": 3
  },
  {
    "id": "bbq-sauce",
    "name": "Соус BBQ",
    "portion": "1 ст.л.",
    "kcal": 30,
    "protein": 0.2,
    "carbs": 7,
    "fat": 0
  },
  {
    "id": "vinegar",
    "name": "Уксус",
    "portion": "1 ст.л.",
    "kcal": 3,
    "protein": 0,
    "carbs": 0.1,
    "fat": 0
  },
  {
    "id": "salt",
    "name": "Соль",
    "portion": "1 ч.л.",
    "kcal": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": "buckwheat-milk",
    "name": "Гречка на молоке",
    "portion": "250 г",
    "kcal": 120,
    "protein": 4.5,
    "carbs": 20,
    "fat": 3
  },
  {
    "id": "hercules",
    "name": "Геркулес варёный",
    "portion": "250 г",
    "kcal": 80,
    "protein": 3,
    "carbs": 14,
    "fat": 1.5
  },
  {
    "id": "flax-porridge",
    "name": "Льняная каша",
    "portion": "250 г",
    "kcal": 150,
    "protein": 6,
    "carbs": 12,
    "fat": 8
  },
  {
    "id": "amaranth",
    "name": "Амарант варёный",
    "portion": "250 г",
    "kcal": 100,
    "protein": 4,
    "carbs": 18,
    "fat": 2
  },
  {
    "id": "freekeh",
    "name": "Фрике варёный",
    "portion": "250 г",
    "kcal": 110,
    "protein": 4,
    "carbs": 22,
    "fat": 1
  },
  {
    "id": "spelt",
    "name": "Спельта варёная",
    "portion": "250 г",
    "kcal": 130,
    "protein": 5,
    "carbs": 26,
    "fat": 1
  },
  {
    "id": "farro",
    "name": "Фарро варёный",
    "portion": "250 г",
    "kcal": 120,
    "protein": 5,
    "carbs": 25,
    "fat": 1
  },
  {
    "id": "polenta",
    "name": "Полента",
    "portion": "250 г",
    "kcal": 85,
    "protein": 2,
    "carbs": 18,
    "fat": 0.5
  },
  {
    "id": "gnocchi",
    "name": "Ньокки",
    "portion": "250 г",
    "kcal": 140,
    "protein": 3.5,
    "carbs": 28,
    "fat": 1
  },
  {
    "id": "dumpling-chinese",
    "name": "Димсам / гедза",
    "portion": "250 г",
    "kcal": 180,
    "protein": 8,
    "carbs": 20,
    "fat": 8
  },
  {
    "id": "pho",
    "name": "Фо с говядиной",
    "portion": "250 г",
    "kcal": 350,
    "protein": 20,
    "carbs": 40,
    "fat": 10
  },
  {
    "id": "ramen",
    "name": "Рамен",
    "portion": "250 г",
    "kcal": 450,
    "protein": 18,
    "carbs": 55,
    "fat": 16
  },
  {
    "id": "udon",
    "name": "Удон",
    "portion": "250 г",
    "kcal": 300,
    "protein": 10,
    "carbs": 55,
    "fat": 4
  },
  {
    "id": "bibimbap",
    "name": "Пибимпаб",
    "portion": "250 г",
    "kcal": 450,
    "protein": 18,
    "carbs": 60,
    "fat": 14
  },
  {
    "id": "pokebowl",
    "name": "Поке-боул",
    "portion": "250 г",
    "kcal": 450,
    "protein": 25,
    "carbs": 50,
    "fat": 14
  },
  {
    "id": "burrito",
    "name": "Буррито",
    "portion": "250 г",
    "kcal": 550,
    "protein": 25,
    "carbs": 55,
    "fat": 22
  },
  {
    "id": "taco",
    "name": "Тако",
    "portion": "250 г",
    "kcal": 200,
    "protein": 10,
    "carbs": 18,
    "fat": 10
  },
  {
    "id": "quesadilla",
    "name": "Кесадилья",
    "portion": "250 г",
    "kcal": 400,
    "protein": 18,
    "carbs": 35,
    "fat": 20
  },
  {
    "id": "nachos",
    "name": "Начос с сыром",
    "portion": "250 г",
    "kcal": 450,
    "protein": 12,
    "carbs": 40,
    "fat": 26
  },
  {
    "id": "pad-thai",
    "name": "Пад тай",
    "portion": "250 г",
    "kcal": 400,
    "protein": 16,
    "carbs": 50,
    "fat": 14
  },
  {
    "id": "green-curry",
    "name": "Зелёное карри",
    "portion": "250 г",
    "kcal": 350,
    "protein": 15,
    "carbs": 20,
    "fat": 22
  },
  {
    "id": "tom-yum",
    "name": "Том ям",
    "portion": "250 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 10,
    "fat": 6
  },
  {
    "id": "spring-roll",
    "name": "Спринг-роллы",
    "portion": "250 г",
    "kcal": 150,
    "protein": 5,
    "carbs": 22,
    "fat": 4
  },
  {
    "id": "onigiri",
    "name": "Онигири",
    "portion": "250 г",
    "kcal": 180,
    "protein": 4,
    "carbs": 36,
    "fat": 2
  },
  {
    "id": "miso-salmon",
    "name": "Лосось мисо",
    "portion": "250 г",
    "kcal": 280,
    "protein": 25,
    "carbs": 8,
    "fat": 16
  },
  {
    "id": "tempura-shrimp",
    "name": "Темпура креветки",
    "portion": "250 г",
    "kcal": 250,
    "protein": 12,
    "carbs": 20,
    "fat": 14
  },
  {
    "id": "yakitori",
    "name": "Якитори",
    "portion": "250 г",
    "kcal": 200,
    "protein": 18,
    "carbs": 6,
    "fat": 10
  },
  {
    "id": "gyros",
    "name": "Гирос",
    "portion": "250 г",
    "kcal": 450,
    "protein": 25,
    "carbs": 40,
    "fat": 20
  },
  {
    "id": "moussaka",
    "name": "Мусака",
    "portion": "250 г",
    "kcal": 320,
    "protein": 16,
    "carbs": 18,
    "fat": 20
  },
  {
    "id": "spanakopita",
    "name": "Спанакопита",
    "portion": "250 г",
    "kcal": 250,
    "protein": 8,
    "carbs": 22,
    "fat": 14
  },
  {
    "id": "hummus-bowl",
    "name": "Боул с хумусом",
    "portion": "250 г",
    "kcal": 400,
    "protein": 14,
    "carbs": 45,
    "fat": 16
  },
  {
    "id": "shashlik-veg",
    "name": "Овощи гриль",
    "portion": "250 г",
    "kcal": 80,
    "protein": 2,
    "carbs": 10,
    "fat": 3
  },
  {
    "id": "khachapuri",
    "name": "Хачапури",
    "portion": "250 г",
    "kcal": 400,
    "protein": 16,
    "carbs": 35,
    "fat": 22
  },
  {
    "id": "lobio",
    "name": "Лобио",
    "portion": "250 г",
    "kcal": 200,
    "protein": 10,
    "carbs": 25,
    "fat": 6
  },
  {
    "id": "adjika-chicken",
    "name": "Курица в аджике",
    "portion": "250 г",
    "kcal": 220,
    "protein": 26,
    "carbs": 4,
    "fat": 11
  },
  {
    "id": "olivie-light",
    "name": "Оливье лёгкий",
    "portion": "250 г",
    "kcal": 150,
    "protein": 7,
    "carbs": 12,
    "fat": 8
  },
  {
    "id": "vinaigrette-oil",
    "name": "Винегрет с маслом",
    "portion": "250 г",
    "kcal": 140,
    "protein": 2.5,
    "carbs": 15,
    "fat": 7
  },
  {
    "id": "herring-fur",
    "name": "Селёдка под шубой",
    "portion": "250 г",
    "kcal": 220,
    "protein": 8,
    "carbs": 14,
    "fat": 14
  },
  {
    "id": "mimosa-salad",
    "name": "Салат мимоза",
    "portion": "250 г",
    "kcal": 240,
    "protein": 9,
    "carbs": 10,
    "fat": 18
  },
  {
    "id": "chicken-tabaka",
    "name": "Цыплёнок табака",
    "portion": "250 г",
    "kcal": 250,
    "protein": 24,
    "carbs": 0,
    "fat": 17
  },
  {
    "id": "chakhokhbili",
    "name": "Чахохбили",
    "portion": "250 г",
    "kcal": 200,
    "protein": 18,
    "carbs": 6,
    "fat": 12
  },
  {
    "id": "dolma",
    "name": "Долма",
    "portion": "250 г",
    "kcal": 220,
    "protein": 12,
    "carbs": 14,
    "fat": 12
  },
  {
    "id": "manty",
    "name": "Манты",
    "portion": "250 г",
    "kcal": 300,
    "protein": 14,
    "carbs": 32,
    "fat": 12
  },
  {
    "id": "lagman",
    "name": "Лагман",
    "portion": "250 г",
    "kcal": 350,
    "protein": 16,
    "carbs": 40,
    "fat": 12
  },
  {
    "id": "beshbarmak",
    "name": "Бешбармак",
    "portion": "250 г",
    "kcal": 400,
    "protein": 22,
    "carbs": 35,
    "fat": 18
  },
  {
    "id": "okroshka-mineral",
    "name": "Окрошка на минералке",
    "portion": "250 г",
    "kcal": 100,
    "protein": 5,
    "carbs": 10,
    "fat": 3
  },
  {
    "id": "khinkali-4",
    "name": "Хинкали",
    "portion": "4 шт",
    "kcal": 450,
    "protein": 22,
    "carbs": 48,
    "fat": 18
  },
  {
    "id": "khachapuri-adj",
    "name": "Хачапури по-аджарски",
    "portion": "1 шт",
    "kcal": 550,
    "protein": 22,
    "carbs": 45,
    "fat": 30
  },
  {
    "id": "khachapuri-imer",
    "name": "Хачапури по-имеретински",
    "portion": "1 кусок",
    "kcal": 280,
    "protein": 12,
    "carbs": 28,
    "fat": 14
  },
  {
    "id": "cheburek",
    "name": "Чебурек",
    "portion": "1 шт",
    "kcal": 350,
    "protein": 12,
    "carbs": 30,
    "fat": 20
  },
  {
    "id": "samsa",
    "name": "Самса",
    "portion": "1 шт",
    "kcal": 300,
    "protein": 12,
    "carbs": 28,
    "fat": 16
  },
  {
    "id": "belash",
    "name": "Беляш",
    "portion": "1 шт",
    "kcal": 320,
    "protein": 12,
    "carbs": 28,
    "fat": 18
  },
  {
    "id": "pirozhok-cabbage",
    "name": "Пирожок с капустой",
    "portion": "1 шт",
    "kcal": 200,
    "protein": 5,
    "carbs": 28,
    "fat": 8
  },
  {
    "id": "pirozhok-meat",
    "name": "Пирожок с мясом",
    "portion": "1 шт",
    "kcal": 250,
    "protein": 10,
    "carbs": 26,
    "fat": 12
  },
  {
    "id": "pirozhok-potato",
    "name": "Пирожок с картошкой",
    "portion": "1 шт",
    "kcal": 220,
    "protein": 5,
    "carbs": 30,
    "fat": 9
  },
  {
    "id": "vatrushka",
    "name": "Ватрушка",
    "portion": "1 шт",
    "kcal": 240,
    "protein": 8,
    "carbs": 32,
    "fat": 9
  },
  {
    "id": "scone",
    "name": "Слойка",
    "portion": "1 шт",
    "kcal": 260,
    "protein": 5,
    "carbs": 28,
    "fat": 14
  },
  {
    "id": "breakfast-english",
    "name": "Английский завтрак",
    "portion": "1 порция",
    "kcal": 650,
    "protein": 35,
    "carbs": 40,
    "fat": 35
  },
  {
    "id": "breakfast-continental",
    "name": "Континентальный завтрак",
    "portion": "1 порция",
    "kcal": 450,
    "protein": 15,
    "carbs": 55,
    "fat": 18
  },
  {
    "id": "porridge-banana",
    "name": "Овсянка с бананом",
    "portion": "300 г",
    "kcal": 280,
    "protein": 8,
    "carbs": 50,
    "fat": 5
  },
  {
    "id": "porridge-berry",
    "name": "Овсянка с ягодами",
    "portion": "300 г",
    "kcal": 250,
    "protein": 8,
    "carbs": 42,
    "fat": 5
  },
  {
    "id": "porridge-pb",
    "name": "Овсянка с арахисовой пастой",
    "portion": "300 г",
    "kcal": 350,
    "protein": 12,
    "carbs": 42,
    "fat": 14
  },
  {
    "id": "toast-egg-avo",
    "name": "Тост яйцо авокадо",
    "portion": "1 порция",
    "kcal": 380,
    "protein": 16,
    "carbs": 28,
    "fat": 22
  },
  {
    "id": "yogurt-granola",
    "name": "Йогурт с гранолой",
    "portion": "250 г",
    "kcal": 280,
    "protein": 12,
    "carbs": 35,
    "fat": 10
  },
  {
    "id": "cottage-honey",
    "name": "Творог с мёдом",
    "portion": "150 г",
    "kcal": 200,
    "protein": 17,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "cottage-berry",
    "name": "Творог с ягодами",
    "portion": "150 г",
    "kcal": 150,
    "protein": 17,
    "carbs": 12,
    "fat": 5
  },
  {
    "id": "protein-pancakes",
    "name": "Протеиновые панкейки",
    "portion": "3 шт",
    "kcal": 320,
    "protein": 28,
    "carbs": 30,
    "fat": 8
  },
  {
    "id": "french-toast",
    "name": "Френч-тост",
    "portion": "2 шт",
    "kcal": 350,
    "protein": 12,
    "carbs": 40,
    "fat": 14
  },
  {
    "id": "bagel-cream-cheese",
    "name": "Бейгл с сыром",
    "portion": "1 шт",
    "kcal": 380,
    "protein": 14,
    "carbs": 48,
    "fat": 14
  },
  {
    "id": "eggs-benedict",
    "name": "Яйца Бенедикт",
    "portion": "1 порция",
    "kcal": 450,
    "protein": 22,
    "carbs": 25,
    "fat": 28
  },
  {
    "id": "chicken-breast-steam",
    "name": "Куриная грудка на пару",
    "portion": "100 г",
    "kcal": 148.5,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6
  },
  {
    "id": "chicken-breast-bake",
    "name": "Куриная грудка запечённая",
    "portion": "100 г",
    "kcal": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6
  },
  {
    "id": "chicken-breast-stew",
    "name": "Куриная грудка тушёная",
    "portion": "100 г",
    "kcal": 173.3,
    "protein": 31,
    "carbs": 0,
    "fat": 4.3
  },
  {
    "id": "chicken-breast-stir",
    "name": "Куриная грудка стир-фрай",
    "portion": "100 г",
    "kcal": 189.7,
    "protein": 31,
    "carbs": 0,
    "fat": 4.3
  },
  {
    "id": "turkey-breast-steam",
    "name": "Индейка на пару",
    "portion": "100 г",
    "kcal": 121.5,
    "protein": 29,
    "carbs": 0,
    "fat": 2
  },
  {
    "id": "turkey-breast-bake",
    "name": "Индейка запечённая",
    "portion": "100 г",
    "kcal": 135,
    "protein": 29,
    "carbs": 0,
    "fat": 2
  },
  {
    "id": "turkey-breast-grill",
    "name": "Индейка гриль",
    "portion": "100 г",
    "kcal": 135,
    "protein": 29,
    "carbs": 0,
    "fat": 2
  },
  {
    "id": "turkey-breast-stew",
    "name": "Индейка тушёная",
    "portion": "100 г",
    "kcal": 141.8,
    "protein": 29,
    "carbs": 0,
    "fat": 2.4
  },
  {
    "id": "turkey-breast-stir",
    "name": "Индейка стир-фрай",
    "portion": "100 г",
    "kcal": 155.3,
    "protein": 29,
    "carbs": 0,
    "fat": 2.4
  },
  {
    "id": "salmon-steam",
    "name": "Лосось на пару",
    "portion": "100 г",
    "kcal": 187.2,
    "protein": 20,
    "carbs": 0,
    "fat": 13
  },
  {
    "id": "salmon-bake",
    "name": "Лосось запечённая",
    "portion": "100 г",
    "kcal": 208,
    "protein": 20,
    "carbs": 0,
    "fat": 13
  },
  {
    "id": "salmon-grill",
    "name": "Лосось гриль",
    "portion": "100 г",
    "kcal": 208,
    "protein": 20,
    "carbs": 0,
    "fat": 13
  },
  {
    "id": "salmon-stew",
    "name": "Лосось тушёная",
    "portion": "100 г",
    "kcal": 218.4,
    "protein": 20,
    "carbs": 0,
    "fat": 15.6
  },
  {
    "id": "salmon-stir",
    "name": "Лосось стир-фрай",
    "portion": "100 г",
    "kcal": 239.2,
    "protein": 20,
    "carbs": 0,
    "fat": 15.6
  },
  {
    "id": "cod-steam",
    "name": "Треска на пару",
    "portion": "100 г",
    "kcal": 73.8,
    "protein": 18,
    "carbs": 0,
    "fat": 0.7
  },
  {
    "id": "cod-bake",
    "name": "Треска запечённая",
    "portion": "100 г",
    "kcal": 82,
    "protein": 18,
    "carbs": 0,
    "fat": 0.7
  },
  {
    "id": "cod-grill",
    "name": "Треска гриль",
    "portion": "100 г",
    "kcal": 82,
    "protein": 18,
    "carbs": 0,
    "fat": 0.7
  },
  {
    "id": "cod-stew",
    "name": "Треска тушёная",
    "portion": "100 г",
    "kcal": 86.1,
    "protein": 18,
    "carbs": 0,
    "fat": 0.8
  },
  {
    "id": "cod-stir",
    "name": "Треска стир-фрай",
    "portion": "100 г",
    "kcal": 94.3,
    "protein": 18,
    "carbs": 0,
    "fat": 0.8
  },
  {
    "id": "beef-lean-steam",
    "name": "Говядина на пару",
    "portion": "100 г",
    "kcal": 168.3,
    "protein": 26,
    "carbs": 0,
    "fat": 9
  },
  {
    "id": "beef-lean-bake",
    "name": "Говядина запечённая",
    "portion": "100 г",
    "kcal": 187,
    "protein": 26,
    "carbs": 0,
    "fat": 9
  },
  {
    "id": "beef-lean-grill",
    "name": "Говядина гриль",
    "portion": "100 г",
    "kcal": 187,
    "protein": 26,
    "carbs": 0,
    "fat": 9
  },
  {
    "id": "beef-lean-stew",
    "name": "Говядина тушёная",
    "portion": "100 г",
    "kcal": 196.4,
    "protein": 26,
    "carbs": 0,
    "fat": 10.8
  },
  {
    "id": "beef-lean-stir",
    "name": "Говядина стир-фрай",
    "portion": "100 г",
    "kcal": 215.1,
    "protein": 26,
    "carbs": 0,
    "fat": 10.8
  },
  {
    "id": "pork-lean-steam",
    "name": "Свинина на пару",
    "portion": "100 г",
    "kcal": 217.8,
    "protein": 27,
    "carbs": 0,
    "fat": 14
  },
  {
    "id": "pork-lean-bake",
    "name": "Свинина запечённая",
    "portion": "100 г",
    "kcal": 242,
    "protein": 27,
    "carbs": 0,
    "fat": 14
  },
  {
    "id": "pork-lean-grill",
    "name": "Свинина гриль",
    "portion": "100 г",
    "kcal": 242,
    "protein": 27,
    "carbs": 0,
    "fat": 14
  },
  {
    "id": "pork-lean-stew",
    "name": "Свинина тушёная",
    "portion": "100 г",
    "kcal": 254.1,
    "protein": 27,
    "carbs": 0,
    "fat": 16.8
  },
  {
    "id": "pork-lean-stir",
    "name": "Свинина стир-фрай",
    "portion": "100 г",
    "kcal": 278.3,
    "protein": 27,
    "carbs": 0,
    "fat": 16.8
  },
  {
    "id": "shrimp-steam",
    "name": "Креветки на пару",
    "portion": "100 г",
    "kcal": 89.1,
    "protein": 24,
    "carbs": 0.2,
    "fat": 0.3
  },
  {
    "id": "shrimp-bake",
    "name": "Креветки запечённая",
    "portion": "100 г",
    "kcal": 99,
    "protein": 24,
    "carbs": 0.2,
    "fat": 0.3
  },
  {
    "id": "shrimp-grill",
    "name": "Креветки гриль",
    "portion": "100 г",
    "kcal": 99,
    "protein": 24,
    "carbs": 0.2,
    "fat": 0.3
  },
  {
    "id": "shrimp-stew",
    "name": "Креветки тушёная",
    "portion": "100 г",
    "kcal": 104,
    "protein": 24,
    "carbs": 0.2,
    "fat": 0.4
  },
  {
    "id": "shrimp-stir",
    "name": "Креветки стир-фрай",
    "portion": "100 г",
    "kcal": 113.9,
    "protein": 24,
    "carbs": 0.2,
    "fat": 0.4
  },
  {
    "id": "tofu-steam",
    "name": "Тофу на пару",
    "portion": "100 г",
    "kcal": 68.4,
    "protein": 8,
    "carbs": 2,
    "fat": 4.5
  },
  {
    "id": "tofu-bake",
    "name": "Тофу запечённая",
    "portion": "100 г",
    "kcal": 76,
    "protein": 8,
    "carbs": 2,
    "fat": 4.5
  },
  {
    "id": "tofu-grill",
    "name": "Тофу гриль",
    "portion": "100 г",
    "kcal": 76,
    "protein": 8,
    "carbs": 2,
    "fat": 4.5
  },
  {
    "id": "tofu-stew",
    "name": "Тофу тушёная",
    "portion": "100 г",
    "kcal": 79.8,
    "protein": 8,
    "carbs": 2,
    "fat": 5.4
  },
  {
    "id": "tofu-stir",
    "name": "Тофу стир-фрай",
    "portion": "100 г",
    "kcal": 87.4,
    "protein": 8,
    "carbs": 2,
    "fat": 5.4
  },
  {
    "id": "broccoli-steam",
    "name": "Брокколи на пару",
    "portion": "100 г",
    "kcal": 35,
    "protein": 2.8,
    "carbs": 7,
    "fat": 0.4
  },
  {
    "id": "broccoli-bake",
    "name": "Брокколи запечённая",
    "portion": "100 г",
    "kcal": 50,
    "protein": 3,
    "carbs": 7,
    "fat": 2
  },
  {
    "id": "asparagus-grill",
    "name": "Спаржа гриль",
    "portion": "100 г",
    "kcal": 30,
    "protein": 2.5,
    "carbs": 4,
    "fat": 1
  },
  {
    "id": "zucchini-grill",
    "name": "Кабачок гриль",
    "portion": "100 г",
    "kcal": 30,
    "protein": 1.2,
    "carbs": 4,
    "fat": 1.5
  },
  {
    "id": "eggplant-bake",
    "name": "Баклажан запечённый",
    "portion": "100 г",
    "kcal": 40,
    "protein": 1,
    "carbs": 6,
    "fat": 1.5
  },
  {
    "id": "pepper-grill",
    "name": "Перец гриль",
    "portion": "100 г",
    "kcal": 35,
    "protein": 1.3,
    "carbs": 6,
    "fat": 1
  },
  {
    "id": "mushroom-fry",
    "name": "Грибы жареные",
    "portion": "100 г",
    "kcal": 60,
    "protein": 4,
    "carbs": 3,
    "fat": 4
  },
  {
    "id": "onion-caramel",
    "name": "Лук карамелизированный",
    "portion": "100 г",
    "kcal": 80,
    "protein": 1,
    "carbs": 14,
    "fat": 2
  },
  {
    "id": "tomato-bake",
    "name": "Помидоры запечённые",
    "portion": "100 г",
    "kcal": 30,
    "protein": 1,
    "carbs": 5,
    "fat": 1
  },
  {
    "id": "carrot-stew",
    "name": "Морковь тушёная",
    "portion": "100 г",
    "kcal": 50,
    "protein": 1,
    "carbs": 10,
    "fat": 1
  },
  {
    "id": "beet-bake",
    "name": "Свёкла запечённая",
    "portion": "100 г",
    "kcal": 50,
    "protein": 1.6,
    "carbs": 11,
    "fat": 0.5
  },
  {
    "id": "cabbage-stew",
    "name": "Капуста тушёная",
    "portion": "100 г",
    "kcal": 45,
    "protein": 2,
    "carbs": 7,
    "fat": 1.5
  },
  {
    "id": "potato-wedges",
    "name": "Дольки картофеля",
    "portion": "100 г",
    "kcal": 150,
    "protein": 3,
    "carbs": 25,
    "fat": 5
  },
  {
    "id": "potato-hash",
    "name": "Картофельный хэшбраун",
    "portion": "100 г",
    "kcal": 200,
    "protein": 3,
    "carbs": 22,
    "fat": 12
  },
  {
    "id": "fries",
    "name": "Картофель фри",
    "portion": "100 г",
    "kcal": 310,
    "protein": 3.5,
    "carbs": 38,
    "fat": 15
  },
  {
    "id": "mashed-cauli",
    "name": "Пюре из цветной капусты",
    "portion": "100 г",
    "kcal": 50,
    "protein": 2,
    "carbs": 6,
    "fat": 2
  },
  {
    "id": "chicken-breast-g50",
    "name": "Куриная грудка",
    "portion": "50 г",
    "kcal": 82.5,
    "protein": 15.5,
    "carbs": 0,
    "fat": 1.8
  },
  {
    "id": "chicken-breast-g75",
    "name": "Куриная грудка",
    "portion": "75 г",
    "kcal": 123.8,
    "protein": 23.3,
    "carbs": 0,
    "fat": 2.7
  },
  {
    "id": "chicken-breast-g120",
    "name": "Куриная грудка",
    "portion": "120 г",
    "kcal": 198,
    "protein": 37.2,
    "carbs": 0,
    "fat": 4.3
  },
  {
    "id": "chicken-breast-g150",
    "name": "Куриная грудка",
    "portion": "150 г",
    "kcal": 247.5,
    "protein": 46.5,
    "carbs": 0,
    "fat": 5.4
  },
  {
    "id": "chicken-breast-g200",
    "name": "Куриная грудка",
    "portion": "200 г",
    "kcal": 330,
    "protein": 62,
    "carbs": 0,
    "fat": 7.2
  },
  {
    "id": "chicken-breast-g250",
    "name": "Куриная грудка",
    "portion": "250 г",
    "kcal": 412.5,
    "protein": 77.5,
    "carbs": 0,
    "fat": 9
  },
  {
    "id": "chicken-breast-g300",
    "name": "Куриная грудка",
    "portion": "300 г",
    "kcal": 495,
    "protein": 93,
    "carbs": 0,
    "fat": 10.8
  },
  {
    "id": "rice-white-g50",
    "name": "Рис варёный",
    "portion": "50 г",
    "kcal": 65,
    "protein": 1.4,
    "carbs": 14,
    "fat": 0.2
  },
  {
    "id": "rice-white-g75",
    "name": "Рис варёный",
    "portion": "75 г",
    "kcal": 97.5,
    "protein": 2,
    "carbs": 21,
    "fat": 0.2
  },
  {
    "id": "rice-white-g120",
    "name": "Рис варёный",
    "portion": "120 г",
    "kcal": 156,
    "protein": 3.2,
    "carbs": 33.6,
    "fat": 0.4
  },
  {
    "id": "rice-white-g150",
    "name": "Рис варёный",
    "portion": "150 г",
    "kcal": 195,
    "protein": 4.1,
    "carbs": 42,
    "fat": 0.5
  },
  {
    "id": "rice-white-g200",
    "name": "Рис варёный",
    "portion": "200 г",
    "kcal": 260,
    "protein": 5.4,
    "carbs": 56,
    "fat": 0.6
  },
  {
    "id": "rice-white-g250",
    "name": "Рис варёный",
    "portion": "250 г",
    "kcal": 325,
    "protein": 6.8,
    "carbs": 70,
    "fat": 0.8
  },
  {
    "id": "rice-white-g300",
    "name": "Рис варёный",
    "portion": "300 г",
    "kcal": 390,
    "protein": 8.1,
    "carbs": 84,
    "fat": 0.9
  },
  {
    "id": "buckwheat-g50",
    "name": "Гречка варёная",
    "portion": "50 г",
    "kcal": 55,
    "protein": 2,
    "carbs": 10.5,
    "fat": 0.4
  },
  {
    "id": "buckwheat-g75",
    "name": "Гречка варёная",
    "portion": "75 г",
    "kcal": 82.5,
    "protein": 3,
    "carbs": 15.8,
    "fat": 0.5
  },
  {
    "id": "buckwheat-g120",
    "name": "Гречка варёная",
    "portion": "120 г",
    "kcal": 132,
    "protein": 4.8,
    "carbs": 25.2,
    "fat": 0.8
  },
  {
    "id": "buckwheat-g150",
    "name": "Гречка варёная",
    "portion": "150 г",
    "kcal": 165,
    "protein": 6,
    "carbs": 31.5,
    "fat": 1
  },
  {
    "id": "buckwheat-g200",
    "name": "Гречка варёная",
    "portion": "200 г",
    "kcal": 220,
    "protein": 8,
    "carbs": 42,
    "fat": 1.4
  },
  {
    "id": "buckwheat-g250",
    "name": "Гречка варёная",
    "portion": "250 г",
    "kcal": 275,
    "protein": 10,
    "carbs": 52.5,
    "fat": 1.8
  },
  {
    "id": "buckwheat-g300",
    "name": "Гречка варёная",
    "portion": "300 г",
    "kcal": 330,
    "protein": 12,
    "carbs": 63,
    "fat": 2.1
  },
  {
    "id": "cottage-5-g50",
    "name": "Творог 5%",
    "portion": "50 г",
    "kcal": 60.5,
    "protein": 8.5,
    "carbs": 1.5,
    "fat": 2.5
  },
  {
    "id": "cottage-5-g75",
    "name": "Творог 5%",
    "portion": "75 г",
    "kcal": 90.8,
    "protein": 12.8,
    "carbs": 2.3,
    "fat": 3.8
  },
  {
    "id": "cottage-5-g120",
    "name": "Творог 5%",
    "portion": "120 г",
    "kcal": 145.2,
    "protein": 20.4,
    "carbs": 3.6,
    "fat": 6
  },
  {
    "id": "cottage-5-g150",
    "name": "Творог 5%",
    "portion": "150 г",
    "kcal": 181.5,
    "protein": 25.5,
    "carbs": 4.5,
    "fat": 7.5
  },
  {
    "id": "cottage-5-g200",
    "name": "Творог 5%",
    "portion": "200 г",
    "kcal": 242,
    "protein": 34,
    "carbs": 6,
    "fat": 10
  },
  {
    "id": "cottage-5-g250",
    "name": "Творог 5%",
    "portion": "250 г",
    "kcal": 302.5,
    "protein": 42.5,
    "carbs": 7.5,
    "fat": 12.5
  },
  {
    "id": "cottage-5-g300",
    "name": "Творог 5%",
    "portion": "300 г",
    "kcal": 363,
    "protein": 51,
    "carbs": 9,
    "fat": 15
  },
  {
    "id": "oats-dry-g50",
    "name": "Овсяные хлопья",
    "portion": "50 г",
    "kcal": 185,
    "protein": 6.5,
    "carbs": 33,
    "fat": 3.5
  },
  {
    "id": "oats-dry-g75",
    "name": "Овсяные хлопья",
    "portion": "75 г",
    "kcal": 277.5,
    "protein": 9.8,
    "carbs": 49.5,
    "fat": 5.3
  },
  {
    "id": "oats-dry-g120",
    "name": "Овсяные хлопья",
    "portion": "120 г",
    "kcal": 444,
    "protein": 15.6,
    "carbs": 79.2,
    "fat": 8.4
  },
  {
    "id": "oats-dry-g150",
    "name": "Овсяные хлопья",
    "portion": "150 г",
    "kcal": 555,
    "protein": 19.5,
    "carbs": 99,
    "fat": 10.5
  },
  {
    "id": "oats-dry-g200",
    "name": "Овсяные хлопья",
    "portion": "200 г",
    "kcal": 740,
    "protein": 26,
    "carbs": 132,
    "fat": 14
  },
  {
    "id": "oats-dry-g250",
    "name": "Овсяные хлопья",
    "portion": "250 г",
    "kcal": 925,
    "protein": 32.5,
    "carbs": 165,
    "fat": 17.5
  },
  {
    "id": "oats-dry-g300",
    "name": "Овсяные хлопья",
    "portion": "300 г",
    "kcal": 1110,
    "protein": 39,
    "carbs": 198,
    "fat": 21
  },
  {
    "id": "pasta-g50",
    "name": "Макароны варёные",
    "portion": "50 г",
    "kcal": 66,
    "protein": 2.3,
    "carbs": 13,
    "fat": 0.4
  },
  {
    "id": "pasta-g75",
    "name": "Макароны варёные",
    "portion": "75 г",
    "kcal": 99,
    "protein": 3.4,
    "carbs": 19.5,
    "fat": 0.6
  },
  {
    "id": "pasta-g120",
    "name": "Макароны варёные",
    "portion": "120 г",
    "kcal": 158.4,
    "protein": 5.4,
    "carbs": 31.2,
    "fat": 1
  },
  {
    "id": "pasta-g150",
    "name": "Макароны варёные",
    "portion": "150 г",
    "kcal": 198,
    "protein": 6.8,
    "carbs": 39,
    "fat": 1.2
  },
  {
    "id": "pasta-g200",
    "name": "Макароны варёные",
    "portion": "200 г",
    "kcal": 264,
    "protein": 9,
    "carbs": 52,
    "fat": 1.6
  },
  {
    "id": "pasta-g250",
    "name": "Макароны варёные",
    "portion": "250 г",
    "kcal": 330,
    "protein": 11.3,
    "carbs": 65,
    "fat": 2
  },
  {
    "id": "pasta-g300",
    "name": "Макароны варёные",
    "portion": "300 г",
    "kcal": 396,
    "protein": 13.5,
    "carbs": 78,
    "fat": 2.4
  },
  {
    "id": "salmon-g50",
    "name": "Лосось",
    "portion": "50 г",
    "kcal": 104,
    "protein": 10,
    "carbs": 0,
    "fat": 6.5
  },
  {
    "id": "salmon-g75",
    "name": "Лосось",
    "portion": "75 г",
    "kcal": 156,
    "protein": 15,
    "carbs": 0,
    "fat": 9.8
  },
  {
    "id": "salmon-g120",
    "name": "Лосось",
    "portion": "120 г",
    "kcal": 249.6,
    "protein": 24,
    "carbs": 0,
    "fat": 15.6
  },
  {
    "id": "salmon-g150",
    "name": "Лосось",
    "portion": "150 г",
    "kcal": 312,
    "protein": 30,
    "carbs": 0,
    "fat": 19.5
  },
  {
    "id": "salmon-g200",
    "name": "Лосось",
    "portion": "200 г",
    "kcal": 416,
    "protein": 40,
    "carbs": 0,
    "fat": 26
  },
  {
    "id": "salmon-g250",
    "name": "Лосось",
    "portion": "250 г",
    "kcal": 520,
    "protein": 50,
    "carbs": 0,
    "fat": 32.5
  },
  {
    "id": "salmon-g300",
    "name": "Лосось",
    "portion": "300 г",
    "kcal": 624,
    "protein": 60,
    "carbs": 0,
    "fat": 39
  },
  {
    "id": "potato-boil-g50",
    "name": "Картофель варёный",
    "portion": "50 г",
    "kcal": 43.5,
    "protein": 1,
    "carbs": 10,
    "fat": 0.1
  },
  {
    "id": "potato-boil-g75",
    "name": "Картофель варёный",
    "portion": "75 г",
    "kcal": 65.3,
    "protein": 1.5,
    "carbs": 15,
    "fat": 0.1
  },
  {
    "id": "potato-boil-g120",
    "name": "Картофель варёный",
    "portion": "120 г",
    "kcal": 104.4,
    "protein": 2.4,
    "carbs": 24,
    "fat": 0.1
  },
  {
    "id": "potato-boil-g150",
    "name": "Картофель варёный",
    "portion": "150 г",
    "kcal": 130.5,
    "protein": 3,
    "carbs": 30,
    "fat": 0.2
  },
  {
    "id": "potato-boil-g200",
    "name": "Картофель варёный",
    "portion": "200 г",
    "kcal": 174,
    "protein": 4,
    "carbs": 40,
    "fat": 0.2
  },
  {
    "id": "potato-boil-g250",
    "name": "Картофель варёный",
    "portion": "250 г",
    "kcal": 217.5,
    "protein": 5,
    "carbs": 50,
    "fat": 0.3
  },
  {
    "id": "potato-boil-g300",
    "name": "Картофель варёный",
    "portion": "300 г",
    "kcal": 261,
    "protein": 6,
    "carbs": 60,
    "fat": 0.3
  },
  {
    "id": "syrniki-3",
    "name": "Сырники",
    "portion": "3 шт",
    "kcal": 330,
    "protein": 21,
    "carbs": 33,
    "fat": 12
  },
  {
    "id": "oladyi",
    "name": "Оладьи",
    "portion": "3 шт",
    "kcal": 250,
    "protein": 7,
    "carbs": 35,
    "fat": 9
  },
  {
    "id": "blini-meat",
    "name": "Блины с мясом",
    "portion": "2 шт",
    "kcal": 320,
    "protein": 14,
    "carbs": 30,
    "fat": 14
  },
  {
    "id": "blini-cottage",
    "name": "Блины с творогом",
    "portion": "2 шт",
    "kcal": 280,
    "protein": 12,
    "carbs": 32,
    "fat": 10
  },
  {
    "id": "blini-jam",
    "name": "Блины с вареньем",
    "portion": "2 шт",
    "kcal": 260,
    "protein": 6,
    "carbs": 42,
    "fat": 6
  },
  {
    "id": "cottage-zapekanka",
    "name": "Творожная запеканка",
    "portion": "150 г",
    "kcal": 220,
    "protein": 16,
    "carbs": 22,
    "fat": 8
  },
  {
    "id": "rice-zapekanka",
    "name": "Рисовая запеканка",
    "portion": "150 г",
    "kcal": 200,
    "protein": 6,
    "carbs": 32,
    "fat": 6
  },
  {
    "id": "apple-pie",
    "name": "Яблочный пирог",
    "portion": "100 г",
    "kcal": 250,
    "protein": 3,
    "carbs": 35,
    "fat": 11
  },
  {
    "id": "napoleon",
    "name": "Наполеон",
    "portion": "100 г",
    "kcal": 380,
    "protein": 5,
    "carbs": 38,
    "fat": 22
  },
  {
    "id": "medovik",
    "name": "Медовик",
    "portion": "100 г",
    "kcal": 370,
    "protein": 5,
    "carbs": 42,
    "fat": 20
  },
  {
    "id": "bird-milk",
    "name": "Птичье молоко",
    "portion": "50 г",
    "kcal": 180,
    "protein": 3,
    "carbs": 22,
    "fat": 9
  },
  {
    "id": "sochnik",
    "name": "Сочник",
    "portion": "1 шт",
    "kcal": 280,
    "protein": 8,
    "carbs": 35,
    "fat": 12
  },
  {
    "id": "broth-chicken",
    "name": "Бульон куриный",
    "portion": "250 мл",
    "kcal": 40,
    "protein": 5,
    "carbs": 1,
    "fat": 1.5
  },
  {
    "id": "broth-beef",
    "name": "Бульон говяжий",
    "portion": "250 мл",
    "kcal": 35,
    "protein": 5,
    "carbs": 1,
    "fat": 1
  },
  {
    "id": "broth-veg",
    "name": "Овощной бульон",
    "portion": "250 мл",
    "kcal": 15,
    "protein": 0.5,
    "carbs": 3,
    "fat": 0
  },
  {
    "id": "jelly-meat",
    "name": "Холодец",
    "portion": "150 г",
    "kcal": 180,
    "protein": 18,
    "carbs": 1,
    "fat": 12
  },
  {
    "id": "aspic-fish",
    "name": "Заливная рыба",
    "portion": "150 г",
    "kcal": 120,
    "protein": 16,
    "carbs": 2,
    "fat": 5
  },
  {
    "id": "pate-liver",
    "name": "Паштет печёночный",
    "portion": "50 г",
    "kcal": 150,
    "protein": 7,
    "carbs": 2,
    "fat": 12
  },
  {
    "id": "spread-cheese",
    "name": "Сырный спред",
    "portion": "30 г",
    "kcal": 80,
    "protein": 3,
    "carbs": 2,
    "fat": 7
  },
  {
    "id": "cream-cheese",
    "name": "Сливочный сыр",
    "portion": "30 г",
    "kcal": 100,
    "protein": 2,
    "carbs": 1,
    "fat": 10
  },
  {
    "id": "labneh",
    "name": "Лабне",
    "portion": "50 г",
    "kcal": 80,
    "protein": 4,
    "carbs": 3,
    "fat": 6
  },
  {
    "id": "ricotta-honey",
    "name": "Рикотта с мёдом",
    "portion": "100 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 18,
    "fat": 12
  },
  {
    "id": "fruit-salad",
    "name": "Фруктовый салат",
    "portion": "200 г",
    "kcal": 120,
    "protein": 1.5,
    "carbs": 28,
    "fat": 0.5
  },
  {
    "id": "veg-stew",
    "name": "Овощное рагу",
    "portion": "250 г",
    "kcal": 150,
    "protein": 4,
    "carbs": 20,
    "fat": 6
  },
  {
    "id": "ratatouille-oil",
    "name": "Рататуй с маслом",
    "portion": "250 г",
    "kcal": 160,
    "protein": 3,
    "carbs": 15,
    "fat": 9
  },
  {
    "id": "stuffed-eggplant",
    "name": "Баклажан фаршированный",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 14,
    "fat": 14
  },
  {
    "id": "cabbage-cutlet",
    "name": "Котлета капустная",
    "portion": "2 шт",
    "kcal": 180,
    "protein": 5,
    "carbs": 20,
    "fat": 8
  },
  {
    "id": "carrot-cutlet",
    "name": "Котлета морковная",
    "portion": "2 шт",
    "kcal": 160,
    "protein": 4,
    "carbs": 22,
    "fat": 6
  },
  {
    "id": "potato-cutlet",
    "name": "Котлета картофельная",
    "portion": "2 шт",
    "kcal": 200,
    "protein": 4,
    "carbs": 28,
    "fat": 8
  },
  {
    "id": "fish-soup-fin",
    "name": "Уха сборная",
    "portion": "300 мл",
    "kcal": 110,
    "protein": 14,
    "carbs": 4,
    "fat": 4
  },
  {
    "id": "solyanka-meat",
    "name": "Солянка мясная",
    "portion": "300 мл",
    "kcal": 240,
    "protein": 14,
    "carbs": 10,
    "fat": 16
  },
  {
    "id": "rassolnik",
    "name": "Рассольник",
    "portion": "300 мл",
    "kcal": 160,
    "protein": 8,
    "carbs": 16,
    "fat": 6
  },
  {
    "id": "kharcho",
    "name": "Харчо",
    "portion": "300 мл",
    "kcal": 200,
    "protein": 12,
    "carbs": 14,
    "fat": 10
  },
  {
    "id": "ukha-salmon",
    "name": "Уха из лосося",
    "portion": "300 мл",
    "kcal": 140,
    "protein": 14,
    "carbs": 4,
    "fat": 6
  },
  {
    "id": "combo-1",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-2",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-3",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-4",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-5",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-6",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-7",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-8",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-9",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-10",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-11",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-12",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-13",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-14",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-15",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-16",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-17",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-18",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-19",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-20",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-21",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-22",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-23",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-24",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-25",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-26",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-27",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-28",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-29",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-30",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-31",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-32",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-33",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-34",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-35",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-36",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-37",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-38",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-39",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-40",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-41",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-42",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-43",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-44",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-45",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-46",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-47",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-48",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-49",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-50",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-51",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-52",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-53",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-54",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-55",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-56",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-57",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-58",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-59",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-60",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-61",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-62",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-63",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-64",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-65",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-66",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-67",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-68",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-69",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-70",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-71",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-72",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-73",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-74",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-75",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-76",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-77",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-78",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-79",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-80",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-81",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-82",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-83",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-84",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-85",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-86",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-87",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-88",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-89",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-90",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-91",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-92",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-93",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-94",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-95",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-96",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-97",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-98",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-99",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-100",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-101",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-102",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-103",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-104",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-105",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-106",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-107",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-108",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-109",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-110",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-111",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-112",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-113",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-114",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-115",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-116",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-117",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-118",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-119",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-120",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-121",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-122",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-123",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-124",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-125",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-126",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-127",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-128",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-129",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-130",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-131",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-132",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-133",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-134",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-135",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-136",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-137",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-138",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-139",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-140",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-141",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-142",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-143",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-144",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-145",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-146",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-147",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-148",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-149",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-150",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-151",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-152",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-153",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-154",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-155",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-156",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-157",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-158",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-159",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-160",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-161",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-162",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-163",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-164",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-165",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-166",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-167",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-168",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-169",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-170",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-171",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-172",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-173",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-174",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-175",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-176",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-177",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-178",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-179",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-180",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-181",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-182",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-183",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-184",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-185",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-186",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-187",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-188",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-189",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-190",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-191",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-192",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-193",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-194",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-195",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-196",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-197",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-198",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-199",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-200",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-201",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-202",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-203",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-204",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-205",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-206",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-207",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-208",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-209",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-210",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-211",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-212",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-213",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-214",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-215",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-216",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-217",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-218",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-219",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-220",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-221",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-222",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-223",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-224",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-225",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-226",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-227",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-228",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-229",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-230",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-231",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-232",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-233",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-234",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-235",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-236",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-237",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-238",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-239",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-240",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-241",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-242",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-243",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-244",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-245",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-246",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-247",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-248",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-249",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-250",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-251",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-252",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-253",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-254",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-255",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  }
]

export type MealSlot = 'breakfast' | 'lunch' | 'dinner' | 'snack'

export const MEAL_LABELS: Record<MealSlot, string> = {
  breakfast: 'Завтрак',
  lunch: 'Обед',
  dinner: 'Ужин',
  snack: 'Перекус',
}
