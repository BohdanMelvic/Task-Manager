import React, { Component } from 'react';
import './Auth.css';
import { connect } from 'react-redux';
import * as actions from  '../../store/actions';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';


export class Auth extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }
    

    emailChangedHandler = (event) => {
        this.setState({email: event.target.value});
        
    }

    passwordChangedHandler = (event) => {
       this.setState({password: event.target.value});
    }

    logInHandler = () => {
        this.props.onLogIn(this.state.email, this.state.password);
    }

    errorConfirmedHandler = () => {
        this.props.onCancelError();
    }

    render() {
        return (
            <Auxiliary>
                <Modal 
                    show={this.props.error}
                    modalClosed={this.errorConfirmedHandler}>
                {this.props.errorMessage}
                </Modal>
        
                <div className='Auth'>
                <input 
                    type="email" 
                    placeholder="Login" 
                    onChange={this.emailChangedHandler}
                    value={this.state.email} />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={this.passwordChangedHandler}
                    value={this.state.password} />

                    <button onClick={this.logInHandler}>Log In</button>
                </div>
            </Auxiliary>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        errorMessage: state.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogIn: (email, password) =>  dispatch(actions.auth(email, password)),
        onCancelError: () =>  dispatch(actions.cancelError())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);




