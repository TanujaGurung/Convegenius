import React from "react";

import QuestionCard from "./QuestionCard";
import axios from "axios";
import Category from "./Category";

export default class HomePage extends React.Component {
  state = {
    value: "products",
    category: "",
    data: [],
    modal: false,
    qNo: 0,
    btnVal: "next",
    corrAns: 0,
    selected: "",
    display: "none",
    displaynext: "display",
  };
  componentDidMount() {
    this.fetchApi();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      this.setState({ pieData: this.state.data });
    }
    if (prevState.value !== this.state.value) {
      this.fetchApi();
    }
  }
  handleInput = (e) => {
    e.preventDefault();
    // const name = e.target.name;
    this.setState({ selected: e.target.value });
    console.log(this.state.selected);
  };
  handleChangeEvent = (e) => {
    e.preventDefault();

    this.setState({ value: e.target.value });
  };
  handleQNo = () => {
    if (this.state.qNo < 9) {
      this.setState({ qNo: this.state.qNo + 1 });
    } else {
      this.setState({ btnVal: "Submit" });
      this.setState({ qNo: 9 });
      this.setState({ display: "block" });
      this.setState({ displaynext: "none" });
    }
    if (this.state.data.length !== 0) {
      if (
        this.state.selected === this.state.data[this.state.qNo].correct_answer
      )
        this.setCorrectAns();
    }
  };
  setCorrectAns = () => {
    this.setState({ corrAns: this.state.corrAns + 1 });
  };

  fetchApi = async () => {
    if (this.state.value == "products") {
      await axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
        this.setState({ data: res.data.results });
      });
    } else {
      axios
        .get(
          `https://opentdb.com/api.php?amount=10&category=${this.state.value}`
        )
        .then((res) => {
          this.setState({ data: res.data.results });
        });
    }
  };

  render() {
    const { data, value } = this.state;

    console.log(this.state.data);
    console.log(this.state.corrAns);
    console.log(this.state.selected);
    // console.log(this.state.data[0].correct_answer);

    return (
      <React.Fragment>
        <div className="container-fluid" style={{ textAlign: "center" }}>
          <h1>Welcome to Quiz Game</h1>
        </div>
        <hr />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-4"> </div>
            <div className="col-md-4">
              <Category
                value={value}
                handleChangeEvent={this.handleChangeEvent}
              />{" "}
            </div>
            <div className="col-md-4"> </div>
          </div>
        </div>
        {data.length != 0 ? (
          <QuestionCard
            data={data[this.state.qNo]}
            handleInput={this.handleInput}
            displaynext={this.state.displaynext}
          />
        ) : (
          <div>Loading</div>
        )}
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />

        <div
          className="container justify-content-center"
          style={{ display: this.state.displaynext }}
        >
          <input
            type="button"
            className="btn btn-primary"
            value={this.state.btnVal}
            onClick={this.handleQNo}
            qNo={this.state.qNo}
          />
        </div>
        <div style={{ display: this.state.display }}>
          <h1> Your Score is {this.state.corrAns} /10</h1>
          <p> play again choosing different category </p>
        </div>
      </React.Fragment>
    );
  }
}
