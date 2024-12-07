import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Ministries from "./pages/Ministries";
import OnlineBible from "./pages/OnlineBible";
import About from "./pages/About.";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="ministries" element={<Ministries />} /> 
            <Route path="events" element={<Events />} />
            <Route path="bible" element={<OnlineBible />} />    
            <Route path="about" element={<About />} />    
            <Route path="contact" element={<Contact />} />    
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
