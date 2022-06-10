import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDancer, detailDancer } from "../../actions/dancer";
import { Icon, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import Fab from "../../components/Fab";
import "../../App.css";
import "materialize-css";

const ListDancers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchDancers = async () => {
  //     const dancersData = await loadData();
  //     dispatch(listDancers(dancersData));
  //   };
  //   fetchDancers();

  //   return () => {};
  // }, [dispatch]);

  const data = useSelector((state) => state.dancers.dancersData);

  const getDetailDancer = (id) => {
    dispatch(detailDancer(id));
    navigate("/detail-dancer");
  };

  const removeDancer = (id) => {
    dispatch(deleteDancer(id));
  };

  return (
    <>
      <section className="main-box">
        <h4>Dancer's List</h4>
        <Table centered striped>
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
                  <td onClick={() => getDetailDancer(element.id)}>
                    {element.name}
                  </td>
                  <td>{element.lastName}</td>
                  <td>{element.ci}</td>
                  <td>
                    <Icon onClick={() => removeDancer(element.id)}>delete</Icon>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </section>
      <Fab iconName="person_add" navigation="/create-dancer"></Fab>
      {/* <Button
        className="blue_background"
        fab={{
          direction: "left",
        }}
        icon={<Icon>person_add</Icon>}
        floating
        large
        node="button"
        onClick={() => navigate("/create-dancer")}
      ></Button> */}
    </>
  );
};

export default ListDancers;
