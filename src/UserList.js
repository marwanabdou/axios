import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setListOfUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <ul className="user-list">
      {listOfUsers.map(user => (
        <li key={user.id} className="user-list__item">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>


        </li>
      ))}
    </ul>
  );
};

export default UserList;
