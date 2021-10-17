import React from 'react'
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import TrocarData from './components/TrocarData';
import DataProvider from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <div>
        <Pagina1 />
        <Pagina2 />
        <TrocarData />
      </div>
    </DataProvider>
  );
}

export default App;
