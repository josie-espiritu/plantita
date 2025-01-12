import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import Homepage from './components/Homepage';



function App() {
  return (
    <>
      <nav><Navigation/></nav>
      <Homepage/>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
