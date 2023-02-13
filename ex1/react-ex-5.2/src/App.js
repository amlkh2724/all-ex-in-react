import './index.css';
import CreateImg from './components/imgs';


function App() {
  const links = ["SHARE", "EXPLORE", "CLICK"].map(link => <a href="#">{link}</a>)
  const titles = ["img-one", "img-two", "img-three"]
  const descriptions = ["img with style black and white", "img styles", "img look"]

  const imgs = [1, 2, 3].map(img => {
    const randomLinks = Math.floor(Math.random() * links.length)
    const randomTitles = Math.floor(Math.floor(Math.random() * titles.length))
    const randomDescriptions = Math.floor(Math.floor(Math.random() * descriptions.length))
    return (
      <CreateImg
        key={img}
        title={titles[randomTitles]}
        description={descriptions[randomDescriptions]}
        links={links[randomLinks]}
      />
    );
  });

  return (
    <div className="App">
      {imgs}
    </div>
  );
}

export default App;