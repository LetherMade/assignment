import { readFile } from '../helpers/fileHelper'

const OPPONENT_ROCK = 'A'
const OPPONENT_PAPER = 'B'
const OPPONENT_SCISSORS = 'C'
const ROCK = 'X'
const PAPER = 'Y'
const SCISSORS = 'Z'
const ROCK_POINT = 1
const PAPER_POINT = 2
const SCISSORS_POINT = 3
const WIN = 6
const DRAW = 3
const LOSE = 0

export const assignmentOneQuestionOne = (): string => {
    let score = 0
    for (const line of readFile('src/input/input_assignment1.txt')) {
        const matches = line.match(/(.)\s(.)/)
        const [, op, me] = matches !== null ? matches : []

        switch (me) {
            case ROCK:
                switch (op) {
                    case OPPONENT_ROCK:
                        score += DRAW
                        break
                    case OPPONENT_PAPER:
                        score += LOSE
                        break
                    case OPPONENT_SCISSORS:
                        score += WIN
                        break
                }
                score += ROCK_POINT
                break
            case PAPER:
                switch (op) {
                    case OPPONENT_ROCK:
                        score += WIN
                        break
                    case OPPONENT_PAPER:
                        score += DRAW
                        break
                    case OPPONENT_SCISSORS:
                        score += LOSE
                        break
                }
                score += PAPER_POINT
                break
            case SCISSORS:
                switch (op) {
                    case OPPONENT_ROCK:
                        score += LOSE
                        break
                    case OPPONENT_PAPER:
                        score += WIN
                        break
                    case OPPONENT_SCISSORS:
                        score += DRAW
                        break
                }
                score += SCISSORS_POINT
                break
        }
    }

    return `part one: Your puzzle answer is ${score}.`
}

export const assignmentOneQuestionTwo = (): string => {
    let score = 0
    for (const line of readFile('src/input/input_assignment1.txt')) {
        const matches = line.match(/(.)\s(.)/)
        const [, op, outcome] = matches !== null ? matches : []

        switch (outcome) {
            case 'X':
                switch (op) {
                    case OPPONENT_ROCK:
                        score += SCISSORS_POINT
                        break
                    case OPPONENT_PAPER:
                        score += ROCK_POINT
                        break
                    case OPPONENT_SCISSORS:
                        score += PAPER_POINT
                        break
                }
                score += LOSE
                break
            case 'Y':
                switch (op) {
                    case OPPONENT_ROCK:
                        score += ROCK_POINT
                        break
                    case OPPONENT_PAPER:
                        score += PAPER_POINT
                        break
                    case OPPONENT_SCISSORS:
                        score += SCISSORS_POINT
                        break
                }
                score += DRAW
                break
            case 'Z':
                switch (op) {
                    case OPPONENT_ROCK:
                        score += PAPER_POINT
                        break
                    case OPPONENT_PAPER:
                        score += SCISSORS_POINT
                        break
                    case OPPONENT_SCISSORS:
                        score += ROCK_POINT
                        break
                }
                score += WIN
                break
        }
    }

    return `part two: Your puzzle answer is ${score}.`
}
