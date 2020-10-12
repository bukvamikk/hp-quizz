import React from "react";
import Question from "./Question";
import QuestionDataBase from "./QuizzData";
import OpeningScreen from "./OpeningScreen";
import HouseSelector from "./HouseSelector";

import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openingScreen: true,
      points: 0,
      currentStep: 0,
      house: "gryffindor"
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.toQuestions = this.toQuestions.bind(this);
    this.onHouseChange = this.onHouseChange.bind(this);
  }

  onHouseChange() {
    console.log("House changed!");
    this.setState({ house: event.target.value });
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
        <div className="quizz-holder">
          <HouseSelector
            value={this.props.house}
            onHouseChange={this.onHouseChange}
          />
          <OpeningScreen toQuestions={this.toQuestions} />
        </div>
      );
    }
    if (QuestionDataBase.length === this.state.currentStep) {
      return (
        <div className="quizz-holder">
          <img src={`img/${this.state.house}.jpg`} />
          You have collected {this.state.points} points for your house!
        </div>
      );
    }
    return (
      <div className="quizz-holder">
        {question[this.state.currentStep]}
        <button onClick={this.nextQuestion}>Next</button>
      </div>
    );
  }
}

export default App;
