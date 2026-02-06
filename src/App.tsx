import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PasswordBakery from "./pages/PasswordBakery";
import BottomBar from "./components/BottomBar";

const App = () => {
  return (
    <div className="text-white min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bakery" element={<PasswordBakery />} />
      </Routes>
      <BottomBar />
    </div>
  );
};

export default App;
