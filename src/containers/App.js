import { updateGeo } from '../reducers/main';
import { setSetting } from '../reducers/settings';
import { connect } from 'react-redux';
import Main from './Main';
import React, { Component, PropTypes } from 'react';
import { Navigation, Layout, Drawer, Content, Header, Switch } from 'react-mdl';

class App extends Component {
  render() {
    const { km, detailed, children, setting } = this.props;
    console.log("In App");
    console.dir( this.props);
    return (
      <div>
        <p>Hello World</p>
    
         <Content>{children}</Content>

      </div>

      );
  }
}

App.propTypes = {
  setting: PropTypes.func,
  updateGeo: PropTypes.func,
  children: PropTypes.object,
  km: PropTypes.bool,
  detailed: PropTypes.bool
};

export default connect(({settings})=>{ return settings},{setting: setSetting, updateGeo})(App);