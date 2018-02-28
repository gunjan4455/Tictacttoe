import React from "react";

import {Link} from "react-router-dom";

const Header = (props) => (
    <div>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to='/home'><h1>TicTacToe</h1></Link>
                </div>
            </div>
        </nav>
        <div className="sidenav">
            <Link to='/home'>Game</Link>
            <Link to='/scoreBoard'>LeaderBoard</Link>
        </div>

    </div>);

Header.propTypes = {};
export default Header;
