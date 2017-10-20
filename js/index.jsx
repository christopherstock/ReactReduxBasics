
    // specify app title
    const APPLICATION_TITLE = "React Redux Task List";

    // assign app title to console and page title
    console.log(     APPLICATION_TITLE );
    document.title = APPLICATION_TITLE;

    // reference main container
    let mainContainer = document.getElementById( "mainContainer" );

    // create redux store
    let store = Redux.createStore(
        Reducer.taskListReducer
        // when you start combining multiple reducers for a nested store, you will not always know the full default state.
        // I would move this to a default parameter of the reducer
    );

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
