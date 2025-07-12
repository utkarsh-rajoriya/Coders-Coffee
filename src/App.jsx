import './App.css';
import Footer from './compponents/Footer';
import Hero from './compponents/Hero';
import Main from './compponents/Main';

const App = () => {
  return (
    <div className='App'>
      <Hero/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App