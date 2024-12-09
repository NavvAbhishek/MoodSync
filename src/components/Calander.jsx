"use client";
import React, { useState } from "react";
import { gradients, baseRating } from "../utils";
import { IoMdAddCircle } from "react-icons/io";
import PopupBox from "./PopupBox";

const months = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sept",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};
const monthsArr = Object.keys(months);
const now = new Date();
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Calander = (props) => {
  const now = new Date();
  const { demo, completeData, onSubmiteNote } = props;
  const currMonth = now.getMonth();
  const [selectedMonth, setSelectedMonth] = useState(
    Object.keys(months)[currMonth]
  );
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [note, setNote] = useState("")

  const numericMonth = monthsArr.indexOf(selectedMonth);
  const data = completeData?.[selectedYear]?.[numericMonth] || {};

  function handleIncrementMonth(val) {
    //? val = +1 or -1
    //? if we hit the bounds of the months, then we can just adjust the year that is displayed instead
    if (numericMonth + val < 0) {
      //? set month value = 11 and decrement the year
      setSelectedYear((curr) => curr - 1);
      setSelectedMonth(monthsArr[monthsArr.length - 1]);
    } else if (numericMonth + val > 11) {
      //? set month value = 0 and increment the year
      setSelectedYear((curr) => curr + 1);
      setSelectedMonth(monthsArr[0]);
    } else {
      setSelectedMonth(monthsArr[numericMonth + val]);
    }
  }

  const currentMonth = new Date(
    selectedYear,
    Object.keys(months).indexOf(selectedMonth),
    1
  );
  const firstDayOfMonth = currentMonth.getDay();
  const daysInMonth = new Date(
    selectedYear,
    Object.keys(selectedMonth).indexOf(selectedMonth) + 1,
    0
  ).getDate();

  const daysToDisplay = firstDayOfMonth + daysInMonth;
  const numRows = Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);

  const handleAddClick = () => {
    setIsPopupOpen(true);
  };

  const setNoteFromChild = (note) => {
    setNote(note)
    onSubmiteNote(note)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => handleIncrementMonth(-1)}
          className="mr-auto text-magenta text-xl sm:text-2xl duration-200 hover:opacity-60"
        >
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>
        <p className="text-center text-md font-semibold capitalized textGradient">
          {selectedMonth}, {selectedYear}
        </p>
        <button
          onClick={() => handleIncrementMonth(+1)}
          className="ml-auto text-magenta text-xl sm:text-2xl duration-200 hover:opacity-60"
        >
          <i className="fa-solid fa-circle-chevron-right"></i>
        </button>
      </div>
      <div className="flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:py-10">
        {[...Array(numRows).keys()].map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="grid grid-cols-7 gap-1">
              {dayList.map((dayOfWeek, dayOfWeekIndex) => {
                let dayIndex =
                  rowIndex * 7 + dayOfWeekIndex - (firstDayOfMonth - 1);

                let dayDisplay =
                  dayIndex > daysInMonth
                    ? false
                    : row === 0 && dayOfWeekIndex < firstDayOfMonth
                    ? false
                    : true;

                let isToday = dayIndex === now.getDate();

                if (!dayDisplay) {
                  return <div className="bg-white" key={dayOfWeekIndex} />;
                }

                let color = demo
                  ? gradients.indigo[baseRating[dayIndex]]
                  : dayIndex in data
                  ? gradients.indigo[data[dayIndex]]
                  : "white";

                return (
                  <div
                    style={{ background: color }}
                    className={
                      "group text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg cursor-pointer " +
                      (isToday ? " border-indigo-400" : " border-indigo-100") +
                      (color === "white" ? " text-indigo-400" : " text-white")
                    }
                    key={dayOfWeekIndex}
                  >
                    <p>{dayIndex}</p>
                    <div>
                      <IoMdAddCircle
                        onClick={() => handleAddClick()}
                        className="h-[16px] w-[16px] opacity-0 group-hover:opacity-100  transition-opacity duration-200"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {isPopupOpen && (
        <PopupBox
          onClose={() => setIsPopupOpen(false)}
          onSubmitNote={setNoteFromChild}
        />
      )}
    </div>
  );
};

export default Calander;
