
    /*******************************************************************************************************************
    *   Specifies all redux reducers.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class Reducer
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
            console.log( "taskListReducer reduces action [", action, "] State BEFORE is [", state, "]" );

            let newState = null;

            switch ( action.type )
            {
                case ACTION_CREATE_TASK:
                {
                    newState = Reducer.createTaskReducer( state, action );
                    break;
                }

                case ACTION_DELETE_TASK:
                {
                    newState = Reducer.deleteTaskReducer( state, action );
                    break;
                }

                case ACTION_MOVE_TASK_UP:
                {
                    newState = Reducer.moveTaskUpReducer( state, action );
                    break;
                }

                case ACTION_MOVE_TASK_DOWN:
                {
                    newState = Reducer.moveTaskDownReducer( state, action );
                    break;
                }

                case ACTION_SET_INPUT_FIELD:
                {
                    newState = Reducer.setInputFieldReducer( state, action );
                    break;
                }

                case ACTION_CLEAR_INPUT_FIELD:
                {
                    newState = Reducer.clearInputFieldReducer( state );
                    break;
                }

                case ACTION_SET_INPUT_ERROR:
                {
                    newState = Reducer.setInputErrorReducer( state );
                    break;
                }

                case ACTION_CLEAR_INPUT_ERROR:
                {
                    newState = Reducer.clearInputErrorReducer( state );
                    break;
                }

                default:
                {
                    newState = state;
                    break;
                }
            }

            console.log( " State AFTER is [", newState, "]" );

            return newState;
        }

        /***************************************************************************************************************
        *   Reduces the state in order to create a new task.
        *
        *   @param {Object} state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {Object} The new and reduced state object.
        ***************************************************************************************************************/
        static createTaskReducer( state, action )
        {
            let newTasks = state.taskList.slice();
            newTasks.push( action.taskName );

            // TODO ASK Improve creation of new state object -- use ... syntax?

            return {
                taskList:   newTasks,
                inputError: state.inputError,
                inputText:  state.inputText,
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to delete a new task.
        *
        *   @param {Object} state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {Object} The new and reduced state object.
        ***************************************************************************************************************/
        static deleteTaskReducer( state, action )
        {
            let newTasks = state.taskList.slice();
            newTasks.splice( action.taskIndex, 1 );

            return {
                taskList:   newTasks,
                inputError: state.inputError,
                inputText:  state.inputText,
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to move a task up.
        *
        *   @param {Object} state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {Object} The new and reduced state object.
        ***************************************************************************************************************/
        static moveTaskUpReducer( state, action )
        {
            let newTasks       = state.taskList.slice();
            let taskToMoveUp   = newTasks[ action.taskIndex     ];
            let taskToMoveDown = newTasks[ action.taskIndex - 1 ];

            newTasks[ action.taskIndex - 1 ] = taskToMoveUp;
            newTasks[ action.taskIndex     ] = taskToMoveDown;

            return {
                taskList:   newTasks,
                inputError: state.inputError,
                inputText:  state.inputText,
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to move a task down.
        *
        *   @param {Object} state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {Object} The new and reduced state object.
        ***************************************************************************************************************/
        static moveTaskDownReducer( state, action )
        {
            let newTasks       = state.taskList.slice();
            let taskToMoveUp   = newTasks[ action.taskIndex + 1 ];
            let taskToMoveDown = newTasks[ action.taskIndex     ];

            newTasks[ action.taskIndex     ] = taskToMoveUp;
            newTasks[ action.taskIndex + 1 ] = taskToMoveDown;

            return {
                taskList:   newTasks,
                inputError: state.inputError,
                inputText:  state.inputText,
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to set a text for the input field.
        *
        *   @param {Object} state  The existing state object.
        *   @param {Object} action The action to perform on the state object.
        *
        *   @return {Object} The new and reduced state object.
        ***************************************************************************************************************/
        static setInputFieldReducer( state, action )
        {
            return {
                taskList:   state.taskList,
                inputError: state.inputError,
                inputText:  action.inputText,
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to clear the text in the input field.
        *
        *   @param {Object} state The existing state object.
        *
        *   @return {Object} The new and reduced state object.
        ***************************************************************************************************************/
        static clearInputFieldReducer( state )
        {
            return {
                taskList:   state.taskList,
                inputError: state.inputError,
                inputText:  "",
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to set the input error for the input field.
        *
        *   @param {Object} state The existing state object.
        *
        *   @return {Object} The new and reduced state object.
        ***************************************************************************************************************/
        static setInputErrorReducer( state )
        {
            return {
                taskList:   state.taskList,
                inputError: true,
                inputText:  state.inputText,
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to clear the input error for the input field.
        *
        *   @param {Object} state The existing state object.
        *
        *   @return {Object} The new and reduced state object.
        ***************************************************************************************************************/
        static clearInputErrorReducer( state )
        {
            return {
                taskList:   state.taskList,
                inputError: false,
                inputText:  state.inputText,
            };
        }

        /***************************************************************************************************************
        *   Creates and returns the default state.
        *
        *   @return {Object} The initially constructed state object.
        ***************************************************************************************************************/
        static createDefaultState()
        {
            return {
                taskList:   [],
                inputError: false,
                inputText:  "",
            };
        }
    }
