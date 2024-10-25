import BottomButtons from './components/BottomButtons/BottomButtons';
import MainForm from './components/MainForm/MainForm';
import RandomBox from './components/RandomBox/RandomBox';

function App() {
  return (
    <>
      <div>
        <RandomBox />
      </div>
      <MainForm />
      <BottomButtons />
    </>
  );
}

export default App;
