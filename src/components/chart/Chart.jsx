import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
export const Chart = ({data}) => {
   return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          
          data={data}
          margin={{
            top: 0,
            right: 16,
            left: 16,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Area type="monotoneX" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
   )
}
