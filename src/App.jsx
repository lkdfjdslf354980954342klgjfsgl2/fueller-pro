import { useState } from 'react'
import VolumeMixer from './components/VolumeMixer'

function App() {
  const [musicVol, setMusicVol] = useState(0.7)
  const [voiceVol, setVoiceVol] = useState(0.8)

  return (
    <div style={{padding:'20px', background:'#000', minHeight:'100vh', color:'white'}}>
      <h1 style={{textAlign:'center'}}>FUELLER PRO</h1>
      <VolumeMixer 
        musicVol={musicVol} 
        voiceVol={voiceVol}
        setMusicVol={setMusicVol} 
        setVoiceVol={setVoiceVol}
      />
    </div>
  )
}
export default App
