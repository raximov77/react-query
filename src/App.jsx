import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Add, Home, Single } from './pages';

function App() {
  
  return (
    <>
      <header className="py-5 bg-slate-200 flex items-center justify-center gap-5">
        <Link className="font-bold text-[20px]" to="/">Home</Link>
        <Link className="font-bold text-[20px]" to="/add">Create</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/:id" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
