import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar nav-tabs navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <h2 className="text-brand">Google Book Search</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/">Search Books</a>
                    </li>
                    <li className="nav-item" id="mybooks">
                        <a className="nav-link" href="/saved">Saved Books</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 export default Nav;