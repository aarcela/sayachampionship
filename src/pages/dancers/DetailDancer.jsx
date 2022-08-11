import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { detailData, loadData } from "../../firebase/firebase";
import DancerForm from "../../components/Forms/DancerForm";
import Fab from "../../components/Fab";
import AddEvent from "../danceEvents/AddEvent";
import EventList from "../danceEvents/EventList";
import "../../App.css";
import "materialize-css";
import "react-toastify/dist/ReactToastify.css";

const DetailDancer = () => {
  const dancerID = useSelector((state) => state.dancers.dancerID);

  const [dancer, setDancer] = useState([]);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const getDancer = async () => {
      const { data } = await detailData(dancerID, "dancers");
      setDancer(data);
    };

    const dancersEvents = async () => {
      const data = await loadData("dancers_event");

      data.filter((element) => {
        return element.pk_dancer === dancerID;
      });

      setEventList(data);
      console.log(data);
    };
    dancersEvents();
    getDancer();
  }, [dancerID]);

  return (
    <section className="main-box">
      <h5>Información Personal</h5>
      <div className="border-box">
        <DancerForm dancer={dancer} type="Editar" dancerID={dancerID} />
      </div>
      <h5>Competencias Pasadas</h5>
      <div className="border-box">
        {eventList.length !== 0 ? (
          <EventList eventList={eventList} />
        ) : (
          <h6>No hay premios registrados</h6>
        )}
      </div>
      <h5>Agregar Competencias</h5>
      <div className="border-box">
        <AddEvent dancerID={dancerID} />
      </div>
      <Fab iconName="arrow_back" />
    </section>
  );
};

export default DetailDancer;
