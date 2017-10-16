
    // specify the application title
    const APPLICATION_TITLE = "React Redux Task List";

    // acclaim debug console and set page title
    console.log(     APPLICATION_TITLE );
    document.title = APPLICATION_TITLE;

    // reference the main container
    let mainContainer = document.getElementById( "mainContainer" );

    // render the App component into the main container
    ReactDOM.render(

        <window.ReactRedux.Provider store={ window.Redux.createStore( taskListReducer ) }>

            <App
                title={ APPLICATION_TITLE }
            />

        </window.ReactRedux.Provider>,
        mainContainer
    );
