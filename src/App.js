import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country';

function App() {
  return (
    <div className="header">
      <Routes>
        <Route path="/country/:countryName" element={<Country/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
