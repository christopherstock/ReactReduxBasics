
    // specify app title
    const APPLICATION_TITLE = "React Redux Task List";

    // assign app title to console and page title
    console.log(     APPLICATION_TITLE );
    document.title = APPLICATION_TITLE;

    // reference main container
    let mainContainer = document.getElementById( "mainContainer" );

    // create redux store
    let store = Redux.createStore( Reducer.taskListReducer );

    store.dispatch( Action.createTaskAction( "Müll rausbringen" ) );
    store.dispatch( Action.createTaskAction( "Abwaschen"        ) );
    store.dispatch( Action.createTaskAction( "Wäsche waschen"   ) );

    // render App component into main container
    ReactDOM.render(

        <ReactRedux.Provider store={ store }>

            <App
                title={ APPLICATION_TITLE }
            />

        </ReactRedux.Provider>,
        mainContainer
    );
