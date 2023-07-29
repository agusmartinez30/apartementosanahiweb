import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Text, Box } from "@chakra-ui/react";
import { Home, Contact } from "./pages/index.js";
import { Footer, Navbar } from "./components";
import Layout from "./components/Layout/Layout.jsx";
import PropertyDetail from "./pages/PropertyDetail/PropertyDetail.jsx";
import './App.css'
import Suggestion from "./pages/Suggestions/Suggestion.jsx";


function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/departamento/:id" element={<PropertyDetail />}></Route>
        </Route>
        <Route path="/sugerencias" element={<Suggestion />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
