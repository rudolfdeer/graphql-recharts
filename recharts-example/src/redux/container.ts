import { connect } from 'react-redux';
import App from '../components/App';
import { User } from '../interface';
import { getUser } from './thunks';

const mapStateToProps = (user: User) => {
  return {
    user,
  };
};

const mapDispatchToProps = {
  getUser,
};

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnect;