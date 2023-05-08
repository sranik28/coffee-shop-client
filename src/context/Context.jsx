import { createContext, useContext, useEffect, useState } from "react";

const ApiCrete = createContext();

const DataProvider = ({ children }) => {
    const [coffees, setCoffees] = useState([])


    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/coffee');
        const data = await res.json();
        setCoffees(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const allData = {coffees}
    return <ApiCrete.Provider value={allData}>
        {children}
    </ApiCrete.Provider>
}

const useDataGlobally = () => {
    return useContext(ApiCrete)
}

export { DataProvider, useDataGlobally }