import { useQuery } from '@apollo/client';
import { Box, CircularProgress } from '@mui/material';
import { CONTRIBUTIONS } from '../api/github';
import Chart from './Chart';
import Profile from './Profile';

type SectionProps = {
  nickname: string;
};

export default function Section({ nickname }: SectionProps) {
  const { loading, error, data } = useQuery(CONTRIBUTIONS, {
    fetchPolicy: 'no-cache',
    variables: { nickname },
  });

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          height: '100vh',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) return <div>'An error has occurred: {error.message}</div>;

  return (
    <>
      <Profile user={data.user} />
      <Chart collection={data.user.contributionsCollection} />
    </>
  );
}
