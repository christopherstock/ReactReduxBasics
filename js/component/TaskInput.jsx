
    /*******************************************************************************************************************
    *   Represents the input component that lets the user create new tasks.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class TaskInputUnconnected extends React.Component
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return {JSXTransformer} The rendered JSX.
        ***************************************************************************************************************/
        render()
        {
            console.log( "TaskInput.render() being invoked" );

            return <form onSubmit={ ( event ) => { this.onFormSubmit( event ); } }>

                { /* new task input */ }
                <input
                    id="newTask"
                    type="text"
                    maxLength="50"
                    className={ this.props.inputError ? "input error" : "input" }
                    value={     this.props.inputText }
                    onChange={  ( event ) => { this.onInputChange( event ); } }
                />

                <br />

                { /* new task button */ }
                <input
                    id="submitButton"
                    type="submit"
                    value="Create Task"
                    className="button"
                />

            </form>;
        }

        /***************************************************************************************************************
        *   Being invoked when the input field value changes.
        *
        *   @param {Event} event The event when the input field value changes.
        ***************************************************************************************************************/
        onInputChange( event )
        {
            // TODO ASK good practice?
            // TODO ASK bundle two different actions in reducer method?

            console.log( "TaskInput.onInputChange being invoked" );

            // assign text to input field
            this.props.onClearInputError();
            this.props.onSetInputField( event.target.value );
        }

        /***************************************************************************************************************
        *   Being invoked when the form is submitted.
        *
        *   @param {Event} event The form submission event.
        ***************************************************************************************************************/
        onFormSubmit( event )
        {
            console.log( "TaskInput.onFormSubmit being invoked" );

            // suppress page reload
            event.preventDefault();

            // trim entered text
            let enteredText = this.props.inputText.trim();

            // check entered text
            console.log( "Trimmed text in the box is [" + enteredText + "]" );
            if ( enteredText.length === 0 )
            {
                console.log( "Empty text input detected." );

                // set error state
                this.props.onSetInputError();
                this.props.onClearInputField();
            }
            else
            {
                // clear error state
                this.props.onClearInputError();
                this.props.onClearInputField();

                // invoke parent listener
                this.props.onTaskCreate( enteredText );
            }
        };
    }

    const TaskInput = Connector.connectTaskInput();
