import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";

function Base({ title = "My title", className = "p-4", children }) {
  return (
    <div>
      <Menu />
      <div className="container-fluid px-0">
        <div className={className}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Base;
