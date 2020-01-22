import React, {Component} from 'react';
import {signOut} from "../Store/Actions/authActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

class Header extends Component {

    renderNav=()=>{

        return(
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav mr-auto float-right">

                        <li className="nav-item">
                            <button className='btn btn-danger rounded ml-3' onClick={()=>this.props.signout()}><i className="fas fa-times"></i> EXIT </button>
                        </li>

                    </ul>
                </div>
        )

    }

    renderNoAuth=()=>{

        return(

            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav mr-auto float-right">

                    <li className="nav-item">
                        <NavLink to='/signin' className="nav-link" href="#">Signin</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to='/' className="nav-link" href="#">Signup</NavLink>
                    </li>

                </ul>
            </div>



        )

    }

    render() {

        const uid = this.props.uid;

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light border">
                    <span className="navbar-brand mb-0 h1">
                      <img src="https://cdn.worldvectorlogo.com/logos/tinder-wordmark-1.svg" height="30"/>
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {uid ? this.renderNav():this.renderNoAuth()}



                </nav>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {

    return{

        signout : bindActionCreators(signOut,dispatch)

    }

}
function mapStateToProps(state) {

    return{

        uid : state.firebase.auth.uid

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Header);