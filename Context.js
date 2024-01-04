import React, { createContext, useState } from "react";

const FitnessItem = createContext();

const FitnessContext = ({ children }) => {
  const [completed, setcompleted] = useState([]);
  const [workout, setworkout] = useState(0);
  const [calories, setcalories] = useState(0);
  const [min, setmin] = useState(0);

  return (
    <FitnessItem.Provider
      value={{
        completed,
        setcompleted,
        workout,
        setworkout,
        calories,
        setcalories,
        min,
        setmin,
      }}
    >
      {children}
    </FitnessItem.Provider>
  );
};

export {FitnessContext,FitnessItem}
