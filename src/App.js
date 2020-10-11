import React from "react";
import Question from "./Question";
import QuestionDataBase from "./QuizzData";
import OpeningScreen from "./OpeningScreen";
import $ from "jquery";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      openingScreen: true,
      points: 0,
      currentStep: 0
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.toQuestions = this.toQuestions.bind(this);
  }

  toQuestions() {
    this.setState(() => {
      return {
        openingScreen: false
      };
    });
  }

  nextQuestion() {
    let userCheck = parseInt($("input[name='hp-quizz']:checked").val());

    if (userCheck === this.rightAnswer()) {
      this.setState(() => {
        return {
          points: this.state.points + 1,
          currentStep: this.state.currentStep + 1
        };
      });
    } else {
      this.setState(() => {
        return {
          currentStep: this.state.currentStep + 1
        };
      });
    }

    $(this).prop("checked", false);
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

    if (this.state.openingScreen) {
      return (
        <div>
          <OpeningScreen />
          <button onClick={this.toQuestions}>Next</button>
        </div>
      );
    }
    if (QuestionDataBase.length === this.state.currentStep) {
      return (
        <div>You have collected {this.state.points} points for your house!</div>
      );
    }
    return (
      <div>
        <h2>{this.state.points} Points</h2>
        {question[this.state.currentStep]}
        <button onClick={this.nextQuestion}>Next</button>
      </div>
    );
  }
}

export default App;
