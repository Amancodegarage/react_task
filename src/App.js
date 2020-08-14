import React from "react";

import Child from "./components/children/Child";
import Button from "./components/button/Button";

const urlLinks = [
  {
    background: "./components/images/Background.png",
    image: "./components/images/Base model.png",
  },
  {
    background: "./components/images/Background.png",
    image: "./components/images/Base model.png",
  },
  {
    background: "./components/images/Background.png",
    image: "./components/images/Base model.png",
  },
];

function App() {
  return (
    <div className="App">
      <div>
        <h2 class="text-center mb-32">Select your child</h2>

        {urlLinks.map((value) => {
          return (
            <>
              <Child
                background={require(value.background + "")}
                image={require(value.image + "")}
              />
            </>
          );
        })}
        <Button />
      </div>
    </div>
  );
}

export default App;
