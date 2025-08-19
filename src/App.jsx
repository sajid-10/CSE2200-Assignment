import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from './pages/profile.jsx';
import Articales from './pages/articales.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  return(
    <>
      <Router>
        <Sidebar>
          <Routes>
          <Route path="/" element={<Profile />} />
          <Route path='/articales' element={<Articales />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App