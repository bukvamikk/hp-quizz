import React from "react";

function OpeningScreen(prop) {
  return (
    <div>
      <h1>Harry Potter Quizz</h1>

      <button onClick={prop.toQuestions}>Alohomora</button>
    </div>
  );
}

export default OpeningScreen;
