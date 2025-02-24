// import { BUY_BOOK } from "./bookType";

// const initialState = {
//     numOfBooks : 50
// };

// const bookReducer = (state = initialState, action) => {  
//     switch (action.type) {
//         case BUY_BOOK:
//             return {   
//                 numOfBooks: state.numOfBooks - 5
//             }
//             break;

//         default: return state;
//             break;
//     }
// };

// export default bookReducer;
// src/redux/bookex/bookReducer.js
import { BUY_BOOK } from "./bookType";

const initialState = {
    numOfBooks: 50
};

const bookReducer = (state = initialState, action) => {  
    switch (action.type) {
        case BUY_BOOK:
            return {   
                ...state,  // Keep the existing state
                numOfBooks: state.numOfBooks - 5
            };

        default:
            return state;
    }
};

export default bookReducer;
