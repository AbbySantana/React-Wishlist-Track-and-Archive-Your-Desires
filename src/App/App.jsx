import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies

import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';

const initialWishes = [
  { done: false, text: 'Travel to the moon' },
  { done: true, text: 'Make an intro course to React' },
  { done: true, text: 'Pay the gym' },
  { done: false, text: 'Go to the gym' },

];

// eslint-disable-next-line react/function-component-definition
const App = () => {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <h1>My Wishlist</h1>
      <WishInput onNewWish={(wish) => setWishes([wish, ...wishes])} />
      <WishList wishes={wishes} onWishesChange={setWishes} />
      <button
        className="wish-clear"
        type="button"
        // eslint-disable-next-line arrow-parens
        onClick={() => setWishes(wishes.filter(wish => !wish.done))}
      >
        Archive done
      </button>
    </div>
  );
};

export default App;
