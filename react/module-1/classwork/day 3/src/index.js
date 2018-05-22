import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import HelloClassState, {Hello, HelloClassProps} from "./hello";
import FilmItem from "./FilmItem";
import registerServiceWorker from './registerServiceWorker';
import "./index.css";
import  Input from "./Input";
//import Button from "./Button";

class Films extends Component{
    // автоматично викликає super === new Component()
    state = {
        films: [{
            name: 'Back to the Future',
            directed: 'Stiven Spilberg',
            link: 'https://www.youtube.com/embed/cu-6TptPMx8',
            type:'films'

        },
            {
                name: 'Guardians of the Galaxy',
                directed: 'Marvel Comics',
                link: "https://www.youtube.com/embed/CtsN9izhbCk",
                type:'films'
            },
            {
                name: 'Stay',
                directed: 'Mark Forster',
                link: 'https://www.youtube.com/embed/KIk5rfA5uWE',
                type:'films'
            },

        ],
        bad: [
            {
                name: '50 Shades of Gray',
                directed: 'Mark Forster',
                link:  'https://www.youtube.com/embed/SfZWFDs0LxA',
                type:'bad'
            },

            {
                name: '50 Shades of Freedom',
                directed: 'Mark Forster',
                link: 'https://www.youtube.com/embed/nJCc5HRPxYA',
                type:'bad'
            }
        ],
        active: 'films',
        name: "",
        directed:"",
        link:"https://www.youtube.com/embed/CtsN9izhbCk",
        value: 0

    };

    changeFilm(active){
        this.setState({
            active
        })
    }


    changeInput(field,event) {
        const value = event.target.value;
        this.setState({
            [field]:value
        });
    }


    addFilm = () => {

    this.setState((prevState) => ({



        [this.state.active]: [...prevState[this.state.active], {
    name: prevState.name,
    directed: prevState.directed,
    link: prevState.link
}]
    }))


};

render(){
        const films = this.state[this.state.active];
    console.log(this.state.active);
    // const films = [...this.state.films].filter((film) => film.type === this.state.active);
    console.log(films);
    //const books = this.state[this.state.active + "Books"];
        return (
            <div className = 'books__wrapper'>
                <h2> My favorite films</h2>
                <button onClick={this.changeFilm.bind(this, "films")}>
                    Good Films
                </button>
                <button onClick={this.changeFilm.bind(this, "bad")}>
                    Bad Films
                </button>


                <div>
                 Name:
                <input type="text" className= "film__name"
                value={this.state.name}
                 onChange={this.changeInput.bind(this, "name")}
                />

                </div>


                <div>
                 Directed:
                <input type="text"
                       className= "film__directed"
                value={this.state.directed}
                       onChange={this.changeInput.bind(this, "directed")}
                />
                </div>

                <div>
                    Link:
                    <input type="text"
                           className= "film__link"
                           value={this.state.link}
                           onChange={this.changeInput.bind(this, "link")}
                    />
                </div>

                <div>
                    Test:
                    <Input
                        value='5'
                        placeholder="hello"


                    />
                </div>

                <button onClick={this.addFilm}> Add Film </button>

                {films.map((film, index) => <FilmItem key={film.name}{...film} />  )}
            </div>
        )
    }
}



ReactDOM.render(<Films />,
    document.getElementById('root'));
registerServiceWorker();





























// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// //import HelloClassState, {Hello, HelloClassProps} from "./hello";
// import FilmItem from "./FilmItem";
// import registerServiceWorker from './registerServiceWorker';
// import "./index.css";
//
// class Films extends Component{
//
//     // constructor ()
//     // {
//     //     this.changeInput()
//     // }
//
//     // автоматично викликає super === new Component()
//     state = {
//         films: [{
//             name: 'Back to the Future',
//             directed: 'Stiven Spilberg',
//             link: 'https://www.youtube.com/embed/cu-6TptPMx8'
//         },
//             {
//                 name: 'Guardians of the Galaxy',
//                 directed: 'Marvel Comics',
//                 link: "https://www.youtube.com/embed/CtsN9izhbCk"
//             },
//             {
//                 name: 'Stay',
//                 directed: 'Mark Forster',
//                 link: 'https://www.youtube.com/embed/KIk5rfA5uWE'
//             },
//
//         ],
//         bad: [
//             {
//                 name: '50 Shades of Gray',
//                 directed: 'Mark Forster',
//                 link:  'https://www.youtube.com/embed/SfZWFDs0LxA'
//             },
//
//             {
//                 name: '50 Shades of Freedom',
//                 directed: 'Mark Forster',
//                 link: 'https://www.youtube.com/embed/nJCc5HRPxYA'
//             }
//         ],
//         active: 'films',
//         name:'',
//         directed:'',
//         link:''
//     };
//
//
//     // changeFilmevent){
//     //     this.changeInput.call(this, "name", event);
//     // }
//
//
//     changeFilm(active){
//         this.setState({
//             active,
//         })
//     }
//
//     changeInput = function(field,event)  {
//         const value = event.target.value;
//
//         this.setState ( {
//         name:value,
//         })
//     };
//
//
// addFilm = () => {
//     debugger;
//     this.setState (
//         {
//           films: [...this.state.films]
//         }
//     )
// }
//
//     render(){
//         const films = this.state[this.state.active];
//         console.log(films);
//
//         //const books = this.state[this.state.active + "Books"];
//         return (
//             <div className = 'books__wrapper'>
//                 <h2> My favorite films</h2>
//                 <button onClick={this.changeFilm.bind(this, "films")}>
//                     Good Films
//                 </button>
//                 <button onClick={this.changeFilm.bind(this, "bad")}>
//                     Bad Films
//                 </button>
//                 <div className="books__add">
//                     Name:
//                     <input type="text" className="book__name"
//                            onChange={this.changeInput.bind(this)}
//                            value ={this.state.name}/>
//                     Author:
//                     <input type="text" className="book__author"
//                            onChange={this.changeInput}/>
//                     Cover:
//                     <input type="text" className="book__cover"
//                            onChange={this.changeInput}/>
//
//                     <input type="text"/>
//
//                     <input type="text"/>
//
//                     <button> Add </button>
//
//
//
//                 </div>
//                 {films.map((film, index) => <FilmItem key={film.name}{...film} />  )}
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(<Films />,
//     document.getElementById('root'));
// registerServiceWorker();

//From Sasha
// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// const VideoItem = ({name, author, link}) => (
//     <div className="book">
//         <div className="book__name">
//             {name}
//         </div>
//         <div className="book__author">
//             {author}
//         </div>
//         <iframe width="560" height="315" src={link}
//                 frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
//     </div>
// );
//
//
// class Videos extends Component {
//     // Автоматически вызывается super() === new Component();
//     state = {
//         loveVideos: [{
//             name: "Troy",
//             author: "D. Flanagan",
//             link: "https://www.youtube.com/embed/znTLzRJimeY"
//         }, {
//             name: "John Wick",
//             author: "Douglas Crockford",
//             link: "https://www.youtube.com/embed/2AUmvWm5ZDQ"
//         }, {
//             name: "Red Cliff",
//             author: "Sasan Seydnejad",
//             link: "https://www.youtube.com/embed/YANIP3Hcl5I"
//         }],
//         hateVideos: [{
//             name: "Parody",
//             author: "D. Flanagan",
//             link: "https://www.youtube.com/embed/oeU_dU3mV4Q"
//         }, {
//             name: "Alcko",
//             author: "Douglas Crockford",
//             link: "https://www.youtube.com/embed/jzBIOPYCo5c"
//         }],
//         active:"love"
//     };
//
//     // React Children can be:
//     // Primitve(String, Number, Boolean), Components, Elements
//     // and Array of (Primitive, Components, Elements)
//     changeBook = active => this.setState({active});
//
//
//     render() {
//         const videos = this.state[this.state.active + "Videos"];
//         console.log(videos);
//         return (
//             <div className="books__wrapper">
//                 <h2>My favorite videos</h2>
//                 <button onClick={() => {this.changeBook("love")}}>
//                     Love Videos
//                 </button>
//                 <button onClick={() => {this.changeBook("hate")}}>
//                     Hate Videos
//                 </button>
//                 {videos.map((video) => <VideoItem {...video}/>)}
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(<Videos/>, document.getElementById('root'));
// registerServiceWorker();



