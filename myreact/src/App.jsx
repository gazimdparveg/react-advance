import { useState } from 'react' 
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import From from './From';
import FaceDate from './FaceDate';
import ShowImage from './ShowImage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <From/> 
     <FaceDate/>
     <ShowImage/>
    </>
  )
}

export default App
