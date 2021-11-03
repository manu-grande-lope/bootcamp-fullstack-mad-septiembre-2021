
function CharacterMain() {

    React.useEffect(() => {
        fetch("https://swapi.dev/api/people/?format=json")
            .then(r => r.json())
            .then(d => data)
    },[]);
    console.log(data)

    return <React.Fragment>
        <CharacterCard name={data.results.name}></CharacterCard>
        <CharacterCard eye_color={data.results.eye_color}></CharacterCard>
        <CharacterCard birth_date={data.results.birth_date}></CharacterCard>
        <CharacterCard gender={data.results.gender}></CharacterCard>
        </React.Fragment>
    
}