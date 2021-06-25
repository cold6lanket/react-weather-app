import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

class WeatherData extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        this.setState({loading: false});
    }

    render() {
        const { weather, iconPicker, selected } = this.props;

        if (!weather) return null;

        const status = weather.list[selected ? selected : 0].weather[0].main;
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        return (
            <div className="data-box">
                <div className="selected-city">
                    <div className="location">{weather.city.name}, {weather.city.country}</div>
                    <div className="date">
                        {days[new Date(weather.list[selected ? selected : 0].dt_txt).getDay()]}
                    </div>
                    <div className="weather">{status}</div>
                </div>
                <div className="weather-field">
                    <div className="weather-temp">
                        <span><img src={`https://ssl.gstatic.com/onebox/weather/64/${iconPicker(status)}.png`} alt="weather" /></span>
                        <div className="temp">
                        {this.state.loading ? <Spinner/> : Math.round(weather.list[selected ? selected : 0].main.temp)}°c
                        </div>
                    </div>
                    <div className='small-info'>
                        <div>Wind: <span id="span">{weather.list[selected ? selected : 0].wind.speed} m/s</span></div>
                        <div>Humidity: <span id="span">{weather.list[selected ? selected : 0].main.humidity} %</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherData;