
    // TODO wrap into a class
    // TODO file name to upper case


    function taskListReducer(state = [], action)
    {

        // TODO investigate this log construct!
        console.log(action, 'on state', state);

        switch (action.type) {
    /*
            case ACTION_TYPES.CREATE_TASK:
                return createTaskReducer(state, action);
            case ACTION_TYPES.DELETE_TASK:
                return deleteTaskReducer(state, action);
            case ACTION_TYPES.MOVE_TASK_UP:
                return moveTaskUpReducer(state, action);
            case ACTION_TYPES.MOVE_TASK_DOWN:
                return moveTaskDownReducer(state, action);
    */
            default:
                return state;
        }
    }
