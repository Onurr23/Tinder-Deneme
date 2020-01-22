import React, {Component} from 'react';
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {bindActionCreators, compose} from "redux";
import {Redirect} from "react-router-dom";
import * as likeActions from "../Store/Actions/likeActions";

class Person extends Component {
    state ={
        count :0,
        likes : [],
        visit : [],
        dislikes : [],
        superlikes : [],
        match : false,
        matched :{}
    }
    match=(kullanici,likedUser)=>{

        const match = kullanici.likedUsers.filter(user=>{

            return user === likedUser;

        });

        if(match.length>0){

            return true;

        }else {

            return false;

        }

    }


    like=(e,kullanici,likedUser)=>{

        const liked = this.state.likes;

        const visited = this.state.visit;

        visited.push(kullanici.id);

        liked.push(kullanici.id);

        this.setState({
            visit : visited
        })

        this.setState({
            likes : liked
        })

        if(this.state.count+1<e){

            this.setState({
                count : this.state.count+1
            })

         this.props.actions.like(kullanici.id,this.state.likes);
            this.props.actions.seen(this.state.visit);

        }else{

            this.props.actions.like(kullanici.id,this.state.likes);
            this.props.actions.seen(this.state.visit);
            alert('LOOKS LIKE YOU ARE OUT OF PEOPLE');

        }

        if(this.match(kullanici,likedUser)){

            this.setState({

                match : true

            })
            this.setState({

                matched : kullanici

            })

        }
    }

    dislike=(e,kullanici)=>{

        const disliked = this.state.dislikes;

        const visited = this.state.visit;

        visited.push(kullanici.id);

        disliked.push(kullanici.id);

        this.setState({
            visit : visited
        })

        this.setState({
            likes : disliked
        })

        if(this.state.count+1<e){

            this.setState({
                count : this.state.count+1
            })

            this.props.actions.dislike(kullanici.id,this.state.likes);
            this.props.actions.seen(this.state.visit);

        }else{

            alert('LOOKS LIKE YOU ARE OUT OF PEOPLE');
            this.props.actions.dislike(kullanici.id,this.state.likes);
            this.props.actions.seen(this.state.visit);
        }
    }
    superlike=(e,kullanici,likedUser)=>{

        const superliked = this.state.superlikes;

        const visited = this.state.visit;

        visited.push(kullanici.id);

        superliked.push(kullanici.id);

        this.setState({
            visit : visited
        })

        this.setState({
            superlikes : superliked
        })

        if(this.state.count+1<e){

            this.setState({
                count : this.state.count+1
            })

            this.props.actions.superlike(kullanici.id,this.state.likes);
            this.props.actions.seen(this.state.visit);

        }else{

            alert('LOOKS LIKE YOU ARE OUT OF PEOPLE');
            this.props.actions.superlike(kullanici.id,this.state.likes);
            this.props.actions.seen(this.state.visit);
        }

        if(this.match(kullanici,likedUser)){

            this.setState({

                match : true

            })
            this.setState({

                matched : kullanici

            })

        }
    }

    render() {

        const users = this.props.users;
        const uid = this.props.uid;

        if(!uid) return <Redirect to='/'/>

        if(!users){

            return (

                <div className='container'>

                    <div className="spinner-border text-dark" role="status">
                        <span className="sr-only">Loading..</span>
                    </div>

                </div>
            )
        }else if(this.state.match){

            return (

                <div>
                    <div className="card bg-primary text-white text-center p-3">
                            <p>YOU MATCHED WITH {this.state.matched.name}</p>
                            <footer className="blockquote-footer text-white">
                                <small>
                                    THIS IS MUTUAL
                                </small>
                            </footer>

                        <img src={this.state.matched.img} alt=""/>
                    </div>
                    <button className='btn btn-primary' onClick={()=>this.setState({match:false})}>GO BACK TO DISCOVER</button>
                </div>
            )
        } else{

            const kullanicilar = users.filter(user=>{

                return user.id !== uid;

            });

            const user = users.filter(user=>{

                return user.id == uid;

            })
            return (
                <div>
                    <div className="card border-primary">
                        <img src={kullanicilar[this.state.count].img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{kullanicilar[this.state.count].name} - {kullanicilar[this.state.count].age}</h5>
                            <p className='card-text'>{kullanicilar[this.state.count].bio}</p>
                            <button className='btn btn-danger rounded-circle' onClick={()=>this.like(kullanicilar.length,kullanicilar[this.state.count],user[0].id,1)}><i className="fas fa-heart"></i></button>
                            <button className='btn btn-danger rounded-circle ml-3' onClick={()=>this.dislike(kullanicilar.length,kullanicilar[this.state.count],2)}><i className="fas fa-times"></i></button>
                            <button className='btn btn-primary rounded-circle ml-3' onClick={()=>this.superlike(kullanicilar.length,kullanicilar[this.state.count],user[0].id,3)}><i className="fas fa-star"></i></button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
function mapStateToProps(state) {

    return{

        users : state.firestore.ordered.users,
        uid : state.firebase.auth.uid

    }
}
function mapDispatchToProps(dispatch) {

    return{

       actions : { like : bindActionCreators(likeActions.like,dispatch),
                   dislike : bindActionCreators(likeActions.dislike,dispatch),
                   superlike : bindActionCreators(likeActions.superlike,dispatch),
                   seen : bindActionCreators(likeActions.seen,dispatch)}
    }
}
export default compose(

    connect(mapStateToProps,mapDispatchToProps,),
    firestoreConnect([

        {collection : 'users'}


    ])
)(Person);

