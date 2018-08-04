import React, {Component} from 'react';
import ToDoItem from '../task/task';
import './schedule.css';

class ToDoList extends Component {

    state = {
        items: [

            {
                text: "Monday",
                time: {
                    1: "6:30 pm - 7:30 pm",
                    2: "7:45pm-8:45pm"
                },
                class: {
                    1: "Workshop ",
                    2: "Seminar"
                },

                coach: {
                    1: "Lucille Wright",
                    2: "Lucille Wright"
                },
                level: {
                    1:"beginners",
                    2: "experienced"
                }
            },

            {
                text: "Tuesday",
                time: {
                    1: "6:30 pm - 7:30 pm",
                    2: "7:45pm-8:45pm",
                    3: "9:00 pm- 10:00 pm"
                },
                class: {
                    1: "Workshop",
                    2: "Q&A",
                    3: "Q&A"
                },
                coach: {
                    1: "Keith Conner",
                    2: "Ada Elliot",
                    3: "Vernon Clarinson"
                },
                level: {
                    1:"beginners",
                    2: "experienced",
                    3: "all levels"
                }

            },

            {
                text: "Wednesday",
                time: {
                    1: "6:30 pm - 7:30 pm",
                    2: "7:45pm-8:45pm",
                    3: "9:00 pm- 10:00 pm"
                },
                class: {
                    1: "Workshop",
                    2: "Q&A",
                    3: "Q&A"
                },
                coach: {
                    1: "Keith Conner",
                    2: "Ada Elliot",
                    3: "Vernon Clarinson"
                },
                level: {
                    1:"beginners",
                    2: "experienced",
                    3: "all levels"
                }

                },

            {
                text: "Thursday",
                time: {
                    1: "6:30 pm - 7:30 pm",
                    2: "7:45pm-8:45pm",
                    3: "9:00 pm- 10:00 pm"
                },
                class: {
                    1: "Workshop",
                    2: "Q&A",
                    3: "Q&A"
                },
                coach: {
                    1: "Keith Conner",
                    2: "Ada Elliot",

                },
                level: {
                    1:"beginners",
                    2: "experienced",

                }


            },
            {
                text: "Friday",
                time: {
                    1: "6:30 pm - 7:30 pm",
                    2: "7:45pm-8:45pm",
                    3: "9:00 pm- 10:00 pm"
                },
                class: {
                    1: "Workshop",
                    2: "Q&A",
                    3: "Q&A"
                },
                coach: {
                    1: "Keith Conner",
                    2: "Ada Elliot",

                },
                level: {
                    1:"beginners",
                    2: "experienced",
                    3: "all levels"
                }


            },

            {
                text: "Saturday",
                time: {
                    1: "6:30 pm - 7:30 pm",
                    2: "7:45pm-8:45pm",

                },
                class: {
                    1: "Workshop",
                    2: "Q&A",

                },
                coach: {
                    1: "Keith Conner",
                    2: "Ada Elliot",
                    3: "Vernon Clarinson"
                },
                level: {
                    1:"beginners",
                    2: "experienced",

                }

            },

            {
                text: "Sunday",
                time: {
                    1: "6:30 pm - 7:30 pm",
                    2: "7:45pm-8:45pm",

                },
                class: {
                    1: "Workshop",
                    2: "Q&A",
                    3: "Q&A"
                },
                coach: {
                    1: "Keith Conner",
                    2: "Ada Elliot",

                },
                level: {
                    1:"beginners",
                    2: "experienced",
                    3: "all levels"
                }


            },

        ]
    };


    addClass = (event) => {
        let acc = document.getElementsByClassName("accordion");
        let i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    };


    render() {
        return (
            <div className="wrapper">

                <div className="container">

                    <div className="header">
                        <h1 className="header__title"> Schedule</h1>
                        <h2 className="header__subTitle">Apart from working on effective products for businesses, our
                            specialists organize educational programs for business owners and managers.</h2>
                    </div>
                    <div className="table">
                        <div className="header__container">
                        <div className="header__body">
                            <h2 className="header__title header__info">Date</h2>
                            <h2 className="header__title header__info">Time</h2>
                            <h2 className="header__title header__info">Class</h2>
                            <h2 className="header__title header__info">Coach</h2>
                            <h2 className="header__title header__info">Level</h2>
                        </div>
                        </div>


                        <ToDoItem items={this.state.items} addClass = {this.addClass}/>



                    </div>

                </div>

                <footer className="footer">

                    <div className="footer__container">
                        <button className="button button__download">Download a Schedule</button>
                    <button className="button button__class">Book a Class</button>
                    </div>
                </footer>


            </div>
        )
    }
}

export default ToDoList;