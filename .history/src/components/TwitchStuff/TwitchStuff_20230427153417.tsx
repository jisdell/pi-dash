export interface TwitchUser {
  id: string;
  user_name: string;
}

interface TwitchProps {
  users: TwitchUser[];
}

export const TwitchStuff = ({ users }: TwitchProps) => {
  return (
    <div
      style={{
        backgroundColor: "#9146ff",
        color: "white",
        display: "flex",
        height: "50vh",
        width: "100vh",
        paddingLeft: "25px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Live:</h1>
      {users.map(({ id, user_name }) => (
        <h2 key={id}>{user_name}</h2>
      ))}
    </div>
  );
};
