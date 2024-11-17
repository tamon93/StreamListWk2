import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StreamList from "./components/StreamList";

import Movies from "./components/Movies";

import Cart from "./components/Cart";

import About from "./components/About";

import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation /> {/* This is your navigation bar component */}
        <Routes>
          <Route path="/" element={<StreamList />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
