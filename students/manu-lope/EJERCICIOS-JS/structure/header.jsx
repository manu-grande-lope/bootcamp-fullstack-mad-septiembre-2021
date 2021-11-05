function Header(){


    return (
        <div className="header__style">
            <ul className="header__style--ul">
                <li><ReactRouterDOM.Link to="/SignIn">SignIn</ReactRouterDOM.Link></li>
                <li><ReactRouterDOM.Link to="/SignUp">SignUp</ReactRouterDOM.Link></li>
                <li><ReactRouterDOM.Link to="/Home">Home</ReactRouterDOM.Link></li>
            </ul>
        </div>
    )
}