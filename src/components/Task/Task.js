import React from 'react';

import './Task.css';

const Task = (props) => (
    <div className="Task" onClick={props.clicked}>
        <h1>Name: {props.name}</h1>
        <p>Email: {props.email}</p>
        <p>Status: {props.status}</p>
        <p>Task: {props.task}</p>
    </div>
);

export default Task;