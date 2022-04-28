import { useQuery } from '@apollo/client';
import { CONTRIBUTIONS } from '../api/github';
import { User } from '../interface';
import Contributions from './Contributions';
import Form from './Form';
import Profile from './Profile';

type AppProps = {
  user: User;
  getUser: (nickname: string) => Promise<void>;
}

function App(props: AppProps) {
  const {user, getUser} = props;

  return (
    <div className="main">
      <Form getUser={getUser}/>
      {user.id ? <Profile user={user}/> : null}
      {user.id ? <Contributions user={user}/> : null}
    </div>
  )
}

export default App;
