import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Courses from './components/Courses';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Courses />
      </div>
    </Router>
  );
}

export default App;
