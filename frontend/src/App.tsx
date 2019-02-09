import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import PageNavbar from "./components/PageNavbar";
import { routes as Routes } from "./Routes";

class App extends Component {
  public render() {
    return (
      <BrowserRouter>
        <>
          <PageNavbar/>
          <Routes/>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
