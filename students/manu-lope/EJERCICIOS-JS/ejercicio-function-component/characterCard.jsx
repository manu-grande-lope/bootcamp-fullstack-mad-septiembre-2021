// 1.- Crear un componente de función CharacterCard que reciba por props el nombre, color de ojos ,  
//año de nacimiento y género. 
// Dar un estilo de card y mostrar todos los personajes del API en el navegador.

function CharacterCard(props) {

    return <React.Fragment>
            <div className="card__style">
                <ul className="card__style--ul">
                    <li className="card__style--ul-li"><h1>{props.people.name}</h1></li>
                    <li className="card__style--ul-li">{props.people.eye_color}</li>
                    <li className="card__style--ul-li">{props.people.birth_year}</li>
                    <li className="card__style--ul-li">{props.people.gender}</li>
                </ul>
            </div>
    </React.Fragment>

}