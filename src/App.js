import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Updates from "./pages/Updates";
import User from "./pages/User";

// sidebar
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/updates' element={<Updates />} />
            <Route path='/user' element={<User />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
