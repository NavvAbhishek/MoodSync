"use client"
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import Login from "../components/Login";
import Calander from "./Calander";

const Dashboard = () => {
  const { currentUser, userDataObj, setUserDataObj, loading } = useAuth();
  const [data, setData] = useState({});

  const handleSetMood = async (mood) => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    try {
      const newData = { ...userDataObj };
      if (!newData?.[year]) {
        newData[year] = {};
      }
      if (!newData?.[year]?.[month]) {
        newData[year][month] = {};
      }
      newData[year][month][day] = mood;
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
              [day]: mood,
            },
          },
        },
        { merge: true }
      );
    } catch (error) {
      console.log("failed to set data", error.message);
    }
  };

  const states = {
    num_days: 14,
    time_remaining: "13:14:26",
    date: new Date().toDateString(),
  };

  const moods = {
    Crying: "😭",
    Sad: "🥲",
    Existing: "😶",
    Good: "😊",
    Elated: "😍",
  };

  useEffect(() => {
    if (!currentUser || !userDataObj) {
      return;
    }
    setData(userDataObj);
  }, [currentUser, userDataObj]);

  if (!currentUser) {
    return <Login />;
  }

  return (
    <div className="flex flex-col flex-1 gap-4 sm:gap-8 md:gap-12 p-5">
      <div className="grid grid-cols-3 bg-purple text-yellow gap-4 p-4 rounded-lg">
        {Object.keys(states).map((state, index) => {
          return (
            <div key={index} className="p-4 flex flex-col gap-1 sm:gap-2">
              <p className="uppercase text-xs sm:text-sm ">
                {state.replaceAll("_", " ")}
              </p>
              <p className="text-base sm:text-lg font-lilitaOne truncate">
                {states[state]}
              </p>
            </div>
          );
        })}
      </div>
      <h4 className="text-3xl sm:text-4xl md:text-5xl text-center font-lilitaOne">
        How do you <span className="textGradient">feel</span> today?
      </h4>
      <div className="flex items-stretch flex-wrap gap-4">
        {Object.keys(moods).map((mood, index) => {
          return (
            <button
              onClick={() => {
                const currentMoodValue = moodIndex + 1;
                handleSetMood(currentMoodValue);
              }}
              className={
                "flex flex-col items-center px-8 gap-2 bg-[#9333ea] rounded-lg p-5 duration-200 emojiBox flex-1"
              }
              key={index}
            >
              <p className="text-3xl sm:text-4xl md:text-5xl">{moods[mood]}</p>
              <p className="text-white">{mood}</p>
            </button>
          );
        })}
      </div>
      <Calander data={data} handleSetMood={handleSetMood} />
    </div>
  );
};

export default Dashboard;
