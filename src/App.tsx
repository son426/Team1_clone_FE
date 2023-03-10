import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import Navbar from "./components/molecules/Navbar";
import Router from "./pages/Router";

function App() {
  return (
    <RecoilRoot>
      <Navbar />
      <Router />
    </RecoilRoot>
  );
}

export default App;
