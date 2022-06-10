import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../firebase/firebase";
import { listDancers } from "../../actions/dancer";
import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDancers = async () => {
      const dancersData = await loadData();
      dispatch(listDancers(dancersData));
    };
    fetchDancers();

    return () => {};
  }, [dispatch]);

  const data = useSelector((state) => state.dancers.dancersData);

  // setDancerCounter(data.length);

  return (
    <section className="badges_container">
      <Link to="/list-dancer">
        <div className="badge">
          <h3>00</h3>
          <h6>Academias</h6>
        </div>
      </Link>
      <Link to="/list-dancer">
        <div className="badge">
          <h3>00</h3>
          <h6>Eventos</h6>
        </div>
      </Link>
      <Link to="/list-dancer">
        <div className="badge">
          <h3>{data.length}</h3>
          <h6>Bailarines</h6>
        </div>
      </Link>
      <Link to="/list-dancer">
        <div className="badge">
          <h3>00</h3>
          <h6>Categorías</h6>
        </div>
      </Link>
    </section>
  );
};

export default Dashboard;
