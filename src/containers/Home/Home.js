import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Parallax, Background } from 'react-parallax';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>

        {/* div wrapping parallax to be size of viewport */}
        <Parallax className={styles.parallax} strength={300}>
					<Background>
              <img style={{width: 800, height: 600}} src="http://media.mnn.com/assets/images/2014/04/swan.jpg"/>
					</Background>
          <div>
					<h1>A collection of textile samples lay spread out on the table ...</h1>
          </div>
				</Parallax>
        <p>Test2</p>
        {/* }<div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>

            <p>
              <a className={styles.github} href="https://github.com/erikras/react-redux-universal-hot-example"
                 target="_blank">
                <i className="fa fa-github"/> View on Github
              </a>
            </p>

            <p className={styles.humility}>
              Created and maintained by <a href="https://twitter.com/erikras" target="_blank">@erikras</a>.
            </p>
          </div>
        </div> */}

      </div>
    );
  }
}
