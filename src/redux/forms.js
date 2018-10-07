import * as ActionTypes from './ActionTypes';

export const Feedback = (state  = {errMess :null,feedbackStore:[]}, action) => {
       switch (action.type) {

            case ActionTypes.FEEDBACK_FAILED:
       return {...state, feedbackStore: [], errMess :action.payload};

            case ActionTypes.ADD_FEEDBACK:
       return {...state,  feedbackStore:action.payload, errMess:null};

       case ActionTypes.FEEDBACK_ALERT:
       alert(JSON.stringify(action.payload));
       return {...state, feedbackStore: action.payload, errMess : null};
      
      default:
    return state;
}
};
