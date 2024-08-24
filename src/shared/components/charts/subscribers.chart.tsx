"use client";
import { useState } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

interface subscribersAnalyticsData {
	month: string;
	count: string;
}

const SubscribersChart = () => {
	const [subscribersData, setsubscribersData] = useState<any>([]);

	const data = [
		{
			month: "Jan 24",
			count: 2400,
		},
		{
			month: "Feb 24",
			count: 2800,
		},
		{
			month: "Mar 24",
			count: 1346,
		},
		{
			month: "Apr 24",
			count: 568,
		},
		{
			month: "May 24",
			count: 3414,
		},
		{
			month: "Jun 24",
			count: 1200,
		},
		{
			month: "Jul 24",
			count: 3894,
		},
	];

	return (
		<div className="my-5 p-5 border rounded bg-white w-full h-96">
			<div className="w-full flex">
        <h3 className="font-medium">Active Subscribers</h3>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="opacity-[.5]">Shows all active subscribers</p>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#eb4898]" />
          <span className="pl-2 text-sm opacity-[0.7]">Subscribers</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="85%" className="mt-5" >
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} dx={-15} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#eb4898"
            fill="#eb4898"
          />
        </LineChart>

      </ResponsiveContainer>
		</div>
	);
};

export default SubscribersChart;
