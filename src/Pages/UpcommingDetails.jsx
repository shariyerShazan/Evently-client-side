import React from "react";
import { useLoaderData, useParams } from "react-router";

function UpcommingDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  const clickEvent = data.find((data) => data.id == id);
  return (
    <div className="group h-[max] max-w-[580px] flex flex-col mx-auto bg-pink-100 p-4 rounded-lg my-56 shadow-xl hover:scale-105">
      <div className="flex justify-between items-center">
        <div>
          <img className="w-48 object-cover h-48 duration-1000 group-hover:-translate-y-[50%] group-hover:-translate-x-[50%] group-hover:scale-200" src={clickEvent.thumbnail} alt="" />
        </div>
        <div>
          <p className="font-bold text-lg">Event Name: <span className="text-pink-500">{clickEvent.name}</span></p>
          <p>Event category: <span className="text-pink-500">{clickEvent.category}</span></p>
          <p>Event Date: <span className="text-pink-500">{clickEvent.date}</span></p>
          <p>Event Location:  <span className="text-pink-500">{clickEvent.location}</span></p>
          <p>Ticket Fee: <span className="text-pink-500">{clickEvent.entryFee}</span></p>
        </div>
      </div>
      <div>
        <p className="mt-3">{clickEvent.description}</p>
      </div>
    </div>
  );
}

export default UpcommingDetails;
