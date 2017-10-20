
    const ACTION_CREATE_TASK       = 0;
    const ACTION_DELETE_TASK       = 1;
    const ACTION_MOVE_TASK_UP      = 2;
    const ACTION_MOVE_TASK_DOWN    = 3;
    const ACTION_SET_INPUT_FIELD   = 4;
    const ACTION_CLEAR_INPUT_FIELD = 5;
    const ACTION_SET_INPUT_ERROR   = 6;
    const ACTION_CLEAR_INPUT_ERROR = 7;

    /*******************************************************************************************************************
    *   Contains the Reducer method for the react-redux system.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class TaskListRedux
    {
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
                    newState = TaskListRedux.createTaskReducer( state, action );
                    break;
                }

                case ACTION_DELETE_TASK:
                {
                    newState = TaskListRedux.deleteTaskReducer( state, action );
                    break;
                }

                case ACTION_MOVE_TASK_UP:
                {
                    newState = TaskListRedux.moveTaskUpReducer( state, action );
                    break;
                }

                case ACTION_MOVE_TASK_DOWN:
                {
                    newState = TaskListRedux.moveTaskDownReducer( state, action );
                    break;
                }

                case ACTION_SET_INPUT_FIELD:
                {
                    newState = TaskListRedux.setInputFieldReducer( state, action );
                    break;
                }

                case ACTION_CLEAR_INPUT_FIELD:
                {
                    newState = TaskListRedux.clearInputFieldReducer( state );
                    break;
                }

                case ACTION_SET_INPUT_ERROR:
                {
                    newState = TaskListRedux.setInputErrorReducer( state );
                    break;
                }

                case ACTION_CLEAR_INPUT_ERROR:
                {
                    newState = TaskListRedux.clearInputErrorReducer( state );
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

            // TODO use ... syntax

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
        *   Specifies the redux action 'create task'.
        *
        *   @param {string} taskName The name of the task to create.
        *
        *   @return {Object} The action object for creating a task.
        ***************************************************************************************************************/
        static createTaskAction( taskName  )
        {
            return {
                type:     ACTION_CREATE_TASK,
                taskName: taskName,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'delete task'.
        *
        *   @param {number} taskIndex The index of the task to delete.
        *
        *   @return {Object} The action object for deleting a task.
        ***************************************************************************************************************/
        static deleteTaskAction( taskIndex )
        {
            return {
                type:      ACTION_DELETE_TASK,
                taskIndex: taskIndex,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'move task up'.
        *
        *   @param {number} taskIndex The index of the task to move up.
        *
        *   @return {Object} The action object for moving a task up.
        ***************************************************************************************************************/
        static moveTaskUpAction( taskIndex )
        {
            return {
                type:      ACTION_MOVE_TASK_UP,
                taskIndex: taskIndex,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'move task down'.
        *
        *   @param {number} taskIndex The index of the task to move down.
        *
        *   @return {Object} The action object for moving a task down.
        ***************************************************************************************************************/
        static moveTaskDownAction( taskIndex )
        {
            return {
                type:      ACTION_MOVE_TASK_DOWN,
                taskIndex: taskIndex,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'set input field'.
        *
        *   @param {string} inputValue The text to set into the input field.
        *
        *   @return {Object} The action object for setting the input field.
        ***************************************************************************************************************/
        static setInputFieldAction( inputValue )
        {
            return {
                type:      ACTION_SET_INPUT_FIELD,
                inputText: inputText,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'clear input field'.
        *
        *   @return {Object} The action object for clearing the input field.
        ***************************************************************************************************************/
        static clearInputFieldAction()
        {
            return {
                type: ACTION_CLEAR_INPUT_FIELD,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'set input error'.
        *
        *   @return {Object} The action object for setting the input error.
        ***************************************************************************************************************/
        static setInputErrorAction()
        {
            return {
                type: ACTION_SET_INPUT_ERROR,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'clear input error'.
        *
        *   @return {Object} The action object for clearing the input error.
        ***************************************************************************************************************/
        static clearInputErrorAction()
        {
            return {
                type: ACTION_CLEAR_INPUT_ERROR,
            }
        }

        /***************************************************************************************************************
        *   Connects the react component 'TaskList' with redux and returns the connected instance.
        *
        *   @return {Object} The connected react component.
        ***************************************************************************************************************/
        static connectTaskList()
        {
            const mapStateToProps = ( state ) => {
                return {
                    taskList: state.taskList
                }
            };

            const mapDispatchToProps = ( dispatch ) => {
                return {
                    onTaskDelete:   ( index ) => dispatch( TaskListRedux.deleteTaskAction(   index ) ),
                    onTaskMoveUp:   ( index ) => dispatch( TaskListRedux.moveTaskUpAction(   index ) ),
                    onTaskMoveDown: ( index ) => dispatch( TaskListRedux.moveTaskDownAction( index ) ),
                }
            };

            return ReactRedux.connect(
                mapStateToProps,
                mapDispatchToProps
            )( TaskListUnconnected );
        }

        /***************************************************************************************************************
        *   Connects the react component 'TaskInput' with redux and returns the connected instance.
        *
        *   @return {Object} The connected react component.
        ***************************************************************************************************************/
        static connectTaskInput()
        {
            const mapDispatchToProps = ( dispatch ) => {
                return {
                    onTaskCreate: ( text ) => dispatch( TaskListRedux.createTaskAction( text ) ),
                }
            };

            return ReactRedux.connect(
                null,
                mapDispatchToProps
            )( TaskInputUnconnected );
        }
    }
