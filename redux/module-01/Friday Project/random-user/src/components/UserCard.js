import React from 'react';
import './index.css';

const UserCard = ({img, name, surname, sha256, deleteCard}) => {
    return (
        <div className="user-card bg-main-purple" onClick={()=> deleteCard(sha256)}><img className="user-looking" width="150px"
                                                       src={img}/>
            <p className="user-name white">{name} {surname}</p>
            <p className="user-info light-purple">Looking for a new roomie</p>
            <ul className="looking-icons">
                <li className="star"><i className="fa fa-star"> </i><span>24</span></li>
                <li className="location"><i className="fa fa-map-marker"> </i><span>Austin</span></li>
                <li className="fb"><i className="fa fa-facebook-official"> </i><span>24</span></li>
            </ul>
        </div>
    )
};

export default UserCard;
