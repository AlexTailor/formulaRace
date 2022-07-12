import React from "react";
import axios from "axios";
export const DriverCard = (props) => {
  const driver = props.driver;

  const handleClick = async () => {
    const result = await axios.post(`/api/drivers/${driver.id}/overtake`);
    props.setDrivers(result.data);
  };

  return (
    <div className="col-sm-3">
      <div className="card text-center">
        <img
          className="card-img-top image-size"
          src={`/static/${driver.code.toLowerCase()}.png`}
          alt={driver.firstname}
        />
        <div className="card-body">
          <h5 className="card-title">{`${driver.firstname} ${driver.lastname}`}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Code: {driver.code}</li>
          <li className="list-group-item">Country: {driver.country}</li>
          <li className="list-group-item">Team: {driver.team}</li>
          <li className="list-group-item">Place: {driver.place}</li>
        </ul>
        <div className="card-body">
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={handleClick}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};
