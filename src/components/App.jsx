import user from '../data/user.json';
import data from '../data/data.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

const { tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile  username={user.username}
  tag={tag}
  location={location}
  avatar={avatar}
        stats={stats} />
      <Statistics title="Upload stats" stats={data[0]} />
    </div>
  );
};
