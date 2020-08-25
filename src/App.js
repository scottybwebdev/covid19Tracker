import React from 'react';

import { Cards, Chart, CountryPicker } from './components'; // imported from index.js file within components folder
import styles from './App.module.css';
import { fetchData } from './api';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Footer from './layout/footer';

import coronaImage from './images/logo.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    // pulls data from api
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>

                <Router>
                  <Footer />
                  <Route exact path="/" render={props => (
                    <React.Fragment>
                        <img className={styles.image} src={coronaImage} alt='COVID-19 logo' />
                        <Cards data={data} />
                        <CountryPicker handleCountryChange={this.handleCountryChange}/>
                        <Chart data={data} country={country}/>
                        <br>
                        </br>
                    </React.Fragment>    
                  )}/>
                  <Route path="/about" component={About}/>
                </Router>  
            </div>
        )
    }
}

export default App;