
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './create';

function App() {
  return (
<Router>
  <div className="main">
    <h2 className="main-header">Create</h2>
    <div>
      <Routes>
        <Route exact path='/create' element={<Create />} />
      </Routes>
    </div>
  </div>
</Router>
  );
}

export default App;
