interface weatherProps {
  city: string | undefined;
}

export const LocalInfo = ({ city }: weatherProps) => {
  const now = new Date();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayOfWeek = weekdays[now.getDay()];

  return (
    <div
      style={{
        backgroundColor: "#3498db",
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
      <h1>
        {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </h1>
      <h2>{dayOfWeek}</h2>
      <h3>{now.toLocaleDateString()}</h3>
      <h3>{city}, AL</h3>
    </div>
  );
};
