import React, { useState } from "react";
// import { setUserSession } from "../utils/Common";
import axios from "axios";

const QuestionCard = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{ display: props.displaynext }}>
        {" "}
        {props.data ? (
          <div className="panel panel-dark" style={{ margin: "3rem" }}>
            <div className="panel-heading">
              <h5 className="panel-title">{props.data.question}</h5>
            </div>
            <div className="panel-body">
              <form>
                <div className="conatiner">
                  <div className="row">
                    <div className="col-md-6">
                      <label class="radio-inline">
                        <input
                          type="button"
                          className="btn btn-secondary btn-lg btn-block"
                          name="role"
                          value={props.data.incorrect_answers[0]}
                          onClick={(e) => props.handleInput(e)}
                          style={{ backgroundColor: "#e02162" }}
                        />
                      </label>{" "}
                    </div>
                    <div className="col-md-6">
                      <label class="radio-inline">
                        <input
                          type="button"
                          className="btn btn-secondary btn-lg btn-block"
                          name="role"
                          value={props.data.incorrect_answers[1]}
                          onClick={(e) => props.handleInput(e)}
                          style={{ backgroundColor: "#e02162" }}
                        />
                      </label>{" "}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label class="radio-inline">
                        <input
                          type="button"
                          className="btn btn-secondary btn-lg btn-block"
                          name="role"
                          value={props.data.correct_answer}
                          onClick={(e) => props.handleInput(e)}
                          style={{ backgroundColor: "#e02162" }}
                        />
                      </label>{" "}
                    </div>
                    <div className="col-md-6">
                      <label class="radio-inline">
                        <input
                          type="button"
                          className="btn btn-secondary btn-lg btn-block"
                          name="role"
                          value={props.data.incorrect_answers[1]}
                          onClick={(e) => props.handleInput(e)}
                          style={{ backgroundColor: "#e02162" }}
                        />
                      </label>{" "}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </React.Fragment>
  );
};
export default QuestionCard;
