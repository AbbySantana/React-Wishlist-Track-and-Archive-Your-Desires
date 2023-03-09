import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import WishItem from '../WishItem';

// eslint-disable-next-line react/function-component-definition
const WishList = ({ wishes, onWishesChange }) => (
  <ul className="wish-list">
    {wishes.map(({ text, done }, i) => (
      <WishItem
        text={text}
        done={done}
        id={`wish${i}`}
        key={text}
        onDoneChange={(value) => {
          const updatedWishes = [...wishes]; // copia para no modificar el original
          updatedWishes[i].done = value;
          onWishesChange(updatedWishes);
        }}
      />
    ))}
  </ul>
);

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape(WishItem.propTypes)),
  onWishesChange: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {},
};

export default WishList;
