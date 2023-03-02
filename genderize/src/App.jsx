import { uiGenderize } from './core/constants/genderize';
import Background from './components/background/Background';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.css';

function App() {
  return (
    <>
      <Background />
      <Header {...uiGenderize.h1} />
      <Main {...uiGenderize} />
    </>
  );
}

export default App;
