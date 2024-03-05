import './App.css';
import HomePage from './HomePage';
import ProjectDeliverables from './Project_Deliverables';
import AboutUs from './About_Us';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About_Us" element={<AboutUs />} />
        <Route path="/Project_Deliverables" element={<ProjectDeliverables />} />
      </Routes>
    </Router>
  );
}

export default App;
