import { useState } from 'react'
import VolumeMixer from './src/components/VolumeMixer'

function App() {
  const [musicVol, setMusicVol] = useState(0.7)
  const [voiceVol, setVoiceVol] = useState(0.8)

  return (
    <div style={{padding:'20px', background:'#000', minHeight:'100vh'}}>
      <h1 style={{color:'white', textAlign:'center'}}>FUELLER PRO</h1>
      <VolumeMixer 
        musicVol={musicVol} 
        voiceVol={voiceVol}
        setMusicVol={setMusicVol} 
        setVoiceVol={setVoiceVol}
      />
      <p style={{color:'gray', marginTop:'20px'}}>
        Volumen Música: {Math.round(musicVol*100)}% | 
        Volumen Voz: {Math.round(voiceVol*100)}%
      </p>
    </div>
  )
}
export default App
