import React from "react";
import Question from "./Question";
import QuestionDataBase from "./QuizzData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      points: 0,
      currentStep: 0
    };

    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    let userCheck = parseInt(
      document.querySelector('input[name="hp-quizz"]:checked').value
    );
    if (userCheck === this.rightAnswer()) {
      this.setState(() => {
        return {
          points: this.state.points + 1
        };
      });
    }

    this.setState((prevState) => {
      return {
        currentStep: prevState.currentStep + 1
      };
    });
  }

  rightAnswer() {
    let rightAnswer = QuestionDataBase.map((question) => question.right_answer);
    return rightAnswer[this.state.currentStep];
  }

  render() {
    const question = QuestionDataBase.map((question) => {
      return (
        <Question
          key={question.id}
          question={question.question}
          answer_1={question.answer_1}
          answer_2={question.answer_2}
          answer_3={question.answer_3}
          answer_4={question.answer_4}
          right_answer={question.right_answer}
        />
      );
    });

    return (
      <div>
        <h1>Lets make some quizz!</h1>
        <h2>{this.state.points} Points</h2>
        {question[this.state.currentStep]}
        <button onClick={this.nextQuestion}>Next</button>
      </div>
    );
  }
}

export default App;
