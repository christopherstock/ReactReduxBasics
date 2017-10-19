
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
    class TaskListRedux
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
                    return TaskListRedux.createTaskReducer( state, action );
                }

                case ACTION_DELETE_TASK:
                {
                    return TaskListRedux.deleteTaskReducer( state, action );
                }

                case ACTION_MOVE_TASK_UP:
                {
                    return TaskListRedux.moveTaskUpReducer( state, action );
                }

                case ACTION_MOVE_TASK_DOWN:
                {
                    return TaskListRedux.moveTaskDownReducer( state, action );
                }

                default:
                {
                    return state;
                }
            }
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
            let newState = state.slice();

            newState.push( action.taskName );

            return newState;
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
            let newState = state.slice();

            newState.splice( action.taskIndex, 1 );

            return newState;
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
            let newState = state.slice();

            let taskToMoveUp   = newState[ action.taskIndex     ];
            let taskToMoveDown = newState[ action.taskIndex - 1 ];

            newState[ action.taskIndex - 1 ] = taskToMoveUp;
            newState[ action.taskIndex     ] = taskToMoveDown;

            return newState;
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
            let newState = state.slice();

            let taskToMoveUp   = newState[ action.taskIndex + 1 ];
            let taskToMoveDown = newState[ action.taskIndex     ];

            newState[ action.taskIndex     ] = taskToMoveUp;
            newState[ action.taskIndex + 1 ] = taskToMoveDown;

            return newState;
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
                type: ACTION_CREATE_TASK,
                taskName
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'delete task'.
        *
        *   @param {string} taskIndex The index of the task to delete.
        *
        *   @return {Object} The action object for deleting a task.
        ***************************************************************************************************************/
        static deleteTaskAction( taskIndex )
        {
            return {
                type: ACTION_DELETE_TASK,
                taskIndex
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'move task up'.
        *
        *   @param {string} taskIndex The index of the task to move up.
        *
        *   @return {Object} The action object for moving a task up.
        ***************************************************************************************************************/
        static moveTaskUpAction( taskIndex )
        {
            return {
                type: ACTION_MOVE_TASK_UP,
                taskIndex
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'move task down'.
        *
        *   @param {string} taskIndex The index of the task to move down.
        *
        *   @return {Object} The action object for moving a task down.
        ***************************************************************************************************************/
        static moveTaskDownAction( taskIndex )
        {
            return {
                type: ACTION_MOVE_TASK_DOWN,
                taskIndex
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

                    // TODO unlucky 'state' ?
                    taskList: state
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

            return ReactRedux.connect( null, mapDispatchToProps )( TaskInputUnconnected );
        }
    }
