import './Nav.scss'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeClassName="active1" to="/" exact>Home</NavLink>
            <NavLink activeClassName="active1" to="/timer">Timer</NavLink>
            <NavLink activeClassName="active1" to="/todo">Todo</NavLink>            <NavLink activeClassName="active1" to="/todo">Todo</NavLink>
            <NavLink activeClassName="active1" to="/blog">Blog</NavLink>
            <NavLink activeClassName="active1" to="/secret">Secret</NavLink>
            <hr />
        </div>
    )
}
export default Nav