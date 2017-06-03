export let searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
    return state;
  };
};

//showCompletedTodo default false, TOGGLE_SHOW_COMPLETED

export let showCompletedReducer = (state = false, action)=> {
  action.something = { holy: 'shit'}
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};
