class App extends React.Component {
    render() {
        return (<React.Fragment>
            {/* <AeropuertoMockComponent name="Aeropuerto Adolfo Suarez Madrid Barajas "
                country="Spain"
                state="Madrid"
                city="Barajas"
                lat="276594827"
                long="8740934840039">
            </AeropuertoMockComponent> */}
            <AeropuertoComponent></AeropuertoComponent>
        </React.Fragment>)
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("react-container-jsx")
)