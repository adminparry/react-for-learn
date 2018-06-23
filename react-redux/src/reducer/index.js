import { createStore , combineReducers} from 'redux'
import count from './counter';
import fuck,{key} from './fuck';
// reducer center

const reducers = combineReducers({
	count,
	fuck
})

export const makeAllReducer = (asyncReducers) => combineReducers({
  ...asyncReducers
});

export const injectReducer = (store, { key, reducer }) => {
	store.asyncReducers = {};

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeAllReducer(store.asyncReducers));
}

export const createReducer = (initialState, ACTION_HANDLES) => (
  (state = initialState, action) => {
    const handler = ACTION_HANDLES[action.type];
    return handler ? handler(state, action) : state;
  }
);




// Store
const storer = createStore(reducers)
console.log(reducers)
storer.replaceReducer(makeAllReducer({fuck,count}))


storer.subscribe(() => {

  console.log(this,arguments,store);

})

export const store = storer;


