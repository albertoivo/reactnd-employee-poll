// _DATA.test.js
import '@testing-library/jest-dom/extend-expect'
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

var q0 = { optionOneText: '', optionTwoText: '', author: '' }
var q1 = { optionOneText: 'be a runner', optionTwoText: 'be a cyclist', author: 'Ivo' }
var q2 = { optionOneText: '', optionTwoText: 'be a cyclist', author: 'Ivo' }
var q3 = { optionOneText: 'be a runner', optionTwoText: 'be a cyclist', author: '' }

var a0 = { authedUser: '', qid: '', answer: '' }
var a1 = { authedUser: 'sarahedo', qid: 'xj352vofupe1dqz9emx13r', answer: 'optionTwo' }
var a2 = { authedUser: 'sarahedo', qid: 'xj352vofupe1dqz9emx13r', answer: '' }
var a3 = { authedUser: '', qid: 'xj352vofupe1dqz9emx13r', answer: 'optionTwo' }
var a4 = { authedUser: 'sarahedo', qid: '', answer: 'optionTwo' }


/*
 * Success: Valid Question
 */
describe('_saveQuestion', () => {
    it('will return a correctly formatted data', async () => {
        var result = await _saveQuestion(q1);

        expect(result.hasOwnProperty('id')).toEqual(true)
        expect(result.hasOwnProperty('timestamp')).toEqual(true)
    });

})

/*
 * Fail: Invalid Question
 */
describe('_saveQuestion', () => {

    it('will return error message when the all fields are missing', async () => {
        await expect(_saveQuestion(q0)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });

    it('will return error message when one option is missing', async () => {
        await expect(_saveQuestion(q2)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });

    it('will return error message when the author is missing', async () => {
        await expect(_saveQuestion(q3)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });
})

/*
 * Success: Valid Answer
 */
describe('_saveQuestionAnswer', () => {
    it('will return true with a valid answer', async () => {
        var result = await _saveQuestionAnswer(a1);
        expect(result).toEqual(true)
    });
})

/*
 * Fail: Invalid Answer
 */
describe('_saveQuestionAnswer', () => {

    it('will return error message when the all fields are missing', async () => {
        await expect(_saveQuestionAnswer(a0)).rejects.toEqual('Please provide authedUser, qid, and answer');
    });

    it('will return error message when the the answer missing', async () => {
        await expect(_saveQuestionAnswer(a2)).rejects.toEqual('Please provide authedUser, qid, and answer');
    });

    it('will return error message when the user is missing', async () => {
        await expect(_saveQuestionAnswer(a3)).rejects.toEqual('Please provide authedUser, qid, and answer');
    });

    it('will return error message when the question ID is missing', async () => {
        await expect(_saveQuestionAnswer(a4)).rejects.toEqual('Please provide authedUser, qid, and answer');
    });

})