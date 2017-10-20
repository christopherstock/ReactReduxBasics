
    // specify app title
    const APPLICATION_TITLE = "React Redux Task List";

    // assign app title to console and page title
    console.log(     APPLICATION_TITLE );
    document.title = APPLICATION_TITLE;

    // reference main container
    let mainContainer = document.getElementById( "mainContainer" );

    // create redux store
    let store = Redux.createStore(
        TaskListRedux.taskListReducer,
        TaskListRedux.createDefaultState()
    );

    store.dispatch( TaskListRedux.createTaskAction( "Müll rausbringen" ) );
    store.dispatch( TaskListRedux.createTaskAction( "Abwaschen"        ) );
    store.dispatch( TaskListRedux.createTaskAction( "Wäsche waschen"   ) );

    // render App component into main container
    ReactDOM.render(

        <ReactRedux.Provider store={ store }>

            <App
                title={ APPLICATION_TITLE }
            />

        </ReactRedux.Provider>,
        mainContainer
    );
