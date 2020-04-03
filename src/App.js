import React, { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    let obj = { node: 1 }
    console.log(obj.node)
    console.log(obj?.node)
    let other = null
    //other.node will error
    console.log(other?.node)
  })

  return <div className="App">Check the console.</div>
}

export default App
