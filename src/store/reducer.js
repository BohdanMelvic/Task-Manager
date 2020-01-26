import * as actionTypes from './actionTypes';

const initialState = {
    tasks: [],
    isAdmin: false,
    isAuthenticated: false,
    error: null,
    errorMessage: ''
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.ADD_TASK:
            const newtask = {
                id: action.taskId,
                name: action.taskData.name,
                email: action.taskData.email,
                status: action.taskData.status,
                task: action.taskData.task
            }
            return {
                ...state,
                tasks: state.tasks.concat( newtask )
            }

        case actionTypes.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.taskId)
            }

        case actionTypes.LOGIN:
            return {
                ...state,
                isAdmin: true,
                isAuthenticated: true
            }

        case actionTypes.LOGOUT:
            return {
                ...state,
                isAdmin: false,
                isAuthenticated: false
            }
        case actionTypes.ERROR:
            return {
                ...state,
                error: true,
                errorMessage: action.error
            }

        case actionTypes.CANCELERROR:
            return {
                ...state,
                error: false,
                errorMessage: ''
            }
        
        case actionTypes.FETCH_TASKS:
            return {
                ...state,
                tasks: action.tasks
            }

        default:
            return state;
    }
};

export default reducer;