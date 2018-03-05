import React from 'react'
import Header from './../components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <p>Yo, it's the parent compnent.</p>

      <style jsx>{`
        p {
          color: red;
        }
      `}</style>
    </div>
  )
}

export default App
