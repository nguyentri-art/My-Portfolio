import { Routes,Route } from 'react-router-dom';
import './App.scss';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Layout from './components/Layout';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
      <>  
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />}  />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </>
  )
}

export default App;
