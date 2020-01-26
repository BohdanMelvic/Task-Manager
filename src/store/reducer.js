import * as actionTypes from './actions';

const initialState = {
    tasks: [],
    isAdmin: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TASK:
            const newtask = {
                id: Math.random(), // not really unique but good enough here!
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
        default:
            break;
    }
    return state;
};

export default reducer;