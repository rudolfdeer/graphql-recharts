import { useQuery } from '@apollo/client';
import { Box, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { CONTRIBUTIONS } from '../api/github';
import Contributions from './Contributions';
import Profile from './Profile';

type SectionProps = {
  nickname: string;
};

export default function Section(props: SectionProps) {
  const { nickname } = props;
  console.log(nickname);
  const { loading, error, data, refetch } = useQuery(CONTRIBUTIONS, {
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
      <Contributions collection={data.user.contributionsCollection} />
    </>
  );
}
