import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import '../../style/style.css';
import '../../style/media.css';
import Footer from "../footer";
export default class App extends Component {
    render() {
        return (
            <div>
                <Footer/>
            </div>
        );
    }
}