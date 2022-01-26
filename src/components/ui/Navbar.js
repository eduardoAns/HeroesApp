import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
            
            
            

            <div className="navbar-collapse ">
                <div className="navbar-nav">

                <Link 
                className="navbar-brand ps-5 " 
                to="/"
            >
                Asociaciones
                </Link>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link ps-5" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link ps-5" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link ps-5" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse d-flex justify-content-star ps-5 ">
                <ul className="navbar-nav ml-auto ">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;