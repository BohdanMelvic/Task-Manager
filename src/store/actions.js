import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchTasksSuccess = (fetchedTasks) => {
    return {
        type: actionTypes.FETCH_TASKS,
        tasks: fetchedTasks
    }
};

export const fetchTasks = () => {
    return dispatch => {
        axios.get('https://react-query-app.firebaseio.com/tasks.json')
        .then( res => {
            let fetchedTasks = [];

            for (let key in res.data) {
                fetchedTasks.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch( fetchTasksSuccess(fetchedTasks) );
        }).catch( error =>{ 
            console.log(error)
         });
    }
}

export const addTaskSuccess = (id, taskData) => {
    return {
        type: actionTypes.ADD_TASK,
        taskId: id,
        taskData: taskData
    }
};


export const addTask = (name, email, status, task) => {
    const taskData = {
        name: name,
        email: email,
        status: status,
        task: task
    };
    return dispatch => {
        axios.post('https://react-query-app.firebaseio.com/tasks.json', taskData)
        .then( response => {
           dispatch(addTaskSuccess(response.data.name, taskData));
        }).catch( error =>{ 
           console.log(error)
        });
    }
};

export const removeTaskSuccess = (id) => {
    return {
        type: actionTypes.REMOVE_TASK,
        taskId: id
    }
};

export const removeTask = (id) => {
    return dispatch => {
        axios.delete('https://react-query-app.firebaseio.com/tasks/' + id)
        .then( response => {
            dispatch( removeTaskSuccess(id));
         }).catch( error =>{ 
            console.log(error);
        });
    }
};

export const authSuccess = () => {
    return {
        type: actionTypes.LOGIN,
    }
};

export const authFail = () => {
    return {
        type: actionTypes.ERROR,
        error: 'Wrong email or password'
    }
};

export const auth = (email, password) => {
    return dispatch => {
        if (email === 'admin' && password === '123') {
            dispatch(authSuccess());
        } else {
            dispatch(authFail());
        }
    }
};

export const cancelError = () => {
    return {
        type: actionTypes.CANCELERROR
    }
};

export const changeStatusSuccess = (id) => {
    return {
        type: actionTypes.CHANGE_STATUS
    }
}

export const changeStatus = (id) => {
    return dispatch => {
        axios.get('https://react-query-app.firebaseio.com/tasks/' + id)
        .then( response => {
           'HERE MUST BE CODE'
         }).catch( error =>{ 
            console.log(error);
        });
    }
}