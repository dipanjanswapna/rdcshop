import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Landing />
      </div>
    </Router>
  );
}

export default App;
