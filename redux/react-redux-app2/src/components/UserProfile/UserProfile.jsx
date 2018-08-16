import React from 'react';
import { number, string, arrayOf, objectOf, shape } from 'prop-types';

import './userProfile.css';

export default function UserProfile({ data }) {
  return data.default ? (
    <h1>{data.default}</h1>
  ) : (
    <div className="profile-container">
      <p className="userInfo">{`Город: ${data.city}`}</p>
      <div className="userInfo">
        <p className="profile-heading">Знание языков:</p>
        <ul>{data.languages.map(lang => <li key={lang}>{lang}</li>)}</ul>
      </div>
      <div className="userInfo">
        <p className="profile-heading">Ссылки:</p>
        <ul className="social-icons">
          {data.social.map(sm => (
            <li key={sm.label} className="link">
              <a href={sm.link} target="_blank">
                <img
                  src={`./img/${sm.label}.png`}
                  alt={`icon-link to ${sm.label}`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

UserProfile.propTypes = {
  data: shape({
    default: string,
    userId: number,
    city: string,
    languages: arrayOf(string),
    social: arrayOf(objectOf(string))
  }).isRequired
};
