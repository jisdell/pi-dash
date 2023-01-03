interface weatherProps {
  temp: number | undefined;
  humidity: number | undefined;
}

export const Weather = ({ temp, humidity }: weatherProps) => {
  return (
    <div style={{ backgroundColor: "#364658", color: "white" }}>
      <h2>Temperature: {temp}</h2>
      <h2>Humidity: {humidity}</h2>
    </div>
  );
};
