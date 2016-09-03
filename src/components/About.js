import React, { PropTypes } from 'react';

const About = ({ appname }) => (
  <div><p>About Us page {appname}</p></div>
);


About.propTypes = {
  appname: PropTypes.string
};

export default About;