"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "recipes",
      [
        {
          name: "Korean beef lettuce cups",
          imageUrl:
            "https://img.delicious.com.au/M_NTeRz9/w759-h506-cfill/del/2015/10/korean-beef-lettuce-cups-14732-1.jpg",
          instructions:
            "1. Freeze steak for 15 minutes (this will make it easier to slice thinly), then cut into thin strips. Using a rolling pin, flatten each strip to 2mm thick. 2. Combine onion, garlic, soy, sesame oil, ginger and sugar in a bowl. Add beef, turn to coat, then marinate in pan in the fridge for 1 hour. 3. Preheat barbecue or chargrill to high. Cook beef, in batches if necessary, for 10 seconds each side until just cooked.  4. Divide rice among lettuce cups, top with slices of beef and scatter with spring onion and chilli. Drizzle over beef cooking juices to serve.",
          preperationTime: 120,
          flavourProfile: "savoury",
          dishType: "dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Spicy tomato soup",
          imageUrl:
            "https://img.delicious.com.au/lSoSo3hu/w759-h506-cfill/del/2015/10/spicy-tomato-soup-16089-2.jpg",
          instructions:
            "1. Heat the oil in a large heavy-based saucepan over medium-low heat. Add the onion and cook, stirring, for 3-4 minutes or until the onion is soft. Add the garlic, chilli, spices and tomato paste, and stir for a further minute. 2. Add tomatoes, lentils and stock, and bring to the boil over high heat. Reduce heat to low, partially cover, and simmer for 20 minutes. Set aside to cool slightly. 3. Puree the soup in a blender, in batches, until smooth (add 1/2 cup (125ml) water if soup is too thick). Return to the saucepan and season with sea salt and freshly ground black pepper. Place over medium heat and stir until warmed through. 4. Ladle soup among serving bowls and swirl in a spoonful of yoghurt to serve.",
          preperationTime: 30,
          flavourProfile: "spicy",
          dishType: "lunch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baked pasta with cherry tomato sauce and ricotta",
          imageUrl:
            "https://img.delicious.com.au/DD67vTQC/w759-h506-cfill/del/2020/03/baked-pasta-with-cherry-tomato-sauce-and-ricotta-128673-1.jpg",
          instructions:
            "1. Preheat oven to 200°C. 2. Meanwhile, bring a large saucepan three-quarters full of salted water to the boil. Add the pasta shells and cook for 7-8 minutes until almost tender, then drain. Arrange shells in a large, 3L-capacity ovenproof dish. Spoon over as much of the sauce as you’d like and scatter over ricotta and parmesan. Season to taste. Bake on the bottom shelf of the oven for 25-30 minutes until top is golden. Store remaining sauce in airtight containers in the fridge. 3. Place cherry tomatoes on an oven tray, drizzle with olive oil and season to taste. Roast on the top shelf of the oven for 12-15 minutes until blistered. Remove from oven and stand until ready to use. 4. Scatter baked pasta with lemon zest, extra ricotta and parmesan, basil leaves and roasted cherry tomatoes to serve.",
          preperationTime: 35,
          flavourProfile: "savoury",
          dishType: "dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "salty lemon squares",
          imageUrl:
            "https://img.delicious.com.au/Ji1L1-vY/w759-h506-cfill/del/2019/09/salty-lemon-squares-115513-2.jpg",
          instructions:
            "1. Heat the oven to 180°C/350°F/gas 4, with a rack in the middle. Line an 20cm (5in) square baking tin with two sheets of foil, shiny-side up, crisscrossing them to leave an overhang on all sides. Lightly spray with non-stick cooking spray or grease with butter. 2. For the crust: In a large bowl, whisk together the flour, sugar and salt. Add the cooled melted butter and stir to combine. Turn the mixture out into the baking tin and press evenly over the bottom. Bake until the edges are just beginning to brown, 18 to 22 minutes. 3. Meanwhile, make the filling: With an electric mixer, beat the eggs in a medium bowl until combined. Add the granulated sugar, baking powder, lemon zest and lemon juice and beat on medium-high until the mixture is frothy, 2 to 3 minutes. 4. Pour the filling into the hot crust. Return the tin to the oven and bake until the filling is just set, 22 to 25 minutes. Let cool completely in the tin on a wire rack, at least 1 ½ hours. For the best flavour and easiest cutting, chill in the fridge for at least 4 hours, or up to 1 day. (The bars can be covered and kept in the fridge for up to 3 days or frozen for up to 1 month. Thaw, unwrapped, for 1 hour at room temperature before serving.)  5. To serve, cut the bars into Scm (2in) squares, then dust with icing sugar and sprinkle with flaky salt.",
          preperationTime: 30,
          flavourProfile: "salty",
          dishType: "dessert",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "breakfast smoothie",
          imageUrl:
            "https://img.delicious.com.au/A-hwjcb9/w759-h506-cfill/del/2020/04/cleansing-breakfast-smoothie-129866-1.jpg",
          instructions:
            "1. Place all of the ingredients in a blender and blend until smooth. 2. Pour into a glass and serve.",
          preperationTime: 30,
          flavourProfile: "sweet",
          dishType: "breakfast",
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
