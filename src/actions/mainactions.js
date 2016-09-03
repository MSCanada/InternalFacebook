import axios from 'axios';


export function updateGeoAction(geo) {
  return {
    type: 'UPDATE_GEO',
    geo: geo
  };
}

export function incrementAction(val) {
  return {
    type: 'INCREMENT_VAL',
    val: val
  };
}

export function currentLocationDescAction(desc) {
  return {
    type: 'CURRENT_LOCATION_DESC',
    desc: desc
  };
}

export function fetchPostsAction() {


  return {
    type: 'RESPONSE_BACK',
    text:'Response from Server'

  };
}


export function fetchPostsSuccessAction(posts) {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: posts
  };
}

export function fetchPostsFailureAction(error) {
  return {
    type: 'FETCH_POSTS_FAILURE',
    payload: error
  };
}



