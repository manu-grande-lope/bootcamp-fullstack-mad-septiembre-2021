
function CharacterMain() {
    const [characters, setCharacters] = React.useState([]);
    React.useEffect(() => {

        for (let i = 1; i <= 82; i++) {
            fetch(`https://swapi.dev/api/people/${i}`)
                .then(r => r.json())
                .then(d => setCharacters(oldValue => oldValue.concat([d])))
        }
    }, []);

    return <React.Fragment>
        <ul>
            {characters.map((c, i) => <CharacterCard key={i} people={c}></CharacterCard>)}
        </ul>
    </React.Fragment>

}