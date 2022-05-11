
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="v-header container">
        <div className='fullscreen-video-wrap'>
          <video src='../assets/grass-in-wind.mov' autoPlay loop muted="true" ></video>
        </div>
        <div className='header-overlay'> </div>
        <div className='header-content'> 
          <h1> Momentai </h1>
          <p>Take it easy</p>
          <a href="/" className='btn'> Read More</a>
        </div>
      </header>
    </div>
  );
}

export default App;
