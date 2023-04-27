import { Chip, Grid } from "@mui/material";
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
      <Grid container spacing={2}>
        {users.map(({ id, user_name }) => (
          <Grid item xs={4}>
            <Chip key={id} label={user_name} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
