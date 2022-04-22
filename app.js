import React, { Component } from 'react';
import App from '@/views/App';
import ReactDom from 'react-dom';
import store from '@/store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ReactDom.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//     , document.getElementById('root')
// );


// const About = () => <h2>留连戏蝶时时舞，青草池塘处处蛙</h2>;
// const Users = () => <h2>人间四月芳菲尽，山寺桃花始盛开</h2>;
import About from '@/pages/about';
import Users from '@/pages/users';

ReactDom.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/about" component={About} />
                <Route path="/users" component={Users} />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('root'));
