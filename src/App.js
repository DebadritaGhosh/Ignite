import React from "react";
//Pages
import Home from "./pages/Home";
//Components
import Nav from "./components/Nav";
//Global Style
import GlobalStyles from "./components/GlobalStyles";
//ROUTER
import { Route } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route>
        <Home path={["/game/:id", "/"]} />
      </Route>
    </div>
  );
}

export default App;
