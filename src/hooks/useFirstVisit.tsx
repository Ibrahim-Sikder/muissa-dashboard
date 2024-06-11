// hooks/usePersistentAlert.ts
import { useEffect, useState } from "react";

const usePersistentAlert = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  useEffect(() => {
    const alertClosed = localStorage.getItem("alertClosed");
    if (alertClosed === "true") {
      setIsAlertVisible(false);
    }
  }, []);

  const closeAlert = () => {
    setIsAlertVisible(false);
    localStorage.setItem("alertClosed", "true");
  };

  return { isAlertVisible, closeAlert };
};

export default usePersistentAlert;
