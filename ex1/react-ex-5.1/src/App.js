
import './index.css';
import Button from './components/buttons';



function App() {
  return (
    <div className="App">
      <Button text={"important"} isBold={true}></Button>
      <Button text={"not important"} isBold={false}></Button>
    </div>
  );
}

export default App;
