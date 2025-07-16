// src/App.jsx
import { useState } from "react";
import notificationsData from "./notifications";
import Card from "./Card";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Notifications</h1>
        <div className="notification-count">
          {notifications.length}{" "}
          {notifications.length === 1 ? "Notification" : "Notifications"}
        </div>
      </header>

      <main className="notifications-container">
        {notifications.length > 0 ? (
          <>
            <button className="clear-all-btn" onClick={clearAllNotifications}>
              Clear All
            </button>

            {notifications.map((notification) => (
              <Card key={notification.id}>
                <div className="notification-content">
                  <h3>{notification.name}</h3>
                  <p>{notification.message}</p>
                </div>
                <button
                  className="close-btn"
                  onClick={() => removeNotification(notification.id)}
                >
                  &times;
                </button>
              </Card>
            ))}
          </>
        ) : (
          <div className="no-notifications">
            <p>All caught up! 🎉</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
