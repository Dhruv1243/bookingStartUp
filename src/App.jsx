import "./App.css";
import Index from "../frontend/components/landingPage";
import Footer from "../frontend/components/footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
