interface weatherProps {
  temp: number | undefined;
  humidity: number | undefined;
}

export const Weather = ({ temp, humidity }: weatherProps) => {
  return (
    <div
      style={{
        backgroundColor: "#364658",
        color: "white",
        height: "50vh",
        width: "100vh",
        display: "flex",
        paddingLeft: "25px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Temperature: {Math.round(temp || 0)}°F</h2>
      <h2>Humidity: {humidity}%</h2>
    </div>
  );
};
