import React, { useState, useEffect } from 'react';

const ApiCalls = () => {
  const [print, setPrint] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/users';

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPrint(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {print.map((eachItem) => (
        <div >
          <p><strong>Name:{eachItem.name}</strong> </p>
          <p><strong>Username:</strong> {eachItem.username}</p>
          <p><strong>Email:</strong> {eachItem.email}</p>
          <p>
            <strong>Address:</strong> {eachItem.address.street}, {eachItem.address.suite}, {eachItem.address.city}, {eachItem.address.zipcode}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ApiCalls;
