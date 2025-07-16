const Notification = ({ notification, onClear }) => {
  const { id, name, message } = notification;
  return (
    <div className="notification">
      <div>
        <strong>{name}</strong>
        <p>{message}</p>
      </div>
      <button onClick={() => onClear(id)}>Clear</button>
    </div>
  );
};

export default Notification;
