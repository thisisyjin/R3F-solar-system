import { useState } from "react";
import MainContainer from "./MainContainer";

function App() {
  const [isAnimated, setIsAnimated] = useState(true);

  const toggleAnimated = () => {
    console.log("clicked");
    setIsAnimated((prev) => !prev);
  };

  return (
    <div className="main">
      <MainContainer isAnimated={isAnimated} />
      <button className="stop-button" onClick={toggleAnimated}>
        {isAnimated ? "stop" : "start"}
      </button>
    </div>
  );
}

export default App;
