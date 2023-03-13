import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js"
import { saveState } from "../Utils/Store.js";

class QuestionService {

    async getQuestionWithFetch() {
        let response = await fetch('https://opentdb.com/api.php?amount=10&category=20&difficulty=hard')
        let data = await response.json()
        appState.questions = data.map(q => new Question(q))
    }

    async getQuestions() {
        let response = await axios.get('https://opentdb.com/api.php?amount=10&category=20&difficulty=hard')
        console.log('axios', response);
        appState.questions = response.data.map(q => new Question(q))
    }

}

export const questionService = new QuestionService