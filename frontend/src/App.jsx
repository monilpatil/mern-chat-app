import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import AboutUs from "./pages/about/AboutUs";
import TermsAndConditions from "./pages/terms/TermsAndConditions";
import CancellationRefund from "./pages/cancellation/CancellationRefund";
import PrivacyPolicy from "./pages/policy/PrivacyPolicy";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Routes>
        {authUser ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/cancellation" element={<CancellationRefund />} />
            <Route path="/privacy&policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
