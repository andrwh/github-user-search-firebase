import React from 'react'

const ErrorResults = ({name}) => {
  if (!name) return null

  return (
    <h3>{name} not found</h3>
  )
}

export default ErrorResults
