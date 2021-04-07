import React from "react";
const Profile = (props) => {
  return(
    <div>
    <div className="profile">
      <h2>My Profile</h2>
      <table style={{width:800}}>
        <tbody>
          <tr>
            <th>ID STUDENT</th>
            <th>{props.id}</th>
          </tr>
          <tr>
            <th>NAME</th>
            <th>{props.name}</th>
          </tr>
          <tr>
            <th>EMAIL</th>
            <th>{props.email}</th>
            </tr>
            <tr>
            <th>ADDRESS</th>
            <th>{props.address}</th>
            </tr>
            <tr>
            <th>BIRTHDATE</th>
            <th>{props.birthdate}</th>
            </tr>
            <tr>
            <th>FACULTY</th>
            <th>{props.faculty}</th>
            </tr>
            <tr>
            <th>PHOTO</th>
            <th><img alt="mypict" src={props.photo}></img> </th>
            </tr>
         
        </tbody>
      </table>
    </div>
  </div>
  )
  }
  export default Profile;