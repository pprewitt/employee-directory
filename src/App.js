import './App.css';
import Head from "./components/Head"
import SearchForm from './components/SearchForm';
import Bootstrap from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Head/>
      <SearchForm/>
    </div>
  );
}

export default App;