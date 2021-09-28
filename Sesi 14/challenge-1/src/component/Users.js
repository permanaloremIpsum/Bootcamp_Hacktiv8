import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";

function Users(){
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setUsers(data))
  })

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  
  return(
    <div>
      <div className="container">
        <a href="/" className="btn btn-success btn mb-3" role="button" onClick={handleClick}>Back to Home</a>
        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users