
    /*******************************************************************************************************************
    *   Contains the Reducer method for the react-redux system.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class ReduxTaskList
    {
        /***************************************************************************************************************
        *   Specifies the global reducer method for the entire TaskList application.
        *
        *   @param {Object} state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {Object} The new state object.
        ***************************************************************************************************************/
        static taskListReducer( state = [], action )
        {
            console.log( "taskListReducer", action, "on state", state );

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
                {
                    return state;
                }
            }
        }
    }
