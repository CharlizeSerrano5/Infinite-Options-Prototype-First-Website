import React from 'react';
import './SortBar.css';

function SortBar() {
    return (
        <div className="sortBar">
            <div className="sortBar_left">
                {/* <img src="" alt="" /> */}
                <div className='button-container'>
                    <button className='button-one'>
                        All Games
                    </button>
                    <button className='button-two'>
                        Latest Games
                    </button>    
                </div>
                
            </div>
            <div className="sortBar_center">

                
                {/* place a search bar here */}
                <div className="search-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                    <input type='search' id='search'>
                        
                    </input>
                </div>
                
                {/* <ul className="sortBar_lists">
                    <li><a href="Home">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#"> Blog</a></li>
                    <li><a href="#"> Contract</a></li>

                </ul> */}
            </div>
            <div className="sortBar_right">
                <button>
                    Rating
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default SortBar