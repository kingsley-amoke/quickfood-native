export const getDishById = (id: number) => {
  const meals = restaurants.map((restaurant) => {
    const category = restaurant.food.flatMap((category) => category.meals);
    return category[0];
  });
  return meals.find((meal) => meal.id === id);
};

export const getRestaurantByID = (id: number) => {
  return restaurants.find((restaurant) => restaurant.id === id);
};

export const restaurants = [
  {
    id: 1,
    name: "Chicken Republic",
    rating: "4.5 Excellent",
    ratings: "(500+)",
    img: require("@/assets/images/chicken-republic.jpg"),
    distance: "0.85 miles away",
    delivery: "10-20 min",
    tags: [
      "Italian",
      "Pizza",
      "Pasta",
      "Salads",
      "Vegetarian",
      "Alcohol",
      "Wine",
      "Vegan Friendly",
    ],
    about:
      "The home of handmade fresh pasta, thin crust pizza, protein packed salads, homemade sauces and dressings too. Choose your pasta shape and add any extras you like.",
    food: [
      {
        category: "Meal Deals",
        meals: [
          {
            id: 1,
            name: "Pasta Power ✊",
            price: 17,
            info: "Includes one garlic bread, one pasta and one soft drink.",
            img: require("@/assets/data/1.png"),
          },
          {
            id: 2,
            name: "Vegetariano 💚",
            price: 17,
            info: "Includes one garlic bread, one vegetarian pasta and one soft drink",
            img: require("@/assets/data/2.png"),
          },
          {
            id: 3,
            name: "Vaps Date 💕",
            price: 40,
            info: "Includes one garlic bread with or without cheese, choice of two pizzas, one bottle of wine or four bottles of Moretti",
            img: require("@/assets/data/3.png"),
          },
          {
            id: 4,
            name: "Livin' your best life 😎",
            price: 80,
            info: "Includes two garlic breads with or without cheese, four pizzas, two bottles of wine or eight bottles of beer or a mix of both",
            img: require("@/assets/data/4.png"),
          },
        ],
      },
      {
        category: "Pasta",
        meals: [
          {
            id: 5,
            name: "Arrabbiata",
            price: 9.35,
            info: "Tomato sauce, chilli, garlic, and onions",
            img: require("@/assets/data/5.png"),
          },
          {
            id: 6,
            name: "Pomodoro e Mozzarella",
            price: 10.75,
            info: "Tomato sauce, onions, mozzarella",
            img: require("@/assets/data/6.png"),
          },
        ],
      },
      {
        category: "Pizza",
        meals: [
          {
            id: 7,
            name: "Salame",
            price: 11.35,
            info: "Spicy Italian sausage, tomato sauce, mozzarella",
            img: require("@/assets/data/7.png"),
          },
          {
            id: 8,
            name: "Margherity",
            price: 9.75,
            info: "Tomato sauce, mozzarella",
            img: require("@/assets/data/8.png"),
          },
        ],
      },
      {
        category: "Salad",
        meals: [
          {
            id: 9,
            name: "Insalata Mista Piccola",
            price: 5.99,
            info: "Mixed leaf salad, cherry tomatoes and grated carrot. There can be no swaps, if you would like to add any extras please customise below.",
            img: require("@/assets/data/9.png"),
          },
          {
            id: 10,
            name: "Insalata Mista della Casa",
            price: 8.95,
            info: "Large mixed salad. There can be no swaps, if you would like to add any extras please customise below.",
            img: require("@/assets/data/10.png"),
          },
        ],
      },
      {
        category: "Meal Deals",
        meals: [
          {
            id: 1,
            name: "Pasta Power ✊",
            price: 17,
            info: "Includes one garlic bread, one pasta and one soft drink.",
            img: require("@/assets/data/1.png"),
          },
          {
            id: 2,
            name: "Vegetariano 💚",
            price: 17,
            info: "Includes one garlic bread, one vegetarian pasta and one soft drink",
            img: require("@/assets/data/2.png"),
          },
          {
            id: 3,
            name: "Vaps Date 💕",
            price: 40,
            info: "Includes one garlic bread with or without cheese, choice of two pizzas, one bottle of wine or four bottles of Moretti",
            img: require("@/assets/data/3.png"),
          },
          {
            id: 4,
            name: "Livin' your best life 😎",
            price: 80,
            info: "Includes two garlic breads with or without cheese, four pizzas, two bottles of wine or eight bottles of beer or a mix of both",
            img: require("@/assets/data/4.png"),
          },
        ],
      },
      {
        category: "Pasta",
        meals: [
          {
            id: 5,
            name: "Arrabbiata",
            price: 9.35,
            info: "Tomato sauce, chilli, garlic, and onions",
            img: require("@/assets/data/5.png"),
          },
          {
            id: 6,
            name: "Pomodoro e Mozzarella",
            price: 10.75,
            info: "Tomato sauce, onions, mozzarella",
            img: require("@/assets/data/6.png"),
          },
        ],
      },
      {
        category: "Pizza",
        meals: [
          {
            id: 7,
            name: "Salame",
            price: 11.35,
            info: "Spicy Italian sausage, tomato sauce, mozzarella",
            img: require("@/assets/data/7.png"),
          },
          {
            id: 8,
            name: "Margherity",
            price: 9.75,
            info: "Tomato sauce, mozzarella",
            img: require("@/assets/data/8.png"),
          },
        ],
      },
      {
        category: "Salad",
        meals: [
          {
            id: 9,
            name: "Insalata Mista Piccola",
            price: 5.99,
            info: "Mixed leaf salad, cherry tomatoes and grated carrot. There can be no swaps, if you would like to add any extras please customise below.",
            img: require("@/assets/data/9.png"),
          },
          {
            id: 10,
            name: "Insalata Mista della Casa",
            price: 8.95,
            info: "Large mixed salad. There can be no swaps, if you would like to add any extras please customise below.",
            img: require("@/assets/data/10.png"),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Item 7",
    rating: "4.5 Excellent",
    ratings: "(500+)",
    img: require("@/assets/images/item7.jpg"),
    distance: "0.85 miles away",
    delivery: "10-20 min",
    tags: [
      "Italian",
      "Pizza",
      "Pasta",
      "Salads",
      "Vegetarian",
      "Alcohol",
      "Wine",
      "Vegan Friendly",
    ],
    about:
      "The home of handmade fresh pasta, thin crust pizza, protein packed salads, homemade sauces and dressings too. Choose your pasta shape and add any extras you like.",
    food: [
      {
        category: "",
        meals: [
          {
            id: 1,
            name: "Pasta Power ✊",
            price: 17,
            info: "Includes one garlic bread, one pasta and one soft drink.",
            img: require("@/assets/data/1.png"),
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Unique Kitchens",
    rating: "4.5 Excellent",
    ratings: "(500+)",
    img: require("@/assets/data/r1.jpeg"),
    distance: "0.85 miles away",
    delivery: "10-20 min",
    tags: [
      "Italian",
      "Pizza",
      "Pasta",
      "Salads",
      "Vegetarian",
      "Alcohol",
      "Wine",
      "Vegan Friendly",
    ],
    about:
      "The home of handmade fresh pasta, thin crust pizza, protein packed salads, homemade sauces and dressings too. Choose your pasta shape and add any extras you like.",
    food: [
      {
        category: "Swallow",
        meals: [
          {
            id: 1,
            name: "Amala + Ewedu ✊",
            price: 1300,
            info: "Includes one garlic bread, one pasta and one soft drink.",
            img: require("@/assets/data/1.png"),
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Captain Cook",
    rating: "4.5 Excellent",
    ratings: "(500+)",
    img: require("@/assets/images/captain-cook.jpg"),
    distance: "0.85 miles away",
    delivery: "10-20 min",
    tags: [
      "Italian",
      "Pizza",
      "Pasta",
      "Salads",
      "Vegetarian",
      "Alcohol",
      "Wine",
      "Vegan Friendly",
    ],
    about:
      "The home of handmade fresh pasta, thin crust pizza, protein packed salads, homemade sauces and dressings too. Choose your pasta shape and add any extras you like.",
    food: [
      {
        category: "",
        meals: [
          {
            id: 1,
            name: "Pasta Power ✊",
            price: 17,
            info: "Includes one garlic bread, one pasta and one soft drink.",
            img: require("@/assets/data/1.png"),
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Biggie Shawarma",
    rating: "4.5 Excellent",
    ratings: "(500+)",
    img: require("@/assets/data/r1.jpeg"),
    distance: "0.85 miles away",
    delivery: "10-20 min",
    tags: [
      "Italian",
      "Pizza",
      "Pasta",
      "Salads",
      "Vegetarian",
      "Alcohol",
      "Wine",
      "Vegan Friendly",
    ],
    about:
      "The home of handmade fresh pasta, thin crust pizza, protein packed salads, homemade sauces and dressings too. Choose your pasta shape and add any extras you like.",
    food: [
      {
        category: "",
        meals: [
          {
            id: 1,
            name: "Pasta Power ✊",
            price: 17,
            info: "Includes one garlic bread, one pasta and one soft drink.",
            img: require("@/assets/data/1.png"),
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Daily Taste",
    rating: "4.5 Excellent",
    ratings: "(500+)",
    img: require("@/assets/data/r1.jpeg"),
    distance: "0.85 miles away",
    delivery: "10-20 min",
    tags: [
      "Italian",
      "Pizza",
      "Pasta",
      "Salads",
      "Vegetarian",
      "Alcohol",
      "Wine",
      "Vegan Friendly",
    ],
    about:
      "The home of handmade fresh pasta, thin crust pizza, protein packed salads, homemade sauces and dressings too. Choose your pasta shape and add any extras you like.",
    food: [
      {
        category: "",
        meals: [
          {
            id: 1,
            name: "Pasta Power ✊",
            price: 17,
            info: "Includes one garlic bread, one pasta and one soft drink.",
            img: require("@/assets/data/1.png"),
          },
        ],
      },
    ],
  },
];
