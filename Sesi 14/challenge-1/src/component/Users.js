import React, {useEffect, useState} from 'react'
import {
  // BrowserRouter as Router,
  Link
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function Users(){
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setUsers(data))
  })
  
  return(
    <>
      <Header/>
      <div className="container">
        <Link to="/" className="btn btn-success btn mb-3" role="button">Back to Home</Link>
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
      <Footer/>
    </>
  )
}

export default Users