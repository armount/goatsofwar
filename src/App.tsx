import './App.css'
import goatsCover from './assets/background.jpg'

function App() {

  return (
    <div style={{position: 'relative', width: "100vw", height: "100vh"}}>
      <div style={{
          position: 'absolute',
          width: "100%", 
          height: "100%", 
          backgroundImage: `url(${goatsCover})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          opacity: 0.15
        }}
        >
      </div>
      <div style={{
          position: 'absolute',
          width: "100%",
          height: "100%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}
        >
          <div style={{ 
            height: "100%", 
            width: "100%", 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column'}
            }
          >
            <div style={{fontSize: "3rem", fontWeight: "bold"}}>GOats OF WAR</div>
            <div>Coming Soon</div>
        </div>
      </div>
    </div>
  )
}

export default App
