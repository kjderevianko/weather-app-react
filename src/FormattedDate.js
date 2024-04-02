import React from "react";

export default function FormattedDate(props) {
  let day = props.date.toLocaleDateString("en-US", { weekday: "long" });
  let month = props.date.toLocaleDateString("en-US", { month: "long" });
  let date = props.date.getDate();
  let year = props.date.getFullYear();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  return (
    <>
      <h6>
        {day}, {month} {date}, {year}
      </h6>
      <h6>
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}
      </h6>
    </>
  );
}
