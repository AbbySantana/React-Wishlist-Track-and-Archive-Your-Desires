import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

// eslint-disable-next-line react/function-component-definition, react/prop-types
const WishInput = ({ onNewWish }) => {
  const [newWishtext, setNewWishText] = useState('');
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input
        className="wish-input_field"
        placeholder="Enter your wish here"
        value={newWishtext}
        onChange={(e) => setNewWishText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && newWishtext.length) {
            onNewWish({ done: false, text: newWishtext });
            setNewWishText('');
          }
        }}
      />
    </fieldset>
  );
};

WishInput.protoTypes = {
  onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
  onNewWish: () => {},
};

export default WishInput;
