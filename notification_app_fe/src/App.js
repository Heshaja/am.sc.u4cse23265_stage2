import React, {
  useEffect,
  useState,
} from "react";

import { getNotifications } from "./notificationService";

import NotificationCard from "./components/NotificationCard";

import FilterBar from "./components/FilterBar";

import Log from "./logger";

function App() {
  const [notifications, setNotifications] =
    useState([]);

  const [type, setType] = useState("");

  const [limit, setLimit] = useState(10);

  useEffect(() => {
    async function loadData() {
      const data =
        await getNotifications(limit, type);

      setNotifications(data);

      await Log(
        "frontend",
        "info",
        "component",
        "Notifications rendered"
      );
    }

    loadData();
  }, [type, limit]);

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1>Campus Notifications</h1>

      <FilterBar
        type={type}
        setType={setType}
        limit={limit}
        setLimit={setLimit}
      />

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          item={item}
        />
      ))}
    </div>
  );
}

export default App;