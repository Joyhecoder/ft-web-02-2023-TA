import React from 'react'
import Profile from './Profile'
const ProfileList = () => {
    console.log("insdie ProfileList")
    const staffMembers = [
        {
          name: { first:'Jared', last:'Donald Dunn' },
          title: 'Head of Business Development',
        },
        {
          name: { first: 'Russ', last: 'Hanneman'},
          title: 'Founder',
        },
        {
          name: { first: 'Erlich', last: 'Bachman' },
          title: 'Chief PR Officer',
        },
        {
          name: { first: 'Richard', last: 'Hendricks' },
          title: 'President',
        },
        {
          name: { first: 'Dinesh', last: 'Chugtai' },
          title: 'Lead Engineer',
        },
        {
          name: { first: 'Bertram', last: 'Gilfoyle' },
          title: 'Systems Architect',
        }
    ]
    console.log(staffMembers)
  return (
    <>
        {staffMembers.map(person => {
            console.log(person)
        return <Profile staffs={person} />})}
    
    </>
  )
}

export default ProfileList