import { useEffect } from 'react';
import './App.css';
import ClassClock from './component/ClassClock';
import FunctionClock from './component/FunctionClock';

function App() {
  useEffect(() => {
    document.title = `Realtime CLOCK`
  })
  return (
    <div>
      <ClassClock/>
      <FunctionClock/>
    </div>
  );
}

export default App;
