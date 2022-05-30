import Profile from "./Profile/Profile";
import user from "./path/user"

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Profile
      userName={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats = {stats}
    />
  );
};
