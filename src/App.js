import SearchBar from './components/searchBar';

import { Component } from 'react';
import WeatherData from './components/weatherData';
import GraphData from './components/graphData';
import ForecastData from './components/forecastData';
import DefaultPage from './components/defaultPage';
import ErrorBoundary from './components/errorBoundary';


const API = process.env.REACT_APP_WEATHER_API_KEY;
const URL = 'https://api.openweathermap.org/data/2.5/';


class App extends Component {
  state = {
    data: null,
    term: '',
    loading: true,
    selected: null,
    error: false,
  }


  searchCity = async (e) => {
    const { term } = this.state;

    if (e.key === 'Enter' && term && isNaN(term)) {
      
      await fetch(`${URL}forecast?q=${this.state.term}&units=metric&APPID=${API}`)
            .then(res => {
              if (res.ok) return res.json();

              throw new Error('Something went wrong');
            })
            .then(result => {
              this.setState({
                data: result,
                term: '',
                loading: false,
                selected: null,
                error: false
              });
            })
            .catch(err => {
              this.setState({
                error: true,
                term: '',
              });
            });
     
    }
  }

  componentDidCatch() {
    this.setState({
      error: true
    });
  }

  componentWillUnmount() {

  }

  // componentDidUpdate(prevState) {
  //   if (this.state.data !== prevState.data) {
  //     this.searchCity();
  //   }
  // }

  onTermUpdate = (term) => {
    this.setState({term});
  }

  onSelectUpdate = (selected) => {
    this.setState({selected});
  }

  iconPicker = (status) => {
    if (status === 'Clouds') {
      return 'cloudy';
    } else if (status === 'Clear') {
      return 'sunny';
    } else if (status === 'Rain') {
      return 'rain';
    } else {
      return 'partly_cloudy';
    }
  }
 
  render() {
    const { data } = this.state;
    let classNames = 'main';

    if (data) {
      if (parseInt(data.list[0].dt_txt.slice(10, 13)) > 17) {
        classNames += ' cold';
      }
    }
    
    return (
      <div className="app">
        <main className={classNames}>
          <SearchBar
            error={this.state.error}
            term={this.state.term} 
            onSearch={this.searchCity} 
            onTermUpdate={this.onTermUpdate} 
          />
          <div className="main-data">
            {!data ? <DefaultPage message={this.state.error} /> : (
              <ErrorBoundary>
                <WeatherData 
                  iconPicker={this.iconPicker}
                  dateBuilder={this.dateBuilder} 
                  loading={this.state.loading} 
                  weather={this.state.data} 
                  selected={this.state.selected}
                />
                <ForecastData 
                  iconPicker={this.iconPicker}
                  onSelectUpdate={this.onSelectUpdate}
                  data={this.state.data} 
                />
                <GraphData 
                  data={this.state.data}
                />
              </ErrorBoundary>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
