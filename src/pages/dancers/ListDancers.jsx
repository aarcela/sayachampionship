import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listDancers } from "../../actions/dancer";
import { loadData } from "../../firebase/firebase";
import { Button, Icon, Table } from "react-materialize";
import { Link } from "react-router-dom";
import "../../App.css";
import "materialize-css";

const ListDancers = () => {
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
  console.log(data);

  return (
    <section className="border-box">
      <h4>Dancer's List</h4>
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>CI</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.lastName}</td>
                <td>{element.ci}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Button
        className="red"
        fab={{
          direction: "right",
        }}
        floating
        large
        node="button"
        icon={
          <Link to="/create-dancer">
            <Icon>person_add</Icon>
          </Link>
        }
      ></Button>
    </section>
  );
};

export default ListDancers;
