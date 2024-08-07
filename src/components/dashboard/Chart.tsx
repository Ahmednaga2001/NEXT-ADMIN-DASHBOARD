"use client"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: "Sun",
      visit: 4000,
      click: 2400,
    },
    {
      name: "Mon",
      visit: 3000,
      click: 1398,
    },
    {
      name: "Tue",
      visit: 2000,
      click: 3800,
    },
    {
      name: "Wed",
      visit: 2780,
      click: 3908,
    },
    {
      name: "Thu",
      visit: 1890,
      click: 4800,
    },
    {
      name: "Fri",
      visit: 2390,
      click: 3800,
    },
    {
      name: "Sat",
      visit: 3490,
      click: 4300,
    },
  ];
export default function Chart() {
    return (
        <section className="chart p-5 m-2 bg-primary text-white">
            <h3 className="text-gray-600 font-JanatWT font-bold text-xl">Weekly Reacap</h3>
               <div className='h-[400px] pt-5'>
               <ResponsiveContainer width="100%" height="90%" >
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip contentStyle={{backgroundColor:"#0D152C"}} />
                        <Legend />
                        <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                    </LineChart>
                </ResponsiveContainer>
               </div>
  


        </section>
    )
}
