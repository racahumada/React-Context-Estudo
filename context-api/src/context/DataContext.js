import React, { createContext, useState } from "react";

export const DataContext = createContext()

const defaultData = {
    nome: 'Ricardo',
    idade: 32
}

export default function DataProvider({children}) {

    const [data, setData] = useState(defaultData)

    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}
