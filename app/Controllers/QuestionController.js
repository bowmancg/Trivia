import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js"
import { questionService } from "../Services/QuestionService.js"
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js"

function _drawQuestions() {
    let questions = appState.questions
    let template = ""
    appState.questions.forEach(question => (template += question.questionTemplate))
    setHTML("questions", template)
}

export class QuestionController {
    constructor() {
        appState.on("questions", _drawQuestions)
        this.getQuestions()
        console.log('construct');
    }
async getQuestions() {
    try {
        await questionService.getQuestions()
    } catch (error) {
        Pop.error(error)
    }

}

}