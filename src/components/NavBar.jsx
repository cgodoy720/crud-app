import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <h1>Bookmarks</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/new">Add Bookmark</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;