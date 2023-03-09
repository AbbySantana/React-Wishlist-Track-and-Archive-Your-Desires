import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies

import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';

const wishes = [
  { done: false, text: 'Travel to the moon' },
  { done: true, text: 'Make an intro course to React' },
  { done: true, text: 'Pay the gym' },
  { done: false, text: 'Go to the gym' },

];

// eslint-disable-next-line react/function-component-definition
const App = () => (
  <div className="app">
    <h1>My wishlist</h1>
    <WishInput />
    <WishList wishes={wishes} />
    <button className="wish-clear" type="button">
      Archive done
    </button>
  </div>
);

export default App;
