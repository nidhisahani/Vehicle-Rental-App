import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DataForm from './components/DataForm';
import NumberOfWheel from './components/NumberOfWheel';
import TypeOfVehicles from './components/TypeOfVehicles';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< DataForm/>}/>
        <Route path='NumberOfWheel' element={<NumberOfWheel/>} />
        <Route path='TypeOfVehicles' element={<TypeOfVehicles/>} />
      </Routes>
    </Router>
  );
}

export default App;
