import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from '../components/Task/Task';
import AddTask from '../components/AddTask/AddTask';
import * as actionTypes from '../store/actions';
import './Tasks.css'

class Tasks extends Component {
    
    render () {
        return (
            <div className='Tasks'>
                <div className='InputBlock'>
                    <AddTask taskAdded={this.props.onAddedTask} />
                </div>
                {this.props.prs.map(task => (
                    <Task 
                        key={task.id}
                        name={task.name} 
                        email={task.email}
                        status={task.status} 
                        task={task.task}
                        clicked={() => this.props.onRemovedTask(task.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.tasks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedTask: (name, email, status, task) => dispatch({type: actionTypes.ADD_TASK, taskData: {name: name, email: email, status: status, task: task}}),
        onRemovedTask: (id) => dispatch({type: actionTypes.REMOVE_TASK, taskId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);