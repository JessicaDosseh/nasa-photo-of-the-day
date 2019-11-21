import React from "react";
import "./App.css";
import NasaList from "./components/NasaList";

function App() {
  return (
    <div className="App">
      <p className="popup">
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <h1>Nasa Astronomy Picture of the Day</h1>
      <NasaList />
    </div>
  );
}

export default App;
