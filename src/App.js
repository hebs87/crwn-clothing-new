import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';

const App = () => {
  return (
    <Routes>
      {/*
        Outlet component in NavBar allows rendering content in nested Routes below it
        index prop in Home Route allows rendering that component as index component
      */}
      <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>} />
      </Route>
    </Routes>
  );
}

export default App;
