import './App.css';
import Head from "./components/Head"
import SearchForm from './components/SearchForm';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Head/>
      <SearchForm/>
      <Footer />
    </div>
  );
}

export default App;