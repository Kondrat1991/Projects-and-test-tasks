import React from 'react';
import {connect} from 'react-redux';
import './Random.css';




const Random = (props) => {
    return (
        <div className="main-wrapper">
            <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet"
                  type="text/css"/>
            <div className="user-card bg-main-purple"><img className="user-looking" width="150px"
                                                           src="https://pbs.twimg.com/profile_images/598565685548036096/tcsYDtn3_400x400.jpg"/>
                <p className="user-name white">Hadley Lambeth</p>
                <p className="user-info light-purple">Looking for a new roomie</p>
                <ul className="looking-icons">
                    <li className="star"><i className="fa fa-star"> </i><span>24</span></li>
                    <li className="location"><i className="fa fa-map-marker"> </i><span>Austin</span></li>
                    <li className="fb"><i className="fa fa-facebook-official"> </i><span>24</span></li>
                </ul>
            </div>
        </div>
    )
}




export default Random;