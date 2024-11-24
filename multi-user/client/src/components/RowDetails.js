import React from 'react'

function RowDetails({_id,user,tel,city,country,bio,postalcode}) {
  return (
    <tr>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.role}</td>
    <td>{tel}</td>
    <td>{city}</td>
    <td>{country}</td>
    <td>{bio}</td>
    <td>
      <button className="btn btn-outline-danger">Delete</button>
    </td>
  </tr>

  )
}

export default RowDetails
