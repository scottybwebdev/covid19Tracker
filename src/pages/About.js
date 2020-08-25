import React from 'react';

import styles from '../App.module.css';

import coronaImage from '../images/logo.png';

function About() {
    return (
        <React.Fragment>
            <body style={aboutBody}>
                <img src={coronaImage} alt="Covid-19 logo" className={styles.image} style={logo}></img>
                <h1>About</h1>
                <p>This is an example of a Covid-19 Tracker build using React JS and styled using Material UI and Chart JS.  The API used is the Covid-19 Mathdro API.</p>
                <br>
                </br>
                <h2>References</h2>
                <ul>
                    <li>JavaScript Mastery.  2020.  Build a COVID-19 Tracker Application - React JS Project (Hooks, Material UI, Charts js).  [Online].  Available from: <a href="https://youtu.be/khJlrj3Y6Ls" style={aboutLinks}>https://youtu.be/khJlrj3Y6Ls</a></li>
                    <li>Scott Blackley/FreeLogo Design.  2020.  Covid-19 Tracker logo.  [Online]. Available from: <a href="https://www.freelogodesign.org/" style={aboutLinks}>https://www.freelogodesign.org/</a></li>
                </ul>
            </body>    
        </React.Fragment>
    )
}

const aboutBody = {
    marginLeft: '5px',
    color: '#6497b1',
    fontFamily: 'Arial, Helvetica, sans-serif'
}
  
const aboutLinks = {
    color: '#03396c'
}

const logo = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
}

export default About;