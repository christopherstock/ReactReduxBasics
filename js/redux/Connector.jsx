
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
        static connectTaskList( Component )
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
                // I would not hard-code the component that should be connected. Often, you will want to connect another components with the same properties
            )( Component );
        }

        /***************************************************************************************************************
        *   Connects the react component 'TaskInput' with redux and returns the connected instance.
        *
        *   @return {Object} The connected react component.
        ***************************************************************************************************************/
        static connectTaskInput( Component )
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
                    /*
                     *  input field content and validation state are not necessarily something I would store in the "global"
                     *  redux state.
                     *  If there is no reason for them to be displayed in different components, I would keep those in the "local"
                     *  component state.
                     **/
                    onSetInputField:   ( text ) => dispatch( Action.setInputFieldAction(   text ) ),
                    onClearInputField: ()       => dispatch( Action.clearInputFieldAction()       ),
                    onSetInputError:   ()       => dispatch( Action.setInputErrorAction()         ),
                    onClearInputError: ()       => dispatch( Action.clearInputErrorAction()       ),
                }
            };

            return ReactRedux.connect(
                mapStateToProps,
                mapDispatchToProps
            )( Component );
        }
    }
