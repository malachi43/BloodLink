import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home, DonateBlood, ReceiveBlood, Groupdonation, About, Login, SignUp } from "./Components/pages"; // Import new components

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate-blood" element={<DonateBlood />} /> {/* Donate Blood route */}
        <Route path="/receive-blood" element={<ReceiveBlood />} /> {/* Receive Blood route */}
        <Route path="/groupdonation" element={<Groupdonation />} /> {/* Group Donation route */}
        <Route path="/about" element={<About />} /> {/* About route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
