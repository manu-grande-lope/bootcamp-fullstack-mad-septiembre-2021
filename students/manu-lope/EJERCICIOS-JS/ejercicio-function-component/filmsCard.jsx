function FilmsCard(props) {

    return <React.Fragment>
        <div className="card__style">
            <ul className="card__style--ul">
                <li className="card__style--ul-li">{props.title}</li>
                <li className="card__style--ul-li">{props.episode_id}</li>
                <li className="card__style--ul-li">{props.release_date}</li>
                <li className="card__style--ul-li">{props.opening_crawl}</li>
            </ul>

        </div>
    </React.Fragment>

}