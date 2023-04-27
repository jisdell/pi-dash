import { Avatar, Chip, Grid } from "@mui/material";
export interface TwitchUser {
  id: string;
  user_name: string;
  thumbnail_url: string;
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
      <Grid container spacing={2}>
        {users.map(({ id, user_name, thumbnail_url }) => (
          <Grid item xs={3}>
            <Chip
              key={id}
              label={user_name}
              size="medium"
              avatar={<Avatar src={thumbnail_url} />}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
