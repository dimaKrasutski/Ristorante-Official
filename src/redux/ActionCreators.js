import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => { //THUNK

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .then(response => (console.log(JSON.stringify(response))))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};



export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type:ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
})

 export const addDishes = (dishes) =>({
     type:ActionTypes.ADD_DISHES,
     payload:dishes
 })




 export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});





// HOME ASSIGNMENT Task 1
export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());
    return fetch(baseUrl + 'leaders')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}
export const leadersLoading = () => ({
    type: ActionTypes.LOADING_LEADERS
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.FAILED_LEADERS,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});


  

//Home Assignment Task 2
export const postFeedback = ( firstname,lastname,telnum,email,agree,contactType,message) => (dispatch) => {  //THUNK
    
   
const newFeedback={
     firstname:firstname,
     lastname:lastname,
     telnum:telnum,
     email:email,
     agree:agree,
     contactType:contactType,
     message:message
}

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
        'Content-Type': 'application/json'
               },
        credentials: 'same-origin',
        })
    .then(response => {
      
        if (response.ok) {
           
          return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
              var errmess = new Error(error.message);
              throw errmess;
        })
    .then(response => response.json())
    .then(response => { dispatch(addFeedback(response)), dispatch(feedbackAlert(response)) } )
    .catch(errorMess=> dispatch(feedbackFailed(errorMess)))
    }

export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});

export const feedbackFailed = (errMessage) =>({
    type:ActionTypes.FEEDBACK_FAILED,
    payload:errMessage
})

export const feedbackAlert = (response)=>({
    type: ActionTypes.FEEDBACK_ALERT,
    payload:response
})