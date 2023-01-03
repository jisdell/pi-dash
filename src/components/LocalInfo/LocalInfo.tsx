export const LocalInfo = () => {
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
    <div style={{ backgroundColor: "#3498db", color: "white" }}>
      <h1>
        {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </h1>
      <h2>{dayOfWeek}</h2>
      <h3>{now.toLocaleDateString()}</h3>
      <h3>Birmingham, AL</h3>
    </div>
  );
};
