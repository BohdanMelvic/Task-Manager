import React from 'react';
import { connect } from 'react-redux';
import './Task.css';
import editImg from '../../assets/img/edit.png';
import deletetImg from '../../assets/img/delete.png';
import changeStatusImg from '../../assets/img/switch.png';
import * as actions from '../../store/actions';

const Task = (props) => {
    const changeStatusHandler = () => {
        props.onChangeStatus(props.key);
    }

    const adminMenu = <div className='adminMenu'>
            <img onClick={changeStatusHandler} src={changeStatusImg} alt="changeStatusImg"/>
            <img src={editImg} alt="editImg"/>
            <img onClick={props.clicked} src={deletetImg} alt="deletetImg"/>
    </div>;

    return (
        <div className='Task'>
            <div className="infoBox">
                <h1>Name: {props.name}</h1>
                <p>Email: {props.email}</p>
                <p>Status: {props.status}</p>
                <p>Task: {props.task}</p>
            </div>
            {props.isAdmin ? adminMenu : null}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isAdmin: state.isAdmin
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeStatus: (id) => dispatch(actions.changeStatus(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);