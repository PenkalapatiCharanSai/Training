import { useState } from 'react';
import './App.css'
import Laptops from './components/Laptops'
import Mobiles from './components/Mobiles';
import Watches from './components/Watches';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

       <Laptops/>
       <hr></hr>
       <Mobiles/>
       <hr></hr>
       <Watches/>
    </div>
  )
}

export default App
