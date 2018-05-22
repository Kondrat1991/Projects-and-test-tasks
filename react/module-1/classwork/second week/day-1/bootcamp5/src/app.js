import React, {Fragment} from 'react';
//import Post from './components/post';
//import PostList from './components/postsList'
import Timer from './components/timer';

const App = () => (
    <Fragment>



        <Timer/>
        <Timer time ={1000} step = {1} autoStart/>
    <Timer time="0" reverse={false} autoStart/>
    </Fragment>
)
export default App;