
    /*******************************************************************************************************************
    *   Specifies all redux connector methods.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class Connector
    {
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

            const mapDispatchToProps =
            {
                onTaskDelete:   Action.deleteTaskAction,
                onTaskMoveUp:   Action.moveTaskUpAction,
                onTaskMoveDown: Action.moveTaskDownAction,
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
            const mapStateToProps = ( state ) => {
                return {
                    inputError: state.inputError,
                    inputText:  state.inputText
                }
            };

            const mapDispatchToProps = {
                onTaskCreate:      Action.createTaskAction,
                onSetInputField:   Action.setInputFieldAction,
                onClearInputField: Action.clearInputFieldAction,
                onSetInputError:   Action.setInputErrorAction,
                onClearInputError: Action.clearInputErrorAction,
            };

            return ReactRedux.connect(
                mapStateToProps,
                mapDispatchToProps
            )( TaskInputUnconnected );
        }
    }
