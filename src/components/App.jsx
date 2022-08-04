import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollRestore";

function App() {
  return (
    <div className="flex-grow font-quicksand">
      <ScrollToTop />
      <Header />
      <div className="min-h-screen flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
