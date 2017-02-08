import config from './config'

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

export const searchUser = (username) => {
  return fetch(`${config.api.userSearch}/${username}`)
    .then(handleErrors)
    .then(response => response.json())
}
