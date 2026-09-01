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

/** Пресеты продуктов и блюд — быстрый ввод (~1337) */
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
    "name": "Картофель варёный (150 г)",
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
    "name": "Куриная грудка (50 г)",
    "portion": "50 г",
    "kcal": 82.5,
    "protein": 15.5,
    "carbs": 0,
    "fat": 1.8
  },
  {
    "id": "chicken-breast-g75",
    "name": "Куриная грудка (75 г)",
    "portion": "75 г",
    "kcal": 123.8,
    "protein": 23.3,
    "carbs": 0,
    "fat": 2.7
  },
  {
    "id": "chicken-breast-g120",
    "name": "Куриная грудка (120 г)",
    "portion": "120 г",
    "kcal": 198,
    "protein": 37.2,
    "carbs": 0,
    "fat": 4.3
  },
  {
    "id": "chicken-breast-g150",
    "name": "Куриная грудка (150 г)",
    "portion": "150 г",
    "kcal": 247.5,
    "protein": 46.5,
    "carbs": 0,
    "fat": 5.4
  },
  {
    "id": "chicken-breast-g200",
    "name": "Куриная грудка (200 г)",
    "portion": "200 г",
    "kcal": 330,
    "protein": 62,
    "carbs": 0,
    "fat": 7.2
  },
  {
    "id": "chicken-breast-g250",
    "name": "Куриная грудка (250 г)",
    "portion": "250 г",
    "kcal": 412.5,
    "protein": 77.5,
    "carbs": 0,
    "fat": 9
  },
  {
    "id": "chicken-breast-g300",
    "name": "Куриная грудка (300 г)",
    "portion": "300 г",
    "kcal": 495,
    "protein": 93,
    "carbs": 0,
    "fat": 10.8
  },
  {
    "id": "rice-white-g50",
    "name": "Рис варёный (50 г)",
    "portion": "50 г",
    "kcal": 65,
    "protein": 1.4,
    "carbs": 14,
    "fat": 0.2
  },
  {
    "id": "rice-white-g75",
    "name": "Рис варёный (75 г)",
    "portion": "75 г",
    "kcal": 97.5,
    "protein": 2,
    "carbs": 21,
    "fat": 0.2
  },
  {
    "id": "rice-white-g120",
    "name": "Рис варёный (120 г)",
    "portion": "120 г",
    "kcal": 156,
    "protein": 3.2,
    "carbs": 33.6,
    "fat": 0.4
  },
  {
    "id": "rice-white-g150",
    "name": "Рис варёный (150 г)",
    "portion": "150 г",
    "kcal": 195,
    "protein": 4.1,
    "carbs": 42,
    "fat": 0.5
  },
  {
    "id": "rice-white-g200",
    "name": "Рис варёный (200 г)",
    "portion": "200 г",
    "kcal": 260,
    "protein": 5.4,
    "carbs": 56,
    "fat": 0.6
  },
  {
    "id": "rice-white-g250",
    "name": "Рис варёный (250 г)",
    "portion": "250 г",
    "kcal": 325,
    "protein": 6.8,
    "carbs": 70,
    "fat": 0.8
  },
  {
    "id": "rice-white-g300",
    "name": "Рис варёный (300 г)",
    "portion": "300 г",
    "kcal": 390,
    "protein": 8.1,
    "carbs": 84,
    "fat": 0.9
  },
  {
    "id": "buckwheat-g50",
    "name": "Гречка варёная (50 г)",
    "portion": "50 г",
    "kcal": 55,
    "protein": 2,
    "carbs": 10.5,
    "fat": 0.4
  },
  {
    "id": "buckwheat-g75",
    "name": "Гречка варёная (75 г)",
    "portion": "75 г",
    "kcal": 82.5,
    "protein": 3,
    "carbs": 15.8,
    "fat": 0.5
  },
  {
    "id": "buckwheat-g120",
    "name": "Гречка варёная (120 г)",
    "portion": "120 г",
    "kcal": 132,
    "protein": 4.8,
    "carbs": 25.2,
    "fat": 0.8
  },
  {
    "id": "buckwheat-g150",
    "name": "Гречка варёная (150 г)",
    "portion": "150 г",
    "kcal": 165,
    "protein": 6,
    "carbs": 31.5,
    "fat": 1
  },
  {
    "id": "buckwheat-g200",
    "name": "Гречка варёная (200 г)",
    "portion": "200 г",
    "kcal": 220,
    "protein": 8,
    "carbs": 42,
    "fat": 1.4
  },
  {
    "id": "buckwheat-g250",
    "name": "Гречка варёная (250 г)",
    "portion": "250 г",
    "kcal": 275,
    "protein": 10,
    "carbs": 52.5,
    "fat": 1.8
  },
  {
    "id": "buckwheat-g300",
    "name": "Гречка варёная (300 г)",
    "portion": "300 г",
    "kcal": 330,
    "protein": 12,
    "carbs": 63,
    "fat": 2.1
  },
  {
    "id": "cottage-5-g50",
    "name": "Творог 5% (50 г)",
    "portion": "50 г",
    "kcal": 60.5,
    "protein": 8.5,
    "carbs": 1.5,
    "fat": 2.5
  },
  {
    "id": "cottage-5-g75",
    "name": "Творог 5% (75 г)",
    "portion": "75 г",
    "kcal": 90.8,
    "protein": 12.8,
    "carbs": 2.3,
    "fat": 3.8
  },
  {
    "id": "cottage-5-g120",
    "name": "Творог 5% (120 г)",
    "portion": "120 г",
    "kcal": 145.2,
    "protein": 20.4,
    "carbs": 3.6,
    "fat": 6
  },
  {
    "id": "cottage-5-g150",
    "name": "Творог 5% (150 г)",
    "portion": "150 г",
    "kcal": 181.5,
    "protein": 25.5,
    "carbs": 4.5,
    "fat": 7.5
  },
  {
    "id": "cottage-5-g200",
    "name": "Творог 5% (200 г)",
    "portion": "200 г",
    "kcal": 242,
    "protein": 34,
    "carbs": 6,
    "fat": 10
  },
  {
    "id": "cottage-5-g250",
    "name": "Творог 5% (250 г)",
    "portion": "250 г",
    "kcal": 302.5,
    "protein": 42.5,
    "carbs": 7.5,
    "fat": 12.5
  },
  {
    "id": "cottage-5-g300",
    "name": "Творог 5% (300 г)",
    "portion": "300 г",
    "kcal": 363,
    "protein": 51,
    "carbs": 9,
    "fat": 15
  },
  {
    "id": "oats-dry-g50",
    "name": "Овсяные хлопья (50 г)",
    "portion": "50 г",
    "kcal": 185,
    "protein": 6.5,
    "carbs": 33,
    "fat": 3.5
  },
  {
    "id": "oats-dry-g75",
    "name": "Овсяные хлопья (75 г)",
    "portion": "75 г",
    "kcal": 277.5,
    "protein": 9.8,
    "carbs": 49.5,
    "fat": 5.3
  },
  {
    "id": "oats-dry-g120",
    "name": "Овсяные хлопья (120 г)",
    "portion": "120 г",
    "kcal": 444,
    "protein": 15.6,
    "carbs": 79.2,
    "fat": 8.4
  },
  {
    "id": "oats-dry-g150",
    "name": "Овсяные хлопья (150 г)",
    "portion": "150 г",
    "kcal": 555,
    "protein": 19.5,
    "carbs": 99,
    "fat": 10.5
  },
  {
    "id": "oats-dry-g200",
    "name": "Овсяные хлопья (200 г)",
    "portion": "200 г",
    "kcal": 740,
    "protein": 26,
    "carbs": 132,
    "fat": 14
  },
  {
    "id": "oats-dry-g250",
    "name": "Овсяные хлопья (250 г)",
    "portion": "250 г",
    "kcal": 925,
    "protein": 32.5,
    "carbs": 165,
    "fat": 17.5
  },
  {
    "id": "oats-dry-g300",
    "name": "Овсяные хлопья (300 г)",
    "portion": "300 г",
    "kcal": 1110,
    "protein": 39,
    "carbs": 198,
    "fat": 21
  },
  {
    "id": "pasta-g50",
    "name": "Макароны варёные (50 г)",
    "portion": "50 г",
    "kcal": 66,
    "protein": 2.3,
    "carbs": 13,
    "fat": 0.4
  },
  {
    "id": "pasta-g75",
    "name": "Макароны варёные (75 г)",
    "portion": "75 г",
    "kcal": 99,
    "protein": 3.4,
    "carbs": 19.5,
    "fat": 0.6
  },
  {
    "id": "pasta-g120",
    "name": "Макароны варёные (120 г)",
    "portion": "120 г",
    "kcal": 158.4,
    "protein": 5.4,
    "carbs": 31.2,
    "fat": 1
  },
  {
    "id": "pasta-g150",
    "name": "Макароны варёные (150 г)",
    "portion": "150 г",
    "kcal": 198,
    "protein": 6.8,
    "carbs": 39,
    "fat": 1.2
  },
  {
    "id": "pasta-g200",
    "name": "Макароны варёные (200 г)",
    "portion": "200 г",
    "kcal": 264,
    "protein": 9,
    "carbs": 52,
    "fat": 1.6
  },
  {
    "id": "pasta-g250",
    "name": "Макароны варёные (250 г)",
    "portion": "250 г",
    "kcal": 330,
    "protein": 11.3,
    "carbs": 65,
    "fat": 2
  },
  {
    "id": "pasta-g300",
    "name": "Макароны варёные (300 г)",
    "portion": "300 г",
    "kcal": 396,
    "protein": 13.5,
    "carbs": 78,
    "fat": 2.4
  },
  {
    "id": "salmon-g50",
    "name": "Лосось (50 г)",
    "portion": "50 г",
    "kcal": 104,
    "protein": 10,
    "carbs": 0,
    "fat": 6.5
  },
  {
    "id": "salmon-g75",
    "name": "Лосось (75 г)",
    "portion": "75 г",
    "kcal": 156,
    "protein": 15,
    "carbs": 0,
    "fat": 9.8
  },
  {
    "id": "salmon-g120",
    "name": "Лосось (120 г)",
    "portion": "120 г",
    "kcal": 249.6,
    "protein": 24,
    "carbs": 0,
    "fat": 15.6
  },
  {
    "id": "salmon-g150",
    "name": "Лосось (150 г)",
    "portion": "150 г",
    "kcal": 312,
    "protein": 30,
    "carbs": 0,
    "fat": 19.5
  },
  {
    "id": "salmon-g200",
    "name": "Лосось (200 г)",
    "portion": "200 г",
    "kcal": 416,
    "protein": 40,
    "carbs": 0,
    "fat": 26
  },
  {
    "id": "salmon-g250",
    "name": "Лосось (250 г)",
    "portion": "250 г",
    "kcal": 520,
    "protein": 50,
    "carbs": 0,
    "fat": 32.5
  },
  {
    "id": "salmon-g300",
    "name": "Лосось (300 г)",
    "portion": "300 г",
    "kcal": 624,
    "protein": 60,
    "carbs": 0,
    "fat": 39
  },
  {
    "id": "potato-boil-g50",
    "name": "Картофель варёный (50 г)",
    "portion": "50 г",
    "kcal": 43.5,
    "protein": 1,
    "carbs": 10,
    "fat": 0.1
  },
  {
    "id": "potato-boil-g75",
    "name": "Картофель варёный (75 г)",
    "portion": "75 г",
    "kcal": 65.3,
    "protein": 1.5,
    "carbs": 15,
    "fat": 0.1
  },
  {
    "id": "potato-boil-g120",
    "name": "Картофель варёный (120 г)",
    "portion": "120 г",
    "kcal": 104.4,
    "protein": 2.4,
    "carbs": 24,
    "fat": 0.1
  },
  {
    "id": "potato-boil-g150",
    "name": "Картофель варёный (150 г)",
    "portion": "150 г",
    "kcal": 130.5,
    "protein": 3,
    "carbs": 30,
    "fat": 0.2
  },
  {
    "id": "potato-boil-g200",
    "name": "Картофель варёный (200 г)",
    "portion": "200 г",
    "kcal": 174,
    "protein": 4,
    "carbs": 40,
    "fat": 0.2
  },
  {
    "id": "potato-boil-g250",
    "name": "Картофель варёный (250 г)",
    "portion": "250 г",
    "kcal": 217.5,
    "protein": 5,
    "carbs": 50,
    "fat": 0.3
  },
  {
    "id": "potato-boil-g300",
    "name": "Картофель варёный (300 г)",
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
    "id": "toast-butter",
    "name": "Тост с маслом",
    "portion": "1 шт",
    "kcal": 180,
    "protein": 4,
    "carbs": 20,
    "fat": 9
  },
  {
    "id": "toast-jam",
    "name": "Тост с вареньем",
    "portion": "1 шт",
    "kcal": 190,
    "protein": 3,
    "carbs": 32,
    "fat": 5
  },
  {
    "id": "toast-cheese",
    "name": "Тост с сыром",
    "portion": "1 шт",
    "kcal": 220,
    "protein": 10,
    "carbs": 20,
    "fat": 11
  },
  {
    "id": "toast-avocado-egg",
    "name": "Тост авокадо яйцо",
    "portion": "1 шт",
    "kcal": 320,
    "protein": 14,
    "carbs": 24,
    "fat": 18
  },
  {
    "id": "granola-yogurt-bowl",
    "name": "Гранола с йогуртом",
    "portion": "250 г",
    "kcal": 320,
    "protein": 12,
    "carbs": 40,
    "fat": 12
  },
  {
    "id": "chia-pudding-berry",
    "name": "Чиа-пудинг ягодный",
    "portion": "200 г",
    "kcal": 240,
    "protein": 8,
    "carbs": 22,
    "fat": 12
  },
  {
    "id": "overnight-oats",
    "name": "Овсянка overnight",
    "portion": "250 г",
    "kcal": 280,
    "protein": 10,
    "carbs": 42,
    "fat": 7
  },
  {
    "id": "protein-oats",
    "name": "Протеиновая овсянка",
    "portion": "300 г",
    "kcal": 350,
    "protein": 30,
    "carbs": 40,
    "fat": 8
  },
  {
    "id": "cottage-cocoa",
    "name": "Творог с какао",
    "portion": "150 г",
    "kcal": 180,
    "protein": 17,
    "carbs": 12,
    "fat": 6
  },
  {
    "id": "skyr-berry",
    "name": "Скир с ягодами",
    "portion": "200 г",
    "kcal": 150,
    "protein": 18,
    "carbs": 14,
    "fat": 1
  },
  {
    "id": "omelette-cheese-3",
    "name": "Омлет 3 яйца с сыром",
    "portion": "1 порция",
    "kcal": 320,
    "protein": 24,
    "carbs": 2,
    "fat": 24
  },
  {
    "id": "omelette-mushroom",
    "name": "Омлет с грибами",
    "portion": "1 порция",
    "kcal": 240,
    "protein": 16,
    "carbs": 4,
    "fat": 18
  },
  {
    "id": "omelette-spinach",
    "name": "Омлет со шпинатом",
    "portion": "1 порция",
    "kcal": 220,
    "protein": 16,
    "carbs": 3,
    "fat": 16
  },
  {
    "id": "shakshuka-feta",
    "name": "Шакшука с фетой",
    "portion": "1 порция",
    "kcal": 300,
    "protein": 16,
    "carbs": 14,
    "fat": 20
  },
  {
    "id": "porridge-apple",
    "name": "Каша с яблоком",
    "portion": "250 г",
    "kcal": 220,
    "protein": 6,
    "carbs": 40,
    "fat": 4
  },
  {
    "id": "porridge-chocolate",
    "name": "Шоколадная каша",
    "portion": "250 г",
    "kcal": 260,
    "protein": 8,
    "carbs": 42,
    "fat": 7
  },
  {
    "id": "soup-borsch-lean",
    "name": "Борщ постный",
    "portion": "300 мл",
    "kcal": 110,
    "protein": 3,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "soup-chicken-noodle",
    "name": "Куриный с лапшой",
    "portion": "300 мл",
    "kcal": 160,
    "protein": 12,
    "carbs": 16,
    "fat": 5
  },
  {
    "id": "soup-cream-mushroom",
    "name": "Крем-суп грибной",
    "portion": "300 мл",
    "kcal": 180,
    "protein": 5,
    "carbs": 14,
    "fat": 12
  },
  {
    "id": "soup-cream-broccoli",
    "name": "Крем-суп брокколи",
    "portion": "300 мл",
    "kcal": 150,
    "protein": 5,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "soup-lentil",
    "name": "Чечевичный суп",
    "portion": "300 мл",
    "kcal": 190,
    "protein": 12,
    "carbs": 26,
    "fat": 4
  },
  {
    "id": "soup-minestrone",
    "name": "Минестроне",
    "portion": "300 мл",
    "kcal": 140,
    "protein": 5,
    "carbs": 20,
    "fat": 4
  },
  {
    "id": "soup-gazpacho",
    "name": "Гаспачо",
    "portion": "300 мл",
    "kcal": 90,
    "protein": 2,
    "carbs": 14,
    "fat": 3
  },
  {
    "id": "soup-pho-chicken",
    "name": "Фо с курицей",
    "portion": "400 мл",
    "kcal": 320,
    "protein": 22,
    "carbs": 38,
    "fat": 8
  },
  {
    "id": "soup-tom-kha",
    "name": "Том кха",
    "portion": "300 мл",
    "kcal": 200,
    "protein": 10,
    "carbs": 10,
    "fat": 14
  },
  {
    "id": "soup-ear",
    "name": "Уха домашняя",
    "portion": "300 мл",
    "kcal": 100,
    "protein": 12,
    "carbs": 4,
    "fat": 3
  },
  {
    "id": "beef-goulash",
    "name": "Гуляш говяжий",
    "portion": "250 г",
    "kcal": 280,
    "protein": 22,
    "carbs": 12,
    "fat": 16
  },
  {
    "id": "pork-goulash",
    "name": "Гуляш свиной",
    "portion": "250 г",
    "kcal": 320,
    "protein": 20,
    "carbs": 12,
    "fat": 20
  },
  {
    "id": "chicken-paprikash",
    "name": "Паприкаш куриный",
    "portion": "250 г",
    "kcal": 260,
    "protein": 22,
    "carbs": 10,
    "fat": 14
  },
  {
    "id": "beef-az",
    "name": "Азу по-татарски",
    "portion": "250 г",
    "kcal": 300,
    "protein": 20,
    "carbs": 16,
    "fat": 16
  },
  {
    "id": "pilaf-veg",
    "name": "Плов овощной",
    "portion": "250 г",
    "kcal": 280,
    "protein": 6,
    "carbs": 42,
    "fat": 10
  },
  {
    "id": "pilaf-lamb",
    "name": "Плов с бараниной",
    "portion": "250 г",
    "kcal": 380,
    "protein": 16,
    "carbs": 40,
    "fat": 16
  },
  {
    "id": "cabbage-stew-meat",
    "name": "Тушёная капуста с мясом",
    "portion": "250 г",
    "kcal": 220,
    "protein": 14,
    "carbs": 14,
    "fat": 12
  },
  {
    "id": "potato-stew-meat",
    "name": "Жаркое по-домашнему",
    "portion": "300 г",
    "kcal": 340,
    "protein": 18,
    "carbs": 28,
    "fat": 16
  },
  {
    "id": "chicken-rice-bowl",
    "name": "Боул курица рис",
    "portion": "350 г",
    "kcal": 420,
    "protein": 32,
    "carbs": 45,
    "fat": 10
  },
  {
    "id": "salmon-rice-bowl",
    "name": "Боул лосось рис",
    "portion": "350 г",
    "kcal": 480,
    "protein": 30,
    "carbs": 42,
    "fat": 18
  },
  {
    "id": "tuna-rice-bowl",
    "name": "Боул тунец рис",
    "portion": "350 г",
    "kcal": 400,
    "protein": 32,
    "carbs": 42,
    "fat": 10
  },
  {
    "id": "falafel-bowl",
    "name": "Боул фалафель",
    "portion": "350 г",
    "kcal": 450,
    "protein": 16,
    "carbs": 50,
    "fat": 18
  },
  {
    "id": "gyro-plate",
    "name": "Гирос на тарелке",
    "portion": "350 г",
    "kcal": 520,
    "protein": 28,
    "carbs": 40,
    "fat": 26
  },
  {
    "id": "steak-fries",
    "name": "Стейк с картофелем",
    "portion": "350 г",
    "kcal": 550,
    "protein": 40,
    "carbs": 35,
    "fat": 26
  },
  {
    "id": "fish-chips",
    "name": "Рыба с картофелем фри",
    "portion": "350 г",
    "kcal": 520,
    "protein": 28,
    "carbs": 45,
    "fat": 24
  },
  {
    "id": "chicken-teriyaki",
    "name": "Курица терияки",
    "portion": "250 г",
    "kcal": 320,
    "protein": 28,
    "carbs": 24,
    "fat": 10
  },
  {
    "id": "beef-teriyaki",
    "name": "Говядина терияки",
    "portion": "250 г",
    "kcal": 340,
    "protein": 30,
    "carbs": 22,
    "fat": 12
  },
  {
    "id": "pork-bulgogi",
    "name": "Бульгоги свинина",
    "portion": "250 г",
    "kcal": 360,
    "protein": 26,
    "carbs": 18,
    "fat": 18
  },
  {
    "id": "kimchi-fried-rice",
    "name": "Рис с кимчи",
    "portion": "300 г",
    "kcal": 380,
    "protein": 12,
    "carbs": 48,
    "fat": 14
  },
  {
    "id": "egg-fried-rice",
    "name": "Рис с яйцом жареный",
    "portion": "300 г",
    "kcal": 400,
    "protein": 14,
    "carbs": 50,
    "fat": 14
  },
  {
    "id": "noodles-veg",
    "name": "Лапша с овощами",
    "portion": "300 г",
    "kcal": 320,
    "protein": 10,
    "carbs": 48,
    "fat": 10
  },
  {
    "id": "noodles-beef",
    "name": "Лапша с говядиной",
    "portion": "350 г",
    "kcal": 420,
    "protein": 24,
    "carbs": 48,
    "fat": 14
  },
  {
    "id": "pasta-bolognese",
    "name": "Паста болоньезе",
    "portion": "350 г",
    "kcal": 450,
    "protein": 24,
    "carbs": 48,
    "fat": 16
  },
  {
    "id": "pasta-carbonara",
    "name": "Паста карбонара",
    "portion": "350 г",
    "kcal": 520,
    "protein": 22,
    "carbs": 48,
    "fat": 24
  },
  {
    "id": "pasta-pesto",
    "name": "Паста с песто",
    "portion": "300 г",
    "kcal": 420,
    "protein": 14,
    "carbs": 48,
    "fat": 18
  },
  {
    "id": "pasta-alfredo",
    "name": "Паста Альфредо",
    "portion": "350 г",
    "kcal": 480,
    "protein": 16,
    "carbs": 45,
    "fat": 26
  },
  {
    "id": "pasta-seafood",
    "name": "Паста с морепродуктами",
    "portion": "350 г",
    "kcal": 400,
    "protein": 26,
    "carbs": 45,
    "fat": 12
  },
  {
    "id": "lasagna-veg",
    "name": "Лазанья овощная",
    "portion": "250 г",
    "kcal": 320,
    "protein": 14,
    "carbs": 32,
    "fat": 14
  },
  {
    "id": "pizza-hawaii",
    "name": "Пицца гавайская",
    "portion": "1 кусок",
    "kcal": 260,
    "protein": 12,
    "carbs": 28,
    "fat": 11
  },
  {
    "id": "pizza-four-cheese",
    "name": "Пицца 4 сыра",
    "portion": "1 кусок",
    "kcal": 300,
    "protein": 14,
    "carbs": 26,
    "fat": 16
  },
  {
    "id": "pizza-veg",
    "name": "Пицца овощная",
    "portion": "1 кусок",
    "kcal": 210,
    "protein": 8,
    "carbs": 28,
    "fat": 8
  },
  {
    "id": "burger-chicken",
    "name": "Бургер куриный",
    "portion": "1 шт",
    "kcal": 420,
    "protein": 26,
    "carbs": 35,
    "fat": 18
  },
  {
    "id": "burger-veggie",
    "name": "Бургер овощной",
    "portion": "1 шт",
    "kcal": 380,
    "protein": 14,
    "carbs": 42,
    "fat": 16
  },
  {
    "id": "wrap-falafel",
    "name": "Врап фалафель",
    "portion": "1 шт",
    "kcal": 390,
    "protein": 14,
    "carbs": 45,
    "fat": 14
  },
  {
    "id": "wrap-tuna",
    "name": "Врап тунец",
    "portion": "1 шт",
    "kcal": 360,
    "protein": 24,
    "carbs": 32,
    "fat": 14
  },
  {
    "id": "sandwich-ham-cheese",
    "name": "Сэндвич ветчина сыр",
    "portion": "1 шт",
    "kcal": 380,
    "protein": 20,
    "carbs": 32,
    "fat": 18
  },
  {
    "id": "sandwich-club",
    "name": "Клаб-сэндвич",
    "portion": "1 шт",
    "kcal": 450,
    "protein": 26,
    "carbs": 36,
    "fat": 20
  },
  {
    "id": "croissant-ham-cheese",
    "name": "Круассан ветчина сыр",
    "portion": "1 шт",
    "kcal": 340,
    "protein": 14,
    "carbs": 28,
    "fat": 20
  },
  {
    "id": "salad-caesar-shrimp",
    "name": "Цезарь с креветками",
    "portion": "250 г",
    "kcal": 300,
    "protein": 22,
    "carbs": 10,
    "fat": 18
  },
  {
    "id": "salad-greek-chicken",
    "name": "Греческий с курицей",
    "portion": "250 г",
    "kcal": 260,
    "protein": 22,
    "carbs": 10,
    "fat": 14
  },
  {
    "id": "salad-tuna",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 220,
    "protein": 20,
    "carbs": 8,
    "fat": 12
  },
  {
    "id": "salad-egg",
    "name": "Салат яичный",
    "portion": "150 г",
    "kcal": 200,
    "protein": 10,
    "carbs": 6,
    "fat": 16
  },
  {
    "id": "salad-beet-feta",
    "name": "Свёкла с фетой",
    "portion": "150 г",
    "kcal": 160,
    "protein": 6,
    "carbs": 12,
    "fat": 10
  },
  {
    "id": "salad-coleslaw",
    "name": "Коулслоу",
    "portion": "150 г",
    "kcal": 180,
    "protein": 2,
    "carbs": 14,
    "fat": 14
  },
  {
    "id": "salad-potato",
    "name": "Картофельный салат",
    "portion": "150 г",
    "kcal": 190,
    "protein": 3,
    "carbs": 18,
    "fat": 12
  },
  {
    "id": "salad-tabbouleh",
    "name": "Табуле",
    "portion": "150 г",
    "kcal": 140,
    "protein": 4,
    "carbs": 18,
    "fat": 6
  },
  {
    "id": "salad-waldorf",
    "name": "Уолдорф",
    "portion": "150 г",
    "kcal": 200,
    "protein": 4,
    "carbs": 16,
    "fat": 14
  },
  {
    "id": "salad-shrimp",
    "name": "Салат с креветками",
    "portion": "200 г",
    "kcal": 180,
    "protein": 18,
    "carbs": 6,
    "fat": 8
  },
  {
    "id": "rice-butter",
    "name": "Рис с маслом",
    "portion": "150 г",
    "kcal": 230,
    "protein": 4,
    "carbs": 40,
    "fat": 6
  },
  {
    "id": "buckwheat-butter",
    "name": "Гречка с маслом",
    "portion": "150 г",
    "kcal": 210,
    "protein": 6,
    "carbs": 30,
    "fat": 7
  },
  {
    "id": "mashed-butter",
    "name": "Пюре с маслом",
    "portion": "150 г",
    "kcal": 180,
    "protein": 3,
    "carbs": 22,
    "fat": 9
  },
  {
    "id": "fries-small",
    "name": "Картофель фри малый",
    "portion": "100 г",
    "kcal": 310,
    "protein": 3.5,
    "carbs": 38,
    "fat": 15
  },
  {
    "id": "fries-large",
    "name": "Картофель фри большой",
    "portion": "150 г",
    "kcal": 465,
    "protein": 5,
    "carbs": 57,
    "fat": 22
  },
  {
    "id": "wedges-oven",
    "name": "Дольки в духовке",
    "portion": "150 г",
    "kcal": 180,
    "protein": 3,
    "carbs": 28,
    "fat": 6
  },
  {
    "id": "onion-rings",
    "name": "Луковые кольца",
    "portion": "100 г",
    "kcal": 280,
    "protein": 4,
    "carbs": 30,
    "fat": 16
  },
  {
    "id": "garlic-bread",
    "name": "Чесночный хлеб",
    "portion": "1 кусок",
    "kcal": 180,
    "protein": 4,
    "carbs": 22,
    "fat": 8
  },
  {
    "id": "corn-cob",
    "name": "Кукуруза в початках",
    "portion": "1 шт",
    "kcal": 120,
    "protein": 4,
    "carbs": 26,
    "fat": 2
  },
  {
    "id": "yogurt-peach",
    "name": "Йогурт персик",
    "portion": "150 г",
    "kcal": 130,
    "protein": 5,
    "carbs": 20,
    "fat": 3
  },
  {
    "id": "yogurt-strawberry",
    "name": "Йогурт клубника",
    "portion": "150 г",
    "kcal": 130,
    "protein": 5,
    "carbs": 20,
    "fat": 3
  },
  {
    "id": "yogurt-blueberry",
    "name": "Йогурт черника",
    "portion": "150 г",
    "kcal": 125,
    "protein": 5,
    "carbs": 19,
    "fat": 3
  },
  {
    "id": "yogurt-vanilla",
    "name": "Йогурт ваниль",
    "portion": "150 г",
    "kcal": 140,
    "protein": 5,
    "carbs": 22,
    "fat": 3.5
  },
  {
    "id": "kefir-berry",
    "name": "Кефир ягодный",
    "portion": "250 мл",
    "kcal": 140,
    "protein": 7,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "ryazhenka-honey",
    "name": "Ряженка с мёдом",
    "portion": "250 мл",
    "kcal": 220,
    "protein": 7,
    "carbs": 26,
    "fat": 8
  },
  {
    "id": "cottage-raisin",
    "name": "Творог с изюмом",
    "portion": "150 г",
    "kcal": 200,
    "protein": 16,
    "carbs": 22,
    "fat": 5
  },
  {
    "id": "cottage-jam",
    "name": "Творог с вареньем",
    "portion": "150 г",
    "kcal": 210,
    "protein": 16,
    "carbs": 24,
    "fat": 5
  },
  {
    "id": "cheese-toast",
    "name": "Сыр на тосте",
    "portion": "1 шт",
    "kcal": 200,
    "protein": 10,
    "carbs": 16,
    "fat": 10
  },
  {
    "id": "mozzarella-sticks",
    "name": "Моцарелла стикс",
    "portion": "4 шт",
    "kcal": 320,
    "protein": 16,
    "carbs": 24,
    "fat": 18
  },
  {
    "id": "salmon-teriyaki",
    "name": "Лосось терияки",
    "portion": "150 г",
    "kcal": 320,
    "protein": 28,
    "carbs": 12,
    "fat": 16
  },
  {
    "id": "salmon-grill-lemon",
    "name": "Лосось гриль лимон",
    "portion": "150 г",
    "kcal": 280,
    "protein": 30,
    "carbs": 1,
    "fat": 17
  },
  {
    "id": "cod-bake-veg",
    "name": "Треска с овощами",
    "portion": "250 г",
    "kcal": 220,
    "protein": 28,
    "carbs": 10,
    "fat": 6
  },
  {
    "id": "pollock-fry",
    "name": "Минтай жареный",
    "portion": "150 г",
    "kcal": 220,
    "protein": 22,
    "carbs": 8,
    "fat": 10
  },
  {
    "id": "shrimp-garlic",
    "name": "Креветки с чесноком",
    "portion": "150 г",
    "kcal": 180,
    "protein": 28,
    "carbs": 2,
    "fat": 6
  },
  {
    "id": "mussels-wine",
    "name": "Мидии в вине",
    "portion": "200 г",
    "kcal": 160,
    "protein": 18,
    "carbs": 6,
    "fat": 6
  },
  {
    "id": "sushi-set-12",
    "name": "Сет роллов",
    "portion": "12 шт",
    "kcal": 520,
    "protein": 22,
    "carbs": 70,
    "fat": 14
  },
  {
    "id": "poke-salmon",
    "name": "Поке с лососем",
    "portion": "350 г",
    "kcal": 450,
    "protein": 28,
    "carbs": 45,
    "fat": 14
  },
  {
    "id": "poke-tuna",
    "name": "Поке с тунцом",
    "portion": "350 г",
    "kcal": 420,
    "protein": 32,
    "carbs": 42,
    "fat": 10
  },
  {
    "id": "chicken-curry-mild",
    "name": "Курица карри мягкое",
    "portion": "300 г",
    "kcal": 380,
    "protein": 28,
    "carbs": 24,
    "fat": 18
  },
  {
    "id": "chicken-tikka",
    "name": "Курица тикка",
    "portion": "200 г",
    "kcal": 280,
    "protein": 30,
    "carbs": 8,
    "fat": 14
  },
  {
    "id": "lamb-curry",
    "name": "Баранина карри",
    "portion": "300 г",
    "kcal": 420,
    "protein": 26,
    "carbs": 18,
    "fat": 26
  },
  {
    "id": "beef-burger-patty",
    "name": "Котлета для бургера",
    "portion": "120 г",
    "kcal": 280,
    "protein": 22,
    "carbs": 1,
    "fat": 21
  },
  {
    "id": "chicken-burger-patty",
    "name": "Котлета куриная",
    "portion": "120 г",
    "kcal": 200,
    "protein": 24,
    "carbs": 4,
    "fat": 10
  },
  {
    "id": "meatloaf",
    "name": "Мясной рулет",
    "portion": "150 г",
    "kcal": 260,
    "protein": 20,
    "carbs": 10,
    "fat": 16
  },
  {
    "id": "ribs-bbq",
    "name": "Рёбра BBQ",
    "portion": "200 г",
    "kcal": 420,
    "protein": 28,
    "carbs": 12,
    "fat": 28
  },
  {
    "id": "pulled-pork",
    "name": "Рваная свинина",
    "portion": "150 г",
    "kcal": 300,
    "protein": 26,
    "carbs": 8,
    "fat": 18
  },
  {
    "id": "chicken-nuggets-10",
    "name": "Наггетсы",
    "portion": "10 шт",
    "kcal": 420,
    "protein": 22,
    "carbs": 28,
    "fat": 24
  },
  {
    "id": "wings-bbq",
    "name": "Крылья BBQ",
    "portion": "6 шт",
    "kcal": 380,
    "protein": 28,
    "carbs": 12,
    "fat": 24
  },
  {
    "id": "wings-buffalo",
    "name": "Крылья баффало",
    "portion": "6 шт",
    "kcal": 360,
    "protein": 28,
    "carbs": 6,
    "fat": 24
  },
  {
    "id": "protein-yogurt",
    "name": "Протеиновый йогурт",
    "portion": "200 г",
    "kcal": 160,
    "protein": 20,
    "carbs": 12,
    "fat": 2
  },
  {
    "id": "protein-pudding",
    "name": "Протеиновый пудинг",
    "portion": "200 г",
    "kcal": 180,
    "protein": 20,
    "carbs": 14,
    "fat": 4
  },
  {
    "id": "rice-cake",
    "name": "Хлебец рисовый",
    "portion": "1 шт",
    "kcal": 35,
    "protein": 0.7,
    "carbs": 7,
    "fat": 0.3
  },
  {
    "id": "rice-cake-pb",
    "name": "Хлебец с арахисовой пастой",
    "portion": "1 шт",
    "kcal": 120,
    "protein": 4,
    "carbs": 10,
    "fat": 7
  },
  {
    "id": "corn-cake",
    "name": "Хлебец кукурузный",
    "portion": "1 шт",
    "kcal": 30,
    "protein": 0.6,
    "carbs": 6,
    "fat": 0.2
  },
  {
    "id": "cracker-cheese",
    "name": "Крекер с сыром",
    "portion": "4 шт + сыр",
    "kcal": 180,
    "protein": 7,
    "carbs": 14,
    "fat": 10
  },
  {
    "id": "trail-mix",
    "name": "Смесь орехов и сухофруктов",
    "portion": "40 г",
    "kcal": 190,
    "protein": 5,
    "carbs": 18,
    "fat": 12
  },
  {
    "id": "dried-mango",
    "name": "Манго сушёное",
    "portion": "30 г",
    "kcal": 100,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.2
  },
  {
    "id": "dried-banana",
    "name": "Банановые чипсы",
    "portion": "30 г",
    "kcal": 155,
    "protein": 0.6,
    "carbs": 18,
    "fat": 9
  },
  {
    "id": "chocolate-protein",
    "name": "Шоколад протеиновый",
    "portion": "40 г",
    "kcal": 160,
    "protein": 15,
    "carbs": 12,
    "fat": 6
  },
  {
    "id": "ice-cream-protein",
    "name": "Мороженое протеиновое",
    "portion": "100 г",
    "kcal": 150,
    "protein": 15,
    "carbs": 14,
    "fat": 4
  },
  {
    "id": "gelato",
    "name": "Джелато",
    "portion": "100 г",
    "kcal": 200,
    "protein": 4,
    "carbs": 28,
    "fat": 8
  },
  {
    "id": "brownie",
    "name": "Брауни",
    "portion": "60 г",
    "kcal": 250,
    "protein": 3,
    "carbs": 28,
    "fat": 14
  },
  {
    "id": "cookie-dough",
    "name": "Печенье шоколадное",
    "portion": "1 шт",
    "kcal": 160,
    "protein": 2,
    "carbs": 22,
    "fat": 8
  },
  {
    "id": "muffin-berry",
    "name": "Маффин ягодный",
    "portion": "1 шт",
    "kcal": 280,
    "protein": 4,
    "carbs": 38,
    "fat": 12
  },
  {
    "id": "muffin-chocolate",
    "name": "Маффин шоколадный",
    "portion": "1 шт",
    "kcal": 320,
    "protein": 5,
    "carbs": 40,
    "fat": 15
  },
  {
    "id": "pancake-syrup",
    "name": "Панкейки с сиропом",
    "portion": "3 шт",
    "kcal": 420,
    "protein": 12,
    "carbs": 60,
    "fat": 14
  },
  {
    "id": "waffle-syrup",
    "name": "Вафли с сиропом",
    "portion": "2 шт",
    "kcal": 380,
    "protein": 8,
    "carbs": 55,
    "fat": 14
  },
  {
    "id": "smoothie-banana",
    "name": "Смузи банан",
    "portion": "300 мл",
    "kcal": 220,
    "protein": 5,
    "carbs": 42,
    "fat": 3
  },
  {
    "id": "smoothie-green",
    "name": "Смузи зелёный",
    "portion": "300 мл",
    "kcal": 160,
    "protein": 4,
    "carbs": 28,
    "fat": 4
  },
  {
    "id": "smoothie-peanut",
    "name": "Смузи арахис банан",
    "portion": "300 мл",
    "kcal": 320,
    "protein": 14,
    "carbs": 35,
    "fat": 14
  },
  {
    "id": "protein-shake-water",
    "name": "Протеин на воде",
    "portion": "300 мл",
    "kcal": 120,
    "protein": 24,
    "carbs": 3,
    "fat": 1.5
  },
  {
    "id": "protein-shake-milk",
    "name": "Протеин на молоке",
    "portion": "300 мл",
    "kcal": 220,
    "protein": 30,
    "carbs": 12,
    "fat": 6
  },
  {
    "id": "gainer-shake",
    "name": "Гейнер шейк",
    "portion": "400 мл",
    "kcal": 450,
    "protein": 30,
    "carbs": 70,
    "fat": 5
  },
  {
    "id": "latte-oat",
    "name": "Латте на овсяном",
    "portion": "250 мл",
    "kcal": 140,
    "protein": 2,
    "carbs": 22,
    "fat": 5
  },
  {
    "id": "cappuccino-soy",
    "name": "Капучино на соевом",
    "portion": "200 мл",
    "kcal": 90,
    "protein": 5,
    "carbs": 8,
    "fat": 3.5
  },
  {
    "id": "matcha-milk",
    "name": "Матча на молоке",
    "portion": "250 мл",
    "kcal": 130,
    "protein": 6,
    "carbs": 14,
    "fat": 4
  },
  {
    "id": "fresh-orange",
    "name": "Фреш апельсин",
    "portion": "250 мл",
    "kcal": 110,
    "protein": 2,
    "carbs": 26,
    "fat": 0.3
  },
  {
    "id": "fresh-apple",
    "name": "Фреш яблоко",
    "portion": "250 мл",
    "kcal": 120,
    "protein": 0.5,
    "carbs": 30,
    "fat": 0.3
  },
  {
    "id": "fresh-carrot",
    "name": "Фреш морковь",
    "portion": "250 мл",
    "kcal": 80,
    "protein": 2,
    "carbs": 18,
    "fat": 0.3
  },
  {
    "id": "kombucha-ginger",
    "name": "Комбуча имбирь",
    "portion": "250 мл",
    "kcal": 45,
    "protein": 0,
    "carbs": 11,
    "fat": 0
  },
  {
    "id": "isotonic-lemon",
    "name": "Изотоник лимон",
    "portion": "500 мл",
    "kcal": 80,
    "protein": 0,
    "carbs": 20,
    "fat": 0
  },
  {
    "id": "sauce-cesar",
    "name": "Соус цезарь",
    "portion": "30 г",
    "kcal": 120,
    "protein": 1,
    "carbs": 2,
    "fat": 12
  },
  {
    "id": "sauce-ranch",
    "name": "Соус ранч",
    "portion": "30 г",
    "kcal": 110,
    "protein": 0.5,
    "carbs": 2,
    "fat": 11
  },
  {
    "id": "sauce-sweet-chili",
    "name": "Сладкий чили",
    "portion": "30 г",
    "kcal": 60,
    "protein": 0.2,
    "carbs": 14,
    "fat": 0
  },
  {
    "id": "sauce-garlic",
    "name": "Соус чесночный",
    "portion": "30 г",
    "kcal": 100,
    "protein": 0.5,
    "carbs": 3,
    "fat": 10
  },
  {
    "id": "hummus-spicy",
    "name": "Хумус острый",
    "portion": "50 г",
    "kcal": 125,
    "protein": 4,
    "carbs": 8,
    "fat": 8
  },
  {
    "id": "guacamole-50",
    "name": "Гуакамоле",
    "portion": "50 г",
    "kcal": 80,
    "protein": 1,
    "carbs": 4,
    "fat": 7
  },
  {
    "id": "salsa-50",
    "name": "Сальса",
    "portion": "50 г",
    "kcal": 25,
    "protein": 1,
    "carbs": 5,
    "fat": 0.5
  },
  {
    "id": "pelmeni-chicken",
    "name": "Пельмени куриные",
    "portion": "200 г",
    "kcal": 300,
    "protein": 18,
    "carbs": 34,
    "fat": 10
  },
  {
    "id": "pelmeni-beef",
    "name": "Пельмени говяжьи",
    "portion": "200 г",
    "kcal": 340,
    "protein": 16,
    "carbs": 36,
    "fat": 14
  },
  {
    "id": "vareniki-potato-onion",
    "name": "Вареники картошка лук",
    "portion": "200 г",
    "kcal": 290,
    "protein": 8,
    "carbs": 48,
    "fat": 7
  },
  {
    "id": "dumpling-shrimp",
    "name": "Гедза с креветкой",
    "portion": "6 шт",
    "kcal": 220,
    "protein": 12,
    "carbs": 24,
    "fat": 8
  },
  {
    "id": "spring-roll-veg",
    "name": "Спринг-ролл овощной",
    "portion": "2 шт",
    "kcal": 160,
    "protein": 4,
    "carbs": 24,
    "fat": 5
  },
  {
    "id": "spring-roll-shrimp",
    "name": "Спринг-ролл креветка",
    "portion": "2 шт",
    "kcal": 180,
    "protein": 8,
    "carbs": 22,
    "fat": 6
  },
  {
    "id": "pizza-frozen-slice",
    "name": "Пицца замороженная",
    "portion": "1 кусок",
    "kcal": 240,
    "protein": 10,
    "carbs": 28,
    "fat": 10
  },
  {
    "id": "khachapuri-megrel",
    "name": "Хачапури по-мегрельски",
    "portion": "1 кусок",
    "kcal": 320,
    "protein": 14,
    "carbs": 28,
    "fat": 18
  },
  {
    "id": "lobio-walnut",
    "name": "Лобио с орехами",
    "portion": "200 г",
    "kcal": 240,
    "protein": 10,
    "carbs": 22,
    "fat": 12
  },
  {
    "id": "ajapsandali",
    "name": "Аджапсандали",
    "portion": "200 г",
    "kcal": 140,
    "protein": 3,
    "carbs": 14,
    "fat": 8
  },
  {
    "id": "chakhokhbili-chicken",
    "name": "Чахохбили",
    "portion": "250 г",
    "kcal": 240,
    "protein": 22,
    "carbs": 8,
    "fat": 12
  },
  {
    "id": "dolma-grape",
    "name": "Долма",
    "portion": "4 шт",
    "kcal": 280,
    "protein": 14,
    "carbs": 18,
    "fat": 16
  },
  {
    "id": "manty-beef",
    "name": "Манты с говядиной",
    "portion": "3 шт",
    "kcal": 360,
    "protein": 18,
    "carbs": 36,
    "fat": 14
  },
  {
    "id": "samsa-pumpkin",
    "name": "Самса с тыквой",
    "portion": "1 шт",
    "kcal": 260,
    "protein": 6,
    "carbs": 32,
    "fat": 12
  },
  {
    "id": "lagman-beef",
    "name": "Лагман",
    "portion": "400 г",
    "kcal": 420,
    "protein": 20,
    "carbs": 48,
    "fat": 14
  },
  {
    "id": "plov-uzbek",
    "name": "Плов узбекский",
    "portion": "300 г",
    "kcal": 450,
    "protein": 16,
    "carbs": 48,
    "fat": 20
  },
  {
    "id": "broccoli-cheese",
    "name": "Брокколи с сыром",
    "portion": "200 г",
    "kcal": 180,
    "protein": 12,
    "carbs": 10,
    "fat": 10
  },
  {
    "id": "cauli-cheese",
    "name": "Цветная капуста с сыром",
    "portion": "200 г",
    "kcal": 190,
    "protein": 11,
    "carbs": 10,
    "fat": 12
  },
  {
    "id": "spinach-cream",
    "name": "Шпинат в сливках",
    "portion": "150 г",
    "kcal": 160,
    "protein": 5,
    "carbs": 6,
    "fat": 14
  },
  {
    "id": "mushroom-cream",
    "name": "Грибы в сливках",
    "portion": "150 г",
    "kcal": 180,
    "protein": 6,
    "carbs": 6,
    "fat": 15
  },
  {
    "id": "ratatouille-plate",
    "name": "Рататуй порция",
    "portion": "250 г",
    "kcal": 140,
    "protein": 3,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "veg-grill-mix",
    "name": "Овощи гриль микс",
    "portion": "200 г",
    "kcal": 100,
    "protein": 3,
    "carbs": 12,
    "fat": 4
  },
  {
    "id": "smoothie-bowl",
    "name": "Смузи-боул",
    "portion": "300 г",
    "kcal": 280,
    "protein": 8,
    "carbs": 48,
    "fat": 6
  },
  {
    "id": "acai-bowl",
    "name": "Асаи-боул",
    "portion": "300 г",
    "kcal": 320,
    "protein": 6,
    "carbs": 50,
    "fat": 10
  },
  {
    "id": "fruit-cup",
    "name": "Фруктовая нарезка",
    "portion": "200 г",
    "kcal": 100,
    "protein": 1.5,
    "carbs": 24,
    "fat": 0.5
  },
  {
    "id": "berries-mix",
    "name": "Ягодный микс",
    "portion": "150 г",
    "kcal": 70,
    "protein": 1.2,
    "carbs": 15,
    "fat": 0.5
  },
  {
    "id": "coconut-yogurt",
    "name": "Кокосовый йогурт",
    "portion": "150 г",
    "kcal": 180,
    "protein": 2,
    "carbs": 12,
    "fat": 14
  },
  {
    "id": "protein-bar-cookie",
    "name": "Протеин-бар cookie",
    "portion": "1 шт",
    "kcal": 200,
    "protein": 20,
    "carbs": 18,
    "fat": 7
  },
  {
    "id": "protein-bar-caramel",
    "name": "Протеин-бар caramel",
    "portion": "1 шт",
    "kcal": 210,
    "protein": 20,
    "carbs": 20,
    "fat": 7
  },
  {
    "id": "protein-cookie",
    "name": "Протеиновое печенье",
    "portion": "1 шт",
    "kcal": 180,
    "protein": 15,
    "carbs": 16,
    "fat": 6
  },
  {
    "id": "zero-jelly",
    "name": "Желе без сахара",
    "portion": "100 г",
    "kcal": 20,
    "protein": 2,
    "carbs": 2,
    "fat": 0
  },
  {
    "id": "konjac-noodles",
    "name": "Лапша ширатаки",
    "portion": "200 г",
    "kcal": 20,
    "protein": 0,
    "carbs": 4,
    "fat": 0
  },
  {
    "id": "konjac-rice",
    "name": "Рис ширатаки",
    "portion": "200 г",
    "kcal": 20,
    "protein": 0,
    "carbs": 4,
    "fat": 0
  },
  {
    "id": "tempeh",
    "name": "Темпе",
    "portion": "100 г",
    "kcal": 193,
    "protein": 19,
    "carbs": 9,
    "fat": 11
  },
  {
    "id": "seitan",
    "name": "Сейтан",
    "portion": "100 г",
    "kcal": 140,
    "protein": 25,
    "carbs": 6,
    "fat": 2
  },
  {
    "id": "jackfruit",
    "name": "Джекфрут",
    "portion": "100 г",
    "kcal": 95,
    "protein": 1.5,
    "carbs": 23,
    "fat": 0.6
  },
  {
    "id": "hearts-palm",
    "name": "Пальмовые сердечки",
    "portion": "100 г",
    "kcal": 28,
    "protein": 2.5,
    "carbs": 4,
    "fat": 0.5
  },
  {
    "id": "artichoke-heart",
    "name": "Артишоки консерв.",
    "portion": "100 г",
    "kcal": 50,
    "protein": 2,
    "carbs": 8,
    "fat": 0.5
  },
  {
    "id": "sun-dried-tomato",
    "name": "Вяленые томаты",
    "portion": "100 г",
    "kcal": 215,
    "protein": 5,
    "carbs": 23,
    "fat": 14
  },
  {
    "id": "capers",
    "name": "Каперсы",
    "portion": "100 г",
    "kcal": 23,
    "protein": 2.4,
    "carbs": 5,
    "fat": 0.9
  },
  {
    "id": "jalapeno",
    "name": "Халапеньо",
    "portion": "100 г",
    "kcal": 28,
    "protein": 0.9,
    "carbs": 6,
    "fat": 0.4
  },
  {
    "id": "pickled-cucumber",
    "name": "Маринованные огурцы",
    "portion": "100 г",
    "kcal": 12,
    "protein": 0.5,
    "carbs": 2,
    "fat": 0.1
  },
  {
    "id": "sauerkraut-oil",
    "name": "Квашеная капуста с маслом",
    "portion": "100 г",
    "kcal": 45,
    "protein": 1,
    "carbs": 4,
    "fat": 3
  },
  {
    "id": "nori",
    "name": "Нори",
    "portion": "100 г",
    "kcal": 35,
    "protein": 6,
    "carbs": 5,
    "fat": 0.3
  },
  {
    "id": "wakame",
    "name": "Вакаме",
    "portion": "100 г",
    "kcal": 45,
    "protein": 3,
    "carbs": 9,
    "fat": 0.6
  },
  {
    "id": "edamame-pod",
    "name": "Эдамаме в стручках",
    "portion": "100 г",
    "kcal": 120,
    "protein": 11,
    "carbs": 9,
    "fat": 5
  },
  {
    "id": "green-beans-fry",
    "name": "Стручковая фасоль жареная",
    "portion": "100 г",
    "kcal": 60,
    "protein": 2,
    "carbs": 8,
    "fat": 2
  },
  {
    "id": "sweet-corn-can",
    "name": "Кукуруза консерв.",
    "portion": "100 г",
    "kcal": 80,
    "protein": 2.5,
    "carbs": 15,
    "fat": 1
  },
  {
    "id": "peas-can",
    "name": "Горошек консерв.",
    "portion": "100 г",
    "kcal": 70,
    "protein": 5,
    "carbs": 10,
    "fat": 0.5
  },
  {
    "id": "beans-can",
    "name": "Фасоль консерв.",
    "portion": "100 г",
    "kcal": 90,
    "protein": 6,
    "carbs": 14,
    "fat": 0.5
  },
  {
    "id": "chickpea-can",
    "name": "Нут консерв.",
    "portion": "100 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 17,
    "fat": 2
  },
  {
    "id": "lentil-can",
    "name": "Чечевица консерв.",
    "portion": "100 г",
    "kcal": 100,
    "protein": 7,
    "carbs": 15,
    "fat": 0.5
  },
  {
    "id": "tomato-paste",
    "name": "Томатная паста",
    "portion": "100 г",
    "kcal": 80,
    "protein": 4,
    "carbs": 16,
    "fat": 0.5
  },
  {
    "id": "passata",
    "name": "Томаты протёртые",
    "portion": "100 г",
    "kcal": 30,
    "protein": 1.5,
    "carbs": 5,
    "fat": 0.2
  },
  {
    "id": "coconut-milk-can",
    "name": "Кокосовое молоко",
    "portion": "100 г",
    "kcal": 180,
    "protein": 2,
    "carbs": 3,
    "fat": 18
  },
  {
    "id": "coconut-cream",
    "name": "Кокосовые сливки",
    "portion": "100 г",
    "kcal": 230,
    "protein": 2,
    "carbs": 4,
    "fat": 24
  },
  {
    "id": "tahini",
    "name": "Тахини",
    "portion": "100 г",
    "kcal": 590,
    "protein": 17,
    "carbs": 20,
    "fat": 54
  },
  {
    "id": "peanut-butter-crunchy",
    "name": "Арахисовая паста хрустящая",
    "portion": "100 г",
    "kcal": 590,
    "protein": 25,
    "carbs": 16,
    "fat": 50
  },
  {
    "id": "almond-butter",
    "name": "Миндальная паста",
    "portion": "100 г",
    "kcal": 645,
    "protein": 21,
    "carbs": 20,
    "fat": 56
  },
  {
    "id": "cashew-butter",
    "name": "Паста кешью",
    "portion": "100 г",
    "kcal": 587,
    "protein": 18,
    "carbs": 28,
    "fat": 50
  },
  {
    "id": "nutella-like",
    "name": "Шоколадно-ореховая паста",
    "portion": "100 г",
    "kcal": 540,
    "protein": 6,
    "carbs": 55,
    "fat": 32
  },
  {
    "id": "makarony-flotski",
    "name": "Макароны по-флотски",
    "portion": "300 г",
    "kcal": 420,
    "protein": 22,
    "carbs": 45,
    "fat": 16
  },
  {
    "id": "makarony-tushonka",
    "name": "Макароны с тушёнкой",
    "portion": "300 г",
    "kcal": 450,
    "protein": 24,
    "carbs": 42,
    "fat": 20
  },
  {
    "id": "makarony-syr",
    "name": "Макароны с сыром",
    "portion": "250 г",
    "kcal": 380,
    "protein": 16,
    "carbs": 40,
    "fat": 18
  },
  {
    "id": "makarony-kotleta",
    "name": "Макароны с котлетой",
    "portion": "350 г",
    "kcal": 520,
    "protein": 26,
    "carbs": 48,
    "fat": 24
  },
  {
    "id": "grechka-tushonka",
    "name": "Гречка с тушёнкой",
    "portion": "300 г",
    "kcal": 410,
    "protein": 24,
    "carbs": 36,
    "fat": 18
  },
  {
    "id": "grechka-kotleta",
    "name": "Гречка с котлетой",
    "portion": "350 г",
    "kcal": 480,
    "protein": 26,
    "carbs": 40,
    "fat": 20
  },
  {
    "id": "ris-tushonka",
    "name": "Рис с тушёнкой",
    "portion": "300 г",
    "kcal": 400,
    "protein": 22,
    "carbs": 42,
    "fat": 16
  },
  {
    "id": "pure-kotleta",
    "name": "Пюре с котлетой",
    "portion": "350 г",
    "kcal": 460,
    "protein": 20,
    "carbs": 42,
    "fat": 22
  },
  {
    "id": "pure-sosiska",
    "name": "Пюре с сосиской",
    "portion": "300 г",
    "kcal": 380,
    "protein": 14,
    "carbs": 36,
    "fat": 20
  },
  {
    "id": "sosiska-makarony",
    "name": "Сосиски с макаронами",
    "portion": "300 г",
    "kcal": 420,
    "protein": 18,
    "carbs": 38,
    "fat": 22
  },
  {
    "id": "sosiska-2",
    "name": "Сосиски варёные",
    "portion": "2 шт ~100 г",
    "kcal": 260,
    "protein": 12,
    "carbs": 4,
    "fat": 22
  },
  {
    "id": "sardelka",
    "name": "Сарделька",
    "portion": "1 шт ~80 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 2,
    "fat": 19
  },
  {
    "id": "tushonka-gov",
    "name": "Тушёнка говяжья",
    "portion": "100 г",
    "kcal": 220,
    "protein": 15,
    "carbs": 0,
    "fat": 17
  },
  {
    "id": "tushonka-svin",
    "name": "Тушёнка свиная",
    "portion": "100 г",
    "kcal": 250,
    "protein": 14,
    "carbs": 0,
    "fat": 21
  },
  {
    "id": "borsch",
    "name": "Борщ",
    "portion": "300 мл",
    "kcal": 120,
    "protein": 6,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "borsch-smetana",
    "name": "Борщ со сметаной",
    "portion": "350 мл",
    "kcal": 180,
    "protein": 7,
    "carbs": 15,
    "fat": 10
  },
  {
    "id": "ukha",
    "name": "Уха",
    "portion": "300 мл",
    "kcal": 80,
    "protein": 10,
    "carbs": 4,
    "fat": 2
  },
  {
    "id": "solyanka",
    "name": "Солянка мясная",
    "portion": "300 мл",
    "kcal": 160,
    "protein": 12,
    "carbs": 8,
    "fat": 9
  },
  {
    "id": "okroshka-kvas",
    "name": "Окрошка на квасе",
    "portion": "350 мл",
    "kcal": 120,
    "protein": 8,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "pelmeni-smetana",
    "name": "Пельмени со сметаной",
    "portion": "250 г",
    "kcal": 360,
    "protein": 16,
    "carbs": 34,
    "fat": 16
  },
  {
    "id": "pelmeni-fry",
    "name": "Пельмени жареные",
    "portion": "200 г",
    "kcal": 340,
    "protein": 15,
    "carbs": 30,
    "fat": 16
  },
  {
    "id": "bliny-3",
    "name": "Блины",
    "portion": "3 шт",
    "kcal": 240,
    "protein": 8,
    "carbs": 36,
    "fat": 8
  },
  {
    "id": "bliny-meat",
    "name": "Блины с мясом",
    "portion": "2 шт",
    "kcal": 320,
    "protein": 16,
    "carbs": 28,
    "fat": 14
  },
  {
    "id": "bliny-tvarog",
    "name": "Блины с творогом",
    "portion": "2 шт",
    "kcal": 280,
    "protein": 14,
    "carbs": 30,
    "fat": 10
  },
  {
    "id": "bliny-ikra",
    "name": "Блины с икрой",
    "portion": "2 шт",
    "kcal": 260,
    "protein": 12,
    "carbs": 24,
    "fat": 12
  },
  {
    "id": "syrniki-smetana",
    "name": "Сырники со сметаной",
    "portion": "3 шт + сметана",
    "kcal": 380,
    "protein": 18,
    "carbs": 28,
    "fat": 20
  },
  {
    "id": "kasha-mannaya",
    "name": "Манная каша на молоке",
    "portion": "250 г",
    "kcal": 180,
    "protein": 6,
    "carbs": 28,
    "fat": 5
  },
  {
    "id": "kasha-psheno",
    "name": "Пшённая каша на молоке",
    "portion": "250 г",
    "kcal": 190,
    "protein": 6,
    "carbs": 30,
    "fat": 5
  },
  {
    "id": "kasha-rice-milk",
    "name": "Рисовая каша на молоке",
    "portion": "250 г",
    "kcal": 200,
    "protein": 6,
    "carbs": 32,
    "fat": 5
  },
  {
    "id": "kasha-grechka-milk",
    "name": "Гречневая каша на молоке",
    "portion": "250 г",
    "kcal": 185,
    "protein": 8,
    "carbs": 26,
    "fat": 5
  },
  {
    "id": "vinaigrette",
    "name": "Винегрет",
    "portion": "200 г",
    "kcal": 120,
    "protein": 3,
    "carbs": 16,
    "fat": 5
  },
  {
    "id": "olivie",
    "name": "Салат оливье",
    "portion": "200 г",
    "kcal": 220,
    "protein": 8,
    "carbs": 12,
    "fat": 16
  },
  {
    "id": "selodka-shuba",
    "name": "Селёдка под шубой",
    "portion": "200 г",
    "kcal": 240,
    "protein": 10,
    "carbs": 12,
    "fat": 18
  },
  {
    "id": "crab-salad",
    "name": "Салат с крабовыми палочками",
    "portion": "200 г",
    "kcal": 200,
    "protein": 8,
    "carbs": 14,
    "fat": 12
  },
  {
    "id": "stolichny",
    "name": "Салат столичный",
    "portion": "200 г",
    "kcal": 230,
    "protein": 10,
    "carbs": 12,
    "fat": 16
  },
  {
    "id": "holodets",
    "name": "Холодец",
    "portion": "200 г",
    "kcal": 180,
    "protein": 22,
    "carbs": 2,
    "fat": 10
  },
  {
    "id": "zapekanka-tvarog",
    "name": "Запеканка творожная",
    "portion": "200 г",
    "kcal": 220,
    "protein": 16,
    "carbs": 22,
    "fat": 8
  },
  {
    "id": "golubtsy-smetana",
    "name": "Голубцы со сметаной",
    "portion": "2 шт",
    "kcal": 380,
    "protein": 18,
    "carbs": 24,
    "fat": 22
  },
  {
    "id": "tefteli-tomat",
    "name": "Тефтели в томате",
    "portion": "250 г",
    "kcal": 300,
    "protein": 18,
    "carbs": 20,
    "fat": 16
  },
  {
    "id": "befstroganov",
    "name": "Бефстроганов с пюре",
    "portion": "350 г",
    "kcal": 420,
    "protein": 26,
    "carbs": 30,
    "fat": 20
  },
  {
    "id": "kotleta-pozharskaya",
    "name": "Котлета пожарская",
    "portion": "1 шт ~120 г",
    "kcal": 280,
    "protein": 18,
    "carbs": 12,
    "fat": 18
  },
  {
    "id": "kotleta-kiev",
    "name": "Котлета по-киевски",
    "portion": "1 шт ~150 г",
    "kcal": 380,
    "protein": 22,
    "carbs": 14,
    "fat": 26
  },
  {
    "id": "gulyash",
    "name": "Гуляш с гарниром",
    "portion": "350 г",
    "kcal": 400,
    "protein": 24,
    "carbs": 32,
    "fat": 18
  },
  {
    "id": "plov-ru",
    "name": "Плов домашний",
    "portion": "300 г",
    "kcal": 380,
    "protein": 16,
    "carbs": 42,
    "fat": 16
  },
  {
    "id": "kvas",
    "name": "Квас хлебный",
    "portion": "250 мл",
    "kcal": 70,
    "protein": 0.5,
    "carbs": 16,
    "fat": 0
  },
  {
    "id": "kissel",
    "name": "Кисель",
    "portion": "200 мл",
    "kcal": 90,
    "protein": 0.5,
    "carbs": 22,
    "fat": 0
  },
  {
    "id": "borsch-ukr",
    "name": "Борщ украинский",
    "portion": "350 мл",
    "kcal": 150,
    "protein": 8,
    "carbs": 16,
    "fat": 6
  },
  {
    "id": "varenyky-potato",
    "name": "Вареники с картошкой",
    "portion": "250 г",
    "kcal": 320,
    "protein": 10,
    "carbs": 48,
    "fat": 10
  },
  {
    "id": "varenyky-tvarog",
    "name": "Вареники с творогом",
    "portion": "250 г",
    "kcal": 340,
    "protein": 16,
    "carbs": 42,
    "fat": 12
  },
  {
    "id": "varenyky-cherry",
    "name": "Вареники с вишней",
    "portion": "250 г",
    "kcal": 300,
    "protein": 8,
    "carbs": 52,
    "fat": 6
  },
  {
    "id": "varenyky-smetana",
    "name": "Вареники со сметаной",
    "portion": "280 г",
    "kcal": 400,
    "protein": 12,
    "carbs": 48,
    "fat": 16
  },
  {
    "id": "deruny",
    "name": "Деруны (драники)",
    "portion": "200 г",
    "kcal": 280,
    "protein": 6,
    "carbs": 36,
    "fat": 12
  },
  {
    "id": "deruny-smetana",
    "name": "Деруны со сметаной",
    "portion": "250 г",
    "kcal": 360,
    "protein": 7,
    "carbs": 36,
    "fat": 20
  },
  {
    "id": "nalysnyky",
    "name": "Налистники с творогом",
    "portion": "2 шт",
    "kcal": 300,
    "protein": 14,
    "carbs": 32,
    "fat": 12
  },
  {
    "id": "salo",
    "name": "Сало",
    "portion": "50 г",
    "kcal": 400,
    "protein": 2,
    "carbs": 0,
    "fat": 44
  },
  {
    "id": "salo-bread",
    "name": "Сало с хлебом",
    "portion": "сало 40 г + хлеб",
    "kcal": 420,
    "protein": 6,
    "carbs": 24,
    "fat": 32
  },
  {
    "id": "uzvar",
    "name": "Узвар",
    "portion": "250 мл",
    "kcal": 70,
    "protein": 0.5,
    "carbs": 17,
    "fat": 0
  },
  {
    "id": "galushki",
    "name": "Галушки",
    "portion": "250 г",
    "kcal": 280,
    "protein": 10,
    "carbs": 42,
    "fat": 8
  },
  {
    "id": "kruchenyky",
    "name": "Крученики",
    "portion": "200 г",
    "kcal": 320,
    "protein": 22,
    "carbs": 8,
    "fat": 22
  },
  {
    "id": "yushka",
    "name": "Юшка рыбная",
    "portion": "300 мл",
    "kcal": 90,
    "protein": 12,
    "carbs": 4,
    "fat": 3
  },
  {
    "id": "pampushki",
    "name": "Пампушки с чесноком",
    "portion": "2 шт",
    "kcal": 180,
    "protein": 5,
    "carbs": 30,
    "fat": 5
  },
  {
    "id": "hovanyets",
    "name": "Картофельная запеканка",
    "portion": "250 г",
    "kcal": 280,
    "protein": 10,
    "carbs": 32,
    "fat": 12
  },
  {
    "id": "plov-uzb",
    "name": "Плов узбекский",
    "portion": "300 г",
    "kcal": 420,
    "protein": 18,
    "carbs": 45,
    "fat": 18
  },
  {
    "id": "plov-samarkand",
    "name": "Плов самаркандский",
    "portion": "300 г",
    "kcal": 400,
    "protein": 16,
    "carbs": 44,
    "fat": 16
  },
  {
    "id": "lagman-fry",
    "name": "Лагман жареный",
    "portion": "350 г",
    "kcal": 420,
    "protein": 20,
    "carbs": 42,
    "fat": 16
  },
  {
    "id": "manti",
    "name": "Манты",
    "portion": "3 шт ~250 г",
    "kcal": 360,
    "protein": 18,
    "carbs": 36,
    "fat": 14
  },
  {
    "id": "manti-smetana",
    "name": "Манты со сметаной",
    "portion": "3 шт",
    "kcal": 430,
    "protein": 18,
    "carbs": 36,
    "fat": 22
  },
  {
    "id": "samsa-meat",
    "name": "Самса с мясом",
    "portion": "1 шт ~120 г",
    "kcal": 320,
    "protein": 12,
    "carbs": 28,
    "fat": 18
  },
  {
    "id": "chuchvara",
    "name": "Чучвара",
    "portion": "250 г",
    "kcal": 300,
    "protein": 14,
    "carbs": 36,
    "fat": 10
  },
  {
    "id": "shurpa",
    "name": "Шурпа",
    "portion": "350 мл",
    "kcal": 180,
    "protein": 14,
    "carbs": 12,
    "fat": 8
  },
  {
    "id": "mastava",
    "name": "Мастава",
    "portion": "350 мл",
    "kcal": 160,
    "protein": 10,
    "carbs": 18,
    "fat": 6
  },
  {
    "id": "dimlama",
    "name": "Димляма",
    "portion": "300 г",
    "kcal": 280,
    "protein": 18,
    "carbs": 20,
    "fat": 14
  },
  {
    "id": "kazan-kebab",
    "name": "Казан-кебаб",
    "portion": "250 г",
    "kcal": 360,
    "protein": 24,
    "carbs": 12,
    "fat": 24
  },
  {
    "id": "shawarma-asia",
    "name": "Шаурма",
    "portion": "1 шт ~300 г",
    "kcal": 520,
    "protein": 28,
    "carbs": 42,
    "fat": 26
  },
  {
    "id": "lepeshka",
    "name": "Лепёшка узбекская",
    "portion": "1/4 шт ~80 г",
    "kcal": 220,
    "protein": 6,
    "carbs": 42,
    "fat": 3
  },
  {
    "id": "non",
    "name": "Нан (лепёшка)",
    "portion": "100 г",
    "kcal": 270,
    "protein": 8,
    "carbs": 52,
    "fat": 3
  },
  {
    "id": "kumys",
    "name": "Кумыс",
    "portion": "250 мл",
    "kcal": 100,
    "protein": 4,
    "carbs": 10,
    "fat": 4
  },
  {
    "id": "kurt",
    "name": "Курт",
    "portion": "30 г",
    "kcal": 90,
    "protein": 8,
    "carbs": 4,
    "fat": 4
  },
  {
    "id": "shashlik-lamb",
    "name": "Шашлык из баранины",
    "portion": "150 г",
    "kcal": 360,
    "protein": 28,
    "carbs": 1,
    "fat": 27
  },
  {
    "id": "shashlik-beef",
    "name": "Шашлык из говядины",
    "portion": "150 г",
    "kcal": 320,
    "protein": 30,
    "carbs": 1,
    "fat": 22
  },
  {
    "id": "shashlik-chicken-ca",
    "name": "Шашлык куриный",
    "portion": "150 г",
    "kcal": 260,
    "protein": 32,
    "carbs": 1,
    "fat": 14
  },
  {
    "id": "kuurdak",
    "name": "Куурдак",
    "portion": "250 г",
    "kcal": 380,
    "protein": 26,
    "carbs": 8,
    "fat": 28
  },
  {
    "id": "oromo",
    "name": "Оромо (рулет с мясом)",
    "portion": "200 г",
    "kcal": 340,
    "protein": 16,
    "carbs": 28,
    "fat": 18
  },
  {
    "id": "khanum",
    "name": "Ханум",
    "portion": "200 г",
    "kcal": 300,
    "protein": 12,
    "carbs": 36,
    "fat": 12
  },
  {
    "id": "plov-sweet",
    "name": "Плов со сладким морсом / изюмом",
    "portion": "250 г",
    "kcal": 360,
    "protein": 10,
    "carbs": 52,
    "fat": 12
  },
  {
    "id": "baklazhan-caviar",
    "name": "Баклажанная икра",
    "portion": "100 г",
    "kcal": 90,
    "protein": 2,
    "carbs": 8,
    "fat": 6
  },
  {
    "id": "kabachkovaya-ikra",
    "name": "Кабачковая икра",
    "portion": "100 г",
    "kcal": 80,
    "protein": 1.5,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "grechka-grib",
    "name": "Гречка с грибами",
    "portion": "250 г",
    "kcal": 240,
    "protein": 10,
    "carbs": 36,
    "fat": 8
  },
  {
    "id": "kartoshka-zhare",
    "name": "Картошка жареная",
    "portion": "200 г",
    "kcal": 280,
    "protein": 4,
    "carbs": 36,
    "fat": 14
  },
  {
    "id": "kartoshka-tush",
    "name": "Картошка тушёная с мясом",
    "portion": "300 г",
    "kcal": 320,
    "protein": 16,
    "carbs": 32,
    "fat": 14
  },
  {
    "id": "potato-beef-stew",
    "name": "Картофель тушёный с говядиной",
    "portion": "300 г",
    "kcal": 340,
    "protein": 18,
    "carbs": 30,
    "fat": 15
  },
  {
    "id": "lapsha-kurinaya",
    "name": "Лапша куриная (суп)",
    "portion": "350 мл",
    "kcal": 140,
    "protein": 10,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "bulion-kuriny",
    "name": "Бульон куриный",
    "portion": "300 мл",
    "kcal": 40,
    "protein": 6,
    "carbs": 1,
    "fat": 1
  },
  {
    "id": "buterbrod-kolbasa",
    "name": "Бутерброд с колбасой",
    "portion": "1 шт",
    "kcal": 220,
    "protein": 10,
    "carbs": 18,
    "fat": 12
  },
  {
    "id": "buterbrod-syr",
    "name": "Бутерброд с сыром",
    "portion": "1 шт",
    "kcal": 200,
    "protein": 10,
    "carbs": 18,
    "fat": 10
  },
  {
    "id": "buterbrod-kolbasa-syr",
    "name": "Бутерброд с колбасой и сыром",
    "portion": "1 шт",
    "kcal": 260,
    "protein": 12,
    "carbs": 20,
    "fat": 14
  },
  {
    "id": "buterbrod-ikra",
    "name": "Бутерброд с икрой",
    "portion": "1 шт",
    "kcal": 180,
    "protein": 8,
    "carbs": 16,
    "fat": 9
  },
  {
    "id": "yaichnica-kolbasa",
    "name": "Яичница с колбасой",
    "portion": "1 порция",
    "kcal": 320,
    "protein": 18,
    "carbs": 4,
    "fat": 26
  },
  {
    "id": "grechka-butter",
    "name": "Гречка с маслом",
    "portion": "250 г",
    "kcal": 280,
    "protein": 9,
    "carbs": 42,
    "fat": 10
  },
  {
    "id": "ris-butter",
    "name": "Рис с маслом",
    "portion": "250 г",
    "kcal": 270,
    "protein": 5,
    "carbs": 48,
    "fat": 8
  },
  {
    "id": "pure-maslo",
    "name": "Пюре с маслом",
    "portion": "250 г",
    "kcal": 240,
    "protein": 5,
    "carbs": 36,
    "fat": 10
  },
  {
    "id": "makarony-flotski-100",
    "name": "Макароны по-флотски",
    "portion": "100 г",
    "kcal": 140,
    "protein": 7.5,
    "carbs": 15,
    "fat": 5.5
  },
  {
    "id": "makarony-tushonka-100",
    "name": "Макароны с тушёнкой",
    "portion": "100 г",
    "kcal": 150,
    "protein": 8,
    "carbs": 14,
    "fat": 7
  },
  {
    "id": "borsch-100",
    "name": "Борщ",
    "portion": "100 г",
    "kcal": 40,
    "protein": 2,
    "carbs": 4.5,
    "fat": 1.5
  },
  {
    "id": "plov-100",
    "name": "Плов",
    "portion": "100 г",
    "kcal": 140,
    "protein": 6,
    "carbs": 15,
    "fat": 6
  },
  {
    "id": "lagman-100",
    "name": "Лагман",
    "portion": "100 г",
    "kcal": 95,
    "protein": 4.5,
    "carbs": 12,
    "fat": 3
  },
  {
    "id": "pelmeni-100",
    "name": "Пельмени варёные",
    "portion": "100 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 16,
    "fat": 5
  },
  {
    "id": "varenyky-100",
    "name": "Вареники",
    "portion": "100 г",
    "kcal": 130,
    "protein": 5,
    "carbs": 20,
    "fat": 4
  },
  {
    "id": "olivie-100",
    "name": "Оливье",
    "portion": "100 г",
    "kcal": 110,
    "protein": 4,
    "carbs": 6,
    "fat": 8
  },
  {
    "id": "vinaigrette-100",
    "name": "Винегрет",
    "portion": "100 г",
    "kcal": 60,
    "protein": 1.5,
    "carbs": 8,
    "fat": 2.5
  },
  {
    "id": "golubtsy-100",
    "name": "Голубцы",
    "portion": "100 г",
    "kcal": 130,
    "protein": 7,
    "carbs": 10,
    "fat": 6.5
  },
  {
    "id": "beshbarmak-100",
    "name": "Бешбармак",
    "portion": "100 г",
    "kcal": 130,
    "protein": 8,
    "carbs": 9,
    "fat": 6
  },
  {
    "id": "manti-100",
    "name": "Манты",
    "portion": "100 г",
    "kcal": 145,
    "protein": 7,
    "carbs": 14,
    "fat": 6
  },
  {
    "id": "deruny-100",
    "name": "Деруны",
    "portion": "100 г",
    "kcal": 140,
    "protein": 3,
    "carbs": 18,
    "fat": 6
  },
  {
    "id": "syrniki-100",
    "name": "Сырники",
    "portion": "100 г",
    "kcal": 180,
    "protein": 12,
    "carbs": 16,
    "fat": 8
  },
  {
    "id": "shurpa-100",
    "name": "Шурпа",
    "portion": "100 г",
    "kcal": 50,
    "protein": 4,
    "carbs": 3.5,
    "fat": 2.5
  },
  {
    "id": "chicken-breast-x30",
    "name": "Куриная грудка (30 г)",
    "portion": "30 г",
    "kcal": 49.5,
    "protein": 9.3,
    "carbs": 0,
    "fat": 1.1
  },
  {
    "id": "chicken-breast-x40",
    "name": "Куриная грудка (40 г)",
    "portion": "40 г",
    "kcal": 66,
    "protein": 12.4,
    "carbs": 0,
    "fat": 1.4
  },
  {
    "id": "chicken-breast-x60",
    "name": "Куриная грудка (60 г)",
    "portion": "60 г",
    "kcal": 99,
    "protein": 18.6,
    "carbs": 0,
    "fat": 2.2
  },
  {
    "id": "chicken-breast-x80",
    "name": "Куриная грудка (80 г)",
    "portion": "80 г",
    "kcal": 132,
    "protein": 24.8,
    "carbs": 0,
    "fat": 2.9
  },
  {
    "id": "chicken-breast-x90",
    "name": "Куриная грудка (90 г)",
    "portion": "90 г",
    "kcal": 148.5,
    "protein": 27.9,
    "carbs": 0,
    "fat": 3.2
  },
  {
    "id": "chicken-breast-x110",
    "name": "Куриная грудка (110 г)",
    "portion": "110 г",
    "kcal": 181.5,
    "protein": 34.1,
    "carbs": 0,
    "fat": 4
  },
  {
    "id": "chicken-breast-x125",
    "name": "Куриная грудка (125 г)",
    "portion": "125 г",
    "kcal": 206.3,
    "protein": 38.8,
    "carbs": 0,
    "fat": 4.5
  },
  {
    "id": "chicken-breast-x175",
    "name": "Куриная грудка (175 г)",
    "portion": "175 г",
    "kcal": 288.8,
    "protein": 54.3,
    "carbs": 0,
    "fat": 6.3
  },
  {
    "id": "chicken-breast-x225",
    "name": "Куриная грудка (225 г)",
    "portion": "225 г",
    "kcal": 371.3,
    "protein": 69.8,
    "carbs": 0,
    "fat": 8.1
  },
  {
    "id": "chicken-breast-x275",
    "name": "Куриная грудка (275 г)",
    "portion": "275 г",
    "kcal": 453.8,
    "protein": 85.3,
    "carbs": 0,
    "fat": 9.9
  },
  {
    "id": "chicken-breast-x350",
    "name": "Куриная грудка (350 г)",
    "portion": "350 г",
    "kcal": 577.5,
    "protein": 108.5,
    "carbs": 0,
    "fat": 12.6
  },
  {
    "id": "chicken-breast-x400",
    "name": "Куриная грудка (400 г)",
    "portion": "400 г",
    "kcal": 660,
    "protein": 124,
    "carbs": 0,
    "fat": 14.4
  },
  {
    "id": "turkey-breast-x30",
    "name": "Индейка грудка (30 г)",
    "portion": "30 г",
    "kcal": 40.5,
    "protein": 8.7,
    "carbs": 0,
    "fat": 0.6
  },
  {
    "id": "turkey-breast-x40",
    "name": "Индейка грудка (40 г)",
    "portion": "40 г",
    "kcal": 54,
    "protein": 11.6,
    "carbs": 0,
    "fat": 0.8
  },
  {
    "id": "turkey-breast-x60",
    "name": "Индейка грудка (60 г)",
    "portion": "60 г",
    "kcal": 81,
    "protein": 17.4,
    "carbs": 0,
    "fat": 1.2
  },
  {
    "id": "turkey-breast-x80",
    "name": "Индейка грудка (80 г)",
    "portion": "80 г",
    "kcal": 108,
    "protein": 23.2,
    "carbs": 0,
    "fat": 1.6
  },
  {
    "id": "turkey-breast-x90",
    "name": "Индейка грудка (90 г)",
    "portion": "90 г",
    "kcal": 121.5,
    "protein": 26.1,
    "carbs": 0,
    "fat": 1.8
  },
  {
    "id": "turkey-breast-x110",
    "name": "Индейка грудка (110 г)",
    "portion": "110 г",
    "kcal": 148.5,
    "protein": 31.9,
    "carbs": 0,
    "fat": 2.2
  },
  {
    "id": "turkey-breast-x125",
    "name": "Индейка грудка (125 г)",
    "portion": "125 г",
    "kcal": 168.8,
    "protein": 36.3,
    "carbs": 0,
    "fat": 2.5
  },
  {
    "id": "turkey-breast-x175",
    "name": "Индейка грудка (175 г)",
    "portion": "175 г",
    "kcal": 236.3,
    "protein": 50.8,
    "carbs": 0,
    "fat": 3.5
  },
  {
    "id": "turkey-breast-x225",
    "name": "Индейка грудка (225 г)",
    "portion": "225 г",
    "kcal": 303.8,
    "protein": 65.3,
    "carbs": 0,
    "fat": 4.5
  },
  {
    "id": "turkey-breast-x275",
    "name": "Индейка грудка (275 г)",
    "portion": "275 г",
    "kcal": 371.3,
    "protein": 79.8,
    "carbs": 0,
    "fat": 5.5
  },
  {
    "id": "turkey-breast-x350",
    "name": "Индейка грудка (350 г)",
    "portion": "350 г",
    "kcal": 472.5,
    "protein": 101.5,
    "carbs": 0,
    "fat": 7
  },
  {
    "id": "turkey-breast-x400",
    "name": "Индейка грудка (400 г)",
    "portion": "400 г",
    "kcal": 540,
    "protein": 116,
    "carbs": 0,
    "fat": 8
  },
  {
    "id": "beef-lean-x30",
    "name": "Говядина постная (30 г)",
    "portion": "30 г",
    "kcal": 56.1,
    "protein": 7.8,
    "carbs": 0,
    "fat": 2.7
  },
  {
    "id": "beef-lean-x40",
    "name": "Говядина постная (40 г)",
    "portion": "40 г",
    "kcal": 74.8,
    "protein": 10.4,
    "carbs": 0,
    "fat": 3.6
  },
  {
    "id": "beef-lean-x60",
    "name": "Говядина постная (60 г)",
    "portion": "60 г",
    "kcal": 112.2,
    "protein": 15.6,
    "carbs": 0,
    "fat": 5.4
  },
  {
    "id": "beef-lean-x80",
    "name": "Говядина постная (80 г)",
    "portion": "80 г",
    "kcal": 149.6,
    "protein": 20.8,
    "carbs": 0,
    "fat": 7.2
  },
  {
    "id": "beef-lean-x90",
    "name": "Говядина постная (90 г)",
    "portion": "90 г",
    "kcal": 168.3,
    "protein": 23.4,
    "carbs": 0,
    "fat": 8.1
  },
  {
    "id": "beef-lean-x110",
    "name": "Говядина постная (110 г)",
    "portion": "110 г",
    "kcal": 205.7,
    "protein": 28.6,
    "carbs": 0,
    "fat": 9.9
  },
  {
    "id": "beef-lean-x125",
    "name": "Говядина постная (125 г)",
    "portion": "125 г",
    "kcal": 233.8,
    "protein": 32.5,
    "carbs": 0,
    "fat": 11.3
  },
  {
    "id": "beef-lean-x175",
    "name": "Говядина постная (175 г)",
    "portion": "175 г",
    "kcal": 327.3,
    "protein": 45.5,
    "carbs": 0,
    "fat": 15.8
  },
  {
    "id": "beef-lean-x225",
    "name": "Говядина постная (225 г)",
    "portion": "225 г",
    "kcal": 420.8,
    "protein": 58.5,
    "carbs": 0,
    "fat": 20.3
  },
  {
    "id": "beef-lean-x275",
    "name": "Говядина постная (275 г)",
    "portion": "275 г",
    "kcal": 514.3,
    "protein": 71.5,
    "carbs": 0,
    "fat": 24.8
  },
  {
    "id": "beef-lean-x350",
    "name": "Говядина постная (350 г)",
    "portion": "350 г",
    "kcal": 654.5,
    "protein": 91,
    "carbs": 0,
    "fat": 31.5
  },
  {
    "id": "beef-lean-x400",
    "name": "Говядина постная (400 г)",
    "portion": "400 г",
    "kcal": 748,
    "protein": 104,
    "carbs": 0,
    "fat": 36
  },
  {
    "id": "salmon-x30",
    "name": "Лосось (30 г)",
    "portion": "30 г",
    "kcal": 62.4,
    "protein": 6,
    "carbs": 0,
    "fat": 3.9
  },
  {
    "id": "salmon-x40",
    "name": "Лосось (40 г)",
    "portion": "40 г",
    "kcal": 83.2,
    "protein": 8,
    "carbs": 0,
    "fat": 5.2
  },
  {
    "id": "salmon-x60",
    "name": "Лосось (60 г)",
    "portion": "60 г",
    "kcal": 124.8,
    "protein": 12,
    "carbs": 0,
    "fat": 7.8
  },
  {
    "id": "salmon-x80",
    "name": "Лосось (80 г)",
    "portion": "80 г",
    "kcal": 166.4,
    "protein": 16,
    "carbs": 0,
    "fat": 10.4
  },
  {
    "id": "salmon-x90",
    "name": "Лосось (90 г)",
    "portion": "90 г",
    "kcal": 187.2,
    "protein": 18,
    "carbs": 0,
    "fat": 11.7
  },
  {
    "id": "salmon-x110",
    "name": "Лосось (110 г)",
    "portion": "110 г",
    "kcal": 228.8,
    "protein": 22,
    "carbs": 0,
    "fat": 14.3
  },
  {
    "id": "salmon-x125",
    "name": "Лосось (125 г)",
    "portion": "125 г",
    "kcal": 260,
    "protein": 25,
    "carbs": 0,
    "fat": 16.3
  },
  {
    "id": "salmon-x175",
    "name": "Лосось (175 г)",
    "portion": "175 г",
    "kcal": 364,
    "protein": 35,
    "carbs": 0,
    "fat": 22.8
  },
  {
    "id": "salmon-x225",
    "name": "Лосось (225 г)",
    "portion": "225 г",
    "kcal": 468,
    "protein": 45,
    "carbs": 0,
    "fat": 29.3
  },
  {
    "id": "salmon-x275",
    "name": "Лосось (275 г)",
    "portion": "275 г",
    "kcal": 572,
    "protein": 55,
    "carbs": 0,
    "fat": 35.8
  },
  {
    "id": "salmon-x350",
    "name": "Лосось (350 г)",
    "portion": "350 г",
    "kcal": 728,
    "protein": 70,
    "carbs": 0,
    "fat": 45.5
  },
  {
    "id": "salmon-x400",
    "name": "Лосось (400 г)",
    "portion": "400 г",
    "kcal": 832,
    "protein": 80,
    "carbs": 0,
    "fat": 52
  },
  {
    "id": "cottage-5-x30",
    "name": "Творог 5% (30 г)",
    "portion": "30 г",
    "kcal": 36.3,
    "protein": 5.1,
    "carbs": 0.9,
    "fat": 1.5
  },
  {
    "id": "cottage-5-x40",
    "name": "Творог 5% (40 г)",
    "portion": "40 г",
    "kcal": 48.4,
    "protein": 6.8,
    "carbs": 1.2,
    "fat": 2
  },
  {
    "id": "cottage-5-x60",
    "name": "Творог 5% (60 г)",
    "portion": "60 г",
    "kcal": 72.6,
    "protein": 10.2,
    "carbs": 1.8,
    "fat": 3
  },
  {
    "id": "cottage-5-x80",
    "name": "Творог 5% (80 г)",
    "portion": "80 г",
    "kcal": 96.8,
    "protein": 13.6,
    "carbs": 2.4,
    "fat": 4
  },
  {
    "id": "cottage-5-x90",
    "name": "Творог 5% (90 г)",
    "portion": "90 г",
    "kcal": 108.9,
    "protein": 15.3,
    "carbs": 2.7,
    "fat": 4.5
  },
  {
    "id": "cottage-5-x110",
    "name": "Творог 5% (110 г)",
    "portion": "110 г",
    "kcal": 133.1,
    "protein": 18.7,
    "carbs": 3.3,
    "fat": 5.5
  },
  {
    "id": "cottage-5-x125",
    "name": "Творог 5% (125 г)",
    "portion": "125 г",
    "kcal": 151.3,
    "protein": 21.3,
    "carbs": 3.8,
    "fat": 6.3
  },
  {
    "id": "cottage-5-x175",
    "name": "Творог 5% (175 г)",
    "portion": "175 г",
    "kcal": 211.8,
    "protein": 29.8,
    "carbs": 5.3,
    "fat": 8.8
  },
  {
    "id": "cottage-5-x225",
    "name": "Творог 5% (225 г)",
    "portion": "225 г",
    "kcal": 272.3,
    "protein": 38.3,
    "carbs": 6.8,
    "fat": 11.3
  },
  {
    "id": "cottage-5-x275",
    "name": "Творог 5% (275 г)",
    "portion": "275 г",
    "kcal": 332.8,
    "protein": 46.8,
    "carbs": 8.3,
    "fat": 13.8
  },
  {
    "id": "cottage-5-x350",
    "name": "Творог 5% (350 г)",
    "portion": "350 г",
    "kcal": 423.5,
    "protein": 59.5,
    "carbs": 10.5,
    "fat": 17.5
  },
  {
    "id": "cottage-5-x400",
    "name": "Творог 5% (400 г)",
    "portion": "400 г",
    "kcal": 484,
    "protein": 68,
    "carbs": 12,
    "fat": 20
  },
  {
    "id": "cottage-0-x30",
    "name": "Творог 0–2% (30 г)",
    "portion": "30 г",
    "kcal": 25.8,
    "protein": 5.4,
    "carbs": 1,
    "fat": 0.2
  },
  {
    "id": "cottage-0-x40",
    "name": "Творог 0–2% (40 г)",
    "portion": "40 г",
    "kcal": 34.4,
    "protein": 7.2,
    "carbs": 1.3,
    "fat": 0.2
  },
  {
    "id": "cottage-0-x60",
    "name": "Творог 0–2% (60 г)",
    "portion": "60 г",
    "kcal": 51.6,
    "protein": 10.8,
    "carbs": 2,
    "fat": 0.4
  },
  {
    "id": "cottage-0-x80",
    "name": "Творог 0–2% (80 г)",
    "portion": "80 г",
    "kcal": 68.8,
    "protein": 14.4,
    "carbs": 2.6,
    "fat": 0.5
  },
  {
    "id": "cottage-0-x90",
    "name": "Творог 0–2% (90 г)",
    "portion": "90 г",
    "kcal": 77.4,
    "protein": 16.2,
    "carbs": 3,
    "fat": 0.5
  },
  {
    "id": "cottage-0-x110",
    "name": "Творог 0–2% (110 г)",
    "portion": "110 г",
    "kcal": 94.6,
    "protein": 19.8,
    "carbs": 3.6,
    "fat": 0.7
  },
  {
    "id": "cottage-0-x125",
    "name": "Творог 0–2% (125 г)",
    "portion": "125 г",
    "kcal": 107.5,
    "protein": 22.5,
    "carbs": 4.1,
    "fat": 0.8
  },
  {
    "id": "cottage-0-x175",
    "name": "Творог 0–2% (175 г)",
    "portion": "175 г",
    "kcal": 150.5,
    "protein": 31.5,
    "carbs": 5.8,
    "fat": 1.1
  },
  {
    "id": "cottage-0-x225",
    "name": "Творог 0–2% (225 г)",
    "portion": "225 г",
    "kcal": 193.5,
    "protein": 40.5,
    "carbs": 7.4,
    "fat": 1.3
  },
  {
    "id": "cottage-0-x275",
    "name": "Творог 0–2% (275 г)",
    "portion": "275 г",
    "kcal": 236.5,
    "protein": 49.5,
    "carbs": 9.1,
    "fat": 1.7
  },
  {
    "id": "cottage-0-x350",
    "name": "Творог 0–2% (350 г)",
    "portion": "350 г",
    "kcal": 301,
    "protein": 63,
    "carbs": 11.5,
    "fat": 2.1
  },
  {
    "id": "cottage-0-x400",
    "name": "Творог 0–2% (400 г)",
    "portion": "400 г",
    "kcal": 344,
    "protein": 72,
    "carbs": 13.2,
    "fat": 2.4
  },
  {
    "id": "rice-white-x30",
    "name": "Рис варёный (30 г)",
    "portion": "30 г",
    "kcal": 39,
    "protein": 0.8,
    "carbs": 8.4,
    "fat": 0.1
  },
  {
    "id": "rice-white-x40",
    "name": "Рис варёный (40 г)",
    "portion": "40 г",
    "kcal": 52,
    "protein": 1.1,
    "carbs": 11.2,
    "fat": 0.1
  },
  {
    "id": "rice-white-x60",
    "name": "Рис варёный (60 г)",
    "portion": "60 г",
    "kcal": 78,
    "protein": 1.6,
    "carbs": 16.8,
    "fat": 0.2
  },
  {
    "id": "rice-white-x80",
    "name": "Рис варёный (80 г)",
    "portion": "80 г",
    "kcal": 104,
    "protein": 2.2,
    "carbs": 22.4,
    "fat": 0.2
  },
  {
    "id": "rice-white-x90",
    "name": "Рис варёный (90 г)",
    "portion": "90 г",
    "kcal": 117,
    "protein": 2.4,
    "carbs": 25.2,
    "fat": 0.3
  },
  {
    "id": "rice-white-x110",
    "name": "Рис варёный (110 г)",
    "portion": "110 г",
    "kcal": 143,
    "protein": 3,
    "carbs": 30.8,
    "fat": 0.3
  },
  {
    "id": "rice-white-x125",
    "name": "Рис варёный (125 г)",
    "portion": "125 г",
    "kcal": 162.5,
    "protein": 3.4,
    "carbs": 35,
    "fat": 0.4
  },
  {
    "id": "rice-white-x175",
    "name": "Рис варёный (175 г)",
    "portion": "175 г",
    "kcal": 227.5,
    "protein": 4.7,
    "carbs": 49,
    "fat": 0.5
  },
  {
    "id": "rice-white-x225",
    "name": "Рис варёный (225 г)",
    "portion": "225 г",
    "kcal": 292.5,
    "protein": 6.1,
    "carbs": 63,
    "fat": 0.7
  },
  {
    "id": "rice-white-x275",
    "name": "Рис варёный (275 г)",
    "portion": "275 г",
    "kcal": 357.5,
    "protein": 7.4,
    "carbs": 77,
    "fat": 0.8
  },
  {
    "id": "rice-white-x350",
    "name": "Рис варёный (350 г)",
    "portion": "350 г",
    "kcal": 455,
    "protein": 9.5,
    "carbs": 98,
    "fat": 1.1
  },
  {
    "id": "rice-white-x400",
    "name": "Рис варёный (400 г)",
    "portion": "400 г",
    "kcal": 520,
    "protein": 10.8,
    "carbs": 112,
    "fat": 1.2
  },
  {
    "id": "buckwheat-x30",
    "name": "Гречка варёная (30 г)",
    "portion": "30 г",
    "kcal": 33,
    "protein": 1.2,
    "carbs": 6.3,
    "fat": 0.2
  },
  {
    "id": "buckwheat-x40",
    "name": "Гречка варёная (40 г)",
    "portion": "40 г",
    "kcal": 44,
    "protein": 1.6,
    "carbs": 8.4,
    "fat": 0.3
  },
  {
    "id": "buckwheat-x60",
    "name": "Гречка варёная (60 г)",
    "portion": "60 г",
    "kcal": 66,
    "protein": 2.4,
    "carbs": 12.6,
    "fat": 0.4
  },
  {
    "id": "buckwheat-x80",
    "name": "Гречка варёная (80 г)",
    "portion": "80 г",
    "kcal": 88,
    "protein": 3.2,
    "carbs": 16.8,
    "fat": 0.6
  },
  {
    "id": "buckwheat-x90",
    "name": "Гречка варёная (90 г)",
    "portion": "90 г",
    "kcal": 99,
    "protein": 3.6,
    "carbs": 18.9,
    "fat": 0.6
  },
  {
    "id": "buckwheat-x110",
    "name": "Гречка варёная (110 г)",
    "portion": "110 г",
    "kcal": 121,
    "protein": 4.4,
    "carbs": 23.1,
    "fat": 0.8
  },
  {
    "id": "buckwheat-x125",
    "name": "Гречка варёная (125 г)",
    "portion": "125 г",
    "kcal": 137.5,
    "protein": 5,
    "carbs": 26.3,
    "fat": 0.9
  },
  {
    "id": "buckwheat-x175",
    "name": "Гречка варёная (175 г)",
    "portion": "175 г",
    "kcal": 192.5,
    "protein": 7,
    "carbs": 36.8,
    "fat": 1.2
  },
  {
    "id": "buckwheat-x225",
    "name": "Гречка варёная (225 г)",
    "portion": "225 г",
    "kcal": 247.5,
    "protein": 9,
    "carbs": 47.3,
    "fat": 1.6
  },
  {
    "id": "buckwheat-x275",
    "name": "Гречка варёная (275 г)",
    "portion": "275 г",
    "kcal": 302.5,
    "protein": 11,
    "carbs": 57.8,
    "fat": 1.9
  },
  {
    "id": "buckwheat-x350",
    "name": "Гречка варёная (350 г)",
    "portion": "350 г",
    "kcal": 385,
    "protein": 14,
    "carbs": 73.5,
    "fat": 2.4
  },
  {
    "id": "buckwheat-x400",
    "name": "Гречка варёная (400 г)",
    "portion": "400 г",
    "kcal": 440,
    "protein": 16,
    "carbs": 84,
    "fat": 2.8
  },
  {
    "id": "pasta-x30",
    "name": "Макароны варёные (30 г)",
    "portion": "30 г",
    "kcal": 39.6,
    "protein": 1.3,
    "carbs": 7.8,
    "fat": 0.2
  },
  {
    "id": "pasta-x40",
    "name": "Макароны варёные (40 г)",
    "portion": "40 г",
    "kcal": 52.8,
    "protein": 1.8,
    "carbs": 10.4,
    "fat": 0.3
  },
  {
    "id": "pasta-x60",
    "name": "Макароны варёные (60 г)",
    "portion": "60 г",
    "kcal": 79.2,
    "protein": 2.7,
    "carbs": 15.6,
    "fat": 0.5
  },
  {
    "id": "pasta-x80",
    "name": "Макароны варёные (80 г)",
    "portion": "80 г",
    "kcal": 105.6,
    "protein": 3.6,
    "carbs": 20.8,
    "fat": 0.6
  },
  {
    "id": "pasta-x90",
    "name": "Макароны варёные (90 г)",
    "portion": "90 г",
    "kcal": 118.8,
    "protein": 4.1,
    "carbs": 23.4,
    "fat": 0.7
  },
  {
    "id": "pasta-x110",
    "name": "Макароны варёные (110 г)",
    "portion": "110 г",
    "kcal": 145.2,
    "protein": 5,
    "carbs": 28.6,
    "fat": 0.9
  },
  {
    "id": "pasta-x125",
    "name": "Макароны варёные (125 г)",
    "portion": "125 г",
    "kcal": 165,
    "protein": 5.6,
    "carbs": 32.5,
    "fat": 1
  },
  {
    "id": "pasta-x175",
    "name": "Макароны варёные (175 г)",
    "portion": "175 г",
    "kcal": 231,
    "protein": 7.9,
    "carbs": 45.5,
    "fat": 1.4
  },
  {
    "id": "pasta-x225",
    "name": "Макароны варёные (225 г)",
    "portion": "225 г",
    "kcal": 297,
    "protein": 10.1,
    "carbs": 58.5,
    "fat": 1.8
  },
  {
    "id": "pasta-x275",
    "name": "Макароны варёные (275 г)",
    "portion": "275 г",
    "kcal": 363,
    "protein": 12.4,
    "carbs": 71.5,
    "fat": 2.2
  },
  {
    "id": "pasta-x350",
    "name": "Макароны варёные (350 г)",
    "portion": "350 г",
    "kcal": 462,
    "protein": 15.8,
    "carbs": 91,
    "fat": 2.8
  },
  {
    "id": "pasta-x400",
    "name": "Макароны варёные (400 г)",
    "portion": "400 г",
    "kcal": 528,
    "protein": 18,
    "carbs": 104,
    "fat": 3.2
  },
  {
    "id": "oats-dry-x30",
    "name": "Овсяные хлопья (30 г)",
    "portion": "30 г",
    "kcal": 111,
    "protein": 3.9,
    "carbs": 19.8,
    "fat": 2.1
  },
  {
    "id": "oats-dry-x40",
    "name": "Овсяные хлопья (40 г)",
    "portion": "40 г",
    "kcal": 148,
    "protein": 5.2,
    "carbs": 26.4,
    "fat": 2.8
  },
  {
    "id": "oats-dry-x60",
    "name": "Овсяные хлопья (60 г)",
    "portion": "60 г",
    "kcal": 222,
    "protein": 7.8,
    "carbs": 39.6,
    "fat": 4.2
  },
  {
    "id": "oats-dry-x80",
    "name": "Овсяные хлопья (80 г)",
    "portion": "80 г",
    "kcal": 296,
    "protein": 10.4,
    "carbs": 52.8,
    "fat": 5.6
  },
  {
    "id": "oats-dry-x90",
    "name": "Овсяные хлопья (90 г)",
    "portion": "90 г",
    "kcal": 333,
    "protein": 11.7,
    "carbs": 59.4,
    "fat": 6.3
  },
  {
    "id": "oats-dry-x110",
    "name": "Овсяные хлопья (110 г)",
    "portion": "110 г",
    "kcal": 407,
    "protein": 14.3,
    "carbs": 72.6,
    "fat": 7.7
  },
  {
    "id": "oats-dry-x125",
    "name": "Овсяные хлопья (125 г)",
    "portion": "125 г",
    "kcal": 462.5,
    "protein": 16.3,
    "carbs": 82.5,
    "fat": 8.8
  },
  {
    "id": "oats-dry-x175",
    "name": "Овсяные хлопья (175 г)",
    "portion": "175 г",
    "kcal": 647.5,
    "protein": 22.8,
    "carbs": 115.5,
    "fat": 12.3
  },
  {
    "id": "oats-dry-x225",
    "name": "Овсяные хлопья (225 г)",
    "portion": "225 г",
    "kcal": 832.5,
    "protein": 29.3,
    "carbs": 148.5,
    "fat": 15.8
  },
  {
    "id": "oats-dry-x275",
    "name": "Овсяные хлопья (275 г)",
    "portion": "275 г",
    "kcal": 1017.5,
    "protein": 35.8,
    "carbs": 181.5,
    "fat": 19.3
  },
  {
    "id": "oats-dry-x350",
    "name": "Овсяные хлопья (350 г)",
    "portion": "350 г",
    "kcal": 1295,
    "protein": 45.5,
    "carbs": 231,
    "fat": 24.5
  },
  {
    "id": "oats-dry-x400",
    "name": "Овсяные хлопья (400 г)",
    "portion": "400 г",
    "kcal": 1480,
    "protein": 52,
    "carbs": 264,
    "fat": 28
  },
  {
    "id": "potato-boil-x30",
    "name": "Картофель варёный (30 г)",
    "portion": "30 г",
    "kcal": 26.1,
    "protein": 0.6,
    "carbs": 6,
    "fat": 0
  },
  {
    "id": "potato-boil-x40",
    "name": "Картофель варёный (40 г)",
    "portion": "40 г",
    "kcal": 34.8,
    "protein": 0.8,
    "carbs": 8,
    "fat": 0
  },
  {
    "id": "potato-boil-x60",
    "name": "Картофель варёный (60 г)",
    "portion": "60 г",
    "kcal": 52.2,
    "protein": 1.2,
    "carbs": 12,
    "fat": 0.1
  },
  {
    "id": "potato-boil-x80",
    "name": "Картофель варёный (80 г)",
    "portion": "80 г",
    "kcal": 69.6,
    "protein": 1.6,
    "carbs": 16,
    "fat": 0.1
  },
  {
    "id": "potato-boil-x90",
    "name": "Картофель варёный (90 г)",
    "portion": "90 г",
    "kcal": 78.3,
    "protein": 1.8,
    "carbs": 18,
    "fat": 0.1
  },
  {
    "id": "potato-boil-x110",
    "name": "Картофель варёный (110 г)",
    "portion": "110 г",
    "kcal": 95.7,
    "protein": 2.2,
    "carbs": 22,
    "fat": 0.1
  },
  {
    "id": "potato-boil-x125",
    "name": "Картофель варёный (125 г)",
    "portion": "125 г",
    "kcal": 108.8,
    "protein": 2.5,
    "carbs": 25,
    "fat": 0.1
  },
  {
    "id": "potato-boil-x175",
    "name": "Картофель варёный (175 г)",
    "portion": "175 г",
    "kcal": 152.3,
    "protein": 3.5,
    "carbs": 35,
    "fat": 0.2
  },
  {
    "id": "potato-boil-x225",
    "name": "Картофель варёный (225 г)",
    "portion": "225 г",
    "kcal": 195.8,
    "protein": 4.5,
    "carbs": 45,
    "fat": 0.2
  },
  {
    "id": "potato-boil-x275",
    "name": "Картофель варёный (275 г)",
    "portion": "275 г",
    "kcal": 239.3,
    "protein": 5.5,
    "carbs": 55,
    "fat": 0.3
  },
  {
    "id": "potato-boil-x350",
    "name": "Картофель варёный (350 г)",
    "portion": "350 г",
    "kcal": 304.5,
    "protein": 7,
    "carbs": 70,
    "fat": 0.4
  },
  {
    "id": "potato-boil-x400",
    "name": "Картофель варёный (400 г)",
    "portion": "400 г",
    "kcal": 348,
    "protein": 8,
    "carbs": 80,
    "fat": 0.4
  },
  {
    "id": "egg-x30",
    "name": "Яйцо куриное (на 50 г) (30 г)",
    "portion": "30 г",
    "kcal": 46.5,
    "protein": 3.9,
    "carbs": 0.3,
    "fat": 3.3
  },
  {
    "id": "egg-x40",
    "name": "Яйцо куриное (на 50 г) (40 г)",
    "portion": "40 г",
    "kcal": 62,
    "protein": 5.2,
    "carbs": 0.4,
    "fat": 4.4
  },
  {
    "id": "egg-x60",
    "name": "Яйцо куриное (на 50 г) (60 г)",
    "portion": "60 г",
    "kcal": 93,
    "protein": 7.8,
    "carbs": 0.7,
    "fat": 6.6
  },
  {
    "id": "egg-x80",
    "name": "Яйцо куриное (на 50 г) (80 г)",
    "portion": "80 г",
    "kcal": 124,
    "protein": 10.4,
    "carbs": 0.9,
    "fat": 8.8
  },
  {
    "id": "egg-x90",
    "name": "Яйцо куриное (на 50 г) (90 г)",
    "portion": "90 г",
    "kcal": 139.5,
    "protein": 11.7,
    "carbs": 1,
    "fat": 9.9
  },
  {
    "id": "egg-x110",
    "name": "Яйцо куриное (на 50 г) (110 г)",
    "portion": "110 г",
    "kcal": 170.5,
    "protein": 14.3,
    "carbs": 1.2,
    "fat": 12.1
  },
  {
    "id": "egg-x125",
    "name": "Яйцо куриное (на 50 г) (125 г)",
    "portion": "125 г",
    "kcal": 193.8,
    "protein": 16.3,
    "carbs": 1.4,
    "fat": 13.8
  },
  {
    "id": "egg-x175",
    "name": "Яйцо куриное (на 50 г) (175 г)",
    "portion": "175 г",
    "kcal": 271.3,
    "protein": 22.8,
    "carbs": 1.9,
    "fat": 19.3
  },
  {
    "id": "egg-x225",
    "name": "Яйцо куриное (на 50 г) (225 г)",
    "portion": "225 г",
    "kcal": 348.8,
    "protein": 29.3,
    "carbs": 2.5,
    "fat": 24.8
  },
  {
    "id": "egg-x275",
    "name": "Яйцо куриное (на 50 г) (275 г)",
    "portion": "275 г",
    "kcal": 426.3,
    "protein": 35.8,
    "carbs": 3,
    "fat": 30.3
  },
  {
    "id": "egg-x350",
    "name": "Яйцо куриное (на 50 г) (350 г)",
    "portion": "350 г",
    "kcal": 542.5,
    "protein": 45.5,
    "carbs": 3.9,
    "fat": 38.5
  },
  {
    "id": "egg-x400",
    "name": "Яйцо куриное (на 50 г) (400 г)",
    "portion": "400 г",
    "kcal": 620,
    "protein": 52,
    "carbs": 4.4,
    "fat": 44
  },
  {
    "id": "shrimp-x30",
    "name": "Креветки (30 г)",
    "portion": "30 г",
    "kcal": 29.7,
    "protein": 7.2,
    "carbs": 0.1,
    "fat": 0.1
  },
  {
    "id": "shrimp-x40",
    "name": "Креветки (40 г)",
    "portion": "40 г",
    "kcal": 39.6,
    "protein": 9.6,
    "carbs": 0.1,
    "fat": 0.1
  },
  {
    "id": "shrimp-x60",
    "name": "Креветки (60 г)",
    "portion": "60 г",
    "kcal": 59.4,
    "protein": 14.4,
    "carbs": 0.1,
    "fat": 0.2
  },
  {
    "id": "shrimp-x80",
    "name": "Креветки (80 г)",
    "portion": "80 г",
    "kcal": 79.2,
    "protein": 19.2,
    "carbs": 0.2,
    "fat": 0.2
  },
  {
    "id": "shrimp-x90",
    "name": "Креветки (90 г)",
    "portion": "90 г",
    "kcal": 89.1,
    "protein": 21.6,
    "carbs": 0.2,
    "fat": 0.3
  },
  {
    "id": "shrimp-x110",
    "name": "Креветки (110 г)",
    "portion": "110 г",
    "kcal": 108.9,
    "protein": 26.4,
    "carbs": 0.2,
    "fat": 0.3
  },
  {
    "id": "shrimp-x125",
    "name": "Креветки (125 г)",
    "portion": "125 г",
    "kcal": 123.8,
    "protein": 30,
    "carbs": 0.3,
    "fat": 0.4
  },
  {
    "id": "shrimp-x175",
    "name": "Креветки (175 г)",
    "portion": "175 г",
    "kcal": 173.3,
    "protein": 42,
    "carbs": 0.4,
    "fat": 0.5
  },
  {
    "id": "shrimp-x225",
    "name": "Креветки (225 г)",
    "portion": "225 г",
    "kcal": 222.8,
    "protein": 54,
    "carbs": 0.5,
    "fat": 0.7
  },
  {
    "id": "shrimp-x275",
    "name": "Креветки (275 г)",
    "portion": "275 г",
    "kcal": 272.3,
    "protein": 66,
    "carbs": 0.6,
    "fat": 0.8
  },
  {
    "id": "shrimp-x350",
    "name": "Креветки (350 г)",
    "portion": "350 г",
    "kcal": 346.5,
    "protein": 84,
    "carbs": 0.7,
    "fat": 1.1
  },
  {
    "id": "shrimp-x400",
    "name": "Креветки (400 г)",
    "portion": "400 г",
    "kcal": 396,
    "protein": 96,
    "carbs": 0.8,
    "fat": 1.2
  },
  {
    "id": "tofu-x30",
    "name": "Тофу (30 г)",
    "portion": "30 г",
    "kcal": 22.8,
    "protein": 2.4,
    "carbs": 0.6,
    "fat": 1.3
  },
  {
    "id": "tofu-x40",
    "name": "Тофу (40 г)",
    "portion": "40 г",
    "kcal": 30.4,
    "protein": 3.2,
    "carbs": 0.8,
    "fat": 1.8
  },
  {
    "id": "tofu-x60",
    "name": "Тофу (60 г)",
    "portion": "60 г",
    "kcal": 45.6,
    "protein": 4.8,
    "carbs": 1.2,
    "fat": 2.7
  },
  {
    "id": "tofu-x80",
    "name": "Тофу (80 г)",
    "portion": "80 г",
    "kcal": 60.8,
    "protein": 6.4,
    "carbs": 1.6,
    "fat": 3.6
  },
  {
    "id": "tofu-x90",
    "name": "Тофу (90 г)",
    "portion": "90 г",
    "kcal": 68.4,
    "protein": 7.2,
    "carbs": 1.8,
    "fat": 4.1
  },
  {
    "id": "tofu-x110",
    "name": "Тофу (110 г)",
    "portion": "110 г",
    "kcal": 83.6,
    "protein": 8.8,
    "carbs": 2.2,
    "fat": 5
  },
  {
    "id": "tofu-x125",
    "name": "Тофу (125 г)",
    "portion": "125 г",
    "kcal": 95,
    "protein": 10,
    "carbs": 2.5,
    "fat": 5.6
  },
  {
    "id": "tofu-x175",
    "name": "Тофу (175 г)",
    "portion": "175 г",
    "kcal": 133,
    "protein": 14,
    "carbs": 3.5,
    "fat": 7.9
  },
  {
    "id": "tofu-x225",
    "name": "Тофу (225 г)",
    "portion": "225 г",
    "kcal": 171,
    "protein": 18,
    "carbs": 4.5,
    "fat": 10.1
  },
  {
    "id": "tofu-x275",
    "name": "Тофу (275 г)",
    "portion": "275 г",
    "kcal": 209,
    "protein": 22,
    "carbs": 5.5,
    "fat": 12.4
  },
  {
    "id": "tofu-x350",
    "name": "Тофу (350 г)",
    "portion": "350 г",
    "kcal": 266,
    "protein": 28,
    "carbs": 7,
    "fat": 15.8
  },
  {
    "id": "tofu-x400",
    "name": "Тофу (400 г)",
    "portion": "400 г",
    "kcal": 304,
    "protein": 32,
    "carbs": 8,
    "fat": 18
  },
  {
    "id": "banana-x30",
    "name": "Банан (30 г)",
    "portion": "30 г",
    "kcal": 26.7,
    "protein": 0.3,
    "carbs": 6.9,
    "fat": 0.1
  },
  {
    "id": "banana-x40",
    "name": "Банан (40 г)",
    "portion": "40 г",
    "kcal": 35.6,
    "protein": 0.4,
    "carbs": 9.2,
    "fat": 0.1
  },
  {
    "id": "banana-x60",
    "name": "Банан (60 г)",
    "portion": "60 г",
    "kcal": 53.4,
    "protein": 0.7,
    "carbs": 13.8,
    "fat": 0.2
  },
  {
    "id": "banana-x80",
    "name": "Банан (80 г)",
    "portion": "80 г",
    "kcal": 71.2,
    "protein": 0.9,
    "carbs": 18.4,
    "fat": 0.2
  },
  {
    "id": "banana-x90",
    "name": "Банан (90 г)",
    "portion": "90 г",
    "kcal": 80.1,
    "protein": 1,
    "carbs": 20.7,
    "fat": 0.3
  },
  {
    "id": "banana-x110",
    "name": "Банан (110 г)",
    "portion": "110 г",
    "kcal": 97.9,
    "protein": 1.2,
    "carbs": 25.3,
    "fat": 0.3
  },
  {
    "id": "banana-x125",
    "name": "Банан (125 г)",
    "portion": "125 г",
    "kcal": 111.3,
    "protein": 1.4,
    "carbs": 28.8,
    "fat": 0.4
  },
  {
    "id": "banana-x175",
    "name": "Банан (175 г)",
    "portion": "175 г",
    "kcal": 155.8,
    "protein": 1.9,
    "carbs": 40.3,
    "fat": 0.5
  },
  {
    "id": "banana-x225",
    "name": "Банан (225 г)",
    "portion": "225 г",
    "kcal": 200.3,
    "protein": 2.5,
    "carbs": 51.8,
    "fat": 0.7
  },
  {
    "id": "banana-x275",
    "name": "Банан (275 г)",
    "portion": "275 г",
    "kcal": 244.8,
    "protein": 3,
    "carbs": 63.3,
    "fat": 0.8
  },
  {
    "id": "banana-x350",
    "name": "Банан (350 г)",
    "portion": "350 г",
    "kcal": 311.5,
    "protein": 3.9,
    "carbs": 80.5,
    "fat": 1.1
  },
  {
    "id": "banana-x400",
    "name": "Банан (400 г)",
    "portion": "400 г",
    "kcal": 356,
    "protein": 4.4,
    "carbs": 92,
    "fat": 1.2
  },
  {
    "id": "avocado-x30",
    "name": "Авокадо (30 г)",
    "portion": "30 г",
    "kcal": 48,
    "protein": 0.6,
    "carbs": 2.7,
    "fat": 4.5
  },
  {
    "id": "avocado-x40",
    "name": "Авокадо (40 г)",
    "portion": "40 г",
    "kcal": 64,
    "protein": 0.8,
    "carbs": 3.6,
    "fat": 6
  },
  {
    "id": "avocado-x60",
    "name": "Авокадо (60 г)",
    "portion": "60 г",
    "kcal": 96,
    "protein": 1.2,
    "carbs": 5.4,
    "fat": 9
  },
  {
    "id": "avocado-x80",
    "name": "Авокадо (80 г)",
    "portion": "80 г",
    "kcal": 128,
    "protein": 1.6,
    "carbs": 7.2,
    "fat": 12
  },
  {
    "id": "avocado-x90",
    "name": "Авокадо (90 г)",
    "portion": "90 г",
    "kcal": 144,
    "protein": 1.8,
    "carbs": 8.1,
    "fat": 13.5
  },
  {
    "id": "avocado-x110",
    "name": "Авокадо (110 г)",
    "portion": "110 г",
    "kcal": 176,
    "protein": 2.2,
    "carbs": 9.9,
    "fat": 16.5
  },
  {
    "id": "avocado-x125",
    "name": "Авокадо (125 г)",
    "portion": "125 г",
    "kcal": 200,
    "protein": 2.5,
    "carbs": 11.3,
    "fat": 18.8
  },
  {
    "id": "avocado-x175",
    "name": "Авокадо (175 г)",
    "portion": "175 г",
    "kcal": 280,
    "protein": 3.5,
    "carbs": 15.8,
    "fat": 26.3
  },
  {
    "id": "avocado-x225",
    "name": "Авокадо (225 г)",
    "portion": "225 г",
    "kcal": 360,
    "protein": 4.5,
    "carbs": 20.3,
    "fat": 33.8
  },
  {
    "id": "avocado-x275",
    "name": "Авокадо (275 г)",
    "portion": "275 г",
    "kcal": 440,
    "protein": 5.5,
    "carbs": 24.8,
    "fat": 41.3
  },
  {
    "id": "avocado-x350",
    "name": "Авокадо (350 г)",
    "portion": "350 г",
    "kcal": 560,
    "protein": 7,
    "carbs": 31.5,
    "fat": 52.5
  },
  {
    "id": "avocado-x400",
    "name": "Авокадо (400 г)",
    "portion": "400 г",
    "kcal": 640,
    "protein": 8,
    "carbs": 36,
    "fat": 60
  },
  {
    "id": "almond-x30",
    "name": "Миндаль (30 г)",
    "portion": "30 г",
    "kcal": 173.7,
    "protein": 6.3,
    "carbs": 6.6,
    "fat": 15
  },
  {
    "id": "almond-x40",
    "name": "Миндаль (40 г)",
    "portion": "40 г",
    "kcal": 231.6,
    "protein": 8.4,
    "carbs": 8.8,
    "fat": 20
  },
  {
    "id": "almond-x60",
    "name": "Миндаль (60 г)",
    "portion": "60 г",
    "kcal": 347.4,
    "protein": 12.6,
    "carbs": 13.2,
    "fat": 30
  },
  {
    "id": "almond-x80",
    "name": "Миндаль (80 г)",
    "portion": "80 г",
    "kcal": 463.2,
    "protein": 16.8,
    "carbs": 17.6,
    "fat": 40
  },
  {
    "id": "almond-x90",
    "name": "Миндаль (90 г)",
    "portion": "90 г",
    "kcal": 521.1,
    "protein": 18.9,
    "carbs": 19.8,
    "fat": 45
  },
  {
    "id": "almond-x110",
    "name": "Миндаль (110 г)",
    "portion": "110 г",
    "kcal": 636.9,
    "protein": 23.1,
    "carbs": 24.2,
    "fat": 55
  },
  {
    "id": "almond-x125",
    "name": "Миндаль (125 г)",
    "portion": "125 г",
    "kcal": 723.8,
    "protein": 26.3,
    "carbs": 27.5,
    "fat": 62.5
  },
  {
    "id": "almond-x175",
    "name": "Миндаль (175 г)",
    "portion": "175 г",
    "kcal": 1013.3,
    "protein": 36.8,
    "carbs": 38.5,
    "fat": 87.5
  },
  {
    "id": "almond-x225",
    "name": "Миндаль (225 г)",
    "portion": "225 г",
    "kcal": 1302.8,
    "protein": 47.3,
    "carbs": 49.5,
    "fat": 112.5
  },
  {
    "id": "almond-x275",
    "name": "Миндаль (275 г)",
    "portion": "275 г",
    "kcal": 1592.3,
    "protein": 57.8,
    "carbs": 60.5,
    "fat": 137.5
  },
  {
    "id": "almond-x350",
    "name": "Миндаль (350 г)",
    "portion": "350 г",
    "kcal": 2026.5,
    "protein": 73.5,
    "carbs": 77,
    "fat": 175
  },
  {
    "id": "almond-x400",
    "name": "Миндаль (400 г)",
    "portion": "400 г",
    "kcal": 2316,
    "protein": 84,
    "carbs": 88,
    "fat": 200
  },
  {
    "id": "peanut-x30",
    "name": "Арахис (30 г)",
    "portion": "30 г",
    "kcal": 170.1,
    "protein": 7.8,
    "carbs": 4.8,
    "fat": 14.7
  },
  {
    "id": "peanut-x40",
    "name": "Арахис (40 г)",
    "portion": "40 г",
    "kcal": 226.8,
    "protein": 10.4,
    "carbs": 6.4,
    "fat": 19.6
  },
  {
    "id": "peanut-x60",
    "name": "Арахис (60 г)",
    "portion": "60 г",
    "kcal": 340.2,
    "protein": 15.6,
    "carbs": 9.6,
    "fat": 29.4
  },
  {
    "id": "peanut-x80",
    "name": "Арахис (80 г)",
    "portion": "80 г",
    "kcal": 453.6,
    "protein": 20.8,
    "carbs": 12.8,
    "fat": 39.2
  },
  {
    "id": "peanut-x90",
    "name": "Арахис (90 г)",
    "portion": "90 г",
    "kcal": 510.3,
    "protein": 23.4,
    "carbs": 14.4,
    "fat": 44.1
  },
  {
    "id": "peanut-x110",
    "name": "Арахис (110 г)",
    "portion": "110 г",
    "kcal": 623.7,
    "protein": 28.6,
    "carbs": 17.6,
    "fat": 53.9
  },
  {
    "id": "peanut-x125",
    "name": "Арахис (125 г)",
    "portion": "125 г",
    "kcal": 708.8,
    "protein": 32.5,
    "carbs": 20,
    "fat": 61.3
  },
  {
    "id": "peanut-x175",
    "name": "Арахис (175 г)",
    "portion": "175 г",
    "kcal": 992.3,
    "protein": 45.5,
    "carbs": 28,
    "fat": 85.8
  },
  {
    "id": "peanut-x225",
    "name": "Арахис (225 г)",
    "portion": "225 г",
    "kcal": 1275.8,
    "protein": 58.5,
    "carbs": 36,
    "fat": 110.3
  },
  {
    "id": "peanut-x275",
    "name": "Арахис (275 г)",
    "portion": "275 г",
    "kcal": 1559.3,
    "protein": 71.5,
    "carbs": 44,
    "fat": 134.8
  },
  {
    "id": "peanut-x350",
    "name": "Арахис (350 г)",
    "portion": "350 г",
    "kcal": 1984.5,
    "protein": 91,
    "carbs": 56,
    "fat": 171.5
  },
  {
    "id": "peanut-x400",
    "name": "Арахис (400 г)",
    "portion": "400 г",
    "kcal": 2268,
    "protein": 104,
    "carbs": 64,
    "fat": 196
  },
  {
    "id": "combo-рис-с-курицей",
    "name": "Рис с курицей",
    "portion": "200 г",
    "kcal": 180,
    "protein": 14,
    "carbs": 20,
    "fat": 5
  },
  {
    "id": "combo-гречка-с-говядиной",
    "name": "Гречка с говядиной",
    "portion": "200 г",
    "kcal": 190,
    "protein": 15,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-макароны-с-сыром",
    "name": "Макароны с сыром",
    "portion": "200 г",
    "kcal": 220,
    "protein": 10,
    "carbs": 25,
    "fat": 9
  },
  {
    "id": "combo-картофель-с-рыбой",
    "name": "Картофель с рыбой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 12,
    "carbs": 14,
    "fat": 5
  },
  {
    "id": "combo-салат-с-тунцом",
    "name": "Салат с тунцом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 14,
    "carbs": 6,
    "fat": 7
  },
  {
    "id": "combo-омлет-с-сыром",
    "name": "Омлет с сыром",
    "portion": "200 г",
    "kcal": 200,
    "protein": 14,
    "carbs": 2,
    "fat": 15
  },
  {
    "id": "combo-творог-с-бананом",
    "name": "Творог с бананом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 12,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-йогурт-с-орехами",
    "name": "Йогурт с орехами",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 12,
    "fat": 9
  },
  {
    "id": "combo-курица-с-овощами",
    "name": "Курица с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 18,
    "carbs": 6,
    "fat": 5
  },
  {
    "id": "combo-индейка-с-рисом",
    "name": "Индейка с рисом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 16,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-лосось-с-овощами",
    "name": "Лосось с овощами",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 5,
    "fat": 10
  },
  {
    "id": "combo-креветки-с-рисом",
    "name": "Креветки с рисом",
    "portion": "200 г",
    "kcal": 150,
    "protein": 14,
    "carbs": 18,
    "fat": 3
  },
  {
    "id": "combo-фасоль-с-овощами",
    "name": "Фасоль с овощами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 7,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-нут-с-овощами",
    "name": "Нут с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 7,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-тофу-с-овощами",
    "name": "Тофу с овощами",
    "portion": "200 г",
    "kcal": 110,
    "protein": 9,
    "carbs": 8,
    "fat": 5
  },
  {
    "id": "combo-гречка-с-курицей",
    "name": "Гречка с курицей",
    "portion": "200 г",
    "kcal": 170,
    "protein": 16,
    "carbs": 18,
    "fat": 5
  },
  {
    "id": "combo-рис-с-индейкой",
    "name": "Рис с индейкой",
    "portion": "200 г",
    "kcal": 165,
    "protein": 15,
    "carbs": 20,
    "fat": 4
  },
  {
    "id": "combo-паста-с-курицей",
    "name": "Паста с курицей",
    "portion": "200 г",
    "kcal": 200,
    "protein": 16,
    "carbs": 22,
    "fat": 6
  },
  {
    "id": "combo-картофель-с-курицей",
    "name": "Картофель с курицей",
    "portion": "200 г",
    "kcal": 160,
    "protein": 14,
    "carbs": 16,
    "fat": 5
  },
  {
    "id": "combo-киноа-с-лососем",
    "name": "Киноа с лососем",
    "portion": "200 г",
    "kcal": 190,
    "protein": 16,
    "carbs": 18,
    "fat": 7
  },
  {
    "id": "combo-булгур-с-говядиной",
    "name": "Булгур с говядиной",
    "portion": "200 г",
    "kcal": 185,
    "protein": 15,
    "carbs": 18,
    "fat": 6
  },
  {
    "id": "combo-чечевица-с-курицей",
    "name": "Чечевица с курицей",
    "portion": "200 г",
    "kcal": 170,
    "protein": 18,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-рис-с-яйцом",
    "name": "Рис с яйцом",
    "portion": "200 г",
    "kcal": 160,
    "protein": 10,
    "carbs": 22,
    "fat": 5
  },
  {
    "id": "combo-овсянка-с-протеином",
    "name": "Овсянка с протеином",
    "portion": "200 г",
    "kcal": 180,
    "protein": 20,
    "carbs": 22,
    "fat": 4
  },
  {
    "id": "combo-творог-с-ягодами",
    "name": "Творог с ягодами",
    "portion": "200 г",
    "kcal": 120,
    "protein": 14,
    "carbs": 12,
    "fat": 3
  },
  {
    "id": "combo-йогурт-с-гранолой",
    "name": "Йогурт с гранолой",
    "portion": "200 г",
    "kcal": 160,
    "protein": 8,
    "carbs": 24,
    "fat": 5
  },
  {
    "id": "combo-курица-терияки-с-рисом",
    "name": "Курица терияки с рисом",
    "portion": "200 г",
    "kcal": 200,
    "protein": 16,
    "carbs": 24,
    "fat": 5
  },
  {
    "id": "combo-говядина-с-гречкой",
    "name": "Говядина с гречкой",
    "portion": "200 г",
    "kcal": 195,
    "protein": 16,
    "carbs": 16,
    "fat": 7
  },
  {
    "id": "combo-рыба-с-овощами",
    "name": "Рыба с овощами",
    "portion": "200 г",
    "kcal": 140,
    "protein": 16,
    "carbs": 8,
    "fat": 4
  },
  {
    "id": "combo-индейка-с-гречкой",
    "name": "Индейка с гречкой",
    "portion": "200 г",
    "kcal": 165,
    "protein": 17,
    "carbs": 16,
    "fat": 4
  },
  {
    "id": "combo-тофу-с-рисом",
    "name": "Тофу с рисом",
    "portion": "200 г",
    "kcal": 140,
    "protein": 10,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "combo-креветки-с-гречкой",
    "name": "Креветки с гречкой",
    "portion": "200 г",
    "kcal": 150,
    "protein": 15,
    "carbs": 16,
    "fat": 3
  },
  {
    "id": "combo-стейк-с-овощами",
    "name": "Стейк с овощами",
    "portion": "200 г",
    "kcal": 200,
    "protein": 22,
    "carbs": 8,
    "fat": 9
  },
  {
    "id": "combo-котлета-с-пюре",
    "name": "Котлета с пюре",
    "portion": "200 г",
    "kcal": 210,
    "protein": 12,
    "carbs": 20,
    "fat": 10
  },
  {
    "id": "combo-пельмени-со-сметаной",
    "name": "Пельмени со сметаной",
    "portion": "200 г",
    "kcal": 240,
    "protein": 12,
    "carbs": 24,
    "fat": 11
  },
  {
    "id": "combo-блины-с-творогом",
    "name": "Блины с творогом",
    "portion": "200 г",
    "kcal": 200,
    "protein": 10,
    "carbs": 26,
    "fat": 7
  },
  {
    "id": "combo-сырники-со-сметаной",
    "name": "Сырники со сметаной",
    "portion": "200 г",
    "kcal": 220,
    "protein": 12,
    "carbs": 20,
    "fat": 10
  },
  {
    "id": "combo-шаурма-лёгкая",
    "name": "Шаурма лёгкая",
    "portion": "200 г",
    "kcal": 220,
    "protein": 16,
    "carbs": 22,
    "fat": 8
  },
  {
    "id": "combo-боул-киноа-курица",
    "name": "Боул киноа курица",
    "portion": "200 г",
    "kcal": 180,
    "protein": 16,
    "carbs": 18,
    "fat": 5
  },
  {
    "id": "combo-боул-рис-тунец",
    "name": "Боул рис тунец",
    "portion": "200 г",
    "kcal": 170,
    "protein": 18,
    "carbs": 18,
    "fat": 4
  },
  {
    "id": "potato-beef-stew-250",
    "name": "Картофель тушёный с говядиной (250 г)",
    "portion": "250 г",
    "kcal": 285,
    "protein": 15,
    "carbs": 25,
    "fat": 12
  },
  {
    "id": "potato-beef-stew-350",
    "name": "Картофель тушёный с говядиной (350 г)",
    "portion": "350 г",
    "kcal": 395,
    "protein": 21,
    "carbs": 35,
    "fat": 17
  },
  {
    "id": "buterbrod-kolbasa-syr-2",
    "name": "Бутерброд с колбасой и сыром (2 шт)",
    "portion": "2 шт",
    "kcal": 520,
    "protein": 24,
    "carbs": 40,
    "fat": 28
  },
  {
    "id": "potato-pork-stew",
    "name": "Картофель тушёный со свининой",
    "portion": "300 г",
    "kcal": 360,
    "protein": 16,
    "carbs": 32,
    "fat": 18
  },
  {
    "id": "potato-chicken-stew",
    "name": "Картофель тушёный с курицей",
    "portion": "300 г",
    "kcal": 300,
    "protein": 20,
    "carbs": 30,
    "fat": 10
  },
  {
    "id": "grechka-meat",
    "name": "Гречка с мясом",
    "portion": "300 г",
    "kcal": 310,
    "protein": 18,
    "carbs": 34,
    "fat": 12
  },
  {
    "id": "rice-pork",
    "name": "Рис со свининой",
    "portion": "300 г",
    "kcal": 340,
    "protein": 16,
    "carbs": 38,
    "fat": 14
  }
]

export type MealSlot = 'breakfast' | 'lunch' | 'dinner' | 'snack'

export const MEAL_LABELS: Record<MealSlot, string> = {
  breakfast: 'Завтрак',
  lunch: 'Обед',
  dinner: 'Ужин',
  snack: 'Перекус',
}

/** Приём пищи по локальному времени */
export function mealByTime(d = new Date()): MealSlot {
  const h = d.getHours()
  if (h >= 5 && h < 11) return 'breakfast'
  if (h >= 11 && h < 16) return 'lunch'
  if (h >= 16 && h < 21) return 'dinner'
  return 'snack'
}
