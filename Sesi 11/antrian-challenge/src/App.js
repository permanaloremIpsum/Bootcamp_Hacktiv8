import './App.css';
import Header from './component/Header';
import Antrian from './component/Antrian';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    document.title = `Antrian Challenge`
  })
  return (
    <div className="container">
      <Header/>
      <hr/>
      <Antrian/>
      <hr/>
    </div>
  );
}

export default App;
