export const fetch = (state=[],action)=>{

  if(action.type === 'FETCH'){
    return [...state,action.payload];
  }
  return state;
}
