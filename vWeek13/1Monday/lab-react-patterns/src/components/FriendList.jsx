import React from 'react'
import Friend from './Friend'

const FriendList = () => {

    const friends = [
        'Bob',
        'Linda',
        'Tina',
        'Louise',
        'Gene',
      ]

     
  return (
    <>
     <ul>
      {friends.map((friendstr, index) =>{
        return <Friend key={index} name={friendstr} />
      })}
     </ul>
    </>
  )
}

export default FriendList