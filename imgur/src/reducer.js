export const fetch = (state = [], action) => {

    if (action.type === 'FETCH') {
        state = [];
        console.log(action.payload)
        return [...state, action.payload];
    }
    return state;
}
