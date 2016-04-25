import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {SimpleTest} from '../../components';

export default class ProjectsMain extends Component {
  render() {
    const styles = require('./ProjectsMain.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Projects"/>
        {/* div wrapping parallax to be size of viewport */}
        <p>Projects Main!</p>
        <SimpleTest width={200} height={200}/>

      </div>
    );
  }
}
