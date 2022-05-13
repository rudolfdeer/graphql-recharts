import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ContributionsCollection } from '../interface';

type ChartProps = {
  collection: ContributionsCollection;
};

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
    const result = getData(collection);
    setData(result);
  }, [collection]);

  return (
    <section className="chart">
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
    </section>
  );
}
