import React from 'react';
import { arrayOf, string } from 'prop-types';
import v4 from 'uuid';

import './error.css';

export default function UserError({ err }) {
  return (
    <div className="error">{err.map(error => <p key={v4()}>{error}</p>)}</div>
  );
}

UserError.propTypes = {
  err: arrayOf(string)
};

UserError.defaultProps = {
  err: ['Something went wrong...']
};
