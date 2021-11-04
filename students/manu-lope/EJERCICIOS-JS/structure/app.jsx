function App() {

    return <React.Fragment>
        <ReactRouterDOM.BrowserRouter>
            <Header></Header>
            <ReactRouterDOM.Switch>
                <ReactRouterDOM.Route path="/SignUp">
                    <SignUp></SignUp>
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route path="/SignIn">
                    <SignIn></SignIn>
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route path="/Home">
                    <HomeApp></HomeApp>
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route path="/">
                    <LandingApp></LandingApp>
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route path="*">
                    <LandingApp></LandingApp>
                </ReactRouterDOM.Route>
            </ReactRouterDOM.Switch>
            <Footer></Footer>
        </ReactRouterDOM.BrowserRouter>


    </React.Fragment>
}

ReactDOM.render(
    <App></App>,
    document.getElementById('react-root')
);