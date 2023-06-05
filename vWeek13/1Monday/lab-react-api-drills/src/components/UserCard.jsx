import React from 'react'

const UserCard = ({data}) => {
    console.log(data)
  return (
    <>
    <img src={data.picture.large} alt="" />
    <h1>{data.name.title}. {data.name.first} {data.name.last}</h1>
    <div>
        
        <div>Gender: {data.gender}</div>
        <div>Location: {data.location.street.number} {data.location.street.name}, {data.location.city}, {data.location.state} {data.location.postcode}, {data.location.country}</div>
    </div>

    
    </>
  )
}

export default UserCard