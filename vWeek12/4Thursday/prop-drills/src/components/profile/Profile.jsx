import React from 'react'
console.log("insdie profile")
const Profile = ({staffs}) => {
    console.log(staffs)
  return (
    <>
        <h1>{staffs.name.first} {staffs.name.last}</h1>
        <h3>{staffs.title}</h3>
    </>
  )
}

export default Profile