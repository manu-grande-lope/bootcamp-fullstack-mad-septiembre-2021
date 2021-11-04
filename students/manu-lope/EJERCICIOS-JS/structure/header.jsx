function Header(){


    return (
        <div>
            <ul>
                <li><ReactRouterDOM.Link to="/SignIn">SignIn</ReactRouterDOM.Link></li>
                <li><ReactRouterDOM.Link to="/SignUp">SignUp</ReactRouterDOM.Link></li>
                <li><ReactRouterDOM.Link to="/Home">Home</ReactRouterDOM.Link></li>
            </ul>
        </div>
    )
}