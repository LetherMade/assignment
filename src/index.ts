import figlet from 'figlet'
import {
    assignmentOneQuestionOne,
    assignmentOneQuestionTwo,
} from './assignments/assignmentOne'
import {
    assignmentTwoQuestionOne,
    assignmentTwoQuestionTwo,
} from './assignments/assignmentTwo'

console.log(figlet.textSync('Assignment'))
console.log('')
console.log(assignmentOneQuestionOne())
console.log(assignmentOneQuestionTwo())
console.log('')
console.log(assignmentTwoQuestionOne())
console.log(assignmentTwoQuestionTwo())
