import { readFile } from '../helpers/fileHelper'

export const assignmentTwoQuestionOne = (): string => {
    let count = 0
    for (const [a1, a2, b1, b2] of getPairs()) {
        if ((a1 <= b1 && a2 >= b2) || (b1 <= a1 && b2 >= a2)) {
            count++
        }
    }

    return `part one: Your puzzle answer is ${count}.`
}
export const assignmentTwoQuestionTwo = (): string => {
    let count = 0
    for (const [a1, a2, b1, b2] of getPairs()) {
        if ((a1 >= b1 && a1 <= b2) || (b1 >= a1 && b1 <= a2)) {
            count++
        }
    }
    return `part one: Your puzzle answer is ${count}.`
}

function* getPairs(): Generator<[number, number, number, number]> {
    for (const line of readFile('src/input/input_assignment2.txt')) {
        const matches = line.match(/(\d+)-(\d+),(\d+)-(\d+)/)
        const [, a1, a2, b1, b2] = matches !== null ? matches : []
        yield [parseInt(a1), parseInt(a2), parseInt(b1), parseInt(b2)]
    }
}
