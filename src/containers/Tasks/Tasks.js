import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from '../../components/Task/Task';
import AddTask from '../../components/AddTask/AddTask';
import * as actions from '../../store/actions';
import './Tasks.css'

class Tasks extends Component {

    componentDidMount() {
        this.props.onFetchTasks();
    }
    
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
        onAddedTask: (name, email, status, task) => dispatch(actions.addTask(name, email, status, task)),
        onRemovedTask: (id) => dispatch(actions.removeTask(id)),
        onFetchTasks: () => dispatch(actions.fetchTasks())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);