import {AddTodoAction} from '../actions/action';

let todoReducer = (state = [] , action) => {
    switch (action.type){
        case 'ADD_TODO':
            return Object.assign({}, state , {
                text:'_加入的。'
            })
        default:
            return state;
    }
}
export {todoReducer}