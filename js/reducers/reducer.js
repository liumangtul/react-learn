import {AddTodoAction} from '../actions/action';

let todoReducer = (state = {text:'DEFAULT'} , action) => {
    console.log('reducer',state,action)
    switch (action.type){
        case 'ADD_TODO':
            return Object.assign({}, state , {
                text:'_加入的。'
            })
            /*return {
                ...state,
                text
            }*/
        default:
            return state;
    }
}
export {todoReducer}