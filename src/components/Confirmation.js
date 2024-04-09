import React, { useEffect } from "react";
import { useData } from "../utils/Context";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const { data } = useData();

  const navigate = useNavigate();
  useEffect(() => {
    if (data === null) navigate("/");
  }, [data, navigate]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        <table style={{ height: "300px", width: "600px", margin: 10 }}>
          <tbody>
            <tr>
              <td>Full Name :-</td>
              <td>{data?.fullName}</td>
            </tr>
            <tr>
              <td>Mobile No :-</td>
              <td>{data?.mobileNumber}</td>
            </tr>
            <tr>
              <td>Email Id :-</td>
              <td>{data?.email}</td>
            </tr>
            <tr>
              <td>Selected Events :-</td>
              {data?.checked.map((d, index) => (
                <td key={index}>{d}</td>
              ))}
            </tr>
          </tbody>
        </table>
        <button style={{ margin: 10 }}>Confirm your details</button>
      </div>
    </div>
  );
};

export default Confirmation;
