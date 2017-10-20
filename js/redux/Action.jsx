
    const ACTION_CREATE_TASK       = 'ACTION_CREATE_TASK';
    const ACTION_DELETE_TASK       = 'ACTION_DELETE_TASK';
    const ACTION_MOVE_TASK_UP      = 'ACTION_MOVE_TASK_UP';
    const ACTION_MOVE_TASK_DOWN    = 'ACTION_MOVE_TASK_DOWN';
    const ACTION_SET_INPUT_FIELD   = 'ACTION_SET_INPUT_FIELD';
    const ACTION_CLEAR_INPUT_FIELD = 'ACTION_CLEAR_INPUT_FIELD';
    const ACTION_SET_INPUT_ERROR   = 'ACTION_SET_INPUT_ERROR';
    const ACTION_CLEAR_INPUT_ERROR = 'ACTION_CLEAR_INPUT_ERROR';

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
