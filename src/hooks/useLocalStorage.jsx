import { useState, useEffect } from "react";

// Custom hook to manage local storage
// takes a key and an initial value
// returns the current value and a function to update it
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      // Get the value from local storage
      // If the value is not found, return the initial value
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  });

  // Update local storage whenever the value changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
