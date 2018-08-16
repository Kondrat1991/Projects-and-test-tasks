import React from 'react';
import { func, string } from 'prop-types';

import './button.css';

PrimaryButton.propTypes = {
  text: string,
  onClick: func,
  clName: string
};

PrimaryButton.defaultProps = {
  text: 'Button',
  onClick: null,
  clName: null
};

export default function PrimaryButton({ text, onClick, clName }) {
  return (
    <button onClick={onClick} className={`nav-flex__button${clName || ''}`}>
      {text}
    </button>
  );
}
