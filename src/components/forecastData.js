import React from 'react';

function ForecastData({ data, iconPicker, onSelectUpdate }) {
    if (!data) return null;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const elements = data.list.map((el, index) => {
        return (
            <div 
                key={el.dt} 
                className="forecast-element"
                onClick={() => onSelectUpdate(index)}
            >
                <div className="forecast-day">
                    {days[new Date(el.dt_txt).getDay()]}
                </div>
                <div className="forecast-icon">
                    <img 
                        src={`https://ssl.gstatic.com/onebox/weather/64/${iconPicker(el.weather[0].main)}.png`} 
                        alt="icon"
                     />
                </div>
                <div className="temp forecast">
                    {Math.round(el.main.temp)}°c
                </div>
                
            </div>
        );
    });


    return (
        <div className="forecast-box">
            {elements[7]}
            {elements[15]}
            {elements[23]}
            {elements[31]}
            {elements[39]}
        </div>
    );
}

export default ForecastData;