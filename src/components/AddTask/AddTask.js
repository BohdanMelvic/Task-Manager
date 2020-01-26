import React, { Component } from 'react';

import './AddTask.css';
import Modal from '../UI/Modal/Modal'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

class AddTask extends Component {
    state = {
        name: '',
        email: '',
        status: 'active',
        task: '',
        error: false,
        errorMessage: null
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    }

    emailChangedHandler = (event) => {
        this.setState({email: event.target.value});
        
    }

    taskChangedHandler = (event) => {
       this.setState({task: event.target.value});
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        
        if (rules.minLength) {
            isValid = value.trim().length >= rules.minLength && isValid;
        }
    
        if (rules.maxLength) {
            isValid = value.trim().length <= rules.maxLength && isValid;
        }
    
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
    
        return isValid;
    }

    errorConfirmedHandler = () => {
        this.setState({error: null});
    }

    render () {
        return (
            <Auxiliary>
                <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
               {this.state.errorMessage}
                </Modal>
                <div className="AddTask">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        onChange={this.nameChangedHandler}
                        value={this.state.name} />

                    <input 
                        type="email" 
                        placeholder="Email" 
                        onChange={this.emailChangedHandler}
                        value={this.state.email} />

                    <input 
                        type="text" 
                        placeholder="Task"
                        onChange={this.taskChangedHandler}
                        value={this.state.task} />

                    <button onClick={() => {
                        if (!this.checkValidity(this.state.email, {isEmail: true})) {
                            return this.setState({error: true, errorMessage: 'Enter correcr Email'});
                        }

                        if (!this.checkValidity(this.state.name, {minLength: 3})) {
                            return this.setState({error: true, errorMessage: 'Too short name'});
                        }

                        if (!this.checkValidity(this.state.task, {minLength: 3})) {
                            return this.setState({error: true, errorMessage: 'Too short task'});
                        }

                        this.props.taskAdded(this.state.name, this.state.email, this.state.status, this.state.task )
                       
                        }}>Add Task</button>
                </div>
            </Auxiliary>
        );
    }
}

export default AddTask;