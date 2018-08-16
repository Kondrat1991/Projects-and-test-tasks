import React from 'react';
import { string } from 'prop-types';

import './loading.css';

const Loading = ({ text }) => (
  <div className="overley">
    <div className="overley__content">
      <div className="spinner" />
      <div className="text">{text}</div>
    </div>
  </div>
);

Loading.propTypes = {
  text: string.isRequired
};

export default Loading;
