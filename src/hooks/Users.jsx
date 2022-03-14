import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(users);
    }

    getUsers();
  });

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
