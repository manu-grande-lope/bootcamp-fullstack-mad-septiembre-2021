
function FilmsMain() {

    React.useEffect(() => {
        fetch("https://swapi.dev/api/films/?format=json")
            .then(r => r.json())
            .then(r = data)
    }, []);

    return <React.Fragment>
        <FilmsCard title={data.results.title}></FilmsCard>,
        <FilmsCard episode_id={data.results.episode_id}></FilmsCard>,
        <FilmsCard release_date={data.results.release_date}></FilmsCard>,
        <FilmsCard opening_crawl={data.results.opening_crawl}></FilmsCard>,

    </React.Fragment>
}