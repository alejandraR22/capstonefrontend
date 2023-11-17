import React, { useState } from 'react';
import './RecipeSection.css';
import tamaleImage from './images/tamale.jpeg';
import horchataImage from './images/horchata.jpeg';
import tacosAlPastorImage from './images/tacos-al-pastor.jpg';
import albongiasImage from './images/albongias.jpeg';
import guacamoleImage from './images/guamolecopy.jpg';
import enchiladasImage from './images/enchiladas.jpeg';
import quesadillaImage from './images/quesadilla.jpeg';
import cevicheImage from './images/ceviche.jpeg';
import margaritaImage from './images/margartiascopy.jpg';

const RecipeSection = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      name: 'Tamales',
      image: tamaleImage,
      recipe: `To make delicious tamales, start by preparing the flavorful filling. Combine 2 cups of shredded cooked pork (or chicken) with 1 cup of red or green salsa, 1 teaspoon each of ground cumin and chili powder, and season with salt and pepper to taste. Mix well and set aside.

For the masa (dough), in a large bowl, blend 2 cups of masa harina with 1 teaspoon of baking powder and 1/2 teaspoon of salt. Warm 1 1/3 cups of chicken broth and gradually add it to the masa mixture, stirring constantly. Incorporate 2/3 cup of lard or vegetable shortening until achieving a smooth, spreadable consistency.

To assemble, take soaked corn husks and spread a thin layer of masa dough in the center, leaving space around the edges. Spoon a portion of the prepared filling onto the masa. Fold the sides of the corn husk over the filling and fold up the bottom, tying the tamale with a strip of soaked corn husk. Repeat for the remaining tamales.

Steam the tamales over boiling water for 1 to 1.5 hours or until the masa is firm. Allow them to cool slightly before serving. Enjoy your homemade tamales with additional salsa or your favorite toppings.`,
      category: 'Main Courses',
    },
    { name: 'Horchata', image: horchataImage, recipe: 'Amazingly refreshing homemade Horchata! This popular Mexican drink is flavored with rice, cinnamon, vanilla, and almonds, and it\'s so easy to make. Just blend everything in a blender, let it soak, then strain and serve! Yields about 6 cups.', category: 'Drinks' },
    {
      name: 'Tacos de Pastor',
      image: tacosAlPastorImage,
      recipe: 'To make delicious Tacos de Pastor, start by marinating thinly sliced pork shoulder with sliced onion, minced garlic, ground cumin, paprika, oregano, salt, pepper, and a touch of white vinegar. Cook the marinated pork in a skillet until browned. Warm corn tortillas and fill them with the flavorful pork. Top with fresh cilantro, diced pineapple, and your favorite salsa. Squeeze a bit of lime juice for an extra kick. Enjoy these tasty tacos with authentic Mexican flavors!',
      category: 'Main Courses',
    },
    {
      name: 'Albondigas',
      image: albongiasImage,
      recipe: `To make Albondigas, start by preparing the meatballs. In a bowl, combine 1 pound of ground beef, 1/2 cup of cooked rice, 1/4 cup of finely chopped onion, 1/4 cup of finely chopped cilantro, 1 beaten egg, and salt and pepper to taste. Mix until well combined and form into meatballs.
For the soup, heat olive oil in a large pot and sauté 1/2 cup of chopped onion and 2 minced garlic cloves until softened. Add 6 cups of beef or vegetable broth, 1 can of diced tomatoes, 2 diced carrots, 2 diced potatoes, and 1/2 cup of frozen peas. Season with salt, pepper, and 1 teaspoon of dried oregano. Bring to a boil, then reduce heat and simmer until the vegetables are tender.
Gently add the meatballs to the soup and simmer until cooked through. Serve hot, garnished with chopped fresh cilantro.`,
      category: 'Main Courses',
    },
    {
      name: 'Guacamole',
      image: guacamoleImage,
      recipe: `To make classic Guacamole, start by mashing 3 ripe avocados in a bowl. Add 1 finely chopped onion, 1 diced tomato, 1/4 cup of chopped fresh cilantro, 2 minced garlic cloves, the juice of 1 lime, and salt and pepper to taste. Mix everything together until well combined.
For extra flavor, you can add a pinch of cayenne pepper or a finely chopped jalapeño for some heat. Adjust the seasoning to your liking. Serve the guacamole with tortilla chips or as a delicious topping for tacos, nachos, or burritos.`,
      category: 'Appetizers',
    },
    {
      name: 'Enchiladas',
      image: enchiladasImage,
      recipe: `To make Enchiladas, start by preparing the filling. In a skillet, cook 1 pound of ground beef or chicken until browned. Add 1 finely chopped onion, 1 minced garlic clove, 1 can of black beans (drained and rinsed), 1 cup of corn kernels, 1 teaspoon of ground cumin, and salt and pepper to taste. Cook until the vegetables are tender.
Warm 8-10 corn tortillas and fill each with a portion of the filling. Roll them up and place them seam-side down in a baking dish. Pour your favorite enchilada sauce over the top, sprinkle with shredded cheese, and bake in the oven until the cheese is melted and bubbly.
Garnish with chopped fresh cilantro and serve with sour cream or guacamole.`,
      category: 'Main Courses',
    },
    {
      name: 'Quesadillas',
      image: quesadillaImage,
      recipe: `To make Quesadillas, start by heating a skillet over medium heat. Place a flour tortilla in the skillet and sprinkle shredded cheese (cheddar, Monterey Jack, or a blend) over one half of the tortilla. Add your favorite fillings such as cooked chicken, sautéed vegetables, or black beans.
Fold the other half of the tortilla over the fillings, creating a half-moon shape. Press down with a spatula and cook until the bottom is golden brown. Flip the quesadilla and cook the other side until crispy and the cheese is melted.
Repeat with additional tortillas and fillings. Cut into wedges and serve with salsa, guacamole, and sour cream.`,
      category: 'Appetizers',
    },
    {
      name: 'Ceviche',
      image: cevicheImage,
      recipe: `To make Ceviche, start by combining diced white fish or shrimp with diced tomatoes, red onions, jalapeños, and fresh cilantro in a bowl. Squeeze the juice of several limes over the mixture, ensuring the seafood is fully covered.
Add salt and pepper to taste and let the ceviche marinate in the refrigerator for at least 30 minutes or until the seafood turns opaque. The acidity of the lime juice "cooks" the seafood.
Serve the ceviche chilled, garnished with additional cilantro. It's a refreshing and tangy dish that's perfect for warm days!`,
      category: 'Appetizers',
    },
    {
      name: 'Margarita',
      image: margaritaImage,
      recipe: `To make a classic Margarita, start by moistening the rim of a glass with a lime wedge and dip it into salt to coat the rim. Fill the glass with ice.
In a shaker, combine 2 oz of tequila, 1 oz of triple sec, and the juice of 1-2 limes, depending on your preference for tartness. Add simple syrup to taste if you like it sweeter.
Shake well and strain the mixture into the prepared glass. Garnish with a lime wedge. Enjoy your refreshing Margarita!`,
      category: 'Drinks',
    },
  ];

  const handleRecipeClick = (index) => {
    setSelectedRecipe(recipes[index]);
  };

  const categories = ['Appetizers', 'Main Courses', 'Drinks'];

  const latestRecipes = recipes.slice(0, 3);

  return (
    <div className="recipe-section">

      {categories.map((category, index) => (
        <div key={index} className="recipe-category">
          <h2>{category}</h2>
          <div className="recipe-category-cards">
            {recipes.map((recipe, recipeIndex) => (
              recipe.category === category && (
                <div key={recipeIndex} className="recipe-card" onClick={() => handleRecipeClick(recipeIndex)}>
                  <img src={recipe.image} alt={recipe.name} />
                  <p>{recipe.name}</p>
                </div>
              )
            ))}
          </div>
        </div>
      ))}

      <div className="latest-additions">
        <h2>Latest Additions</h2>
        {latestRecipes.map((recipe, index) => (
          <div key={index} className="recipe-card" onClick={() => handleRecipeClick(index)}>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.name}</p>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="recipe-details">
          <h2>{selectedRecipe.name}</h2>
          <img src={selectedRecipe.image} alt={selectedRecipe.name} />
          <p>{selectedRecipe.recipe}</p>
          <button onClick={() => setSelectedRecipe(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default RecipeSection;


