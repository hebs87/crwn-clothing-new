import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} exact />
    </Routes>
  );
}

export default App;
