import React, { Component, Fragment } from 'react';
import {Route} from 'react-router-dom';
import { Account,About , Player} from 'pages';
import Header from 'components/Header';
import '../styles/utility.scss';
class App extends Component {
    render() {
       
        return (
               <Fragment>
                    <Header/>
                    <Route exact path="/account" component ={Account}/>
                    <Route exact path="/about" component={About}/>
                    <Route path="/player" component={Player}/>
                </Fragment>
        );
    }
}

export default App;