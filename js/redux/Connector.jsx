
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

            const mapDispatchToProps = ( dispatch ) => {
                return {
                    onTaskDelete:   ( index ) => dispatch( Action.deleteTaskAction(   index ) ),
                    onTaskMoveUp:   ( index ) => dispatch( Action.moveTaskUpAction(   index ) ),
                    onTaskMoveDown: ( index ) => dispatch( Action.moveTaskDownAction( index ) ),
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
            const mapStateToProps = ( state ) => {
                return {
                    inputError: state.inputError,
                    inputText:  state.inputText
                }
            };

            const mapDispatchToProps = ( dispatch ) => {
                return {
                    onTaskCreate:      ( text ) => dispatch( Action.createTaskAction(      text ) ),
                    onSetInputField:   ( text ) => dispatch( Action.setInputFieldAction(   text ) ),
                    onClearInputField: ()       => dispatch( Action.clearInputFieldAction()       ),
                    onSetInputError:   ()       => dispatch( Action.setInputErrorAction()         ),
                    onClearInputError: ()       => dispatch( Action.clearInputErrorAction()       ),
                }
            };

            return ReactRedux.connect(
                mapStateToProps,
                mapDispatchToProps
            )( TaskInputUnconnected );
        }
    }
