import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight
);

// Function for converting numerical day of week (from Date) to string
function dayToString(day) {
  return [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][day];
}

// Function for converting numerical month (from Date) to string
function monthToString(month) {
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][month];
}

function DateDisplay(props){
    const date = props.currentDate;
    return (
      <div>
        <button onClick={() => props.changeDate(-7)} className="dateControlButton">
          <FontAwesomeIcon icon="angle-double-left" />
        </button>
        <button onClick={() => props.changeDate(-1)} className="dateControlButton">
          <FontAwesomeIcon icon="angle-left" />
        </button>
        {dayToString(date.getDay())}, {monthToString(date.getMonth())}{' '}
        {date.getDate()}, {date.getFullYear()}
        <button onClick={() => props.changeDate(1)} className="dateControlButton">
          <FontAwesomeIcon icon="angle-right" />
        </button>
        <button onClick={() => props.changeDate(7)} className="dateControlButton">
          <FontAwesomeIcon icon="angle-double-right" />
        </button>
      </div>
    );
}

export default DateDisplay;