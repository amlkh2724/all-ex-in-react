
import './App.css';



function App() {
  const Data = ["hello", "world"]
  const [hello, world] = Data
  const Number1 = 5;
  const Number2 = 6;
  const Str=Number1 + Number2
  const string = "I love React!"

  return (
    <div>
      <p>q1</p>
      <div>{hello}{" "}{world}</div>
      <p>q2</p>
      <div>{Number1} + {Number2} = {Str}</div>
      <p>q3</p>
      <div>The string’s length is:{string.length}</div>

    </div>
  );
}

export default App;
