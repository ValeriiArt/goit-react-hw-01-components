import Profile from "./Profile";
import user from "./path/user";
import Statistics from "./Statistics";
import data from "./path/data";

export const App = () => {
  return (
    <div>
      <Profile
      userName={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats = {user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    </div>
  );
};
