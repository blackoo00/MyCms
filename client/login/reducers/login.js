import types from '../constants/ActionTypes'

const initialState = {
    warn: '',
    ac:'',
    se:''
}

const App = (state = initialState, action) => {
    switch (action.type) {
        case types.INPUTAC:
            return {
                ...state,
                ac:action.data
            };
        case types.INPUTSE:
            return {
                ...state,
                se:action.data
            };
        default:
            return state;
    }
}

export default App
