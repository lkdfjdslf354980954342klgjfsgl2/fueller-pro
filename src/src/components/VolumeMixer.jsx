export default function VolumeMixer({ musicVol, voiceVol, setMusicVol, setVoiceVol }) {
  return (
    <div style={{background:'#18181b', padding:'16px', borderRadius:'16px', color:'white', marginTop:'20px'}}>
      <h3>Mixer de Volumen</h3>
      <div>
        <p>Música: {Math.round(musicVol*100)}%</p>
        <input type="range" min="0" max="1" step="0.01" value={musicVol} 
          onChange={e => setMusicVol(e.target.value)} style={{width:'100%'}} />
      </div>
      <div>
        <p>Voz de Notas: {Math.round(voiceVol*100)}%</p>
        <input type="range" min="0" max="1" step="0.01" value={voiceVol} 
          onChange={e => setVoiceVol(e.target.value)} style={{width:'100%'}} />
      </div>
    </div>
  )
}
