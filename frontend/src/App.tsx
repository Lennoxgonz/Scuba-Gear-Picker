import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import BuildPage from './pages/BuildPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="build" element={<BuildPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
