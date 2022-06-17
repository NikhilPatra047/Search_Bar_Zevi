import index from "../index.css";
import React from "react";
import { useGlobalContext } from "../context";

function SearchBar() {
    const { toggleActive } = useGlobalContext();

    return (
        <div className="search">
            <input type="text" 
            placeholder="Search"
            onFocus={toggleActive}
            onBlur={toggleActive}
            />                
        </div>
    );
};

export default SearchBar;