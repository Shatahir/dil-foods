import React from 'react'
import './Charts.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  {
    name: 'Page A',
    Biryani: 4000,
    Pizza: 2400,
    Burger: 2400,
  },
  {
    name: 'Page B',
    Biryani: 3000,
    Pizza: 1398,
    Burger: 2210,
  },
  {
    name: 'Page C',
    Biryani: 2000,
    Pizza: 9800,
    Burger: 2290,
  },
  {
    name: 'Page D',
    Biryani: 2780,
    Pizza: 3908,
    Burger: 2000,
  },
  {
    name: 'Page E',
    Biryani: 1890,
    Pizza: 4800,
    Burger: 2181,
  },
  {
    name: 'Page F',
    Biryani: 2390,
    Pizza: 3800,
    Burger: 2500,
  },
  {
    name: 'Page G',
    Biryani: 3490,
    Pizza: 4300,
    Burger: 2100,
  },
]

const BarChat = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='Pizza' stackId='a' fill='#8884d8' />
      <Bar dataKey='Burger' stackId='a' fill='#82ca9d' />
      <Bar dataKey='Biryani' fill='#ffc658' />
    </BarChart>
  )
}

export default BarChat
