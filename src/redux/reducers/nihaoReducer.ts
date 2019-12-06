import {ADD_TODO, TOGGLE_TODO} from '../actions/nihaoActions';
interface Action {
    type: string;
    index: number;
    text: string;
}

export default function todos(state: Array<object> = [], action: Action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo: any, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}
