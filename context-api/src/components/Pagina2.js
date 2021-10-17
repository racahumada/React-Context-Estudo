import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'

export default function Pagina2() {

    const {data} = useContext(DataContext)

    return (
        <div>
            <h1>Página 2</h1>
            <hr />
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}
