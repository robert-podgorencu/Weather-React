import React, { useState, useEffect } from "react";
import { cityApiOptions, NINJAS_CITY_API_URL } from "../../api";
import axios from "axios";
import "./Search.css";
export default function Search({ onSearch }) {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const [inputText, setInput] = useState('');

  function debounce(func, timeout=500) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }


  useEffect(() => {
    onSearch(location);
  }, [location, onSearch]);

  const saveInput = debounce((text) => setInput(text));

  const searchLocation = async () => {
    // const inputText = document.getElementById("search-bar").value;

    const url = NINJAS_CITY_API_URL + inputText;
    try {
      const response = await axios.get(url, cityApiOptions);
      console.log(response.data[0]);
      const newLocation = {
        latitude: response.data[0].latitude,
        longitude: response.data[0].longitude,
      };
      setLocation(newLocation);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <div>
      <label>
        Search
        <br></br>
        <input
          id="search-bar"
          type="text"
          placeholder="Enter Location"
          onChange={(e) => saveInput(e.target.value)}
        ></input>
      </label>
      <button id="submit-button" onClick={searchLocation}>
        Search
      </button>
    </div>
  );
}
