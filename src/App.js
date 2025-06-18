import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [color, setColor] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [logs, setLogs] = useState([]);

  const logEvent = (element, eventType, value) => {
    const message = `[${eventType}] ${element}: ${value}`;
    setLogs((prev) => [message, ...prev.slice(0, 9)]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logEvent("Form", "onSubmit", "Submitted");
    alert(`Submitted:
    Name: ${name}
    Gender: ${gender}
    Color: ${color}
    Subscribed: ${subscribe ? 'Yes' : 'No'}`);
  };

  return (
    <div className="App">
      <h2>Event/Form Prototype</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              logEvent("Name", "onChange", e.target.value);
            }}
            onFocus={() => logEvent("Name", "onFocus", "Focused")}
            onBlur={() => logEvent("Name", "onBlur", "Blurred")}
          />
        </label>

        <label>
          Gender:
          <input
            type="radio"
            value="Male"
            checked={gender === 'Male'}
            onChange={(e) => {
              setGender(e.target.value);
              logEvent("Gender", "onChange", e.target.value);
            }}
          /> Male
          <input
            type="radio"
            value="Female"
            checked={gender === 'Female'}
            onChange={(e) => {
              setGender(e.target.value);
              logEvent("Gender", "onChange", e.target.value);
            }}
          /> Female
        </label>

        <label>
          Favorite Color:
          <select
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              logEvent("Color", "onChange", e.target.value);
            }}
          >
            <option value="">--Select--</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
        </label>

        <label>
          Subscribe:
          <input
            type="checkbox"
            checked={subscribe}
            onChange={(e) => {
              setSubscribe(e.target.checked);
              logEvent("Subscribe", "onChange", e.target.checked ? 'Checked' : 'Unchecked');
            }}
          />
        </label>

        <button
          type="submit"
          onClick={() => logEvent("Submit Button", "onClick", "Clicked")}
        >
          Submit
        </button>
      </form>

      <div className="log-section">
        <h3>Event Log</h3>
        <ul>
          {logs.map((log, idx) => (
            <li key={idx}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
