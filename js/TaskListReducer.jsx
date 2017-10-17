
    const ACTION_CREATE_TASK    = 0;
    const ACTION_DELETE_TASK    = 1;
    const ACTION_MOVE_TASK_UP   = 2;
    const ACTION_MOVE_TASK_DOWN = 3;

    /*******************************************************************************************************************
    *   Contains the Reducer method for the react-redux system.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class TaskListReducer
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

            switch (action.type)
            {
                case ACTION_CREATE_TASK:
                {
                    return TaskListReducer.createTaskReducer( state, action );
                }

                case ACTION_DELETE_TASK:
                {
                    return TaskListReducer.deleteTaskReducer( state, action );
                }

                case ACTION_MOVE_TASK_UP:
                {
                    return TaskListReducer.moveTaskUpReducer( state, action );
                }

                case ACTION_MOVE_TASK_DOWN:
                {
                    return TaskListReducer.moveTaskDownReducer( state, action );
                }

                default:
                {
                    return state;
                }
            }
        }

        /***************************************************************************************************************
        *   Creates a new task.
        *
        *   @param {Object} state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {Object} The new state object.
        ***************************************************************************************************************/
        static createTaskReducer( state, action )
        {
            let newState = state.slice();

            newState.push( action.taskName );

            return newState;
        }

        /***************************************************************************************************************
        *   Deletes the task with the specified index.
        *
        *   @param {Object} state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {Object} The new state object.
        ***************************************************************************************************************/
        static deleteTaskReducer( state, action )
        {
            let newState = state.slice();

            newState.splice( action.taskIndex, 1 );

            return newState;
        }

        /***************************************************************************************************************
        *   Moves the task with the specified index up.
        *
        *   @param {Object} state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {Object} The new state object.
        ***************************************************************************************************************/
        static moveTaskUpReducer( state, action )
        {
            let newState = state.slice();

            let taskToMoveUp   = newState[ action.taskIndex     ];
            let taskToMoveDown = newState[ action.taskIndex - 1 ];

            newState[ action.taskIndex - 1 ] = taskToMoveUp;
            newState[ action.taskIndex     ] = taskToMoveDown;

            return newState;
        }

        /***************************************************************************************************************
        *   Moves the task with the specified index down.
        *
        *   @param {Object} state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {Object} The new state object.
        ***************************************************************************************************************/
        static moveTaskDownReducer( state, action )
        {
            let newState = state.slice();

            let taskToMoveUp   = newState[ action.taskIndex + 1 ];
            let taskToMoveDown = newState[ action.taskIndex     ];

            newState[ action.taskIndex     ] = taskToMoveUp;
            newState[ action.taskIndex + 1 ] = taskToMoveDown;

            return newState;
        }
    }

    const createTaskAction   = ( taskName  ) => ( { type: ACTION_CREATE_TASK,    taskName  } );
    const deleteTaskAction   = ( taskIndex ) => ( { type: ACTION_DELETE_TASK,    taskIndex } );
    const moveTaskUpAction   = ( taskIndex ) => ( { type: ACTION_MOVE_TASK_UP,   taskIndex } );
    const moveTaskDownAction = ( taskIndex ) => ( { type: ACTION_MOVE_TASK_DOWN, taskIndex } );
