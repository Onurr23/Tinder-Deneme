import React, {Component} from 'react';
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import {Switch,Route} from "react-router-dom";
import signUp from "./Components/signUp";
import signIn from "./Components/signIn";
import Match from "./Components/match";


class App extends Component {
    render() {

        return (
            <div>

                <Header/>

              <div className="container">


                <Route exact path='/' component={signUp} />
                <Route exact path='/discover' component={Dashboard} />
                <Route exact path='/signin' component={signIn} />
                <Route exact path='/match' component={Match}/>


              </div>

            </div>
        );
    }
}

export default App;