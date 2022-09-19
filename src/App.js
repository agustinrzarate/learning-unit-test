
import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red')
  const [enableButton, setEnableButton] = useState(false)
  const changeColor = color === 'red' ? 'blue' : 'red'
  return (
    <div >
      <button style={{background: color}}  onClick={() => setColor(changeColor)} disabled={enableButton}>Change to {changeColor}</button>
      <div>
        <label htmlFor="disable-button-checkbox">Disable button</label>
        <input id="disable-button-checkbox" type="checkbox" checked={enableButton} onChange={() => setEnableButton(!enableButton)}/>
      </div>
      
    </div>
  );
}

export default App;
