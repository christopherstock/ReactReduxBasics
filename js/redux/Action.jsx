
    const ACTION_CREATE_TASK       = 0;
    const ACTION_DELETE_TASK       = 1;
    const ACTION_MOVE_TASK_UP      = 2;
    const ACTION_MOVE_TASK_DOWN    = 3;
    const ACTION_SET_INPUT_FIELD   = 4;
    const ACTION_CLEAR_INPUT_FIELD = 5;
    const ACTION_SET_INPUT_ERROR   = 6;
    const ACTION_CLEAR_INPUT_ERROR = 7;

    /*******************************************************************************************************************
    *   Specifies all redux action creators.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class Action
    {
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
        *   @param {string} inputText The text to set into the input field.
        *
        *   @return {Object} The action object for setting the input field.
        ***************************************************************************************************************/
        static setInputFieldAction( inputText )
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
    }
