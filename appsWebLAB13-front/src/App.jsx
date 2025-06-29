import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import Productos from './pages/Productos';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categorias" element={<Categorias />} />
          <Route path="productos" element={<Productos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
