import { Link, NavLink } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>Home de La Daianeta 😎</h1>

            <button>
                <Link to='/about'>About</Link>
            </button>

            <button>
                <NavLink
                    to='/profile'
                    // style={({ isActive }) => isActive ? { backgroundColor: 'yellow'} : { backgroundColor: 'red' }}
                >
                    Profile
                </NavLink>
            </button>
        </div>
    )
}

export default Home;