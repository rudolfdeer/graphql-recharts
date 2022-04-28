import { User } from '../interface';

type ProfileProps = {
  user: User;
}

export default function Profile(props: ProfileProps) {
  const { user } = props;

  return (
    <section className="profile">
      <img alt="User avatar" className="profile__avatar" src={user.avatar_url} />
      <div className="profile__name">
        <a href={user.html_url} target="_blank">{user.name ? user.name : user.login}</a>
      </div>
      {user.location ? <div className="profile__location">{user.location}</div> : null}
      {user.bio ? <div className="profile__bio">{user.bio}</div> : null}
    </section>
  );
}