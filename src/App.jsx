import { Navbar} from './components';
import { Footer } from './container'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
      </Routes>
      <Footer />
    </Router>
  )
}

export default App