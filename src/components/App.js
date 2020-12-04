import logo from './logo.svg';
import './App.css';
import CollectionsList from './collections_list/collections_list'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CollectionsList />
      </header>
    </div>
  );
}

export default App;
