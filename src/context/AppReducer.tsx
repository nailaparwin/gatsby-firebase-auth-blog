export default (state, action) => {
     switch (action.type){
         
        case 'ADD_FEEDS':
             return{
                 ...state,
                 feeds: [...state.feeds, action.payload]
             }
         default:
             return state;
     }
}