import React from 'react'
import FriendList from './components/friends/FriendList'
import NameList from './components/nameField/NameList'
import StarRating from './components/movies/StarRating'
import ProfileList from './components/profile/ProfileList'
const App = () => {
  return (
    <>
      <FriendList />
      --------------- Name Field ------------------
      <NameList /> 
      --------------- Star Ratings ----------------
      <StarRating />
      --------------- Profile Card ----------------
      <ProfileList />
    </>
  )
}

export default App