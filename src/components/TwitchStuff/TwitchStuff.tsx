export interface TwitchUser {
  id: string;
  user_name: string;
}

interface TwitchProps {
  users: TwitchUser[];
}

export const TwitchStuff = ({ users }: TwitchProps) => {
  return (
    <div style={{ backgroundColor: "#9146ff", color: "white" }}>
      <h1>Live:</h1>
      {users.map(({ id, user_name }) => (
        <h2 key={id}>{user_name}</h2>
      ))}
    </div>
  );
};
