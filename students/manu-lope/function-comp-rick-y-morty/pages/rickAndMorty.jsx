
function RickAndMorty() {
    const [data, setData] = React.useState('');
    React.useEffect(() => {
        let arrayURL = []
        for (let i = 1; i < 671; i++) {
            arrayURL.push(i)
        }
        fetch(`https://rickandmortyapi.com/api/character/${arrayURL}`)
            .then(r => r.json())
            .then(d => {
                console.log(d);
                setData(d);
            })
    }, []);
    return <React.Fragment>
        {data.map((e, i) =>
            <RickAndMortyCard key={i}
                name={e.name}
                status={e.status}
                location={e.location.name}
                episode={e.episode[0]}
                image={e.image}
            >
            </RickAndMortyCard>)}
    </React.Fragment>
}