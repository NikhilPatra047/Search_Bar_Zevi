import React, { useEffect, useState, useCallback } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);

    const getData = useCallback(async () => {
        const response = await fetch(url);
        const responseData = await response.json();

        setData(responseData.data);
    });

    useEffect(() => {
        getData();
    }, [url]);

    return { data };
};

