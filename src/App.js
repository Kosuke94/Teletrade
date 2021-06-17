import "./App.css";
import "./pages/HomePage";
import "./pages/ProfilePage";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/layout/header/Header";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Switch>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;
