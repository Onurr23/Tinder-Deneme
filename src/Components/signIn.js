import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../Store/Actions/authActions";
import {Redirect} from "react-router-dom";

class SignIn extends Component {

    state = {

        email :'',
        password : ''

    }

    handleChange=(event)=>{

        this.setState({
            [event.target.name] : event.target.value
        })

    }

    handleSubmit=(event)=>{

        event.preventDefault();
        this.setState({
            boo : true
        })

        if(this.props.auth=== undefined){

            this.setState({

                boo : false

            })

        }
        this.props.signin(this.state);

    }

    render() {

        const uid = this.props.uid;

        if(uid) return <Redirect to='/discover'/>

        return (
            <div>

                <form action="" onSubmit={this.handleSubmit}>

                    <h4 className='display-4'> WELCOME TO TINDER </h4>

                    <br/>
                    <div className="form-group">

                        <label htmlFor="">Email</label>
                        <input name='email' className={'form-control'} onChange={this.handleChange}   type="text"/>

                    </div>

                    <div className="form-group">

                        <label htmlFor="">Password</label>
                        <input name='password' className={'form-control'} onChange={this.handleChange}  type="password"/>

                    </div>

                    <button className='btn btn-primary' type='submit'>{this.state.boo ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>  : null }  Signin</button>


                    <br/><br/>

                    {this.props.auth?<div className='alert alert-danger'>
                        {this.props.auth}
                    </div>:null}


                </form>

            </div>
        );
    }
}

function mapStateToProps(state) {

    console.log(state);

    return{

        uid : state.firebase.auth.uid,
        auth : state.authReducer.message

    }
}

function mapDispatchToProps(dispatch) {

    return{

        signin : bindActionCreators(authActions.signIn,dispatch)

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);