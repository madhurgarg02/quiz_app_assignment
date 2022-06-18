import React from 'react';
import Signup from './Signup';
import Signin from './Signin';
import axios from 'axios';
import './Auth.css';

export default class Auth extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tab: 'signin'
        }
    }

    signIn = (email,password) => {
        axios.post('/api/users/login',{email,password}).then(res=>{
            if(res.data.success){
                localStorage.setItem('JWT_PAYLOAD',res.data.token);
                localStorage.setItem('_ID',res.data.user._id);
                this.props.history.push('/dashboard');
            }
        }).catch(err => {
            console.log(err);
        });
    }

    signUp = (firstName, lastName, email, password) => {
        axios.post('/api/users/register',{firstName, lastName, email,password}).then(res=>{
            if(res.data.success){
                this.setState({tab:'signin'});
            }
        }).catch(err => {
            console.log(err);
        });
    }

    changeTab = () => {
        this.setState({
            tab: this.state.tab === 'signup'?'signin':'signup'
        });
    }



    render(){
        let page = this.state.tab === 'signin'?<Signin signIn={this.signIn}/>:<Signup signUp={this.signUp}/>
        return(
            
            <div className = "auth-wrapper">
                <div className="left">
                </div>
                
                <div className='right'>
                    <div className='header'>Quiz App</div>
                    <div className='sub-header'> Welcome! </div>
                    {page}
                    <div className='new' onClick={this.changeTab}>{this.state.tab==='signin'?'New Here? Sign up!':'Already a user? Sign In!'}</div>
                </div>
                </div>
        )
    }
}