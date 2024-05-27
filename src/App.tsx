import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LandingPage from "./Pages/landing-page/landing-page.tsx";
import SignupPage from "./Pages/sign-up-page/signup-page.tsx";
import LogInPage from "./Pages/log-in-page/log-in-page.tsx";
import HomePage from "./Pages/home-page/home-page.tsx";

import { useAuth } from "./context/authContext";

function App() {
  const { currentUser } = useAuth();

  return (
    <div className="m-0 p-0">
      <Router>
        <Routes>
          <Route
            path="/"
            element={!currentUser ? <LandingPage /> : <Navigate to="/home" />}
          />
          <Route
            path="/sign-up"
            element={!currentUser ? <SignupPage /> : <Navigate to="/home" />}
          />
          <Route
            path="/log-in"
            element={!currentUser ? <LogInPage /> : <Navigate to="/home" />}
          />
          <Route
            path="/home"
            element={currentUser ? <HomePage /> : <Navigate to="/log-in" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
