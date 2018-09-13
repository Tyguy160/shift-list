import React from "react";
import "../styles/DateDisplay.css";

// Function for converting numerical day of week (from Date) to string
function dayToString(day) {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ][day];
}

// Function for converting numerical month (from Date) to string
function monthToString(month) {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ][month];
}

function DateDisplay(props) {
  const date = props.currentDate;
  return (
    <div className="dateDisplay">
      <div className="reverseTime">
        <button
          onClick={() => props.changeDate(-7)}
          className="dateControlButton bigStepBackward"
        >
          <i className="icon mdi mdi-chevron-double-left mdi-24px" />
        </button>
        <button
          onClick={() => props.changeDate(-1)}
          className="dateControlButton stepBackward"
        >
          <i className="icon mdi mdi-chevron-left mdi-24px" />
        </button>
      </div>
      <div className="date">
        {dayToString(date.getDay())}, {monthToString(date.getMonth())}{" "}
        {date.getDate()}, {date.getFullYear()}
      </div>
      <div className="forwardTime">
        <button
          onClick={() => props.changeDate(1)}
          className="dateControlButton stepForward"
        >
          <i className="icon mdi mdi-chevron-right mdi-24px" />
        </button>
        <button
          onClick={() => props.changeDate(7)}
          className="dateControlButton bigStepForward"
        >
          <i className="icon mdi mdi-chevron-double-right mdi-24px" />
        </button>
      </div>
    </div>
  );
}

export default DateDisplay;
