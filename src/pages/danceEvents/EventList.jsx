import React from "react";

const EventList = ({ eventList }) => {
  return (
    <>
      {eventList.map((event) => (
        <h6 key={event.id}>
          {event.pk_academy} - {event.prize}
        </h6>
      ))}
    </>
  );
};

export default EventList;
