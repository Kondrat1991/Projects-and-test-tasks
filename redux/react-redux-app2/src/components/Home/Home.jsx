import React from 'react';

import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Вы попали на главную страницу приложения</h1>
      <div className="home-container__info">
        <p>Здесь Вы можете столкнуться с некоторыми возможностями:</p>
        <ul className="info-list mainList">
          <li>
            <p>
              нажимая на <span className="rout-span">Профиль</span>, Вы:
            </p>
            <ul className="info-list subList">
              <li>
                будучи неавторизованным, попадаете на страницу авторизации, на
                которой Вы можете ввести свои данные и авторизироваться, получив
                тем самым доступ к данным Вашего профиля
              </li>
              <li>
                будучи авторизованным, сразу попадаете на страницу Вашего
                профиля, где Вы можете ознакомиться с соответствующей
                информацией
              </li>
            </ul>
          </li>
          <li>
            нажимая на <span className="rout-span">Новости</span>, Вы получаете
            доступ к свежим новостям на сайте
          </li>
          <li>
            Вы также можете выйти из своего профиля, нажав на{' '}
            <span className="rout-span">Выйти</span>
          </li>
          <li>
            нажатие на кнопку <span className="rout-span">Войти</span>{' '}
            аналогично нажатию на <span className="rout-span">Профиль</span>,
            будучи неавторизованным
          </li>
        </ul>
      </div>
      <p className="lastWord">Удачи!</p>
    </div>
  );
}
