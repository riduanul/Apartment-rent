import React, { useState, useEffect } from "react";
import "./Apartments.css";

import Apartment from "../Apartment/Apartment";

export default function Apartments() {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://apartment-hunt-server1.herokuapp.com/apartment")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="apartments-title">
        <p>House Rent</p>
        <h2>
          Discover the latest Rent <br /> available today
        </h2>

        <div className="apartments">
          {loading && (
            <p style={{ textAlign: "center", color: "green" }}>Loading......</p>
          )}
          {info &&
            info.map((apartment) => (
              <Apartment key={apartment.title} apartment={apartment} />
            ))}
        </div>
      </div>
    </div>
  );
}
