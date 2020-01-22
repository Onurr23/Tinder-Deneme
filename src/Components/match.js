import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Match extends Component {
    render() {
        return (
            <div>

                <h1>MATCH !</h1>

                <Link to='/discover'>GO BACK TO DISCOVER </Link>

            </div>
        );
    }
}

export default Match;