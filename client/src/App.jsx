import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar
} from 'recharts';
import './App.css';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/data')
            .then(response => {
                console.log('Data fetched from server:', response.data); // Debugging
                setData(response.data);
            })
            .catch(error => console.error('Error fetching data:', error)); // Debugging
    }, []);

    return (
        <div className="App">
            <h1>Intern Data Dashboard</h1>

            <LineChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="end_year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="intensity" stroke="#8884d8" />
                <Line type="monotone" dataKey="likelihood" stroke="#82ca9d" />
                <Line type="monotone" dataKey="relevance" stroke="#ffc658" />
            </LineChart>

            <BarChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="intensity" fill="#8884d8" />
                <Bar dataKey="likelihood" fill="#82ca9d" />
                <Bar dataKey="relevance" fill="#ffc658" />
            </BarChart>
        </div>
    );
}

export default App;
