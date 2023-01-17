import {Link, Outlet} from "react-router-dom"
function Home() {
    return <div className="container">
        <h2>THE BEST BOOKS</h2>
        <Link className="homeButton" to="/currencies">Go to books</Link>
    </div>
}

export default Home;