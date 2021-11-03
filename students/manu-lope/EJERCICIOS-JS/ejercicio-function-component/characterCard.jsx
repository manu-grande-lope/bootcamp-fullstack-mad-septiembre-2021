// 1.- Crear un componente de función CharacterCard que reciba por props el nombre, color de ojos ,  
//año de nacimiento y género. 
// Dar un estilo de card y mostrar todos los personajes del API en el navegador.

function CharacterCard(props) {

    return <React.Fragment>
        <div className="card__style">
            <ul className="card__style--ul">
                <li className="card__style--ul-li">{props.name}</li>
                <li className="card__style--ul-li">{props.eye_color}</li>
                <li className="card__style--ul-li">{props.birth_year}</li>
                <li className="card__style--ul-li">{props.gender}</li>
            </ul>

        </div>
    </React.Fragment>

}