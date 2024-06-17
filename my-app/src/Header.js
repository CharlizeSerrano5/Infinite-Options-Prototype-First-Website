import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                {/* <img src="" alt="" /> */}
                <h2><a href="#">Game</a></h2>
            </div>
            <div className="header_center">
                <ul className="header_lists">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href=""> Blog</a></li>
                    <li><a href=""> Contract</a></li>

                </ul>
            </div>
            <div className="header_right">
                <button>
                <i class="bi bi-search"></i>
                Help me Find</button>

            </div>
        </div>
    )
}

export default Header