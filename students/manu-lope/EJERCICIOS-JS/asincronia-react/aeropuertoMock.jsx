class AeropuertoMockComponent extends React.Component {
        constructor (props) { // las props vienen como parámetro de entrada del constructor y es un objeto
            super (props)
        }
        render(){
        
            return(
                <div className="div__style">
                    <p>Name: {this.props.airports.name}</p>
                    <p>Country: {this.props.airports.country}</p>
                    <p>State: {this.props.airports.state}</p>
                    <p>City: {this.props.airports.city}</p>
                    <p>Lat: {this.props.airports.lat}</p>
                    <p>Long: {this.props.airports.long}</p>
                </div>
            )
        }
    
    }
