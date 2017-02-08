import React from 'react'

const createListItem = (label, count) => {
  return (
    <li className='inline-block mr2'>
      <b>{label}:</b> {count}
    </li>
  )
}

const formatDate = (dateString) => {
  let d = new Date(dateString)
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
}

const UserResults = ({
  login,
  name,
  public_repos,
  public_gists,
  followers,
  following,
  created_at,
  url,
}) => {
  const displayName = name || login

  return (
    <div className="clearfix mb2 border">
      <div className="overflow-hidden p2">
        <div><a href={url} target="_blank">{displayName}</a></div>
        <ul className='list-reset m0'>
          {createListItem('Public Repos', public_repos)}
          {createListItem('Public Gists', public_gists)}
          {createListItem('Followers', followers)}
          {createListItem('Following', following)}
          {createListItem('Created At', formatDate(created_at))}
        </ul>
      </div>
    </div>
  )
}

export default UserResults
