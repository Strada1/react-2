import { useScreen } from './hooks/useScreen';
import './App.css'

function App() {
  const {width, isMobile, breakpoint} = useScreen();

  return (
    <div className="App">
      <h1>{isMobile ? 'Mobile' : 'Desktop'}</h1>
      <p>{`breakpoint: ${breakpoint}`}</p>
      <p>{`width: ${width}`}</p>
    </div>
  )
}

export default App;
