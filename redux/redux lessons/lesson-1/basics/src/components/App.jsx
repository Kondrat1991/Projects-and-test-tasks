import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import {addReminder} from "../actions";



class App extends Component {

    state = {
        text:''
    };

    addReminder () {
        this.props.addReminder(this.state.text);

    }

    render() {
        return (
            <div className="App">

                <h2 className="title">
                    Reminder Pro
                </h2>

                <div className="form-inline"> 
                <div className="form-group">
                    <input
                       className="form-control"
                       placeholder="I have to..."
                       onChange={event => this.setState({text: event.target.value})}
                       type="text"/>
                    
                </div>
                <button className="btn btn-success"
                        onClick={()=> this.addReminder()}
                        type="button">
                Add Reminder
                </button>
                
                </div>


            </div>
        );
    }
}


/*function mapDispatchToProps(dispatch) {
return bindActionCreators({addReminder}, dispatch)
}*/

export default connect(null,{addReminder} ) (App);
