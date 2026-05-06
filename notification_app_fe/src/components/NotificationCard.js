function NotificationCard({ item }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>{item.Type}</h2>

      <p>{item.Message}</p>

      <small>{item.Timestamp}</small>
    </div>
  );
}

export default NotificationCard;