function SignUp() {
    function handleSubmit(e) {
        e.preventDefault()
        let user_data = []
        let userObj = {
            name: e.target.name.value.toLowerCase(),
            nickname: e.target.nickname.value.toLowerCase(),
            password: e.target.password.value
        }
        user_data.push(userObj);
        localStorage.setItem("user_data", JSON.stringify(user_data));


        // e.target.value.toLowerCase();
        // localStorage.setItem(user_data, JSON.stringify(user_data))
        // localStorage.setItem("nickname", JSON.stringify(user_nickname))
        // localStorage.setItem("password", JSON.stringify(user_password))
    }


    return <React.Fragment>
        <div className="form__container">
            <h3>REGISTRO</h3>
            <form className="form__style" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="user_name" />
                <label htmlFor="nickname">Nickname:</label>
                <input type="text" id="nickname" name="user_nickname" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="user_password" />
                <button type="submit">Click Aquí</button>
            </form>
        </div>


    </React.Fragment>
}

// Gestionar todo con un evento onClick para el button o un onSubmit 
// localStorage setItem sustituye al post del form
//localStorage.setItem("usuario", JSON.stringify(mi_objeto));
//localStorage.getItem("usuario", JSON.stringify(mi_objeto));
