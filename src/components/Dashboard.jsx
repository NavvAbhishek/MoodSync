"use client";
import { useAuth } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Login from "../components/Login";
import Loading from "../components/Loading";
import Calander from "./Calander";
import { db } from "../firebase";

const Dashboard = () => {
  const { currentUser, userDataObj, setUserDataObj, loading } = useAuth();
  const [data, setData] = useState({});
  const [note, setNote] = useState("");
  const [mood, setMood] = useState("");
  const now = new Date();
  console.log("dash child note", note);

  function countValues() {
    let total_number_of_days = 0;
    let sum_moods = 0;
    for (let year in data) {
      for (let month in data[year]) {
        for (let day in data[year][month]) {
          let days_mood = data[year][month][day];
          total_number_of_days++;
          sum_moods += Number(days_mood.mood);
        }
      }
    }
    return {
      num_days: total_number_of_days,
      average_mood:
        total_number_of_days > 0
          ? (sum_moods / total_number_of_days).toFixed(2)
          : "N/A",
    };
  }

  const status = {
    ...countValues(),
    time_remaining: `${23 - now.getHours()}H ${60 - now.getMinutes()}M`,
  };

  const handleSetMood = async (mood, note, dayParam, monthParam, yearParam) => {
    const day = dayParam || now.getDate();
    const month = monthParam || now.getMonth();
    const year = yearParam || now.getFullYear();
    try {
      const newData = { ...userDataObj };
      if (!newData?.[year]) {
        newData[year] = {};
      }
      if (!newData?.[year]?.[month]) {
        newData[year][month] = {};
      }
      newData[year][month][day] = { mood, note };
      // update the current state
      setData(newData);
      // update the global state
      setUserDataObj(newData);
      // update firebase
      const docRef = doc(db, "users", currentUser.uid);
      const res = await setDoc(
        docRef,
        {
          [year]: {
            [month]: {
              [day]: { mood, note },
            },
          },
        },
        { merge: true }
      );
    } catch (error) {
      console.log("failed to set data", error.message);
    }
  };

  const moods = {
    Crying: "😭",
    Sad: "🥲",
    Neutral: "😐",
    Good: "😊",
    Happy: "😄",
  };

  useEffect(() => {
    if (!currentUser || !userDataObj) {
      return;
    }
    setData(userDataObj);
  }, [currentUser, userDataObj]);

  if (loading) {
    return <Loading />;
  }

  if (!currentUser) {
    return <Login />;
  }

  const setNoteFromChild = (note, day, month, year) => {
    setNote(note);
    handleSetMood(
      data[year]?.[month]?.[day]?.mood || "", // Existing mood
      note,
      day,
      month,
      year
    );
  };

  return (
    <div className="flex flex-col flex-1 gap-4 sm:gap-8 md:gap-12 p-5">
      <div className="grid grid-cols-3 bg-purple text-yellow gap-4 p-4 rounded-lg">
        {Object.keys(status).map((state, index) => {
          return (
            <div key={index} className="p-4 flex flex-col gap-1 sm:gap-2">
              <p className="capitalize text-sm sm:text-sm ">
                {state.replaceAll("_", " ")}
              </p>
              <p className="text-base sm:text-lg font-lilitaOne truncate">
                {status[state]}
                {status === "num_days" ? " 🔥" : ""}
              </p>
            </div>
          );
        })}
      </div>
      <h4 className="text-3xl sm:text-4xl md:text-5xl text-center font-lilitaOne">
        How do you <span className="textGradient">feel</span> today?
      </h4>
      <div className="flex items-stretch flex-wrap gap-4">
        {Object.keys(moods).map((mood, moodIndex) => {
          return (
            <button
              onClick={() => {
                const currentMoodValue = moodIndex + 1;
                setMood(currentMoodValue);
                handleSetMood(currentMoodValue, note);
              }}
              className={
                "flex flex-col items-center px-8 gap-2 bg-[#9333ea] rounded-lg p-5 duration-200 emojiBox flex-1"
              }
              key={moodIndex}
            >
              <p className="text-3xl sm:text-4xl md:text-5xl">{moods[mood]}</p>
              <p className="text-white">{mood}</p>
            </button>
          );
        })}
      </div>
      <Calander
        completeData={data}
        handleSetMood={handleSetMood}
        onSubmiteNote={setNoteFromChild}
      />
    </div>
  );
};

export default Dashboard;
