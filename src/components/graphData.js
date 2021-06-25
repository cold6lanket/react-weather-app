import React from 'react';
import {AreaChart, XAxis, YAxis, Tooltip, CartesianGrid, Area} from 'recharts';


function GraphData({ data }) {
    if (!data) return null;

    const graphData = [
        {
            name: data.list[0].dt_txt.slice(10, 16),
            temp: data.list[0].main.temp,
            pv: 2400,
            amt: 2400,
        },
        {
            name: data.list[1].dt_txt.slice(10, 16),
            temp: data.list[1].main.temp,
            pv: 2400,
            amt: 2400,
        },
        {
            name: data.list[2].dt_txt.slice(10, 16),
            temp: data.list[2].main.temp,
            pv: 2400,
            amt: 2400,
        },
        {
            name: data.list[3].dt_txt.slice(10, 16),
            temp: data.list[3].main.temp,
            pv: 2400,
            amt: 2400,
        },
        {
            name: data.list[4].dt_txt.slice(10, 16),
            temp: data.list[4].main.temp,
            pv: 2400,
            amt: 2400,
        },
    ];
    
    return (
        <div className="chart">
            <AreaChart 
                width={580} height={250} data={graphData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" tickMargin={10} />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="temp" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </div>
    );
}

export default GraphData;