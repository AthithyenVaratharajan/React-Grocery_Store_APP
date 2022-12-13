import {createStore} from 'redux';

const store = createStore(reducer, preloadedState, enhancer);

const addOrange = {
    type: 'ADD_FRUIT',
    fruit: 'orange',
};

const reducer = (state ={}, action ) => {
    switch(action.type) {
        case 'ACTION_TYPE_ONE':
            return { type: 1 };
        case 'ACTION_TYPE_TWO':
            return { type: 2 };
        case 'ACTION_TYPE_RESET':
            return {};
        default:
            return state;
    }
}

const display = () =>{
    console.log(store.getState());
}

const unsubscribeDisplay = store.subscribe(display);

store.dispatch(addOrange); // ['orange' , 'orange']

// display will no longer be invoked after store.dispatch()
unsubscribeDisplay();

store.dispatch(addOrange); // no output
