import {ADD_TODO} from './actionTypes';
let AddTodoAction = (text) =>{
    return {
        type:ADD_TODO,
        text
    }
}
export {AddTodoAction};