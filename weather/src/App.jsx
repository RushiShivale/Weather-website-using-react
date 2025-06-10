import { useState } from 'react'
import WeatherApp from './WeatherApp'
import './App.css'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <WeatherApp />

      <Analytics />
    </div>
  )
}

export default App
