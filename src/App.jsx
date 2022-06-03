import {useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState('')
 
  const [object,setObject] = useState([])
 
  const api = ()=> {
    const url =`https://api.nasa.gov/planetary/apod?api_key=HvMlz9rexpp9i1JZBK5P7gymApJDQQTxDef8ugRA&date=${data}`
    fetch(url)
    .then((res) => res.json())
    .then((result) =>{
      setObject(result)
    });
  }

 return (
<div className='App' >
<h1 className='titulo'>Astronomy Picture of the Day</h1>
<h2>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.

</h2>
  <label htmlFor='date'>Select a date</label>

  <input type='date' id='date' onChange={(e) => setData(e.target.value)}/>
  <button type='button' onClick={api}>Search</button>

  <div className='apod'>

  <img src={object.hdurl} />
  <h2>{object.title}</h2>
  <p>{object.explanation}</p>
  <h3>{object.copyright}</h3>



  </div>
 
       
</div>

  )
}

export default App;
