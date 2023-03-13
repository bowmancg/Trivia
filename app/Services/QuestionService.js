import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js"
import { saveState } from "../Utils/Store.js";

class QuestionService {

    async getQuestionWithFetch() {
        let response = await fetch('https://opentdb.com/api.php?amount=10&category=20&difficulty=hard')
        let data = await response.json()
        appState.questions = data.map(question => new Question(question))
    }

    async getQuestions() {
        let response = await axios.get('https://opentdb.com/api.php?amount=10&category=20&difficulty=hard')
        console.log('axios', response);
        // find out what's wrong with this function
        appState.questions = response.data.map(question => new Question(question))
    }

}

export const questionService = new QuestionService