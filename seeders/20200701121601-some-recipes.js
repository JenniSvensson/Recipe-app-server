"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "recipes",
      [
        {
          name: "Mushroom pasta",
          imageUrl:
            "https://cdn-rdb.arla.com/Files/arla-se/3942640564/2a5f61bc-2944-446c-85d0-c97e94f309ac.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
          instructions: "1.boil water 2.cook pasta 3.fry mushrooms",
          preperationTime: 60,
          flavourProfile: "salty",
          dishType: "Dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mudcake",
          imageUrl:
            "https://cdn-rdb.arla.com/Files/arla-se/2806554286/75c9f5fb-375f-41b8-8c89-e7cbfb9c0278.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
          instructions:
            "1.bring all the ing togheter 2. cook for 15 min in oven 3.serve with wippedcream",
          preperationTime: 30,
          flavourProfile: "sweet",
          dishType: "Dessert",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("recipes", null, {});
  },
};
