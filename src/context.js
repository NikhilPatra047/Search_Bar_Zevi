import React, { useContext, useEffect, useState } from "react";
import { product } from "./data";

const AppContext = React.createContext();

export function AppProvider({ children }) {
    const [active, setActive] = useState(false);
    const [updatedProduct, setUpdatedProduct] = useState([]); 
    const [search, setSearch] = useState();

    const activeBox = () => {
        setActive(true);
    };

    const inActiveBox = () => {
        setActive(false);
    }

    const toggleCheck = (productID) => {
        const specificItem = updatedProduct.find((item) => item.id === productID);

        specificItem.checked = !specificItem.checked;
        
        setUpdatedProduct([...updatedProduct]);
    };
    
    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setSearch(searchWord);
        const filteredData = product.filter((item) => {
            return item.title.toLowerCase().startsWith(searchWord);
        });

        console.log(filteredData);

        setUpdatedProduct(filteredData);
    };

    useEffect(() => {
        setUpdatedProduct(product);
    }, [product]);

    return (
        <AppContext.Provider value = {{active, activeBox, inActiveBox, toggleCheck, updatedProduct, handleFilter, search, setSearch}}>
            { children }
        </AppContext.Provider>
    );
};

export function useGlobalContext() {
    return useContext(AppContext);
};

