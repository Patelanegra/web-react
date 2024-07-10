import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import './styles/components/layout/Header.css';
import Footer from './components/Footer';
import './styles/components/layout/Footer.css'
import HomePage from './pages/HomePage';
import './styles/components/pages/HomePage.css'

function App() {
  return (
    <div clasName="App">
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
