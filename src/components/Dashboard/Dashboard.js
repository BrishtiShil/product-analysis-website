import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ComposedChart, Tooltip, Legend, Area, Bar } from 'recharts';

const Dashboard = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div>
            <div>
                <h2>Month Wish Sell</h2>
                <LineChart width={800} height={500} data={data}>
                    <Line dataKey={"sell"}></Line>
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <h2>Investment vs Revenue</h2>
            <ComposedChart width={730} height={250} data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="sell" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default Dashboard;