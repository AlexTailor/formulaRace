import React, { useEffect, useState } from "react";
import axios from "axios";
import { DriverCard } from "../components/DriverCard";

export const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/drivers");
      setDrivers(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="row">
      {drivers.length !== 0 &&
        drivers.map((driver) => (
          <DriverCard driver={driver} setDrivers={setDrivers} />
        ))}
    </div>
  );
};
