import React from "react";
import { useEffect } from "react";
import { addData, loadData } from "../../firebase/firebase";
import { useState } from "react";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { EventForm } from "../../components/Forms/EventForm";
import "../../App.css";

const AddEvent = ({ dancerID }) => {
  const [events, setEvents] = useState([]);
  const notify = (message) => toast(message);

  useEffect(() => {
    const getEvents = async () => {
      const data = await loadData("events");
      setEvents(data);
      console.log(data);
    };

    getEvents();
  }, []);

  const formik = useFormik({
    initialValues: {
      prize: "",
      pk_academy: [],
      academy_name: "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      values.pk_dancer = `dancers/${dancerID}/`;
      try {
        await addData(values, "dancers_event");
        notify("Se ha agregado la competencia");
        formik.resetForm();
      } catch {
        notify("Error subiendo Competencia");
      }
      console.log(values);
    },
  });

  return (
    <>
      <EventForm formik={formik} events={events} />
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default AddEvent;
