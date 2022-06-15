import index from "../index.css";
import React, { useRef } from "react";

function SearchBar() {
    return (
        <div className="main">
            <div className="search">
                <input type="text" 
                placeholder="Search"
                />                
            </div>
        </div>
    );
};

export default SearchBar;