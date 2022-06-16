import { User } from '../interface';

type ProfileProps = {
  user: User;
};

export default function Profile({ user }: ProfileProps) {
  return (
    <section className="profile">
      <img alt="User avatar" className="profile__avatar" src={user.avatarUrl} />
      <div className="profile__name">
        <a
          href={`https://github.com/${user.login}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.name ? user.name : user.login}
        </a>
      </div>
      {user.location && (
        <div className="profile__location">{user.location}</div>
      )}
      {user.bio && <div className="profile__bio">{user.bio}</div>}
    </section>
  );
}
