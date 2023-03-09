import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import './App.css';

const wishes = [
  { done: false, text: 'Travel to the moon' },
  { done: true, text: 'Make an intro course to React' },
  { done: true, text: 'Pay the gym' },
  { done: false, text: 'Go to the gym' },

];

function App() {
  return (
    <div className="App">
      <h1>My wishlist</h1>
      <fieldset className="wish-input">
        <legend className="wish-input__label">New wish</legend>
        <input className="wish-input_field" placeholder="Enter your wish here" />
      </fieldset>
      <ul className="wish-list">
        {wishes.map(({ text, done }, i) => (
          <li
            key={text}
            className={classNames(
              'wish-list__item',
              { 'wish-list__item--done': done },
            )}
          >
            <input id={`wish${i}`} type="checkbox" checked={done} />
            <label htmlFor={`wish${i}`}>{text}</label>
          </li>
        ))}
      </ul>
      <button className="wish-clear" type="button">Archive done</button>
    </div>
  );
}

export default App;
