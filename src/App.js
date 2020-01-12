import React from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Skills from "./components/skills";
import About from "./components/about";

function App() {
  return (
    <div>
      <div>
        <Sidebar />
        <Switch>
          <Route path="/personal-page">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
