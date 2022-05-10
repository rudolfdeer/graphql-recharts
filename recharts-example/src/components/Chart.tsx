import { ContributionsCollection } from '../interface';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

type ChartProps = {
  collection: ContributionsCollection;
};

//name
//uv
//amt
//contributionCalendar: totalContributions: 201, weeks: [{contributionDays: [{color: "#9be9a8"
// contributionCount: 3
// date: "2021-04-28"
// weekday: 3}]
//month: [{firstDay: "2021-04-01"
// name: "Apr"
// totalWeeks: 1
// year: 2021}]

type ChartElement = {
  name: string;
  contributions: number;
};

const getData = (collection: ContributionsCollection) => {
  const weeks = collection.contributionCalendar.weeks.map((week) => {
    const arr = week.contributionDays.map((el) => {
      const obj = {
        name: el.date,
        contributions: el.contributionCount,
      };
      return obj;
    });
    return arr;
  });

  const data = [] as ChartElement[];

  weeks.forEach((el) => el.forEach((w) => data.push(w)));

  return data;
};

export default function Chart({ collection }: ChartProps) {
  const [data, setData] = useState<ChartElement[]>([]);

  useEffect(() => {
    const data = getData(collection);
    setData(data);
  }, [collection]);

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="contributions"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <Box
        sx={{
          fontSize: '16px',
        }}
      >
        Total number of contributions:{' '}
        {collection.contributionCalendar.totalContributions}
      </Box>
    </>
  );
}
