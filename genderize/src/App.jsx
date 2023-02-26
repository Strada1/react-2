import { uiGenderize } from './core/constants/genderize';
import Background from './components/background/Background';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.css';

function App() {
  return (
    <>
      <Background />
      <Header parameters={uiGenderize.h1} />
      <Main parameters={uiGenderize} />
    </>
  );
}

export default App;
