import React from 'react';
import {connect} from 'react-redux';


const Gallery = (props) => {
    console.log('props', props);
    return (

        <div className="gallery">

            {props.gallery.map((obj) => <img src={obj.largeImageURL} alt='#' key={obj.id}/>)}

        </div>

    )
};

function mapStateToProps(state) {
    return {
        gallery: state.Gallery
    }
}

export default connect(mapStateToProps)(Gallery);

