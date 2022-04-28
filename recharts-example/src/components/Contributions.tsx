import { useQuery } from '@apollo/client';
import { CONTRIBUTIONS } from '../api/github';
import { User } from '../interface';
import { Box, Button, CircularProgress, Grid } from '@mui/material';

type ContributionsProps = {
  user: User;
}

export default function Contributions(props: ContributionsProps) {
  const { user } = props;
  const nickname = user.login;

  const { loading, error, data } = useQuery(CONTRIBUTIONS, {
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
    <div className="contributions">
      {data.user.email}
    </div>
  )
}