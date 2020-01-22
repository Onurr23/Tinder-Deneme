import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../Store/Actions/authActions";
import {Link, Redirect} from "react-router-dom";

class SignUp extends Component {

    state = {

        email :'',
        password : '',
        age : null,
        bio : '',
        name : '',
        imageURL : '',
        boo : false

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
        this.props.signup(this.state);

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

                        <label htmlFor="">Name</label>
                        <input name='name' className={'form-control'} onChange={this.handleChange}   type="text"/>

                    </div>

                    <div className="form-group">

                        <label htmlFor="">Image</label>
                        <input name='imageURL' className={'form-control'} onChange={this.handleChange}   type="text"/>

                    </div>

                    <img src={this.state.imageURL} alt=""/>

                    <div className="form-group">

                        <label htmlFor="">Bio</label>
                        <input name='bio' className={'form-control'} onChange={this.handleChange}   type="text"/>

                    </div>

                    <div className="form-group">

                        <label htmlFor="">Age</label>
                        <input name='age' className={'form-control'} onChange={this.handleChange}   type="number"/>

                    </div>

                    <div className="form-group">

                        <label htmlFor="">Password</label>
                        <input name='password' className={'form-control'} onChange={this.handleChange}  type="password"/>

                    </div>

                    <button className='btn btn-primary' type='submit'>{this.state.boo ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : null }  Signup</button>
                    <br/><br/>

                    <div className='alert alert-success'>Do You Have Already a Account ? <Link to='/signin'> <button className='btn btn-primary'> Signin</button> </Link> </div>

                </form>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {


    return{

        signup : bindActionCreators(authActions.signUp,dispatch)

    }

}

function mapStateToProps(state) {

    return{

        uid : state.firebase.auth.uid

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);