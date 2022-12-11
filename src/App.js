import { useEffect, useState } from "react";
import DataProcessor from './Components/DataProcessor'
import Llista from './Components/Llista'
import './style.css'

function App() {
  const [diades, setCastells] = useState({});

  const exports = {
    'diades': diades,
    'setCastells': setCastells
  };

  useEffect(() => {
  }, [diades]);

  return (
    <>
      <DataProcessor {...exports} />
      <Llista {...exports} />
    </>
  );
}

export default App;
