
class AeropuertoComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            airports: [],
            originalAirports:[]
        }
    }

    async componentDidMount() {

        const r = await fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json');
        const aeropuertos = await r.json();
        this.setState({ airports: aeropuertos });
    }


    render() {
        return (//metemos por aquí el input
            <React.Fragment>
                <div className="div__style">
                    <input type="text" onChange={(e) => {
                        let filtered = e.target.value.toLowerCase();
                        let matched = this.state.airports.filter(a => a.name.toLowerCase().includes(filtered))
                        this.setState({ airtports: matched })
                    }} />
                    {this.state.airports.map(a => <AeropuertoMockComponent key={a.code} airports={a}></AeropuertoMockComponent>)}
                </div>
            </React.Fragment>
        )
    }
}

render(){
    return(
        <React.Fragment>
            <input type="text" onChange={(e) => {
                let coincidences = e.target.value.toLowerCase();
                console.log(coincidences)
                let coincidencesFilter = this.state.originalAirport.filter(a => a.name.toLowerCase().includes(coincidences)) 
                this.setState({airportsArray: coincidencesFilter})
            }    
          }  />
        <div>
            {/* Pinta tantos Componentes Airport como aeropuertos me devuelva el servidor*/}
           { this.state.airportsArray.map(a => <Airport key={a.i} airport={a}></Airport>) }
        </div>
        </React.Fragment>
    )
}
}