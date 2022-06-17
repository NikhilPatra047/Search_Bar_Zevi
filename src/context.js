import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export function AppProvider({ children }) {
    const [active, setActive] = useState(false);
    const [check, setCheck] = useState(false);

    const toggleActive = () => {
        setActive(!active);
    };

    const toggleCheck = (id, data) => {
        data.filter((item) => {
            if(item.id === id) {
                setCheck(!check);
            }
        })
        // setCheck(!check);
    };
    
    return (
        <AppContext.Provider value = {{active, toggleActive, toggleCheck, check}}>
            { children }
        </AppContext.Provider>
    );
};

export function useGlobalContext() {
    return useContext(AppContext);
};

