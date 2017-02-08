import React from 'react'

const FirebaseResponse = ({state, user}) => {
  if (state === null) { return null }
  const username = user.login

  return state ?
    <h4>Success: user {username} added to the db.</h4>
    :
    <h4>Error adding user {username} to the db.</h4>
}

export default FirebaseResponse
