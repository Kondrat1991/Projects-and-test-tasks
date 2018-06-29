import React from 'react';
import {connect} from 'react-redux';
import './Random.css';
import {getUser, deleteCard} from './actions/RandomActions';
import UserCard from './components/UserCard';
import {UserData} from './selectors';

const Random = (props) => {
    return (
        <div className="main-wrapper">
            <button className="getFetch" onClick={props.fetch}>Fetch</button>

            <div className="cardWrapper">
            {props.userData.map( (obj) => <UserCard img={obj.picture.medium}
                                                    name={obj.name.first}
                                                    surname={obj.name.last}
                                                    sha256={obj.login.sha256}
                                                    deleteCard={props.deleteCard}
                                                    key={obj.login.sha256}
            />          ) }
            </div>


        </div>
    )
};

function MSTP(state) {
   return {
    userData: UserData(state)
   }
}

function MDTP(dispatch) {
    return {
        fetch: function () {
            dispatch(getUser())
        },
        deleteCard: function (sha256) {
         dispatch(deleteCard(sha256))
        }
    }
}

export default connect(MSTP,MDTP)(Random);
