
function RickAndMortyCard(props){


    return (
    <div className="divContainer___style">
    <img className = "divContainer___style--img"src={props.image} alt="imagen personaje" />
    <div className="divContainer__style--textdiv">
        <h1 className="divContainer___style--h1">{props.name}</h1>
            <div className="div__status">
            {props.status==="Alive" ? <div className="verde"></div> : <div className="rojo"></div>}
            <p>{props.status}</p>
        </div>
        <p className="divContainer___style--p">Last known location:</p>
        <p>{props.location}</p>
        <p className="divContainer___style--p">First seen in:</p>
        <p>{props.episode}</p>
    </div>
</div>
)

}