import React, { Component, PropTypes } from 'react'

import {
  Well,
  Input
} from 'react-bootstrap'

import {
  selectSurveyQuestionResponse
} from './../../redux/survey/survey-actions'

class SurveyQuestion extends Component {

  makeSelection(questionId, answer, event) {
    this.props.dispatch(selectSurveyQuestionResponse(questionId, answer))
  }

  getChecked(answer) {
    return this.props.question.selectedAnswer === answer.id
  }

  render() {
    return (
      <section>
        {
          <Well>
            <label>{this.props.question.questionText}</label>
              {
                this.props.question.answers.map(answer => {
                  return (
                    <Input
                      checked={this.getChecked.call(this, answer)}
                      onClick={this.makeSelection.bind(this, this.props.question.id, answer)}
                      type="radio"
                      label={answer.answerLabel} />
                  )
                })
              }
          </Well>
        }
      </section>
    )
  }
}

SurveyQuestion.propTypes = {
  question: PropTypes.object,
  dispatch: PropTypes.func
}

export default SurveyQuestion