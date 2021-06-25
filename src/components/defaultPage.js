import React from 'react';

function DefaultPage({ message }) {
    return (
        <div className="default-box">
            <h2>Welcome!</h2>
            <h3 style={{marginBottom: '40px'}}>Type city name and access weather data.</h3>
            {message ? <h3>Something went wrong...</h3> : null}
        </div>
    );
}

export default DefaultPage;