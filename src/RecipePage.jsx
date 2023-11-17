import React from 'react';

const RecipePage = () => {
  const recipesData = [
    {
      category: 'Appetizers',
      recipes: [
        { name: 'Guacamole', image: require('./images/guamolecopy.jpg'), recipe: 'To make classic Guacamole, start by mashing 3 ripe avocados in a bowl. Add 1 finely chopped onion, 1 diced tomato, 1/4 cup of chopped fresh cilantro, 2 minced garlic cloves, the juice of 1 lime, and salt and pepper to taste. Mix everything together until well combined. For extra flavor, you can add a pinch of cayenne pepper or a finely chopped jalapeño for some heat. Adjust the seasoning to your liking. Serve the guacamole with tortilla chips or as a delicious topping for tacos, nachos, or burritos.' },
        { name: 'Ceviche', image: require('./images/ceviche.jpeg'), recipe: 'To make Ceviche, start by combining diced white fish or shrimp with diced tomatoes, red onions, jalapeños, and fresh cilantro in a bowl. Squeeze the juice of several limes over the mixture, ensuring the seafood is fully covered. Add salt and pepper to taste and let the ceviche marinate in the refrigerator for at least 30 minutes or until the seafood turns opaque. The acidity of the lime juice "cooks" the seafood. Serve the ceviche chilled, garnished with additional cilantro. It\'s a refreshing and tangy dish that\'s perfect for warm days!' },
        { name: 'Quesadillas', image: require('./images/quesadilla.jpeg'), recipe: 'To make Quesadillas, start by heating a skillet over medium heat. Place a flour tortilla in the skillet and sprinkle shredded cheese (cheddar, Monterey Jack, or a blend) over one half of the tortilla. Add your favorite fillings such as cooked chicken, sautéed vegetables, or black beans. Fold the other half of the tortilla over the fillings, creating a half-moon shape. Press down with a spatula and cook until the bottom is golden brown. Flip the quesadilla and cook the other side until crispy and the cheese is melted. Repeat with additional tortillas and fillings. Cut into wedges and serve with salsa, guacamole, and sour cream.' },
      ],
    },
    {
      category: 'Main Courses',
      recipes: [
        { name: 'Enchiladas', image: require('./images/enchiladas.jpeg'), recipe: 'To make Enchiladas, start by preparing the filling. In a skillet, cook 1 pound of ground beef or chicken until browned. Add 1 finely chopped onion, 1 minced garlic clove, 1 can of black beans (drained and rinsed), 1 cup of corn kernels, 1 teaspoon of ground cumin, and salt and pepper to taste. Cook until the vegetables are tender. Warm 8-10 corn tortillas and fill each with a portion of the filling. Roll them up and place them seam-side down in a baking dish. Pour your favorite enchilada sauce over the top, sprinkle with shredded cheese, and bake in the oven until the cheese is melted and bubbly. Garnish with chopped fresh cilantro and serve with sour cream or guacamole.' },
        { name: 'Tamales', image: require('./images/tamale.jpeg'), recipe: 'To make delicious tamales, start by preparing the flavorful filling. Combine 2 cups of shredded cooked pork (or chicken) with 1 cup of red or green salsa, 1 teaspoon each of ground cumin and chili powder, and season with salt and pepper to taste. Mix well and set aside. For the masa (dough), in a large bowl, blend 2 cups of masa harina with 1 teaspoon of baking powder and 1/2 teaspoon of salt. Warm 1 1/3 cups of chicken broth and gradually add it to the masa mixture, stirring constantly. Incorporate 2/3 cup of lard or vegetable shortening until achieving a smooth, spreadable consistency. To assemble, take soaked corn husks and spread a thin layer of masa dough in the center, leaving space around the edges. Spoon a portion of the prepared filling onto the masa. Fold the sides of the corn husk over the filling and fold up the bottom, tying the tamale with a strip of soaked corn husk. Repeat for the remaining tamales. Steam the tamales over boiling water for 1 to 1.5 hours or until the masa is firm. Allow them to cool slightly before serving. Enjoy your homemade tamales with additional salsa or your favorite toppings.' },
        { name: 'Tacos de Pastor', image: require('./images/tacos-al-pastor.jpg'), recipe: 'To make delicious Tacos de Pastor, start by marinating thinly sliced pork shoulder with sliced onion, minced garlic, ground cumin, paprika, oregano, salt, pepper, and a touch of white vinegar. Cook the marinated pork in a skillet until browned. Warm corn tortillas and fill them with the flavorful pork. Top with fresh cilantro, diced pineapple, and your favorite salsa. Squeeze a bit of lime juice for an extra kick. Enjoy these tasty tacos with authentic Mexican flavors!' },
      ],
    },
    {
      category: 'Desserts',
      recipes: [
        { name: 'Flan', image: require('./images/flan.jpeg'), recipe: 'To make Flan, create a caramel sauce by melting sugar, then pour it into a baking dish. Blend eggs, condensed milk, evaporated milk, and vanilla, then pour over the caramel. Bake until set and refrigerate before serving this creamy caramel-flavored dessert.' },
        { name: 'Tres Leches Cake', image: require('./images/tres-leches-cake.jpeg'), recipe: 'Make Tres Leches Cake by baking a sponge cake and soaking it in a mixture of evaporated milk, condensed milk, and heavy cream. Top with whipped cream and enjoy this moist and decadent dessert.' },
      ],
    },
    {
      category: 'Drinks',
      recipes: [
        { name: 'Horchata', image: require('./images/horchata.jpeg'), recipe: 'Amazingly refreshing homemade Horchata! This popular Mexican drink is flavored with rice, cinnamon, vanilla, and almonds, and it\'s so easy to make. Just blend everything in a blender, let it soak, then strain and serve! Yields about 6 cups.' },
        { name: 'Margarita', image: require('./images/margartiascopy.jpg'), recipe: 'To make a classic Margarita, start by moistening the rim of a glass with a lime wedge and dip it into salt to coat the rim. Fill the glass with ice. In a shaker, combine 2 oz of tequila, 1 oz of triple sec, and the juice of 1-2 limes, depending on your preference for tartness. Add simple syrup to taste if you like it sweeter. Shake well and strain the mixture into the prepared glass. Garnish with a lime wedge. Enjoy your refreshing Margarita!' },
      ],
    },
  ];

  return (
    <div>
      <h2>Recipes</h2>
      {recipesData.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {category.recipes.map((recipe, recipeIndex) => (
              <div
                key={recipeIndex}
                style={{
                  border: '1px solid #ccc',
                  margin: '10px',
                  padding: '10px',
                  width: '300px',
                }}
              >
                <h4>{recipe.name}</h4>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <p>{recipe.recipe}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipePage;









