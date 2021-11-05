function SignIn() {

    function handleSubmit(e) {
        e.preventDefault()
        let recibo = localStorage.getItem("user_data");
        console.log(JSON.parse(recibo)[0].name);
        //comprobar que recibo.name === idName y password === idPassword
        //

    }



    return <div className="form__container">
        <h1>LOGIN</h1>
        <form className="form__style" onSubmit={handleSubmit}>
            <input type="text" id="name" name="user_name" />
            <label htmlFor="nickname">Nickname:</label>
            <input type="text" id="nickname" name="user_nickname" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="user_password" />
            <button type="submit">LOGIN</button>
        </form>



    </div>
}