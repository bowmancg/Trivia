import { generateId } from "../Utils/generateId.js"

export class Question {
    constructor(data) {
        this.id = generateId()
        this.difficulty = data.difficulty
        this.type = data.multipleChoice ? 'multiple' : data.trueFalse ? 'boolean' : this.type == ''
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answers = data.incorrect_answers
    }
    get questionTemplate() {
        return `
        <div id="questions" class="col-5 card">
          <div class="card-title">
            <p class="fs-2 text-center">Question 1. </p>
          </div>
          <div class="card-body">
            <p class="fs-4">${this.question}</p>
          </div>
        `
    }

    get typeTemplate() {
        switch (this.type) {
            case 'multiple-choice': return `
            
            `
        }
    }

}