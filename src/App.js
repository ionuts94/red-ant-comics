import Favourites from './components/Favourites';
import Comics from './components/Comics';
import Header from './components/Header';
import Init from "./components/Init";

const fetchUrl = 'https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288';

function App() {
  return (
    <div className="App">
      <Init url={fetchUrl}>
        <Header />
        <Comics />
        <Favourites />
      </Init>
    </div>
  );
}

export default App;
