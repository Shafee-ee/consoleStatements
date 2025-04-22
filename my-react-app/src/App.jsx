import { useState } from 'react'

import './App.css'

function App() {

  const [isVisible, setIsVisible] = useState(false)
  return (
    <div> <h1> REACT IS ON</h1>
      <p>Current Count:{count}</p>

      <button onClick={() => setCount(count + 9999)}>increment</button>
    </div>
  );
}

export default App
