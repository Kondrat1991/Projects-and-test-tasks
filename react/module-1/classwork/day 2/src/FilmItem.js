import React from 'react';

const FilmItem = ({name, directed, link}) => (
    <div className="book">
        <div className="film__name" key={name}>
            {name}
        </div>
        <div className="film__author" key={directed}>
            {directed}
        </div>
        <iframe width="560" height="315" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen> </iframe>

    </div>
)

export default FilmItem;