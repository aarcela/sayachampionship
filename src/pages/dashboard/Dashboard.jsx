import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../firebase/firebase";
import { listDancers } from "../../actions/dancer";
import { listAcademy } from "../../actions/academy";
import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDancers = async () => {
      const dancersData = await loadData("dancers");
      const academiesData = await loadData("academy");
      dispatch(listDancers(dancersData));
      dispatch(listAcademy(academiesData));
    };
    fetchDancers();

    return () => {};
  }, [dispatch]);

  const data = useSelector((state) => state.dancers.dancersData);
  const academiesData = useSelector((state) => state.academies.academiesData);

  return (
    <section className="badges_container">
      <Link to="/list-academies">
        <div className="badge">
          <h3>{academiesData.length}</h3>
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
