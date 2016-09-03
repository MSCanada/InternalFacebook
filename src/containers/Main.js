import * as MainActions from '../reducers/main';
import React, { PropTypes , Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import About from '../components/About';
import fetch from 'isomorphic-fetch'

import {incrementAction} from '../actions/mainactions';
import {currentLocationDescAction} from '../actions/mainactions';
import {updateGeoAction,fetchPostsAction,fetchPostsSuccessAction,fetchPostsFailureAction} from '../actions/mainactions';



class Main extends Component{


render()
{
  const { updateGeo,fetchPosts, increment, currentLocationDesc, current, settings, route, geo: { latitude, longitude, orientation },valueofoperator } = this.props;
  console.log("In Main");
  console.dir(this.props);



  return (
       <div>
        <p>Hello World from 2</p>
        <About appname="RememberApp"></About>
        <button onClick={() => increment(1)} > Increment </button>
        <input value={valueofoperator.val} ></input>
        <input onChange= {e => currentLocationDesc(e.currentTarget.value)} ></input>
        <button onClick={() => fetchPosts(valueofoperator)} > FETCHDATA </button>



      </div>
        );
}
}


Main.propTypes = {
  dialog: PropTypes.object,
  route: PropTypes.object,
  geo: PropTypes.object,
  settings: PropTypes.object,
  current: PropTypes.object,
  valueofoperator: PropTypes.object
};

const mapStateToProps = ({ main, settings }) => ({
  ...main,
  settings
});


const mapDispatchToProps = (dispatch) => {
  return {
    
     updateGeo: (geo) =>{
      dispatch(updateGeoAction(geo));
     },

     increment: (val) =>{
      dispatch(incrementAction(val));

     },

     currentLocationDesc: (desc) => {
      dispatch(currentLocationDescAction(desc));
     },

       fetchPosts: (data) => {
      dispatch(fetchPostsAction());

      fetch('http://www.google.com', {
      method: 'post',
       body: JSON.stringify({
        data
      })
    }).then(response => {
      console.log(response);
      dispatch(fetchPostsSuccessAction(response))
    }).catch(err => {
   dispatch(fetchPostsFailureAction(response))
    });





    }



  }
}





export default connect(mapStateToProps, mapDispatchToProps)(Main);