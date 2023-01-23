import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";
import Home from "./comps/pages/Home";
import Waitlist from "./comps/pages/Waitlist";
import About from "./comps/pages/About";
import Faqs from "./comps/pages/Faqs";
import Notfound from "./comps/pages/Notfound";
import Success from "./comps/scalables/modals/Success";
import AuthState from "./comps/context/auth/AuthState";

function App() {
  const [mailModal, setMailModal] = useState(false);
  return (
    <SnackbarProvider>
      <AuthState>
        <div className="App">
          <Success {...{ mailModal, setMailModal }} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Waitlist {...{ mailModal, setMailModal }} />}
            />
            {/* <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/faqs" element={<Faqs />} />
          <Route exact path="*" element={<Notfound />} /> */}
          </Routes>
        </div>
      </AuthState>
    </SnackbarProvider>
  );
}

export default App;
