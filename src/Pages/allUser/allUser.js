import React from "react";
import { useState, useEffect } from "react";
import { getAllUsers } from "./../../myFirebase/userFirebase";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);
  console.log(users);
  return (
    <>
      <table
        className="table table-striped container border my-5 text-center"
        style={{ backgroundColor: "#FFF", color: "#000" }}
      >
        <thead className=" table-warning">
          <tr>
            <th>User Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {users.map((returnUsers, index) => {
            return (
              <tr key={index} >
                <td>{index + 1}</td>
                <td >{returnUsers.firstname}</td>
                <td>{returnUsers.lastname} $</td>
                <td>{returnUsers.email}</td>
                <td>{returnUsers.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AllUser;
