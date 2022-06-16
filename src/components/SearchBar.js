import index from "../index.css";
import React, { useState } from "react";
import TrendingBox from "./TrendingBox";

function SearchBar() {
    const [active, setActive] = useState(false);

    const toggleActivate = () => {
        setActive(!active);
    }

    return (
        <div className="main">
            <div className="search">
                <input type="text" 
                placeholder="Search"
                onFocus={toggleActivate}
                onBlur={toggleActivate}
                />                
            </div>
            { active ? <TrendingBox /> : ``}
        </div>
    );
};

export default SearchBar;