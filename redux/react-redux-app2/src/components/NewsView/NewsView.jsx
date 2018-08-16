import React, { Fragment } from 'react';
import { arrayOf, number, object } from 'prop-types';

import './news.css';

export default function NewsView({ news, amount }) {
  const newsList = (
    <Fragment>
      <ul>
        {news.map(piece => (
          <li key={piece.id} className="news-item">
            <h4>{piece.title}</h4>
            <p>{piece.text}</p>
          </li>
        ))}
      </ul>
      <p className="count-news">{`Всего новостей: ${amount}`}</p>
    </Fragment>
  );

  return (
    <div className="news-container">
      <h1>Текущие новости:</h1>
      {news.length ? (
        newsList
      ) : (
        <p>Новостей еще нет, но они скоро появятся...</p>
      )}
    </div>
  );
}

NewsView.propTypes = {
  news: arrayOf(object).isRequired,
  amount: number.isRequired
};
