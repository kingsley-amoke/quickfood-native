export const getDishById = (itemId: number, restaurantId: number) => {
  const restaurant = getRestaurantByID(restaurantId)!;

  const meals = restaurant.food.flatMap((category) => category.meals);

  return meals.find((item) => item.id === itemId);
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
    img: require("@/assets/images/chicken-republic/chicken_republic.jpg"),
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
      "Africa's fastest growing QSR brand. Place your order for a meal, we'll deliver.",
    food: [
      {
        category: "Rice Meals",
        meals: [
          {
            id: 1,
            name: "Refuel Jollof Rice Meal",
            price: 1500,
            info: "1 piece of fried chicken with our signature jollof rice.",
            img: require("@/assets/images/chicken-republic/rice/jollof.jpg"),
          },
          {
            id: 2,
            name: "Refuel Max - Jollof Rice Meal",
            price: 2100,
            info: "1 piece of fried chicken with jollof rice and with your choice of either moin moin or sallad and a PET drink.",
            img: require("@/assets/images/chicken-republic/rice/jollof_max.jpg"),
          },
          {
            id: 3,
            name: "Refuel Fried Rice Meal",
            price: 1500,
            info: "1 piece of chicken with newly improved fried rice - now with more veggies and more flavour.",
            img: require("@/assets/images/chicken-republic/rice/fried.jpg"),
          },
          {
            id: 4,
            name: "Refuel Max - Fried Rice Meal",
            price: 2100,
            info: "1 piece of chicken with newly improved fried rice - now with more veggies and more flavour with your choice of either moin moin or sallad and a PET drink.",
            img: require("@/assets/images/chicken-republic/rice/fried-max.jpg"),
          },
          {
            id: 5,
            name: "Refuel Dodo Meal",
            price: 2100,
            info: "1 piece of chicken with fried/jollof rice and a potion of Dodo Cubes.",
            img: require("@/assets/images/chicken-republic/rice/fried-max.jpg"),
          },
          {
            id: 6,
            name: "Refuel Dodo Max Meal",
            price: 2100,
            info: "1 piece of chicken with fried/jollof rice and a potion of Dodo Cubes and a PET drink.",
            img: require("@/assets/images/chicken-republic/rice/fried-max.jpg"),
          },
          {
            id: 7,
            name: "Refuel Rice & Beans Meal",
            price: 2000,
            info: "1 piece of fried chicken with Rice & Beans with our special Rice & Beans sauce ",
            img: require("@/assets/images/chicken-republic/rice/fried-max.jpg"),
          },
          {
            id: 8,
            name: "Refuel Max - Rice & Beans Meal",
            price: 1900,
            info: "1 piece of fried chicken with Rice & Beans with sauce plus your choice of either moin moin or sallad and a PET drink.",
            img: require("@/assets/images/chicken-republic/rice/fried-max.jpg"),
          },
        ],
      },
      {
        category: "Pasta",
        meals: [
          {
            id: 1,
            name: "Refuel Spaghetti Meal",
            price: 1500,
            info: "1 piece of fried chicken with spaghetti and a FREE pepper sauce.",
            img: require("@/assets/data/5.png"),
          },
          {
            id: 2,
            name: "Refuel Max - Spaghetti Meal",
            price: 2100,
            info: "1 piece of fried chicken with spaghetti, your choice of either moin moin or sallad and a PET drink.",
            img: require("@/assets/data/6.png"),
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
    img: require("@/assets/images/item7/item7.jpg"),
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
        category: "Rice",
        meals: [
          {
            id: 1,
            name: "Rice + Chicken",
            price: 2000,
            info: "1 plate of jollof rice, fried rice, plantain, and chicken.",
            img: require("@/assets/data/beef.jpg"),
          },
          {
            id: 2,
            name: "Rice + Beef",
            price: 1000,
            info: "1 plate of jollof rice, fried rice, plantain, and beef.",
            img: require("@/assets/data/beef.jpg"),
          },
          {
            id: 3,
            name: "Rice + Fish",
            price: 1700,
            info: "1 plate of jollof rice, fried rice, plantain, and fish",
            img: require("@/assets/data/beef.jpg"),
          },
          {
            id: 4,
            name: "Rice + Crooker Fish",
            price: 2500,
            info: "1 plate of jollof rice, fried rice, plantain, and croaker fish.",
            img: require("@/assets/data/beef.jpg"),
          },
        ],

      },
      {
        category: "Shawarma",
        meals:[
          {
            id: 1,
            name: "Chicken Shawarma",
            price: 2700,
            info: "1 chicken shawarma",
            img: require("@/assets/data/beef.jpg"), 
          },
          {
            id: 2,
            name: "Beef Shawarma",
            price: 2500,
            info: "1 beef shawarma",
            img: require("@/assets/data/beef.jpg"), 
          }
        ]
      },
      {
        category: "Yoghurt",
        meals:[
          {
            id: 1,
            name: "Vanilla Yoghurt",
            price: 1200,
            info: "1 vanilla yoghurt",
            img: require("@/assets/data/beef.jpg"), 
          },
          {
            id: 2,
            name: "Banana Yoghurt",
            price: 1200,
            info: "1 banana yoghurt",
            img: require("@/assets/data/beef.jpg"), 
          },
          {
            id: 3,
            name: "Strawberry Yoghurt",
            price: 1400,
            info: "1 strawberry yoghurt",
            img: require("@/assets/data/beef.jpg"), 
          }
        ]
      },
      {
        category: "Extras",
        meals:[
          {
            id: 1,
            name: "Extra Rice",
            price: 500,
            info: "1 extra spoon of rice.",
            img: require("@/assets/data/beef.jpg"), 
          },
          {
            id: 2,
            name: "Plantain",
            price: 300,
            info: "1 extra plantain.",
            img: require("@/assets/data/beef.jpg"), 
          },
          {
            id: 3,
            name: "Extra Fish",
            price: 800,
            info: "1 extra fish.",
            img: require("@/assets/data/beef.jpg"), 
          },
          {
            id: 4,
            name: "Extra Beef",
            price: 100,
            info: "1 extra beef.",
            img: require("@/assets/data/beef.jpg"), 
          },
          {
            id: 5,
            name: "Salad",
            price: 500,
            info: "1 plate of salad.",
            img: require("@/assets/data/beef.jpg"), 
          }
        ]
      }
    ],
  },
  {
    id: 3,
    name: "Unique Kitchens",
    rating: "4.5 Excellent",
    ratings: "(500+)",
    img: require("@/assets/images/unique/unique_kitchen.jpg"),
    distance: "0.85 miles away",
    delivery: "10-20 min",
    tags: [
      "Swallows",
      "Rice",
      "Chicken",
      "Salads",
      "Native Foods",
      "Soft Drinks",
      "Wine",
      "Proteins",
    ],
    about:
      "We are Open!!!. The pleasure of variety on your plate, You will definitely love it.",
    food: [
      {
        category: "Swallow",
        meals: [
          {
            id: 1,
            name: "Egusi",
            price: 200,
            info: "Just one plate of egusi soup.",
            img: require("@/assets/images/unique/swallow/egusi.jpg"),
          },
          {
            id: 2,
            name: "Ogbono",
            price: 200,
            info: "Just one plate of ogbono soup.",
            img: require("@/assets/images/unique/swallow/ogbono.jpg"),
          },
          {
            id: 3,
            name: "Ewedu",
            price: 0,
            info: "Just your regular ewedu soup.",
            img: require("@/assets/images/unique/swallow/ewedu.jpg"),
          },
          {
            id: 4,
            name: "Gbegiri",
            price: 0,
            info: "Your yoruba draw soup.",
            img: require("@/assets/images/unique/swallow/gbegiri.jpg"),
          },
          {
            id: 5,
            name: "Okro",
            price: 0,
            info: "Your regular okro soup.",
            img: require("@/assets/images/unique/swallow/okro.jpg"),
          },
          {
            id: 6,
            name: "Eforiro",
            price: 0,
            info: "Your regular vegetable soup.",
            img: require("@/assets/images/unique/swallow/eforiro.jpg"),
          },
          {
            id: 7,
            name: "Amala",
            price: 200,
            info: "Your regular amala.",
            img: require("@/assets/images/unique/swallow/amala.jpg"),
          },
          {
            id: 8,
            name: "Semo",
            price: 200,
            info: "Your regular semo.",
            img: require("@/assets/images/unique/swallow/semo.jpg"),
          },
          {
            id: 9,
            name: "Tuwo",
            price: 200,
            info: "Your regular tuwo.",
            img: require("@/assets/images/unique/swallow/tuwo.jpg"),
          },
          {
            id: 10,
            name: "Eba",
            price: 200,
            info: "Your regular eba.",
            img: require("@/assets/images/unique/swallow/eba.jpg"),
          },
          {
            id: 11,
            name: "Fufu",
            price: 200,
            info: "Your regular fufu.",
            img: require("@/assets/images/unique/swallow/fufu.jpg"),
          },
        ],
      },
      {
        category: "Rice",
        meals: [
          {
            id: 1,
            name: "Fried Rice",
            price: 250,
            info: "Just one spoonful of fried rice.",
            img: require("@/assets/images/unique/rice/fried-rice.jpg"),
          },
          {
            id: 2,
            name: "Jollof Rice",
            price: 250,
            info: "Just one spoonful of jollof rice.",
            img: require("@/assets/images/unique/rice/jollof.jpg"),
          },
          {
            id: 3,
            name: "White Rice",
            price: 250,
            info: "Includes stew.",
            img: require("@/assets/images/unique/rice/white-rice.jpg"),
          },
        ],
      },
      {
        category: "Pasta",
        meals: [
          {
            id: 1,
            name: "Spaghetti",
            price: 300,
            info: "Just one spoonful of spaghetti.",
            img: require("@/assets/images/unique/others/pasta.jpg"),
          },
        ],
      },
      {
        category: "Yam",
        meals: [
          {
            id: 1,
            name: "Yam Portage",
            price: 250,
            info: "Your regular yam portage.",
            img: require("@/assets/images/unique/others/yam-portage.jpg"),
          },
        ],
      },
      {
        category: "Meats and Fish",
        meals: [
          {
            id: 1,
            name: "Chicken",
            price: 1500,
            info: "One chicken.",
            img: require("@/assets/images/unique/others/chicken.jpg"),
          },
          {
            id: 2,
            name: "Beef",
            price: 200,
            info: "Your regular beef.",
            img: require("@/assets/images/unique/others/beef.jpg"),
          },
          {
            id: 3,
            name: "Goat Meat",
            price: 1200,
            info: "Your regular goat meat.",
            img: require("@/assets/images/unique/others/goat-meat.jpg"),
          },
          {
            id: 4,
            name: "Bokoto",
            price: 700,
            info: "Your regular peppered cow tail.",
            img: require("@/assets/images/unique/others/bokoto.jpg"),
          },
          {
            id: 5,
            name: "Goat Intestine",
            price: 300,
            info: "Your regular goat intestine.",
            img: require("@/assets/images/unique/others/intestine.jpg"),
          },
          {
            id: 6,
            name: "Ponmo",
            price: 200,
            info: "Your regular ponmo.",
            img: require("@/assets/images/unique/others/ponmo.jpg"),
          },
          {
            id: 7,
            name: "Dry Fish",
            price: 2000,
            info: "Your regular dry fish.",
            img: require("@/assets/images/unique/others/dry-fish.jpg"),
          },
          {
            id: 8,
            name: "Titus",
            price: 500,
            info: "Your regular sliced fish.",
            img: require("@/assets/images/unique/others/titus.jpg"),
          },
          {
            id: 9,
            name: "Gizzard",
            price: 150,
            info: "Your regular chicken gizzard.",
            img: require("@/assets/images/unique/others/gizzard.jpg"),
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
    img: require("@/assets/images/captain-cook/captain_cook.png"),
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
            img: require("@/assets/data/beef.jpg"),
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
            img: require("@/assets/data/beef.jpg"),
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
            img: require("@/assets/data/beef.jpg"),
          },
        ],
      },
    ],
  },
];
