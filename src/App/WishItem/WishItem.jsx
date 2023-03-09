import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import classNames from 'classnames';

// eslint-disable-next-line react/function-component-definition
const WishItem = ({
  done, text, id, onDoneChange,
}) => (
  <li className={classNames('wish-list__item', {
    'wish-list__item--done': done,
  })}
  >
    <input id={id} checked={done} onChange={(e) => onDoneChange(e.target.checked)} type="checkbox" />
    <label htmlFor={id}>{text}</label>
  </li>
);

WishItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
  onDoneChange: PropTypes.func,
};

WishItem.defaultProps = {
  done: false,
  text: '',
  id: '',
  onDoneChange: () => {},
};

export default WishItem;
