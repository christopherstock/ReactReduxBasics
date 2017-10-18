
    // specify app title
    const APPLICATION_TITLE = "React Redux Task List";

    // assign app title to console and page title
    console.log(     APPLICATION_TITLE );
    document.title = APPLICATION_TITLE;

    // reference main container
    let mainContainer = document.getElementById( "mainContainer" );

    // render App component into main container
    ReactDOM.render(

        <ReactRedux.Provider store={ Redux.createStore( TaskListRedux.taskListReducer ) }>

            <App
                title={ APPLICATION_TITLE }
            />

        </ReactRedux.Provider>,
        mainContainer
    );
