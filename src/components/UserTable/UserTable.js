import React from 'react'

const createRow = (user) => {
  const {
    name,
    login,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    url,
  } = user

  return (
    <tr key={login}>
      <td className='pr2'><a href={url}>{login}</a></td>
      <td className='pr2'>{name || '<no name>'}</td>
      <td className='pr2'>{public_repos}</td>
      <td className='pr2'>{public_gists}</td>
      <td className='pr2'>{followers}</td>
      <td className='pr2'>{following}</td>
      <td>{created_at}</td>
    </tr>
  )
}

const UserTable = ({data}) => {
  const keys = Object.keys(data)

  return (
    <table className='users-table left-align'>
      <thead className='bg-gray'>
        <tr>
          <th className='pr2'>username</th>
          <th className='pr2'>name</th>
          <th className='pr2'>public_repos</th>
          <th className='pr2'>public_gists</th>
          <th className='pr2'>followers</th>
          <th className='pr2'>following</th>
          <th>created_at</th>
        </tr>
      </thead>
      <tbody>
        {keys.map(k => {
          const user = data[k]
          return createRow(user)
        })}
      </tbody>
    </table>
  )
}

export default UserTable
