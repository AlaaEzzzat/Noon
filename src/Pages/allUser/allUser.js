// import React from "react";
// import { useState, useEffect } from "react";
// import { getAllUsers } from "./../../myFirebase/userFirebase";
// // what is MDBox? //
// const AllUser = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getAllUsers().then((users) => {
//       setUsers(users);
//     });
//   }, []);

//   return (
//     <>
//       <table
//         className="table table-striped container border my-5 text-center"
//         style={{ backgroundColor: "#FFF", color: "#000" }}
//       >
//         <thead className=" table-warning">
//           <tr>
//             <th>User Number</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Password</th>
//           </tr>
//         </thead>

//         <tbody className="text-center">
//           {users.map((returnUsers, index) => {
//             return (
//               <tr key={index} >
//                 <td>{index + 1}</td>
//                 <td>{returnUsers.firstname}</td>
//                 <td>{returnUsers.lastname}</td>
//                 <td>{returnUsers.email}</td>
//                 <td>{returnUsers.password}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// };
// export default AllUser;

import React from "react";
import { useState, useEffect } from "react";
import { getAllUsers } from "./../../myFirebase/userFirebase";
import { deleteUser } from "./../../myFirebase/userFirebase";
export default function AllUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((u) => {
      setUsers(u);
    });
  }, []);

  const deluser = (pId, pT) => {
    alert(`${pT} wil be deleted !`);
    deleteUser(pId).then(() => {
      getAllUsers().then((u) => {
        setUsers(u);
      });
    });
  };

  return (
    <>
      <div className="row m-auto mt-3 mb-2 gy-3 " id="">
        {users.map((Users) => {
          return (
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
              hidden={Users.stock <= 0}
            >
              <div
                className="card rounded-3 mb-2 border-0 position-relative"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  boxShadow: "0 0 5px yellow",
                }}
              >
                <img
                  src={Users.image}
                  style={{
                    width: "fit-content",
                    maxWidth: "100%",
                    margin: "auto",
                    height: "200px",
                    objectFit: "fill",
                  }}
                  alt="..."
                />
                <div className="card-body text-center">
                  <p className="card-title my-3 ">{Users.fullName}</p>
                  <h5 className="card-text ">{Users.email}</h5>
                  <div className="d-flex justify-content-center pb-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => deluser(Users.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
