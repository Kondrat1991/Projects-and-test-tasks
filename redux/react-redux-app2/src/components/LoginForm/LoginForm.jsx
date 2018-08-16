import React from 'react';
import { string, func, any } from 'prop-types';

import './loginForm.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

export default function LoginForm({
  email,
  password,
  validErs,
  onChange,
  onSubmit,
  children
}) {
  return (
    <form onSubmit={onSubmit} className="login-form">
      {children}
      <div className="login-form__item">
        <label htmlFor="email">Эл. почта</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={onChange}
          value={email}
        />
      </div>
      <div className="login-form__item">
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={onChange}
          value={password}
        />
      </div>
      {validErs && <span className="valid-error">{validErs}</span>}
      <PrimaryButton clName=" login-form__submit-button" text="Войти" />
    </form>
  );
}

LoginForm.propTypes = {
  email: string.isRequired,
  password: string.isRequired,
  validErs: string,
  onChange: func.isRequired,
  onSubmit: func.isRequired,
  children: any
};

LoginForm.defaultProps = {
  validErs: null,
  children: null
};
