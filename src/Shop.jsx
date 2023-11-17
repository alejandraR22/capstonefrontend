import React, { useState } from 'react';
import AddToCart from './AddToCart';
import './Shop.css';

function Shop() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  const items = {
    en: {
      Cooking: [
        {
          name: 'Molcajete',
          description: 'Traditional Mexican Mortar and Pestle',
          price: '$29.99',
          image: require('./images/molcajete.jpeg'),

        },
        {
          name: 'Jarritos Mexcian Mug',
          description: 'Drink coffee or soda in jarrito ',
          price: '$15.99',
          image: require('./images/jarritosmug.jpeg'),
        },
      ],
      Candy: [
        {
          name: 'Dulce de Leche Paleta',
          description: 'Sweet Milk Lollipops',
          price: '$5.99',
          image: require('./images/dulce-de-leche.jpeg'),
        },
        {
          name: 'Chili Mango Candy',
          description: 'Spicy Mango Flavored Candy',
          price: '$8.99',
          image: require('./images/chili-mango-candy.jpeg'),
        },
      ],
      Merch: [
        {
          name: 'Mexican Flag T-Shirt',
          description: 'Show your Mexican pride!',
          price: '$19.99',
          image: require('./images/mexican-flag-tshirt.jpeg'),
        },
        {
          name: 'Hoodie Virgen Mary',
          description: 'Classic virgen mary hoodie good for the fall/winter',
          price: '$24.99',
          image: require('./images/mexicanhoodie.jpeg'),
        },
      ],
      Drinks: [
        {
          name: 'Agua Fresca',
          description: 'Refreshing Fruit Water',
          price: '$3.99',
          image: require('./images/agua-fresca.jpeg'),
        },
        {
          name: 'Tequila Sunrise',
          description: 'Classic Tequila Cocktail',
          price: '$7.99',
          image: require('./images/tequila-sunrise.jpeg'),
        },
      ],
    },
    es: {
      Cocina: [
        {
          name: 'Molcajete',
          description: 'Mortero y Mano Tradicional Mexicano',
          price: '$29.99',
          image: require('./images/molcajete.jpeg'),
        },
        {
          name: 'Jarritos Mexcian Mug',
          description: 'Toma café o soda en jarrito',
          price: '$15.99',
          image: require('./images/jarritosmug.jpeg'),
        },
      ],
      Dulces: [
        {
          name: 'Dulce de Leche',
          description: 'Caramelo de Leche Dulce',
          price: '$5.99',
          image: require('./images/dulce-de-leche.jpeg'),
        },
        {
          name: 'Chili Mango Candy',
          description: 'Caramelo picante con sabor a mango',
          price: '$8.99',
          image: require('./images/chili-mango-candy.jpeg'),
        },
      ],
      Mercancia: [
        {
          name: 'Camiseta de la Bandera Mexicana',
          description: '¡Muestra tu orgullo mexicano!',
          price: '$19.99',
          image: require('./images/mexican-flag-tshirt.jpeg'),
        },
        {
          name: 'Hoodie Virgen Mary',
          description: 'Hoodie clásico de la virgen María, ideal para otoño/invierno',
          price: '$24.99',
          image: require('./images/mexicanhoodie.jpeg'),
        },
      ],
      Bebidas: [
        {
          name: 'Agua Fresca',
          description: 'Refrescante Agua de Frutas',
          price: '$3.99',
          image: require('./images/agua-fresca.jpeg'),
        },
        {
          name: 'Tequila Sunrise',
          description: 'Cóctel Clásico de Tequila',
          price: '$7.99',
          image: require('./images/tequila-sunrise.jpeg'),
        },
      ],
    },
  };

  const currentItems = items[language];


  return (
    <div className="shop-wrapper">
      <div className="shop-container">
        <h1>Mexican Shop</h1>
        <button className="toggle-button" onClick={toggleLanguage}>
          Translate to {language === 'en' ? 'Spanish' : 'English'}
        </button>
        {Object.keys(currentItems).map((category) => (
          <div key={category} className="item-category">
            <h2>{category}</h2>
            <div className="item-list">
              {currentItems[category].map((item, index) => (
  <div key={index} className="item">
    <h3>{item.name}</h3>
    <img src={item.image} alt={item.name} />
    <p>{item.description}</p>
    <p>{item.price}</p>
    <AddToCart product={item} />
  </div>
))}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
