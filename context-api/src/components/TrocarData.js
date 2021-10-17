import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const data = { 
    nome: 'Emily',
    idade: 26
}

export default function TrocarData() {

    const { setData } = useContext(DataContext)

    return (
        <div>
            <button
                onClick={() => setData(data)}
            >
                Trocar Data
            </button>
        </div>
    )
}
