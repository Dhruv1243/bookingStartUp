import "./App.css";
import Index from "../frontend/components/landingPage";
import Footer from "../frontend/components/footer/Footer";
import SignIn from "../frontend/components/sign-in/SignIn";
import SignUp from "../frontend/components/sign-up/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
