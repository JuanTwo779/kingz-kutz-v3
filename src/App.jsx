import { Navbar} from './components';
import { Footer, Hero, Services } from './container'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero/>}/>

        <Route path='/services' element={<Services/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App