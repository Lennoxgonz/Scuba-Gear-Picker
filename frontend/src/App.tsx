import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BuildPage from "./pages/BuildPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import GearPage from "./pages/GearPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="build" element={<BuildPage />} />
          <Route path="gear" element={<GearPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
