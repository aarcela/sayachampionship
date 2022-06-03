import React from "react";
import { Link } from "react-router-dom";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="badges_container">
      <div className="badge">
        <h2>00</h2>
        <h6>Academias</h6>
      </div>
      <div className="badge">
        <h2>00</h2>
        <h6>Eventos</h6>
      </div>
      <Link to="/create-dancer">
        <div className="badge">
          <h2>00</h2>
          <h6>Bailarines</h6>
        </div>
      </Link>
      <div className="badge">
        <h2>00</h2>
        <h6>Categorías</h6>
      </div>
    </section>
  );
};

export default Dashboard;
