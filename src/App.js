import React from "react";
import Sidebar from "./components/sidebar";
import About from "./components/about";

function App() {
  return (
    <div>
      <div className="row">
        <Sidebar />
        <About />
      </div>
    </div>
  );
}

export default App;
