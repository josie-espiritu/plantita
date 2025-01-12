import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';



function App() {
  return (
    <>
      <nav><Navigation/></nav>
      
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
