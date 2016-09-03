import { LOCAL_STORAGE_KEY } from '../constants';

const storage = localStorage[LOCAL_STORAGE_KEY];

const initialState = {
  current: {
    description: '',
    editing: false
  },
  geo: {
    latitude: undefined,
    longitude: undefined,
    orientation: null,
    accuracy: undefined,
    lastUpdate: undefined
  },
  selected: {
    index: null,
    text: ''
  },
  valueofoperator:{
    val:0,
    firstname:'',
    lastname:''
  },
  locations: (storage && JSON.parse(storage)) || []
};

export default function (state = initialState, action) {

  switch (action.type) {
    case 'UPDATE_GEO':
      return {
        ...state,
        geo: {
          ...state.geo,
          ...action.geo
        }
      };

      case 'CURRENT_LOCATION_DESC':
      return {
        ...state,
        valueofoperator: { ...state.valueofoperator, firstname: action.desc }
      };

      case 'INCREMENT_VAL':
      console.log("In reducer");
      console.log(state);
      return {
        ...state,
        valueofoperator: { ...state.valueofoperator, val: state.valueofoperator.val+action.val}
      };

       case 'RESPONSE_BACK':
      return {
        ...state,
        selected: { ...state.selected, text: action.text }
      };

        case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        selected: { ...state.selected, text: action.payload }
      };

          case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        selected: { ...state.selected, text: action.error }
      };


    default:
      return state;
  }
}

