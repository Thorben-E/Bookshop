import {Link, Outlet} from "react-router-dom"
function Home() {
    return <div className="container">
        <h2>THE BEST RATES</h2>
        <Link className="homeButton" to="/currencies">Currencies</Link>
    </div>
}

export default Home;