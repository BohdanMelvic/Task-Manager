import React from 'react';
import { connect } from 'react-redux';
import './ToolBar.css';
import {NavLink} from 'react-router-dom';

function ToolBar(props) {
    return (
        <header className='ToolBar'>
            <nav>
            <NavLink to='/'>Tasks</NavLink>
                {props.isAuthenticated ? <NavLink to='/logout'>Log Out</NavLink> : <NavLink to='/auth'>Log In</NavLink>}
            </nav>     
        </header>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated
    };
};

export default connect(mapStateToProps)(ToolBar);