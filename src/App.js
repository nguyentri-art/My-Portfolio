import { Routes,Route } from 'react-router-dom';
import './App.scss';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Layout from './components/Layout';
import Contact from './components/Contact';

function App() {
  return (
      <>  
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route index element={<Contact />} />
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </>
  )
}

export default App;
