import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                {/* <img src="" alt="" /> */}
                <h2><a href="Home">Game</a></h2>
            </div>
            <div className="header_center">
                <ul className="header_lists">
                    <li><a href="Home">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#"> Blog</a></li>
                    <li><a href="#"> Contract</a></li>

                </ul>
            </div>
            <div className="header_right">
                <button>
                    <i class="bi bi-search"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>Help me Find</button>
            </div>
        </div>
    )
}

export default Header