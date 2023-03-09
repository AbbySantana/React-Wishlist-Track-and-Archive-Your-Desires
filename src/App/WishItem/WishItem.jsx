import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import classNames from 'classnames';

// eslint-disable-next-line react/function-component-definition
const WishItem = ({
  done, text, id, onDoneChange,
}) => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    let ageinterval;
    if (done) {
      setAge(0);
    } else {
      ageinterval = setInterval(() => {
        if (done) {
          clearInterval(ageinterval);
        } else {
          // eslint-disable-next-line arrow-parens
          setAge(a => a + 1);
        }
      }, 1000);
    }
    return () => clearInterval(ageinterval);
  }, [done]);

  return (
    <li
      className={classNames('wish-list__item', {
        'wish-list__item--done': done,
        'wish-list__item--warning': age >= 5 && age < 10,
        'wish-list__item--danger': age >= 10,
      })}
    >
      <input
        id={id}
        checked={done}
        onChange={(e) => onDoneChange(e.target.checked)}
        type="checkbox"
      />
      <label htmlFor={id}>{text}</label>
    </li>
  );
};

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
