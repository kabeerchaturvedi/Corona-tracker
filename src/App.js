import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Charts/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import covidimage from './images/image.png';

import { fetchData } from './api/index';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
        this.setState({
      data: fetchedData
    })

  }
  handleCountries = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country
    });

  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidimage} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountries={this.handleCountries} />
        <Chart data={data} country={country} />

      </div>
    );
  }
}


export default App;


