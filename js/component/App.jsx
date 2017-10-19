
    /*******************************************************************************************************************
    *   The entire application component.
    *
    *   TODO ASAP TaskInput state fields to global state.
    *   TODO HIGH Check if TaskList changes when TaskInput state changes by Redux!!
    *   TODO WEAK try: Redux Forms
    *   TODO WEAK try: Extend Redux.Componet
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class App extends React.Component
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return {JSXTransformer} The rendered JSX.
        ***************************************************************************************************************/
        render()
        {
            console.log( "App.render() being invoked" );

            return <div>

                { /* title */ }
                <h1 id="appTitle">{ this.props.title }</h1>

                { /* task input form */ }
                <TaskInput />

                { /* task list */ }
                <TaskList />

            </div>;
        }
    }
